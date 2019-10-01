/*

undefined
MaaS customer payment sources create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as PaymentSource_ from 'maas-schemas-ts/maas-backend/customers/payment-sources/paymentSource';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/create/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    payload?: {
      paymentSource?: {
        gatewayName?: PaymentSource_.GatewayName;
        type?: PaymentSource_.Type;
        temporaryToken?: string;
        isDefault?: boolean;
        alias?: PaymentSource_.Alias;
      } & {
        type: {} | null;
        gatewayName: {} | null;
        temporaryToken: {} | null;
        isDefault: {} | null;
      };
    } & {
      paymentSource: {} | null;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: {} | null;
    customerId: {} | null;
    payload: {} | null;
    headers: {} | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          paymentSource: t.intersection([
            t.partial({
              gatewayName: PaymentSource_.GatewayName,
              type: PaymentSource_.Type,
              temporaryToken: t.string,
              isDefault: t.boolean,
              alias: PaymentSource_.Alias,
            }),
            t.type({
              type: t.union([t.type({}), t.null]),
              gatewayName: t.union([t.type({}), t.null]),
              temporaryToken: t.union([t.type({}), t.null]),
              isDefault: t.union([t.type({}), t.null]),
            }),
          ]),
        }),
        t.type({
          paymentSource: t.union([t.type({}), t.null]),
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: t.union([t.type({}), t.null]),
      customerId: t.union([t.type({}), t.null]),
      payload: t.union([t.type({}), t.null]),
      headers: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      payload?: {
        paymentSource?: {
          gatewayName?: PaymentSource_.GatewayName;
          type?: PaymentSource_.Type;
          temporaryToken?: string;
          isDefault?: boolean;
          alias?: PaymentSource_.Alias;
        } & {
          type: {} | null;
          gatewayName: {} | null;
          temporaryToken: {} | null;
          isDefault: {} | null;
        };
      } & {
        paymentSource: {} | null;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: {} | null;
      customerId: {} | null;
      payload: {} | null;
      headers: {} | null;
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
