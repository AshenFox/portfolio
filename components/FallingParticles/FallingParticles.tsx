import { FC, useCallback, useEffect, useRef, memo } from 'react';
import { shallowEqual } from 'react-redux';
import { useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';

interface IPos {
  x: number;
  y: number;
}

interface ILine {
  a: IPos;
  b: IPos;
}

interface IRect extends IPos {
  h: number;
  w: number;
}

interface IDot extends IRect {
  speedX: number;
  speedY: number;
  color: string;
}

type TDotArr = IDot[];

type TDir = 'top' | 'left' | 'right' | 'bottom';

let prevTime = 0;

const accelX = 0;
const accelY = 0.0015;

const maxSpeedX = 20;
const maxSpeedY = 20;

const minSpeedX = 1.5;
const minSpeedY = 1.5;

const minBounceSpeedX = 0.15;
const minBounceSpeedY = 0.15;

const bounceX = 0.45;
const bounceY = 0.45;

let dotArr: TDotArr = [];

export const createDots = (
  x: number,
  y: number,
  size: number,
  speedX: number,
  speedY: number,
  num: number,
  color: string = 'white',
  seed: number
) => {
  const res: TDotArr = [];

  const spreadX = num * 0.22;
  const spreadY = 0.175;

  for (let i = 0; i < num; i++) {
    const dotSeed = seed + i;

    res.push({
      x,
      y,
      w: size + (dotSeed % 3),
      h: size + (dotSeed % 3),
      speedX: speedX + (dotSeed % spreadX),
      speedY: speedY + (dotSeed % spreadY),
      color,
    });
  }

  dotArr.push(...res);
};

const lineLineCol = (l1: ILine, l2: ILine) => {
  const uA =
    ((l2.b.x - l2.a.x) * (l1.a.y - l2.a.y) - (l2.b.y - l2.a.y) * (l1.a.x - l2.a.x)) /
    ((l2.b.y - l2.a.y) * (l1.b.x - l1.a.x) - (l2.b.x - l2.a.x) * (l1.b.y - l1.a.y));
  const uB =
    ((l1.b.x - l1.a.x) * (l1.a.y - l2.a.y) - (l1.b.y - l1.a.y) * (l1.a.x - l2.a.x)) /
    ((l2.b.y - l2.a.y) * (l1.b.x - l1.a.x) - (l2.b.x - l2.a.x) * (l1.b.y - l1.a.y));

  let res: IPos;
  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    const x = l1.a.x + uA * (l1.b.x - l1.a.x);
    const y = l1.a.y + uA * (l1.b.y - l1.a.y);

    res = { x, y };
  }

  return res;
};

const lineRectCol = (l: ILine, r: IRect) => {
  const left = lineLineCol(l, { a: { x: r.x, y: r.y }, b: { x: r.x, y: r.y + r.h } });
  const right = lineLineCol(l, {
    a: { x: r.x + r.w, y: r.y },
    b: { x: r.x + r.w, y: r.y + r.h },
  });
  const top = lineLineCol(l, { a: { x: r.x, y: r.y }, b: { x: r.x + r.w, y: r.y } });
  const bottom = lineLineCol(l, {
    a: { x: r.x, y: r.y + r.h },
    b: { x: r.x + r.w, y: r.y + r.h },
  });

  let res: { pos: IPos; type: TDir };

  if (top) res = { type: 'top', pos: top };
  if (left) res = { type: 'left', pos: left };
  if (right) res = { type: 'right', pos: right };
  if (bottom) res = { type: 'bottom', pos: bottom };

  return res;
};

interface Props {}

const FallingParticles: FC<Props> = () => {
  const game_container_dimensions = useAppSelector(
    ({ game }) => ({
      height: game.game_container_dimensions.height,
      width: game.game_container_dimensions.width,
    }),
    shallowEqual
  );

  const barrier_dimensions = useAppSelector(
    ({ game }) => game.barrier_dimensions,
    shallowEqual
  );

  const barrierDimensionsRef = useRef(barrier_dimensions);
  barrierDimensionsRef.current = barrier_dimensions;

  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>(null);

  const requestRef = useRef<number>();

  const animate: FrameRequestCallback = useCallback(time => {
    if (prevTime === 0) prevTime = time;
    let diff = time - prevTime;
    prevTime = time;

    const ctx = ctxRef.current;
    const canvas = canvasRef.current;

    if (!ctx || !canvas) return;

    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const moveDot = (dot: IDot) => {
      if (canvas.height > dot.y && canvas.width > dot.x) {
        ctx.fillStyle = dot.color;

        let newX = dot.x + dot.speedX * diff + 0.5 * accelX * (diff ^ 2);
        let newY = dot.y + dot.speedY * diff + 0.5 * accelY * (diff ^ 2);

        dot.speedX = dot.speedX + accelX * diff;
        dot.speedY = dot.speedY + accelY * diff;

        const line: ILine = { a: { x: dot.x, y: dot.y }, b: { x: newX, y: newY } };

        const { x, y, height, width } = barrierDimensionsRef.current;

        const col = lineRectCol(line, { x, y, h: height, w: width });

        if (col) {
          const { type, pos } = col;

          if (type === 'top') {
            dot.speedY = -Math.abs(Math.max(dot.speedY * bounceY, minBounceSpeedY));
            newX = pos.x;
            newY = pos.y - 0.01;
          } else if (type === 'left') {
            dot.speedX = -Math.abs(Math.max(dot.speedX * bounceX, minBounceSpeedX));
            newX = pos.x - 0.01;
            newY = pos.y;
          } else if (type === 'right') {
            dot.speedX = Math.abs(Math.max(dot.speedX * bounceX, minBounceSpeedX));
            newX = pos.x + 0.01;
            newY = pos.y;
          } else if (type === 'bottom') {
            dot.speedY = Math.abs(Math.max(dot.speedY * bounceY, minBounceSpeedY));
            newX = pos.x;
            newY = pos.y + 0.01;
          }
        }

        dot.x = newX;
        dot.y = newY;

        ctx.fillRect(
          Math.round(dot.x - dot.w / 2),
          Math.round(dot.y - dot.h / 2),
          dot.w,
          dot.h
        );

        return true;
      } else {
        return false;
      }
    };

    dotArr = dotArr.filter(moveDot);

    requestRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    canvasRef.current.width = game_container_dimensions.width;
    canvasRef.current.height = game_container_dimensions.height;
  }, [game_container_dimensions]);

  useEffect(() => {
    const requestID = requestAnimationFrame(animate);

    ctxRef.current = canvasRef.current.getContext('2d');

    return () => {
      cancelAnimationFrame(requestID);
    };
  }, [animate]);

  return <canvas ref={canvasRef} className={styles.canvas}></canvas>;
};

export default memo(FallingParticles);
