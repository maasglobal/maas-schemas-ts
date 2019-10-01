/*

undefined
MaaS InvoiceLineItem schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as InvoiceUnits_ from 'maas-schemas-ts/maas-backend/invoices/invoiceUnits';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';

export const schemaId =
  'http://maasglobal.com/maas-backend/invoices/invoiceLineItem.json';
// InvoiceLineItem
// Invoice line item
export type InvoiceLineItem = t.Branded<
  {
    id?: InvoiceUnits_.InvoiceLineItemId;
    gatewayId?: string;
    invoiceId?: InvoiceUnits_.InvoiceId;
    type?: string & ('authorization' | 'capture' | 'charge' | 'refund');
    paymentSourceId?: string;
    date?: Units_.Time;
    description?: string;
    amount?: number;
    currency?: Units_.Currency;
    referenceInvoiceLineItemId?: InvoiceUnits_.InvoiceLineItemId;
    tokenId?: Fare_.TokenId;
    token?: {};
  } & {
    id: {} | null;
    gatewayId: {} | null;
    description: {} | null;
    amount: {} | null;
    currency: {} | null;
    type: {} | null;
  },
  InvoiceLineItemBrand
>;
export const InvoiceLineItem = t.brand(
  t.intersection([
    t.partial({
      id: InvoiceUnits_.InvoiceLineItemId,
      gatewayId: t.string,
      invoiceId: InvoiceUnits_.InvoiceId,
      type: t.intersection([
        t.string,
        t.union([
          t.literal('authorization'),
          t.literal('capture'),
          t.literal('charge'),
          t.literal('refund'),
        ]),
      ]),
      paymentSourceId: t.string,
      date: Units_.Time,
      description: t.string,
      amount: t.number,
      currency: Units_.Currency,
      referenceInvoiceLineItemId: InvoiceUnits_.InvoiceLineItemId,
      tokenId: Fare_.TokenId,
      token: t.type({}),
    }),
    t.type({
      id: t.union([t.type({}), t.null]),
      gatewayId: t.union([t.type({}), t.null]),
      description: t.union([t.type({}), t.null]),
      amount: t.union([t.type({}), t.null]),
      currency: t.union([t.type({}), t.null]),
      type: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: InvoiceUnits_.InvoiceLineItemId;
      gatewayId?: string;
      invoiceId?: InvoiceUnits_.InvoiceId;
      type?: string & ('authorization' | 'capture' | 'charge' | 'refund');
      paymentSourceId?: string;
      date?: Units_.Time;
      description?: string;
      amount?: number;
      currency?: Units_.Currency;
      referenceInvoiceLineItemId?: InvoiceUnits_.InvoiceLineItemId;
      tokenId?: Fare_.TokenId;
      token?: {};
    } & {
      id: {} | null;
      gatewayId: {} | null;
      description: {} | null;
      amount: {} | null;
      currency: {} | null;
      type: {} | null;
    },
    InvoiceLineItemBrand
  > => true,
  'InvoiceLineItem',
);
export interface InvoiceLineItemBrand {
  readonly InvoiceLineItem: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<unknown, DefaultBrand>;
export const Default = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, DefaultBrand> => true,
  'Default',
);
export interface DefaultBrand {
  readonly Default: unique symbol;
}

export default Default;

// Success
