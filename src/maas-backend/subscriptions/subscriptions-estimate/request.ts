/*

undefined
Request schema for subscriptions-estimate

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Subscription_ from 'maas-schemas-ts/maas-backend/subscriptions/subscription';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-estimate/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customerId?: Units_.IdentityId;
    userId?: Units_.IdentityId;
    immediate?: boolean;
    replace?: boolean;
    payload?: Subscription_.SubscriptionUpdatePayload;
    headers?: ApiCommon_.Headers;
  } & {
    customerId: unknown;
    userId: unknown;
    payload: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      userId: Units_.IdentityId,
      immediate: t.boolean,
      replace: t.boolean,
      payload: Subscription_.SubscriptionUpdatePayload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      customerId: t.unknown,
      userId: t.unknown,
      payload: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      customerId?: Units_.IdentityId;
      userId?: Units_.IdentityId;
      immediate?: boolean;
      replace?: boolean;
      payload?: Subscription_.SubscriptionUpdatePayload;
      headers?: ApiCommon_.Headers;
    } & {
      customerId: unknown;
      userId: unknown;
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
