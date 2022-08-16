export type Direction = 'left' | 'right';

export interface SectionSliderState {
  content_loaded: boolean;
  content_loader: {
    is_appearing: boolean;
    is_exited: boolean;
  };
  show_section_loader: boolean;
  show_navigation: boolean;
  show_menu: boolean;
  // immediate_transition: boolean;
  dir: Direction;
}

// =========================

const sectionSliderInitState: SectionSliderState = {
  content_loaded: false,
  content_loader: {
    is_appearing: true,
    is_exited: false,
  },
  show_section_loader: false,
  show_navigation: true,
  show_menu: false,
  // immediate_transition: false,
  dir: null,
};

export default sectionSliderInitState;
