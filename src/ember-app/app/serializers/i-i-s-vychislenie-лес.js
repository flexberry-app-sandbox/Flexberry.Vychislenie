import { Serializer as ЛесSerializer } from
  '../mixins/regenerated/serializers/i-i-s-vychislenie-лес';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ЛесSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
