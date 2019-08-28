import * as t from 'io-ts';

import { Time } from './units';
import { BookingState } from './state';

export type ObsoleteTime = string;
export const ObsoleteTime = t.string;

export interface BookingStateTransition {
  readonly timestamp: Time | ObsoleteTime;
  readonly oldState: BookingState;
  readonly newState: BookingState;
}
export const BookingStateTransition = t.type({
  timestamp: t.union([Time, ObsoleteTime]),
  oldState: BookingState,
  newState: BookingState,
});

type StateLog = Array<BookingStateTransition>;
const StateLog = t.array(BookingStateTransition);

export default StateLog;
