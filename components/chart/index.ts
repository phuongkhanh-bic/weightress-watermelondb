import {withDatabase} from '@nozbe/watermelondb/DatabaseProvider';
import withObservables from '@nozbe/with-observables';

import {observeWeights} from '../../database/helper';
import Chart from './chart';

import type {Database} from '@nozbe/watermelondb';

const enhanced = withObservables([], ({database}: {database: Database}) => ({
  weights: observeWeights(database),
}));

export default withDatabase(enhanced(Chart));
