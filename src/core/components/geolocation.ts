/*

undefined
Partial (Points only) GeoJSON Schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';

export const schemaId = 'http://maasglobal.com/core/components/geolocation.json';
// Geometry
// The purpose of this remains a mystery
export type Geometry = t.Branded<
  {
    type?: 'Point';
    coordinates?: UnitsGeo_.ShortLocation;
  } & {
    type: unknown;
    coordinates: unknown;
  },
  GeometryBrand
>;
export const Geometry = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('Point'),
      coordinates: UnitsGeo_.ShortLocation,
    }),
    t.type({
      type: t.unknown,
      coordinates: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'Point';
      coordinates?: UnitsGeo_.ShortLocation;
    } & {
      type: unknown;
      coordinates: unknown;
    },
    GeometryBrand
  > => true,
  'Geometry',
);
export interface GeometryBrand {
  readonly Geometry: unique symbol;
}
// Properties
// The purpose of this remains a mystery
export type Properties = t.Branded<
  {
    name?: string;
    streetNumber?: string;
    streetName?: string;
    city?: string;
    country?: string;
    countryCode?: string;
    houseNumber?: number;
    zipcode?: number;
  } & {
    name: unknown;
  },
  PropertiesBrand
>;
export const Properties = t.brand(
  t.intersection([
    t.partial({
      name: t.string,
      streetNumber: t.string,
      streetName: t.string,
      city: t.string,
      country: t.string,
      countryCode: t.string,
      houseNumber: t.number,
      zipcode: t.number,
    }),
    t.type({
      name: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: string;
      streetNumber?: string;
      streetName?: string;
      city?: string;
      country?: string;
      countryCode?: string;
      houseNumber?: number;
      zipcode?: number;
    } & {
      name: unknown;
    },
    PropertiesBrand
  > => true,
  'Properties',
);
export interface PropertiesBrand {
  readonly Properties: unique symbol;
}
// Feature
// The purpose of this remains a mystery
export type Feature = t.Branded<
  {
    type?: 'Feature';
    geometry?: Geometry;
    properties?: Properties;
  } & {
    type: unknown;
    geometry: unknown;
    properties: unknown;
  },
  FeatureBrand
>;
export const Feature = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('Feature'),
      geometry: Geometry,
      properties: Properties,
    }),
    t.type({
      type: t.unknown,
      geometry: t.unknown,
      properties: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'Feature';
      geometry?: Geometry;
      properties?: Properties;
    } & {
      type: unknown;
      geometry: unknown;
      properties: unknown;
    },
    FeatureBrand
  > => true,
  'Feature',
);
export interface FeatureBrand {
  readonly Feature: unique symbol;
}
// FeatureCollection
// The purpose of this remains a mystery
export type FeatureCollection = t.Branded<
  {
    type?: 'FeatureCollection';
    features?: Array<Feature>;
  } & {
    type: unknown;
    features: unknown;
  },
  FeatureCollectionBrand
>;
export const FeatureCollection = t.brand(
  t.intersection([
    t.partial({
      type: t.literal('FeatureCollection'),
      features: t.array(Feature),
    }),
    t.type({
      type: t.unknown,
      features: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'FeatureCollection';
      features?: Array<Feature>;
    } & {
      type: unknown;
      features: unknown;
    },
    FeatureCollectionBrand
  > => true,
  'FeatureCollection',
);
export interface FeatureCollectionBrand {
  readonly FeatureCollection: unique symbol;
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
