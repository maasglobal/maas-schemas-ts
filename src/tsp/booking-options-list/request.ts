/*

undefined
Request schema for getting options from a TSP adapter.

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as TravelMode_ from 'maas-schemas-ts/core/components/travel-mode';
import * as Units_ from 'maas-schemas-ts/core/components/units';
import * as UnitsGeo_ from 'maas-schemas-ts/core/components/units-geo';
import * as Address_ from 'maas-schemas-ts/core/components/address';
import * as Booking_ from 'maas-schemas-ts/core/booking';
import * as Common_ from 'maas-schemas-ts/core/components/common';

export const schemaId = 'http://maasglobal.com/tsp/bookings-options-list/request.json';
// Default
// The default export. More information at the top.
export type Default = t.Branded<
  ({
    mode?: TravelMode_.Default;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName | string;
    fromAddress?: Address_.ComponentAddress | string;
    fromRadius?: UnitsGeo_.Distance;
    to?: UnitsGeo_.ShortLocationString | string;
    toName?: Address_.PlaceName | string;
    toAddress?: Address_.ComponentAddress | string;
    toRadius?: UnitsGeo_.Distance;
    distance?: UnitsGeo_.Distance;
    extraOptions?: string;
    tspProductIds?: string;
    tspIdToExtend?: Booking_.TspId;
    purchasingAppInstanceId?: Common_.AppInstanceId;
  } & Record<
    string,
    | TravelMode_.Default
    | Units_.Time
    | Units_.Time
    | UnitsGeo_.ShortLocationString
    | (Address_.PlaceName | string)
    | (Address_.ComponentAddress | string)
    | UnitsGeo_.Distance
    | (UnitsGeo_.ShortLocationString | string)
    | (Address_.PlaceName | string)
    | (Address_.ComponentAddress | string)
    | UnitsGeo_.Distance
    | UnitsGeo_.Distance
    | string
    | string
    | Booking_.TspId
    | Common_.AppInstanceId
    | (string | number | boolean)
  >) & {
    startTime: {} | null;
    from: {} | null;
  },
  DefaultBrand
>;
export const Default = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        mode: TravelMode_.Default,
        startTime: Units_.Time,
        endTime: Units_.Time,
        from: UnitsGeo_.ShortLocationString,
        fromName: t.union([Address_.PlaceName, t.string]),
        fromAddress: t.union([Address_.ComponentAddress, t.string]),
        fromRadius: UnitsGeo_.Distance,
        to: t.union([UnitsGeo_.ShortLocationString, t.string]),
        toName: t.union([Address_.PlaceName, t.string]),
        toAddress: t.union([Address_.ComponentAddress, t.string]),
        toRadius: UnitsGeo_.Distance,
        distance: UnitsGeo_.Distance,
        extraOptions: t.string,
        tspProductIds: t.string,
        tspIdToExtend: Booking_.TspId,
        purchasingAppInstanceId: Common_.AppInstanceId,
      }),
      t.record(
        t.string,
        t.union([
          TravelMode_.Default,
          Units_.Time,
          Units_.Time,
          UnitsGeo_.ShortLocationString,
          t.union([Address_.PlaceName, t.string]),
          t.union([Address_.ComponentAddress, t.string]),
          UnitsGeo_.Distance,
          t.union([UnitsGeo_.ShortLocationString, t.string]),
          t.union([Address_.PlaceName, t.string]),
          t.union([Address_.ComponentAddress, t.string]),
          UnitsGeo_.Distance,
          UnitsGeo_.Distance,
          t.string,
          t.string,
          Booking_.TspId,
          Common_.AppInstanceId,
          t.union([t.string, t.number, t.boolean]),
        ]),
      ),
    ]),
    t.type({
      startTime: t.union([t.type({}), t.null]),
      from: t.union([t.type({}), t.null]),
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      mode?: TravelMode_.Default;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName | string;
      fromAddress?: Address_.ComponentAddress | string;
      fromRadius?: UnitsGeo_.Distance;
      to?: UnitsGeo_.ShortLocationString | string;
      toName?: Address_.PlaceName | string;
      toAddress?: Address_.ComponentAddress | string;
      toRadius?: UnitsGeo_.Distance;
      distance?: UnitsGeo_.Distance;
      extraOptions?: string;
      tspProductIds?: string;
      tspIdToExtend?: Booking_.TspId;
      purchasingAppInstanceId?: Common_.AppInstanceId;
    } & Record<
      string,
      | TravelMode_.Default
      | Units_.Time
      | Units_.Time
      | UnitsGeo_.ShortLocationString
      | (Address_.PlaceName | string)
      | (Address_.ComponentAddress | string)
      | UnitsGeo_.Distance
      | (UnitsGeo_.ShortLocationString | string)
      | (Address_.PlaceName | string)
      | (Address_.ComponentAddress | string)
      | UnitsGeo_.Distance
      | UnitsGeo_.Distance
      | string
      | string
      | Booking_.TspId
      | Common_.AppInstanceId
      | (string | number | boolean)
    >) & {
      startTime: {} | null;
      from: {} | null;
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
