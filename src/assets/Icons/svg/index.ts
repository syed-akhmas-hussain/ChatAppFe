/**
 * AUTO-GENERATED FILE.
 * DO NOT EDIT MANUALLY.
 */

import { createIcon } from './factory';

import CameraSvg from './camera.svg';
import CheckSvg from './check.svg';
import CircleCheckSvg from './circle-check.svg';
import ErrorSvg from './error.svg';
import EyeOffSvg from './eye-off.svg';
import EyeSvg from './eye.svg';
import InfoSvg from './info.svg';
import MessagesSquareSvg from './messages-square.svg';
import SearchSvg from './search.svg';
import WarningSvg from './warning.svg';
import XSvg from './x.svg';

const Camera = createIcon(CameraSvg);
const Check = createIcon(CheckSvg);
const CircleCheck = createIcon(CircleCheckSvg);
const Error = createIcon(ErrorSvg);
const EyeOff = createIcon(EyeOffSvg);
const Eye = createIcon(EyeSvg);
const Info = createIcon(InfoSvg);
const MessagesSquare = createIcon(MessagesSquareSvg);
const Search = createIcon(SearchSvg);
const Warning = createIcon(WarningSvg);
const X = createIcon(XSvg);

export const Icons = {
  Camera,
  Check,
  CircleCheck,
  Error,
  EyeOff,
  Eye,
  Info,
  MessagesSquare,
  Search,
  Warning,
  X,
} as const;

export type IconName =
  | 'Camera'
  | 'Check'
  | 'CircleCheck'
  | 'Error'
  | 'EyeOff'
  | 'Eye'
  | 'Info'
  | 'MessagesSquare'
  | 'Search'
  | 'Warning'
  | 'X';
