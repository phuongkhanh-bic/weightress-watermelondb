import {TABLES} from './constants';
import {Database} from '@nozbe/watermelondb';
import WeightModel from './models/weight';
import {database as databaseManager} from './manager';

type WeightBody = {
  newWeight: string | number;
  note: string | undefined;
};

export const observeWeights = (database: Database) => {
  // observe weights table
};

export const saveWeight = async ({newWeight, note}: WeightBody) => {
  // save weight to database
};
