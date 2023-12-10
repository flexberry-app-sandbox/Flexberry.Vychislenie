import {
  defineNamespace,
  defineProjections,
  Model as ЛесMixin
} from '../mixins/regenerated/models/i-i-s-vychislenie-лес';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЛесMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
