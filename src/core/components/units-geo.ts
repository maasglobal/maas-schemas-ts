import * as t from 'io-ts';

import { PlaceName } from './address';

export type Latitude = number;
export const Latitude = t.number;

export type Longitude = number;
export const Longitude = t.number;

export interface Location {
  readonly lat: Latitude;
  readonly lon: Longitude;
}
export const Location = t.type({
  lat: Latitude,
  lon: Longitude,
});

export type RelaxedLatitude = number;
export const RelaxedLatitude = t.number;

export type RelaxedLongitude = number;
export const RelaxedLongitude = t.number;

export interface RelaxedLocation {
  readonly lat: RelaxedLatitude;
  readonly lon: RelaxedLongitude;
}
export const RelaxedLocation = t.type({
  lat: RelaxedLatitude,
  lon: RelaxedLongitude,
});

export type Place = RelaxedLocation &
  Partial<{
    readonly name: PlaceName;
  }>;
export const Place = t.intersection([
  RelaxedLocation,
  t.partial({
    name: PlaceName,
  }),
]);
