import React, { FC, useEffect, useRef } from 'react';
import Button from '../components/Button';
import FancyLink from '../components/FancyLink';
import Section, { Props } from '../components/SectionSlider/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';

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

const maxSpeedX = 5;
const maxSpeedY = 20;

const minBounceSpeedX = 2.5;
const minBounceSpeedY = 2.5;

const barrier: IRect = {
  x: 305,
  y: 700,
  w: 300,
  h: 50,
};

const dot: IDot = {
  x: 200,
  y: 10,
  w: 3,
  h: 3,
  speedX: 3,
  speedY: 0,
  color: 'white',
};

const dotArr: TDotArr = [
  {
    x: 200,
    y: 10,
    w: 3,
    h: 3,
    speedX: 3,
    speedY: 0,
    color: 'white',
  },
  {
    x: 200,
    y: 10,
    w: 3,
    h: 3,
    speedX: 4,
    speedY: 0,
    color: 'red',
  },
  {
    x: 200,
    y: 500,
    w: 3,
    h: 3,
    speedX: 3,
    speedY: 0,
    color: 'yellow',
  },
];

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
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D>(null);

  const requestRef = useRef<number>();

  const animate: FrameRequestCallback = (time) => {
    const diff = time - prevTime;
    const isFrame = diff > oneFrameTime;

    const moveDot = (dot: IDot) => {
      if (
        isFrame &&
        canvasRef.current.height > dot.y &&
        canvasRef.current.width > dot.x
      ) {
        prevTime = time;
        // ctx.current.clearRect(x, y, xSize, ySize);
        // ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

        ctx.current.fillStyle = dot.color;

        dot.speedX = Math.min(dot.speedX + accelX, maxSpeedX);
        dot.speedY = Math.min(dot.speedY + accelY, maxSpeedY);

        let newX = dot.x + dot.speedX;
        let newY = dot.y + dot.speedY;

        const line: ILine = { a: { x: dot.x, y: dot.y }, b: { x: newX, y: newY } };

        const col = lineRectCol(line, barrier);

        if (dot.color === 'yellow' && col) {
          console.log({ col, barrier, line });
        }

        if (col) {
          const { type, pos } = col;

          if (type === 'top') {
            dot.speedY = Math.min(-dot.speedY * 0.25, -minBounceSpeedY);
            newX = pos.x;
            newY = pos.y - 0.1;
          }
        }

        dot.x = newX;
        dot.y = newY;

        ctx.current.fillRect(dot.x - dot.w / 2, dot.y - dot.h / 2, dot.w, dot.h);
      }
    };

    dotArr.forEach(moveDot);

    requestRef.current = requestAnimationFrame(animate);
  };

  const setCanvasSize = () => {
    canvasRef.current.width = containerRef.current.offsetWidth;
    canvasRef.current.height = containerRef.current.offsetHeight;
  };

  useEffect(() => {
    const requestID = requestAnimationFrame(animate);

    ctx.current = canvasRef.current.getContext('2d');

    setCanvasSize();

    const { x, y, w, h } = barrier;
    ctx.current.fillStyle = 'red';
    ctx.current.fillRect(x, y, w, h);

    window.addEventListener('resize', setCanvasSize);

    return () => {
      cancelAnimationFrame(requestID);
      window.removeEventListener('resize', setCanvasSize);
    };
  }, []);

  return (
    <>
      <Section classNameStr={'about'} {...props}>
        <main className='about__container' ref={containerRef}>
          <TypeWriterText />
        </main>
        <SideLinks />
        {/* <footer className='about__footer'>
          <Button
            isClicked={false}
            color='red'
            isBig={true}
            href={'/portfolio'}
            title={'Portfolio'}
          >
            see the portfolio
          </Button>
        </footer> */}
        <canvas ref={canvasRef} className='about__game-canvas'></canvas>
      </Section>
    </>
  );
};

export default About;
