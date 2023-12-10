import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISVychislenieЗверьLForm from './forms/i-i-s-vychislenie-зверь-l';
import IISVychislenieЛесLForm from './forms/i-i-s-vychislenie-лес-l';
import IISVychislenieЗверьEForm from './forms/i-i-s-vychislenie-зверь-e';
import IISVychislenieЛесEForm from './forms/i-i-s-vychislenie-лес-e';
import IISVychislenieЗверьModel from './models/i-i-s-vychislenie-зверь';
import IISVychislenieЛесModel from './models/i-i-s-vychislenie-лес';
import IISVychislenieСтранаModel from './models/i-i-s-vychislenie-страна';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-vychislenie-зверь': IISVychislenieЗверьModel,
    'i-i-s-vychislenie-лес': IISVychislenieЛесModel,
    'i-i-s-vychislenie-страна': IISVychislenieСтранаModel
  },

  'application-name': 'Vychislenie',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Vychislenie',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vychislenie',
          title: 'Vychislenie'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        vychislenie: {
          caption: 'Vychislenie',
          title: 'Vychislenie',
          'i-i-s-vychislenie-лес-l': {
            caption: 'Лес',
            title: ''
          },
          'i-i-s-vychislenie-зверь-l': {
            caption: 'Зверь',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-vychislenie-зверь-l': IISVychislenieЗверьLForm,
    'i-i-s-vychislenie-лес-l': IISVychislenieЛесLForm,
    'i-i-s-vychislenie-зверь-e': IISVychislenieЗверьEForm,
    'i-i-s-vychislenie-лес-e': IISVychislenieЛесEForm
  },

});

export default translations;
