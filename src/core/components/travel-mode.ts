import * as t from 'io-ts';

export type WaitingMode = 'WAIT';
export const WaitingMode = t.literal('WAIT');

export type TransferMode = 'LEG_SWITCH' | 'TRANSFER';
export const TransferMode = t.union([t.literal('LEG_SWITCH'), t.literal('TRANSFER')]);

export type PersonalMode = 'BICYCLE' | 'CAR' | 'SHARED_BICYCLE' | 'WALK';
export const PersonalMode = t.union([
  t.literal('BICYCLE'),
  t.literal('CAR'),
  t.literal('SHARED_BICYCLE'),
  t.literal('WALK'),
]);

export type PublicTransitMode =
  | 'AEROPLANE'
  | 'BUS'
  | 'FERRY'
  | 'RAIL'
  | 'SUBWAY'
  | 'TRAIN'
  | 'TRAM'
  | 'TRANSIT';
export const PublicTransitMode = t.union([
  t.literal('AEROPLANE'),
  t.literal('BUS'),
  t.literal('FERRY'),
  t.literal('RAIL'),
  t.literal('SUBWAY'),
  t.literal('TRAIN'),
  t.literal('TRAM'),
  t.literal('TRANSIT'),
]);

export type PrivateTransitMode =
  | 'BUSISH'
  | 'CABLE_CAR'
  | 'CAR'
  | 'FUNICULAR'
  | 'GONDOLA'
  | 'SHARED_CAR'
  | 'TAXI'
  | 'TRAINISH';
export const PrivateTransitMode = t.union([
  t.literal('BUSISH'),
  t.literal('CABLE_CAR'),
  t.literal('CAR'),
  t.literal('FUNICULAR'),
  t.literal('GONDOLA'),
  t.literal('SHARED_CAR'),
  t.literal('TAXI'),
  t.literal('TRAINISH'),
]);
