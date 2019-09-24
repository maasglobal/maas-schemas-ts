import * as t from 'io-ts';

import { IdentityId, IsoDate } from './components/units';
import { Email, PersonalName, Phone, Ssid } from './components/common';
import { Address, City, Country, ZipCode } from './components/address';

export const Customer = t.intersection([
  t.type({
    identityId: IdentityId,
  }),
  t.partial({
    firstName: PersonalName,
    lastName: PersonalName,
    phone: Phone,
    email: Email,
    address: Address,
    city: City,
    country: Country,
    zipCode: ZipCode,
    dob: t.union([t.boolean, IsoDate]),
    ssid: t.union([t.boolean, Ssid]),
    balances: t.intersection([
      t.record(
        t.string,
        t.type({
          currency: t.union([t.literal('WMP'), t.literal('TOKEN')]),
          amount: t.union([t.number, t.null]),
        }),
      ),
      t.type({
        WMP: t.type({
          currency: t.literal('WMP'),
          amount: t.number,
        }),
      }),
    ]),
  }),
]);

export type Customer = t.TypeOf<typeof Customer>;

export default Customer;
