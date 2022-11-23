import React, { FC, useEffect, useRef } from 'react';
import Button from '../components/Button';
import FancyLink from '../components/FancyLink';
import Section, { Props } from '../components/SectionSlider/Section';
import SideLinks from '../components/SideLinks';
import TypeWriterText from '../components/TypeWriterText';

let prevTime = 0;
let framesPerSecond = 60;
let oneFrameTime = 1000 / framesPerSecond;

let x = 200;
let y = 10;

let xSize = 3;
let ySize = 3;

let accelX = 0;
let accelY = 0.2;

let speedX = 3;
let speedY = 0;

let maxSpeedX = 5;
let maxSpeedY = 20;

const barrier = {
  x: 305,
  y: 700,
  height: 50,
  width: 300,
};

interface IPoint {
  x: number;
  y: number;
}

interface ILine {
  a: IPoint;
  b: IPoint;
}

interface IRect extends IPoint {
  h: number;
  w: number;
}

const lineLineCol = (l1: ILine, l2: ILine) => {
  // calculate the direction of the lines=
  const uA =
    ((l2.b.x - l2.a.x) * (l1.a.y - l2.a.y) - (l2.b.y - l2.a.y) * (l1.a.x - l2.a.x)) /
    ((l2.b.y - l2.a.y) * (l1.b.x - l1.a.x) - (l2.b.x - l2.a.x) * (l1.b.y - l1.a.y));
  const uB =
    ((l1.b.x - l1.a.x) * (l1.a.y - l2.a.y) - (l1.b.y - l1.a.y) * (l1.a.x - l2.a.x)) /
    ((l2.b.y - l2.a.y) * (l1.b.x - l1.a.x) - (l2.b.x - l2.a.x) * (l1.b.y - l1.a.y));

  // if uA and uB are between 0-1, lines are colliding
  if (uA >= 0 && uA <= 1 && uB >= 0 && uB <= 1) {
    // optionally, draw a circle where the lines meet
    const intrX = l1.a.x + uA * (l1.b.x - l1.a.x);
    const intrY = l1.a.y + uA * (l1.b.y - l1.a.y);

    return { intrX, intrY };
  }
  return false;
};

console.log(
  lineLineCol(
    { a: { x: 1, y: 6 }, b: { x: 10, y: 6 } },
    { a: { x: 2, y: 9 }, b: { x: 7, y: 4 } }
  )
);

const lineRectCol = (l: ILine, r: IRect) => {
  // check if the line has hit any of the rectangle's sides
  // uses the Line/Line function below

  const left = lineLineCol(l, { a: { x: r.x, y: r.y }, b: { x: r.y, y: r.y + r.h } });
  const right = lineLineCol(l, {
    a: { x: r.x + r.w, y: r.y },
    b: { x: r.x + r.w, y: r.y + r.h },
  });
  const top = lineLineCol(l, { a: { x: r.x, y: r.y }, b: { x: r.x + r.w, y: r.y } });
  const bottom = lineLineCol(l, {
    a: { x: r.x, y: r.y + r.h },
    b: { x: r.x + r.w, y: r.y + r.h },
  });

  /* const left = lineLineCol(l, r.x, r.y, r.x, r.y + r.h);
  const r.ight = lineLineCol(l, r.x + r.w, r.y, r.x + r.w, r.y + r.h);
  const top = lineLineCol(l, r.x, r.y, r.x + r.w, r.y);
  const bottom = lineLineCol(l, r.x, r.y + r.h, r.x + r.w, r.y + r.h);
 */

  /* const left = lineLineCol(l, rx, ry, rx, ry + rh);
  const right = lineLineCol(l, rx + rw, ry, rx + rw, ry + rh);
  const top = lineLineCol(l, rx, ry, rx + rw, ry);
  const bottom = lineLineCol(l, rx, ry + rh, rx + rw, ry + rh);
 */
  // if ANY of the above are true, the line
  // has hit the rectangle
  console.log({ left, right, top, bottom });

  if (left || right || top || bottom) {
    return true;
  }
  return false;
};

const About: FC<Props> = (props) => {
  const containerRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctx = useRef<CanvasRenderingContext2D>(null);

  const requestRef = useRef<number>();

  const animate: FrameRequestCallback = (time) => {
    const diff = time - prevTime;
    const isFrame = diff > oneFrameTime;

    if (isFrame && canvasRef.current.height > y && canvasRef.current.width > x) {
      prevTime = time;
      // ctx.current.clearRect(x, y, xSize, ySize);
      // ctx.current.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);

      ctx.current.fillStyle = 'white';

      speedX = Math.min(speedX + accelX, maxSpeedX);
      speedY = Math.min(speedY + accelY, maxSpeedY);

      let newX = x + speedX;
      let newY = y + speedY;

      let inX = newX + xSize > barrier.x && newX < barrier.x + barrier.width;
      let inY = newY + ySize > barrier.y && newY < barrier.y + barrier.height;
      let isCollision = inX && inY;

      console.log({ inX, inY, isCollision });

      x = newX;
      y = newY;

      ctx.current.fillRect(x, y, xSize, ySize);
    }

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

    const { x, y, height, width } = barrier;
    ctx.current.fillStyle = 'red';
    ctx.current.fillRect(x, y, width, height);

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
