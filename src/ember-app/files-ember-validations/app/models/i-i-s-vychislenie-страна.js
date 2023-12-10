import {
  defineNamespace,
  defineProjections,
  Model as СтранаMixin
} from '../mixins/regenerated/models/i-i-s-vychislenie-страна';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СтранаMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
