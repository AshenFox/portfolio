import React, { FC, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import Icons from '../Icons';

interface OwnProps {
  data: {
    id: number;
    path: string;
    alt: string;
  };
  dir: string;
}

type Props = OwnProps;

const SliderItem: FC<Props> = ({ data, dir }) => {
  const { id, path, alt } = data;

  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);

  const onError = () => {
    setIsError(true);
  };
  const onLoad = () => {
    setIsLoaded(true);
  };

  const Icon = Icons['brokenimage'];

  return (
    <div className={`image-slider__item ${dir}`}>
      <CSSTransition
        classNames={'image-slider__item-loader'}
        in={!isLoaded || isError}
        timeout={250}
      >
        <div className='image-slider__item-loader'>
          {isError ? (
            <Icon />
          ) : (
            <div className='spinner small'>
              <div className='spinner__inner'></div>
            </div>
          )}
        </div>
      </CSSTransition>
      <img src={path} alt={alt} draggable={false} onLoad={onLoad} onError={onError} />
    </div>
  );
};

export default SliderItem;