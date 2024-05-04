import 'react-native-get-random-values'
import Realm from 'realm';
import {BSON} from 'realm';

export class Product extends Realm.Object {
  static schema = {
    name: 'Product',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      name: 'string',
      owner_id: 'string',
      price: 'int',
      description: 'string',
      image: 'string',
    },
  };
}




