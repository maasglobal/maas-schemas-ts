/*

undefined
MaaS single TSP adapter option

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as Cost_ from 'maas-schemas-ts/core/components/cost';
import * as Configurator_ from 'maas-schemas-ts/core/components/configurator';
import * as Customer_ from 'maas-schemas-ts/core/customer';
import * as TravelMode_ from 'maas-schemas-ts/core/components/travel-mode';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Common_ from 'maas-schemas-ts/core/components/common';

export const schemaId = 'http://maasglobal.com/core/booking-option.json';
// Leg
// A subset of the standard leg (../core/leg.json)
export type Leg = t.Branded<
  {
    mode?: TravelMode_.Default;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.Place;
    to?: UnitsGeo_.Place;
    departureDelay?: Units_.Duration;
    agencyId?: Common_.AgencyId;
  } & {
    mode: unknown;
    startTime: unknown;
    endTime: unknown;
    from: unknown;
    to: unknown;
  },
  LegBrand
>;
export const Leg = t.brand(
  t.intersection([
    t.partial({
      mode: TravelMode_.Default,
      startTime: Units_.Time,
      endTime: Units_.Time,
      from: UnitsGeo_.Place,
      to: UnitsGeo_.Place,
      departureDelay: Units_.Duration,
      agencyId: Common_.AgencyId,
    }),
    t.type({
      mode: t.unknown,
      startTime: t.unknown,
      endTime: t.unknown,
      from: t.unknown,
      to: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_.Default;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.Place;
      to?: UnitsGeo_.Place;
      departureDelay?: Units_.Duration;
      agencyId?: Common_.AgencyId;
    } & {
      mode: unknown;
      startTime: unknown;
      endTime: unknown;
      from: unknown;
      to: unknown;
    },
    LegBrand
  > => true,
  'Leg',
);
export interface LegBrand {
  readonly Leg: unique symbol;
}
// TspProduct
// Defines what kind of TSP product the booking option represents.
export type TspProduct = t.Branded<
  {
    id?: string;
  } & {
    id: unknown;
  },
  TspProductBrand
>;
export const TspProduct = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
    }),
    t.type({
      id: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
    } & {
      id: unknown;
    },
    TspProductBrand
  > => true,
  'TspProduct',
);
export interface TspProductBrand {
  readonly TspProduct: unique symbol;
}
// Customer
// The purpose of this remains a mystery
export type Customer = Customer_.Default;
export const Customer = Customer_.Default;
// ContentWithCost
// The purpose of this remains a mystery
export type ContentWithCost = t.Branded<
  {
    leg?: Leg;
    terms?: Booking_.Terms;
    meta?: Booking_.Meta;
    tspProduct?: TspProduct;
    cost?: Cost_.Default;
    customer?: Customer;
  } & {
    leg: unknown;
    meta: unknown;
    terms: unknown;
    tspProduct: unknown;
    cost: unknown;
  },
  ContentWithCostBrand
>;
export const ContentWithCost = t.brand(
  t.intersection([
    t.partial({
      leg: Leg,
      terms: Booking_.Terms,
      meta: Booking_.Meta,
      tspProduct: TspProduct,
      cost: Cost_.Default,
      customer: Customer,
    }),
    t.type({
      leg: t.unknown,
      meta: t.unknown,
      terms: t.unknown,
      tspProduct: t.unknown,
      cost: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      leg?: Leg;
      terms?: Booking_.Terms;
      meta?: Booking_.Meta;
      tspProduct?: TspProduct;
      cost?: Cost_.Default;
      customer?: Customer;
    } & {
      leg: unknown;
      meta: unknown;
      terms: unknown;
      tspProduct: unknown;
      cost: unknown;
    },
    ContentWithCostBrand
  > => true,
  'ContentWithCost',
);
export interface ContentWithCostBrand {
  readonly ContentWithCost: unique symbol;
}
// ContentWithConfigurator
// The purpose of this remains a mystery
export type ContentWithConfigurator = t.Branded<
  {
    leg?: Leg;
    terms?: Booking_.Terms;
    meta?: Booking_.Meta;
    tspProduct?: TspProduct;
    configurator?: Configurator_.Default;
    customer?: Customer;
  } & {
    leg: unknown;
    meta: unknown;
    terms: unknown;
    tspProduct: unknown;
    configurator: unknown;
  },
  ContentWithConfiguratorBrand
>;
export const ContentWithConfigurator = t.brand(
  t.intersection([
    t.partial({
      leg: Leg,
      terms: Booking_.Terms,
      meta: Booking_.Meta,
      tspProduct: TspProduct,
      configurator: Configurator_.Default,
      customer: Customer,
    }),
    t.type({
      leg: t.unknown,
      meta: t.unknown,
      terms: t.unknown,
      tspProduct: t.unknown,
      configurator: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      leg?: Leg;
      terms?: Booking_.Terms;
      meta?: Booking_.Meta;
      tspProduct?: TspProduct;
      configurator?: Configurator_.Default;
      customer?: Customer;
    } & {
      leg: unknown;
      meta: unknown;
      terms: unknown;
      tspProduct: unknown;
      configurator: unknown;
    },
    ContentWithConfiguratorBrand
  > => true,
  'ContentWithConfigurator',
);
export interface ContentWithConfiguratorBrand {
  readonly ContentWithConfigurator: unique symbol;
}
// LegDelta
// A leg delta, containing any subset of the valid properties
export type LegDelta = t.Branded<
  {
    mode?: TravelMode_.Default;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    departureDelay?: Units_.Duration;
    from?: UnitsGeo_.Place;
    to?: UnitsGeo_.Place;
  },
  LegDeltaBrand
>;
export const LegDelta = t.brand(
  t.partial({
    mode: TravelMode_.Default,
    startTime: Units_.Time,
    endTime: Units_.Time,
    departureDelay: Units_.Duration,
    from: UnitsGeo_.Place,
    to: UnitsGeo_.Place,
  }),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_.Default;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      departureDelay?: Units_.Duration;
      from?: UnitsGeo_.Place;
      to?: UnitsGeo_.Place;
    },
    LegDeltaBrand
  > => true,
  'LegDelta',
);
export interface LegDeltaBrand {
  readonly LegDelta: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<ContentWithCost | ContentWithConfigurator, DefaultBrand>;
export const Default = t.brand(
  t.union([ContentWithCost, ContentWithConfigurator]),
  (x): x is t.Branded<ContentWithCost | ContentWithConfigurator, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
