import React, { FC, useEffect, useRef } from 'react';
import Button from '../components/Button';
import FancyLink from '../components/FancyLink';
import Section, { Props } from '../components/SectionSlider/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';
import { useActions } from '../store/hooks';

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

const framesPerSecond = 60;
const oneFrameTime = 1000 / framesPerSecond;
let prevTime = 0;

const accelX = 0;
const accelY = 0.2;

const maxSpeedX = 20;
const maxSpeedY = 20;

const minBounceSpeedX = 3.5;
const minBounceSpeedY = 3.5;

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
  color: string = 'white'
) => {
  const res: TDotArr = [];

  const step = 0.5;
  const spreadX = (num - 1) * step;
  const startSpeedX = speedX - spreadX / 2;
  const spreadY = 0.75;

  for (let i = 0; i < num; i++) {
    res.push({
      x,
      y,
      w: size,
      h: size,
      speedX: startSpeedX + step * i,
      speedY: speedY + ((step * i) % spreadY),
      color,
    });
  }

  dotArr.push(...res);
};

type TDir = 'top' | 'left' | 'right' | 'bottom';

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

const About: FC<Props> = (props) => {
  const { set_barrier_dimensions } = useActions();

  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const requestRef = useRef<number>();

  const animate: FrameRequestCallback = (time) => {
    if (prevTime === 0) prevTime = time;
    let diff = time - prevTime;
    // const isFrame = diff > oneFrameTime;
    // console.log({ diff, oneFrameTime, res: diff / oneFrameTime });
    // if (isFrame) prevTime = time;
    prevTime = time;

    const ctx = ctxRef.current;
    const canvas = canvasRef.current;

    ctxRef.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

    const moveDot = (dot: IDot) => {
      if (canvas.height > dot.y && canvas.width > dot.x) {
        // ctx.clearRect(x, y, xSize, ySize);
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.fillStyle = dot.color;
        const accelK = diff / oneFrameTime;
        dot.speedX = Math.min(dot.speedX + accelX * accelK, maxSpeedX);
        dot.speedY = Math.min(dot.speedY + accelY * accelK, maxSpeedY);

        let newX = dot.x + dot.speedX;
        let newY = dot.y + dot.speedY;

        const line: ILine = { a: { x: dot.x, y: dot.y }, b: { x: newX, y: newY } };

        const rect = buttonRef.current.getBoundingClientRect();

        const { x, y, height, width } = rect;

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

    // console.log(dotArr);

    // if (isFrame) dotArr = dotArr.filter(moveDot);
    dotArr = dotArr.filter(moveDot);
    // if (!dotArr.length) createDots(300, 400, 2, 3, 6, 5, 'white');

    // console.log(dotArr);

    requestRef.current = requestAnimationFrame(animate);
  };

  const setCanvasSize = () => {
    canvasRef.current.width = containerRef.current.offsetWidth;
    canvasRef.current.height = containerRef.current.offsetHeight;
  };

  useEffect(() => {
    const requestID = requestAnimationFrame(animate);

    ctxRef.current = canvasRef.current.getContext('2d');
    // const ctx = ctxRef.current;

    const onResize = () => {
      setCanvasSize();

      const rect = buttonRef.current.getBoundingClientRect();

      const { x, y, height, width } = rect;

      set_barrier_dimensions(x, y, height, width);
    };

    onResize();

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(requestID);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <>
      <Section classNameStr={'about'} {...props}>
        <main className='about__container' ref={containerRef}>
          <TypeWriterText />
        </main>
        <SideLinks />
        <footer className='about__footer'>
          <Button
            isClicked={false}
            color='red'
            isBig={true}
            href={'/portfolio'}
            title={'Portfolio'}
            ref={buttonRef}
          >
            see the portfolio
          </Button>
        </footer>
        <canvas ref={canvasRef} className='about__game-canvas'></canvas>
      </Section>
    </>
  );
};

export default About;
