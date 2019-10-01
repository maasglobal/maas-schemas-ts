/*

undefined
Response schema for regions-options

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Region_ from 'maas-schemas-ts/core/region';

export const schemaId =
  'http://maasglobal.com/maas-backend/regions/regions-options/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    options?: Array<Region_.Default>;
    debug?: {};
  } & {
    options: {} | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      options: t.array(Region_.Default),
      debug: t.type({}),
    }),
    t.type({
      options: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      options?: Array<Region_.Default>;
      debug?: {};
    } & {
      options: {} | null;
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
