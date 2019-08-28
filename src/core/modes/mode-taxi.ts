import * as t from 'io-ts';

import { Phone } from '../components/common';
import { Time, Url } from '../components/units';
import { Location } from '../components/units-geo';

const ModeTaxi = t.partial({
  vehicleId: t.string,
  vehicleLocation: Location,
  vehicleType: t.string,
  vehicleDescription: t.string,
  driver: t.partial({
    phone: t.string,
    name: t.string,
    image: Url,
  }),
  dispatchOrderId: t.string,
  eta: Time,
  taxiCenter: t.partial({
    name: t.string,
    phone: Phone,
  }),
});

type ModeTaxi = t.TypeOf<typeof ModeTaxi>;

export default ModeTaxi;
