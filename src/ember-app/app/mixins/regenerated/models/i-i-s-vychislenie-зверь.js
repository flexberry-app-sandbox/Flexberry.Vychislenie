import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  названиеЖ: DS.attr('string'),
  лес: DS.belongsTo('i-i-s-vychislenie-лес', { inverse: null, async: false })
});

export let ValidationRules = {
  названиеЖ: {
    descriptionKey: 'models.i-i-s-vychislenie-зверь.validations.названиеЖ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  лес: {
    descriptionKey: 'models.i-i-s-vychislenie-зверь.validations.лес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЗверьE', 'i-i-s-vychislenie-зверь', {
    названиеЖ: attr('Название Ж', { index: 0 })
  });

  modelClass.defineProjection('ЗверьL', 'i-i-s-vychislenie-зверь', {
    названиеЖ: attr('Название Ж', { index: 0 })
  });
};
