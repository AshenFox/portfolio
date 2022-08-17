import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition';
import { useAppSelector } from '../../store/hooks/index';
import { useActions } from '../../store/hooks/index';

interface OwnProps {
  isLoaded: boolean;
  isAppearing: boolean;
  onEntered: EnterHandler<HTMLDivElement>;
  onExited: ExitHandler<HTMLDivElement>;
}

type Props = OwnProps;

const ContentLoader: FC<Props> = ({ isLoaded, isAppearing, onEntered, onExited }) => {
  const { set_content_loader_isappearing, set_content_loader_isexited } = useActions();

  const sslider = useAppSelector(({ sslider }) => sslider);

  const timeouts = {
    appear: 1000,
    enter: 1000,
    exit: 700,
  };

  /* const onEntered = () => {
    setIsAppearing(false);
  };

  const onExited = () => {
    setIsExited(true);
  }; */

  return (
    <CSSTransition
      classNames={'content-loader'}
      timeout={timeouts}
      in={isAppearing ? true : !isLoaded}
      appear
      onEntered={onEntered}
      onExited={onExited}
    >
      <div className='content-loader'>
        <div className='content-loader__spinner-container'>
          <div className='content-loader__spinner'></div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ContentLoader;
