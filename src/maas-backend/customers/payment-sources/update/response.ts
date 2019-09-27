/*

undefined
MaaS customer payment sources update response

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as PaymentSource_ from 'maas-schemas-ts/maas-backend/customers/payment-sources/paymentSource';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/payment-sources/update/response.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    paymentSource?: PaymentSource_.PaymentSource;
  } & {
    paymentSource: unknown;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      paymentSource: PaymentSource_.PaymentSource,
    }),
    t.type({
      paymentSource: t.unknown,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      paymentSource?: PaymentSource_.PaymentSource;
    } & {
      paymentSource: unknown;
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
