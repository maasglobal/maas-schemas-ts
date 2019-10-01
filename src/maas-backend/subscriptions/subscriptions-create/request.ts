/*

undefined
Request schema for subscriptions-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Subscription_ from 'maas-schemas-ts/maas-backend/subscriptions/subscription';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/subscriptions/subscriptions-create/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    customerId?: Units_.IdentityId;
    userId?: Units_.IdentityId;
    payload?: Subscription_.SubscriptionCreatePayload;
    headers?: ApiCommon_.Headers;
  } & {
    customerId:
      | Record<string, unknown>
      | Array<unknown>
      | string
      | boolean
      | number
      | null;
    userId: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    payload: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      customerId: Units_.IdentityId,
      userId: Units_.IdentityId,
      payload: Subscription_.SubscriptionCreatePayload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      customerId: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      userId: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      payload: t.union([
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
      customerId?: Units_.IdentityId;
      userId?: Units_.IdentityId;
      payload?: Subscription_.SubscriptionCreatePayload;
      headers?: ApiCommon_.Headers;
    } & {
      customerId:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
      userId: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      payload:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
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
