/*

undefined
Response schema for updating state of a specific booking with a TSP ID from a TSP adapter

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as BookingOption_ from 'maas-schemas-ts/core/booking-option';
import * as BookingMeta_ from 'maas-schemas-ts/core/booking-meta';

export const schemaId = 'http://maasglobal.com/tsp/bookings-update/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    tspId?: Booking_.TspId;
    cost?: Booking_.Cost;
    state?: 'RESERVED' | 'CONFIRMED' | 'ACTIVATED' | 'ON_HOLD' | 'EXPIRED' | 'CANCELLED';
    leg?: BookingOption_.LegDelta;
    meta?: BookingMeta_.Default;
    terms?: Booking_.Terms;
    token?: Booking_.Token;
    tspProduct?: BookingOption_.TspProduct;
  } & {
    tspId: {} | null;
    state: {} | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      tspId: Booking_.TspId,
      cost: Booking_.Cost,
      state: t.union([
        t.literal('RESERVED'),
        t.literal('CONFIRMED'),
        t.literal('ACTIVATED'),
        t.literal('ON_HOLD'),
        t.literal('EXPIRED'),
        t.literal('CANCELLED'),
      ]),
      leg: BookingOption_.LegDelta,
      meta: BookingMeta_.Default,
      terms: Booking_.Terms,
      token: Booking_.Token,
      tspProduct: BookingOption_.TspProduct,
    }),
    t.type({
      tspId: t.union([t.type({}), t.null]),
      state: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      tspId?: Booking_.TspId;
      cost?: Booking_.Cost;
      state?:
        | 'RESERVED'
        | 'CONFIRMED'
        | 'ACTIVATED'
        | 'ON_HOLD'
        | 'EXPIRED'
        | 'CANCELLED';
      leg?: BookingOption_.LegDelta;
      meta?: BookingMeta_.Default;
      terms?: Booking_.Terms;
      token?: Booking_.Token;
      tspProduct?: BookingOption_.TspProduct;
    } & {
      tspId: {} | null;
      state: {} | null;
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
