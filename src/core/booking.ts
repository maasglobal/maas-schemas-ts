import * as t from 'io-ts';

import { Uuid } from './components/units';
import Fare from './components/fare';
import Terms from './components/terms';
import StateLog from './components/state-log';
import { LegCore } from './leg';

import ModeTaxi from './modes/mode-taxi';

export type Leg = Partial<LegCore>;
export const Leg = t.partial(LegCore.props);

export type Meta = Partial<{
  readonly MODE_TAXI: ModeTaxi;
}>;
export const Meta = t.partial({
  MODE_TAXI: ModeTaxi,
});

type Booking = {
  readonly id: Uuid;
  readonly terms: Terms;
  readonly leg: Leg;
  readonly meta: Meta;
} & Partial<{
  readonly stateLog: StateLog;
  readonly fares: Array<Fare>;
}>;

const Booking = t.intersection([
  t.type({
    id: Uuid,
    terms: Terms,
    leg: Leg,
    meta: Meta,
  }),
  t.partial({
    stateLog: StateLog,
    fares: t.array(Fare),
  }),
]);

export type Bookings = Array<Booking>;
export const Bookings = t.array(Booking);

export const noBookings: Bookings = [];

export default Booking;
