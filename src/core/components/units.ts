import * as t from 'io-ts';

export type IdentityId = string;
export const IdentityId = t.string;

export type Uuid = string;
export const Uuid = t.string;

export type Url = string;
export const Url = t.string;

export type Time = number;
export const Time = t.number;

export type IsoDate = string;
export const IsoDate = t.string;
