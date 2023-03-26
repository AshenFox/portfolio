import React, { FC } from 'react';
import { CSSTransition } from 'react-transition-group';
import { EnterHandler, ExitHandler } from 'react-transition-group/Transition';
import { useAppSelector } from '../../../store/hooks/index';
import { useActions } from '../../../store/hooks/index';

interface OwnProps {
  // isLoaded: boolean;
  // isAppearing: boolean;
  // onEntered: EnterHandler<HTMLDivElement>;
  // onExited: ExitHandler<HTMLDivElement>;
}

type Props = OwnProps;

const ContentLoader: FC<Props> = () => {
  const { set_content_loader_isappearing, set_content_loader_isexited } = useActions();

  const {
    content_loader: { is_appearing },
    content_loaded,
  } = useAppSelector(({ sslider }) => sslider);

  const timeouts = {
    appear: 1000,
    enter: 1000,
    exit: 700,
  };

  const onEntered: EnterHandler<HTMLDivElement> = () => {
    set_content_loader_isappearing(false);
  };

  const onExited: ExitHandler<HTMLDivElement> = () => {
    set_content_loader_isexited(true);
  };

  return (
    <CSSTransition
      classNames={'content-loader'}
      timeout={timeouts}
      in={is_appearing ? true : !content_loaded}
      appear
      onEntered={onEntered}
      onExited={onExited}
    >
      <div className='content-loader'>
        <div className='spinner'>
          <div className='spinner__inner'></div>
        </div>
      </div>
    </CSSTransition>
  );
};

export default ContentLoader;
