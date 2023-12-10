import { Serializer as СтранаSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vychislenie-страна';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(СтранаSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
