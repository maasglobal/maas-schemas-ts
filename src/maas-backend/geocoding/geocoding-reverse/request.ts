/*

undefined
MaaS geocoding query request schema.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as I18n_ from 'maas-schemas-ts/core/components/i18n';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/geocoding/geocoding-reverse/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: {
      lat?: UnitsGeo_.RelaxedLatitude;
      lon?: UnitsGeo_.RelaxedLongitude;
      count?: number;
      radius?: UnitsGeo_.Distance;
      locale?: I18n_.Locale;
    } & {
      lat: unknown;
      lon: unknown;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          lat: UnitsGeo_.RelaxedLatitude,
          lon: UnitsGeo_.RelaxedLongitude,
          count: t.number,
          radius: UnitsGeo_.Distance,
          locale: I18n_.Locale,
        }),
        t.type({
          lat: t.unknown,
          lon: t.unknown,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: {
        lat?: UnitsGeo_.RelaxedLatitude;
        lon?: UnitsGeo_.RelaxedLongitude;
        count?: number;
        radius?: UnitsGeo_.Distance;
        locale?: I18n_.Locale;
      } & {
        lat: unknown;
        lon: unknown;
      };
      headers?: ApiCommon_.Headers;
    } & {
      payload: unknown;
    },
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
