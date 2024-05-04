import {createRealmContext} from '@realm/react';
import {Product} from './schema';
import {visitDetails} from './visitSchema'

export const realmContext = createRealmContext({
  schema: [Product],

});
