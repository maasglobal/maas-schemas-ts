/*

undefined
MaaS customer personal data delete item

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as ApiCommon_ from 'maas-schemas-ts/core/components/api-common';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/personal-data-delete/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    payload?: {
      itemName?: string;
    } & {
      itemName: {} | null;
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
          itemName: t.string,
        }),
        t.type({
          itemName: t.union([t.type({}), t.null]),
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
        itemName?: string;
      } & {
        itemName: {} | null;
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
