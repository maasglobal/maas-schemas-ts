/*

undefined
Schema for MODE_RAIL meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Place_ from 'maas-schemas-ts/core/components/place';
import * as Station_ from 'maas-schemas-ts/core/components/station';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_RAIL.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    outward?: {
      id?: string;
      from?: Place_.Default;
      to?: Place_.Default;
    } & {
      from: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      to: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    };
    return?: {
      id?: string;
      from?: Place_.Default;
      to?: Place_.Default;
    } & {
      from: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      to: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    };
    deliveryMethod?: {
      name?: string;
      stationId?: Station_.Id;
      alternativeCollections?: string;
    };
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.partial({
    outward: t.intersection([
      t.partial({
        id: t.string,
        from: Place_.Default,
        to: Place_.Default,
      }),
      t.type({
        from: t.union([
          t.UnknownRecord,
          t.UnknownArray,
          t.string,
          t.boolean,
          t.number,
          t.null,
        ]),
        to: t.union([
          t.UnknownRecord,
          t.UnknownArray,
          t.string,
          t.boolean,
          t.number,
          t.null,
        ]),
      }),
    ]),
    return: t.intersection([
      t.partial({
        id: t.string,
        from: Place_.Default,
        to: Place_.Default,
      }),
      t.type({
        from: t.union([
          t.UnknownRecord,
          t.UnknownArray,
          t.string,
          t.boolean,
          t.number,
          t.null,
        ]),
        to: t.union([
          t.UnknownRecord,
          t.UnknownArray,
          t.string,
          t.boolean,
          t.number,
          t.null,
        ]),
      }),
    ]),
    deliveryMethod: t.partial({
      name: t.string,
      stationId: Station_.Id,
      alternativeCollections: t.string,
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      outward?: {
        id?: string;
        from?: Place_.Default;
        to?: Place_.Default;
      } & {
        from: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
        to: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      };
      return?: {
        id?: string;
        from?: Place_.Default;
        to?: Place_.Default;
      } & {
        from: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
        to: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      };
      deliveryMethod?: {
        name?: string;
        stationId?: Station_.Id;
        alternativeCollections?: string;
      };
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
