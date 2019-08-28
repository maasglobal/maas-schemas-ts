import * as t from 'io-ts';

export type BookingState =
  | 'START'
  | 'PENDING'
  | 'PAID'
  | 'RESERVED'
  | 'CONFIRMED'
  | 'ACTIVATED'
  | 'ON_HOLD'
  | 'CANCELLED'
  | 'EXPIRED'
  | 'REJECTED'
  | 'FINISHED'
  | 'UNKNOWN';

export const BookingState = t.union([
  t.literal('START'),
  t.literal('PENDING'),
  t.literal('PAID'),
  t.literal('RESERVED'),
  t.literal('CONFIRMED'),
  t.literal('ACTIVATED'),
  t.literal('ON_HOLD'),
  t.literal('CANCELLED'),
  t.literal('EXPIRED'),
  t.literal('REJECTED'),
  t.literal('FINISHED'),
  t.literal('UNKNOWN'),
]);
