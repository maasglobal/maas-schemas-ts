/*

undefined
MaaS customer payment sources setup intent create response

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as PaymentSource_ from 'maas-schemas-ts/maas-backend/customers/payment-sources/paymentSource';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/setup-intent/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    setupIntent?: {
      setupIntentId?: Common_.PaymentSourceId;
      type?: PaymentSource_.Type;
      gatewayName?: PaymentSource_.GatewayName;
      clientSecret?: string;
      isDefault?: boolean;
      alias?: PaymentSource_.Alias;
      status?: PaymentSource_.Status;
    } & {
      setupIntentId: {} | null;
      type: {} | null;
      gatewayName: {} | null;
      isDefault: {} | null;
      status: {} | null;
    };
  } & {
    setupIntent: {} | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      setupIntent: t.intersection([
        t.partial({
          setupIntentId: Common_.PaymentSourceId,
          type: PaymentSource_.Type,
          gatewayName: PaymentSource_.GatewayName,
          clientSecret: t.string,
          isDefault: t.boolean,
          alias: PaymentSource_.Alias,
          status: PaymentSource_.Status,
        }),
        t.type({
          setupIntentId: t.union([t.type({}), t.null]),
          type: t.union([t.type({}), t.null]),
          gatewayName: t.union([t.type({}), t.null]),
          isDefault: t.union([t.type({}), t.null]),
          status: t.union([t.type({}), t.null]),
        }),
      ]),
    }),
    t.type({
      setupIntent: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      setupIntent?: {
        setupIntentId?: Common_.PaymentSourceId;
        type?: PaymentSource_.Type;
        gatewayName?: PaymentSource_.GatewayName;
        clientSecret?: string;
        isDefault?: boolean;
        alias?: PaymentSource_.Alias;
        status?: PaymentSource_.Status;
      } & {
        setupIntentId: {} | null;
        type: {} | null;
        gatewayName: {} | null;
        isDefault: {} | null;
        status: {} | null;
      };
    } & {
      setupIntent: {} | null;
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
