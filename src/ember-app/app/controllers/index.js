import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.vychislenie.caption'),
          title: i18n.t('forms.application.sitemap.vychislenie.title'),
          children: [{
            link: 'i-i-s-vychislenie-лес-l',
            caption: i18n.t('forms.application.sitemap.vychislenie.i-i-s-vychislenie-лес-l.caption'),
            title: i18n.t('forms.application.sitemap.vychislenie.i-i-s-vychislenie-лес-l.title'),
            icon: 'building',
            children: null
          }, {
            link: 'i-i-s-vychislenie-зверь-l',
            caption: i18n.t('forms.application.sitemap.vychislenie.i-i-s-vychislenie-зверь-l.caption'),
            title: i18n.t('forms.application.sitemap.vychislenie.i-i-s-vychislenie-зверь-l.title'),
            icon: 'paperclip',
            children: null
          }]
        }
      ]
    };
  }),
})