import 'react-native-get-random-values'
import Realm from 'realm';
import {BSON} from 'realm';

export class visitDetails extends Realm.Object {
  static schema = {
    name: 'visitDetails',
    primaryKey: '_id',
    properties: {
      _id: {type: 'objectId', default: () => new BSON.ObjectId()},
      hospital: 'string', 
      doctor: 'string', 
      address: 'string',
      owner_id: 'string',
      pinCode: 'int',

    },
  };
}




