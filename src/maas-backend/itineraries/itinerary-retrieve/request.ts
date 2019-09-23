/*

undefined
Request schema for itinerary-retrieve

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'src/core/components/units';
import * as ApiCommon_ from 'src/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/itineraries/itinerary-retrieve/request.json';
// Default
// The purpose of this remains a mystery
export type Default = t.Branded<
  {
    itineraryId: Units_.Uuid;
    headers?: ApiCommon_.Headers;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.exact(
    t.intersection([
      t.type({
        itineraryId: Units_.Uuid,
      }),
      t.partial({
        headers: ApiCommon_.Headers,
      }),
    ]),
  ),
  (
    x,
  ): x is t.Branded<
    {
      itineraryId: Units_.Uuid;
      headers?: ApiCommon_.Headers;
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
