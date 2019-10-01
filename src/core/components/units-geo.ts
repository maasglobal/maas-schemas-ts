/*

undefined
MaaS common geolocaion units that are used consistently within our own objects

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/units-geo.json';
// Latitude
// Geographic latitude (north-south axis) in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type Latitude = t.Branded<number, LatitudeBrand>;
export const Latitude = t.brand(
  t.number,
  (x): x is t.Branded<number, LatitudeBrand> =>
    (typeof x !== 'number' || x >= -90) && (typeof x !== 'number' || x <= 90),
  'Latitude',
);
export interface LatitudeBrand {
  readonly Latitude: unique symbol;
}
// Longitude
// Geographic longitude (east-west axis) in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type Longitude = t.Branded<number, LongitudeBrand>;
export const Longitude = t.brand(
  t.number,
  (x): x is t.Branded<number, LongitudeBrand> =>
    (typeof x !== 'number' || x >= -180) && (typeof x !== 'number' || x <= 180),
  'Longitude',
);
export interface LongitudeBrand {
  readonly Longitude: unique symbol;
}
// RelaxedLatitude
// No-numeric precision version of MaaS core latitude
export type RelaxedLatitude = t.Branded<number, RelaxedLatitudeBrand>;
export const RelaxedLatitude = t.brand(
  t.number,
  (x): x is t.Branded<number, RelaxedLatitudeBrand> =>
    (typeof x !== 'number' || x >= -90) && (typeof x !== 'number' || x <= 90),
  'RelaxedLatitude',
);
export interface RelaxedLatitudeBrand {
  readonly RelaxedLatitude: unique symbol;
}
// RelaxedLongitude
// No-numeric precision version of MaaS core longitude
export type RelaxedLongitude = t.Branded<number, RelaxedLongitudeBrand>;
export const RelaxedLongitude = t.brand(
  t.number,
  (x): x is t.Branded<number, RelaxedLongitudeBrand> =>
    (typeof x !== 'number' || x >= -180) && (typeof x !== 'number' || x <= 180),
  'RelaxedLongitude',
);
export interface RelaxedLongitudeBrand {
  readonly RelaxedLongitude: unique symbol;
}
// Distance
// Distance in meters
export type Distance = t.Branded<number, DistanceBrand>;
export const Distance = t.brand(
  t.number,
  (x): x is t.Branded<number, DistanceBrand> =>
    (typeof x !== 'number' || x <= 40075000) && (typeof x !== 'number' || x % 1 === 0),
  'Distance',
);
export interface DistanceBrand {
  readonly Distance: unique symbol;
}
// Polyline
// Google encoded polyline, see: https://developers.google.com/maps/documentation/utilities/polylinealgorithm
export type Polyline = t.Branded<string, PolylineBrand>;
export const Polyline = t.brand(
  t.string,
  (x): x is t.Branded<string, PolylineBrand> =>
    (typeof x !== 'string' ||
      x.match(RegExp('^([\\x5F-\\x7E]*[\\x3F-\\x5E])+$', 'u')) !== null) &&
    (typeof x !== 'string' || x.length >= 3) &&
    (typeof x !== 'string' || x.length <= 65535),
  'Polyline',
);
export interface PolylineBrand {
  readonly Polyline: unique symbol;
}
// Location
// Geographic latitude-longitude object in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type Location = t.Branded<
  {
    lat?: Latitude;
    lon?: Longitude;
  } & {
    lat: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    lon: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  LocationBrand
>;
export const Location = t.brand(
  t.intersection([
    t.partial({
      lat: Latitude,
      lon: Longitude,
    }),
    t.type({
      lat: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      lon: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      lat?: Latitude;
      lon?: Longitude;
    } & {
      lat: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      lon: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    },
    LocationBrand
  > => true,
  'Location',
);
export interface LocationBrand {
  readonly Location: unique symbol;
}
// RelaxedLocation
// No-numeric precision version of MaaS core location
export type RelaxedLocation = t.Branded<
  {
    lat?: RelaxedLatitude;
    lon?: RelaxedLongitude;
  } & {
    lat: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    lon: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  RelaxedLocationBrand
>;
export const RelaxedLocation = t.brand(
  t.intersection([
    t.partial({
      lat: RelaxedLatitude,
      lon: RelaxedLongitude,
    }),
    t.type({
      lat: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      lon: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      lat?: RelaxedLatitude;
      lon?: RelaxedLongitude;
    } & {
      lat: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      lon: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    },
    RelaxedLocationBrand
  > => true,
  'RelaxedLocation',
);
export interface RelaxedLocationBrand {
  readonly RelaxedLocation: unique symbol;
}
// ShortLocation
// Geographic latitude-longitude number-pair array in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type ShortLocation = t.Branded<[Latitude, Longitude], ShortLocationBrand>;
export const ShortLocation = t.brand(
  t.tuple([Latitude, Longitude]),
  (x): x is t.Branded<[Latitude, Longitude], ShortLocationBrand> => true,
  'ShortLocation',
);
export interface ShortLocationBrand {
  readonly ShortLocation: unique symbol;
}
// ShortLocationString
// Geographic latitude-longitude number-pair as a string in WGS-84 system, see https://en.wikipedia.org/wiki/World_Geodetic_System
export type ShortLocationString = t.Branded<string, ShortLocationStringBrand>;
export const ShortLocationString = t.brand(
  t.string,
  (x): x is t.Branded<string, ShortLocationStringBrand> =>
    (typeof x !== 'string' ||
      x.match(RegExp('^[+-]?\\d{1,3}(\\.\\d+)?,[+-]?\\d{1,3}(\\.\\d+)?$', 'u')) !==
        null) &&
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 64),
  'ShortLocationString',
);
export interface ShortLocationStringBrand {
  readonly ShortLocationString: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
