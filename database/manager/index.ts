import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import schema from '../schema';
import {Platform} from 'react-native';

const getDBName = () => {
  const androidPath = '/data/data/com.weightress/files/';
  const dbName = 'weightress.new';

  return `${Platform.OS === 'android' ? androidPath : ''}${dbName}`;
};

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  dbName: getDBName(), // optional
  schema,
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
    console.log('onSetUpError', error);
  },
});

// Then, make a Watermelon database from it!
export const database = new Database({
  adapter,
  modelClasses: [
    // You'll add Models to Watermelon here
  ],
});
