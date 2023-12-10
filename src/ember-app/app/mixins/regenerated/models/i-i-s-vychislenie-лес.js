import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  названиеЛ: DS.attr('string'),
  страна: DS.hasMany('i-i-s-vychislenie-страна', { inverse: 'лес', async: false })
});

export let ValidationRules = {
  названиеЛ: {
    descriptionKey: 'models.i-i-s-vychislenie-лес.validations.названиеЛ.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  страна: {
    descriptionKey: 'models.i-i-s-vychislenie-лес.validations.страна.__caption__',
    validators: [
      validator('ds-error'),
      validator('has-many'),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ЛесE', 'i-i-s-vychislenie-лес', {
    названиеЛ: attr('Название Л', { index: 0 })
  });

  modelClass.defineProjection('ЛесL', 'i-i-s-vychislenie-лес', {
    названиеЛ: attr('Название Л', { index: 0 })
  });
};
