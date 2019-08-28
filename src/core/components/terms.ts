import * as t from 'io-ts';

import { Time } from './units';

type Terms = Partial<{
  readonly validity: {
    readonly startTime: Time;
  };
}>;

const Terms = t.partial({
  validity: t.type({
    startTime: Time,
  }),
});

export default Terms;
