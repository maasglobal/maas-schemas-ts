/*

undefined
Request schema for booking-option-create

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as Product_ from 'maas-schemas-ts/core/product';
import * as CustomerSelection_ from 'maas-schemas-ts/core/components/customerSelection';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as AgencyOptions_ from 'maas-schemas-ts/core/components/agencyOptions';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/booking-option-create/request.json';
// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    paymentSourceId?: Common_.PaymentSourceId;
    productId?: Product_.Id;
    customerSelection?: CustomerSelection_.Default;
    autoPurchaseId?: Units_.Uuid;
    agencyOptions?: AgencyOptions_.Default;
  },
  PayloadBrand
>;
export const Payload = t.brand(
  t.partial({
    paymentSourceId: Common_.PaymentSourceId,
    productId: Product_.Id,
    customerSelection: CustomerSelection_.Default,
    autoPurchaseId: Units_.Uuid,
    agencyOptions: AgencyOptions_.Default,
  }),
  (
    x,
  ): x is t.Branded<
    {
      paymentSourceId?: Common_.PaymentSourceId;
      productId?: Product_.Id;
      customerSelection?: CustomerSelection_.Default;
      autoPurchaseId?: Units_.Uuid;
      agencyOptions?: AgencyOptions_.Default;
    },
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: {} | null;
    payload: {} | null;
    headers: {} | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: t.union([t.type({}), t.null]),
      payload: t.union([t.type({}), t.null]),
      headers: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: {} | null;
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
