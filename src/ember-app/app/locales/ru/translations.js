import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

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
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Vychislenie',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Vychislenie',
          title: 'Vychislenie'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
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
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-vychislenie-зверь-l': IISVychislenieЗверьLForm,
    'i-i-s-vychislenie-лес-l': IISVychislenieЛесLForm,
    'i-i-s-vychislenie-зверь-e': IISVychislenieЗверьEForm,
    'i-i-s-vychislenie-лес-e': IISVychislenieЛесEForm
  },

});

export default translations;
