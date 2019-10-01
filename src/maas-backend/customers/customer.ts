/*

undefined
MaaS customer schema

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as PersonalData_ from 'maas-schemas-ts/maas-backend/customers/personalData';
import * as PaymentSource_ from 'maas-schemas-ts/maas-backend/customers/payment-sources/paymentSource';
import * as Fare_ from 'maas-schemas-ts/core/components/fare';
import * as Region_ from 'maas-schemas-ts/core/region';
import * as Authorization_ from 'maas-schemas-ts/core/components/authorization';

export const schemaId = 'http://maasglobal.com/maas-backend/customers/customer.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    profileImageUrl?: string;
    personalData?: PersonalData_.Default;
    paymentSources?: Array<PaymentSource_.PaymentSource>;
    balances?: Array<Fare_.Default>;
    region?: Region_.Default;
    authorizations?: Array<Authorization_.Default>;
  } & {
    personalData:
      | Record<string, unknown>
      | Array<unknown>
      | string
      | boolean
      | number
      | null;
    paymentSources:
      | Record<string, unknown>
      | Array<unknown>
      | string
      | boolean
      | number
      | null;
    balances: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    region: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    authorizations:
      | Record<string, unknown>
      | Array<unknown>
      | string
      | boolean
      | number
      | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      profileImageUrl: t.string,
      personalData: PersonalData_.Default,
      paymentSources: t.array(PaymentSource_.PaymentSource),
      balances: t.array(Fare_.Default),
      region: Region_.Default,
      authorizations: t.array(Authorization_.Default),
    }),
    t.type({
      personalData: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      paymentSources: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      balances: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      region: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      authorizations: t.union([
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
      profileImageUrl?: string;
      personalData?: PersonalData_.Default;
      paymentSources?: Array<PaymentSource_.PaymentSource>;
      balances?: Array<Fare_.Default>;
      region?: Region_.Default;
      authorizations?: Array<Authorization_.Default>;
    } & {
      personalData:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
      paymentSources:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
      balances:
        | Record<string, unknown>
        | Array<unknown>
        | string
        | boolean
        | number
        | null;
      region: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      authorizations:
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
