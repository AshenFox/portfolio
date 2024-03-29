import React, { FC, useCallback, memo } from 'react';
import { CSSTransition } from 'react-transition-group';
import MenuItem from './components/MenuItem';
import { routesOrderList } from '@helpers/values';
import { useActions, useAppSelector } from '@store/hooks';
import styles from './styles.module.scss';
import { CSSTransitionClassNames } from 'react-transition-group/CSSTransition';
import LangueageChange from '@ui/LanguageChange';

const classNames: CSSTransitionClassNames = {
  enterActive: styles.menu_in_active,
  enterDone: styles.menu_in_done,
};

const Menu: FC = () => {
  const { set_menu_is_exited } = useActions();

  const show_menu = useAppSelector(({ sslider }) => sslider.menu.show_menu);
  const language = useAppSelector(({ language }) => language.language);

  const timeout = 450;

  const onEntered = useCallback(() => {
    set_menu_is_exited(false);
  }, [set_menu_is_exited]);

  const onExited = useCallback(() => {
    set_menu_is_exited(true);
  }, [set_menu_is_exited]);

  return (
    <>
      <CSSTransition
        classNames={classNames}
        in={show_menu}
        timeout={timeout}
        onEntered={onEntered}
        onExited={onExited}
      >
        <div className={`${styles.menu} ${show_menu ? styles.menu_active : ''}`}>
          <header className={styles.header}>
            <LangueageChange />
          </header>
          <main className={styles.list}>
            {routesOrderList.map(({ path, title }) => (
              <MenuItem
                href={path}
                title={typeof title === 'string' ? title : title[language]}
                key={path}
              />
            ))}
            {/* TEST MENU ITEMS */}
            {/* <MenuItem
              href={'/portfolio/flashcards'}
              title={'portfolio flashcards'}
              key={'project flashcards'}
            />
            <MenuItem
              href={'/portfolio/fasdfasf'}
              title={'faulty project'}
              key={'faulty project1'}
            />
            <MenuItem
              href={'/portfolio/flashcards/asdfasdf'}
              title={'nonexistent inbed'}
              key={'faulty project2'}
            /> */}
          </main>
          <footer>
            {/* <span className={styles.tip}>for a quick seach just start typing ...</span> */}
          </footer>
        </div>
      </CSSTransition>
    </>
  );
};

export default memo(Menu);
