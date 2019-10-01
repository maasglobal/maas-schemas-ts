/*

undefined
A fare/price as billed to the user in WMPs or in tokens

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/components/fare.json';
// TokenId
// The purpose of this remains a mystery
export type TokenId = t.Branded<string, TokenIdBrand>;
export const TokenId = t.brand(
  t.string,
  (x): x is t.Branded<string, TokenIdBrand> =>
    typeof x !== 'string' ||
    x.match(RegExp('^[a-z]+(-[a-z]+)*-[a-z0-9_]+$', 'u')) !== null,
  'TokenId',
);
export interface TokenIdBrand {
  readonly TokenId: unique symbol;
}
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    amount?: number | null;
    currency?: string & ('WMP' | 'TOKEN');
    tokenId?: TokenId;
    originalAmount?: number | null;
    productionAmount?: number | null;
    type?: string & ('charge' | 'refund');
  } & {
    amount: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    currency: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      amount: t.union([t.number, t.null]),
      currency: t.intersection([
        t.string,
        t.union([t.literal('WMP'), t.literal('TOKEN')]),
      ]),
      tokenId: TokenId,
      originalAmount: t.union([t.number, t.null]),
      productionAmount: t.union([t.number, t.null]),
      type: t.intersection([
        t.string,
        t.union([t.literal('charge'), t.literal('refund')]),
      ]),
    }),
    t.type({
      amount: t.union([
        t.UnknownRecord,
        t.UnknownArray,
        t.string,
        t.boolean,
        t.number,
        t.null,
      ]),
      currency: t.union([
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
      amount?: number | null;
      currency?: string & ('WMP' | 'TOKEN');
      tokenId?: TokenId;
      originalAmount?: number | null;
      productionAmount?: number | null;
      type?: string & ('charge' | 'refund');
    } & {
      amount: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      currency:
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
