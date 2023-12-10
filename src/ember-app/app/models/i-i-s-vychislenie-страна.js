import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  defineProjections,
  ValidationRules,
  Model as СтранаMixin
} from '../mixins/regenerated/models/i-i-s-vychislenie-страна';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СтранаMixin, Validations, {
});

defineProjections(Model);

export default Model;
