import * as t from 'io-ts';

import {
  PersonalMode,
  PrivateTransitMode,
  PublicTransitMode,
} from './components/travel-mode';
import { Place } from './components/units-geo';
import { Time } from './components/units';

export interface LegCore {
  readonly mode: PersonalMode | PublicTransitMode | PrivateTransitMode;
  readonly from: Place;
  readonly to: Place;
  readonly startTime: Time;
  readonly endTime: Time;
}

export const LegCore = t.type({
  mode: t.union([PersonalMode, PublicTransitMode, PrivateTransitMode]),
  from: Place,
  to: Place,
  startTime: Time,
  endTime: Time,
});
