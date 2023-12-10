import { Serializer as ЗверьSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vychislenie-зверь';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЗверьSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
