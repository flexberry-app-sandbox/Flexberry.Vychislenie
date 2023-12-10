import {
  defineNamespace,
  defineProjections,
  Model as ЗверьMixin
} from '../mixins/regenerated/models/i-i-s-vychislenie-зверь';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ЗверьMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
