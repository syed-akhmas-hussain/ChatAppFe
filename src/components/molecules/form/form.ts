import { ACheckboxInput, ARadioInput, ASwitchInput } from '../inputs/choice';
import { ADateInput, ADateTimeInput, ATimeInput } from '../inputs/date_time';
import { AFileInput, AOtpInput } from '../inputs/special';
import { AppAvatarUploader } from '../inputs/special/AppAvatarUploader';
import { ASearchBar } from '../inputs/special/ASearchBar';
import {
  AEmailInput,
  AMultilineInput,
  ANumberInput,
  APasswordInput,
  APhoneInput,
  ATextInput,
} from '../inputs/text';

export const FORM = {
  AVATAR: {
    component: AppAvatarUploader,
    rules: {},
  },
  DATE: {
    component: ADateInput,
    rules: {},
  },
  DATE_TIME: {
    component: ADateTimeInput,
    rules: {},
  },
  EMAIL: {
    component: AEmailInput,
    rules: {},
  },
  FILE: {
    component: AFileInput,
    rules: {},
  },
  MULTILINE: {
    component: AMultilineInput,
    rules: {},
  },
  NUMBER: {
    component: ANumberInput,
    rules: {},
  },
  OTP: {
    component: AOtpInput,
    rules: {},
  },
  PASSWORD: {
    component: APasswordInput,
    rules: {},
  },
  PHONE: {
    component: APhoneInput,
    rules: {},
  },
  TEXT: {
    component: ATextInput,
    rules: {},
  },
  TIME: {
    component: ATimeInput,
    rules: {},
  },
  SWITCH: {
    component: ASwitchInput,
    rules: {},
  },
  CHECKBOX: {
    component: ACheckboxInput,
    rules: {},
  },
  SEARCH: {
    component: ASearchBar,
    rules: {},
  },
  RADIO: {
    component: ARadioInput,
    rules: {},
  },
} as const;
