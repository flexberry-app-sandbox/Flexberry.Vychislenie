import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  названиеС: DS.attr('string'),
  лес: DS.belongsTo('i-i-s-vychislenie-лес', { inverse: 'страна', async: false })
});

export let ValidationRules = {
  названиеС: {
    descriptionKey: 'models.i-i-s-vychislenie-страна.validations.названиеС.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  лес: {
    descriptionKey: 'models.i-i-s-vychislenie-страна.validations.лес.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('СтранаE', 'i-i-s-vychislenie-страна', {
    названиеС: attr('Название С', { index: 0 }),
    лес: belongsTo('i-i-s-vychislenie-лес', '', {
      названиеЛ: attr('', { index: 1 })
    }, { index: -1, hidden: true })
  });

  modelClass.defineProjection('СтранаL', 'i-i-s-vychislenie-страна', {
    названиеС: attr('Название С', { index: 0 })
  });
};
