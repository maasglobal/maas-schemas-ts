/*

undefined
Request schema for auth-sms-login

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Common_ from 'maas-schemas-ts/core/components/common';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/auth/auth-sms-login/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    payload?: {
      phone?: Common_.RawPhone;
      code?: string;
    } & {
      phone: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      code: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          phone: Common_.RawPhone,
          code: t.string,
        }),
        t.type({
          phone: t.union([
            t.UnknownRecord,
            t.UnknownArray,
            t.string,
            t.boolean,
            t.number,
            t.null,
          ]),
          code: t.union([
            t.UnknownRecord,
            t.UnknownArray,
            t.string,
            t.boolean,
            t.number,
            t.null,
          ]),
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
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
      payload?: {
        phone?: Common_.RawPhone;
        code?: string;
      } & {
        phone:
          | Record<string, unknown>
          | Array<unknown>
          | string
          | boolean
          | number
          | null;
        code: Record<string, unknown> | Array<unknown> | string | boolean | number | null;
      };
      headers?: ApiCommon_.Headers;
    } & {
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
