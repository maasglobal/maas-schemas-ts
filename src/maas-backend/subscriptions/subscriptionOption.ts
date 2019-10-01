/*

undefined
MaaS subscription option schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Subscription_ from 'maas-schemas-ts/maas-backend/subscriptions/subscription';

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptionOption.json';
// SubscriptionAdditions
// The purpose of this remains a mystery
export type SubscriptionAdditions = t.Branded<
  {
    discounts?: Array<unknown>;
    requiredAuthorizations?: Array<Common_.AgencyId>;
  } & {
    plan: {} | null;
    wmpGrant: {} | null;
    pointCost: {} | null;
    addons: {} | null;
    coupons: {} | null;
    requiredAuthorizations: {} | null;
  },
  SubscriptionAdditionsBrand
>;
export const SubscriptionAdditions = t.brand(
  t.intersection([
    t.partial({
      discounts: t.UnknownArray,
      requiredAuthorizations: t.array(Common_.AgencyId),
    }),
    t.type({
      plan: t.union([t.type({}), t.null]),
      wmpGrant: t.union([t.type({}), t.null]),
      pointCost: t.union([t.type({}), t.null]),
      addons: t.union([t.type({}), t.null]),
      coupons: t.union([t.type({}), t.null]),
      requiredAuthorizations: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      discounts?: Array<unknown>;
      requiredAuthorizations?: Array<Common_.AgencyId>;
    } & {
      plan: {} | null;
      wmpGrant: {} | null;
      pointCost: {} | null;
      addons: {} | null;
      coupons: {} | null;
      requiredAuthorizations: {} | null;
    },
    SubscriptionAdditionsBrand
  > => true,
  'SubscriptionAdditions',
);
export interface SubscriptionAdditionsBrand {
  readonly SubscriptionAdditions: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  Subscription_.SubscriptionBase & SubscriptionAdditions,
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([Subscription_.SubscriptionBase, SubscriptionAdditions]),
  (
    x,
  ): x is t.Branded<
    Subscription_.SubscriptionBase & SubscriptionAdditions,
    DefaultBrand
  > => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
