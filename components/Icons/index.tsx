import { FC } from 'react';
import BrokenImageIcon from './BrokenImageIcon';
import ExternallinkIcon from './ExternallinkIcon';
import FacebookIcon from './FacebookIcon';
import GithubIcon from './GithubIcon';
import GoogleplusIcon from './GoogleplusIcon';
import LinkedInIcon from './LinkedInIcon';
import MailIcon from './MailIcon';
import PentosquareIcon from './PentosquareIcon';
import PersonIcon from './PersonIcon';
import TelegramIcon from './TelegramIcon';
import TwitterIcon from './TwitterIcon';

export type TIconName =
  | 'externallink'
  | 'facebook'
  | 'github'
  | 'googleplus'
  | 'twitter'
  | 'person'
  | 'pentosquare'
  | 'mail'
  | 'brokenimage'
  | 'telegram'
  | 'linkedin';

type IIcons = Record<TIconName, FC>;

const Icons: IIcons = {
  externallink: ExternallinkIcon,
  facebook: FacebookIcon,
  github: GithubIcon,
  googleplus: GoogleplusIcon,
  twitter: TwitterIcon,
  person: PersonIcon,
  pentosquare: PentosquareIcon,
  mail: MailIcon,
  brokenimage: BrokenImageIcon,
  linkedin: LinkedInIcon,
  telegram: TelegramIcon,
};

export default Icons;
