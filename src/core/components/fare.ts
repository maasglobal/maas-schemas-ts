import * as t from 'io-ts';

interface Fare {
  readonly amount: number | null;
  readonly currency: 'WMP' | 'TOKEN';
}
const Fare = t.type({
  amount: t.union([t.number, t.null]),
  currency: t.union([t.literal('WMP'), t.literal('TOKEN')]),
});

export default Fare;
