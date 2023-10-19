import { useEffect } from 'react';
import test from './content';

const thumbnailsSrcArr = Object.values(test.ENG.filterItems).map(el => el.thumbnails);

let cashedThumbnails: {
  [key: string]: HTMLImageElement;
}[];

const useCasheThumbnails = () => {
  useEffect(() => {
    cashedThumbnails = thumbnailsSrcArr.map(({ main, hover }) => {
      const mainImg = new Image();
      const hoverImg = new Image();

      mainImg.src = main;
      hoverImg.src = hover;

      return {
        mainImg,
        hoverImg,
      };
    });
  }, []);
};

export default useCasheThumbnails;
