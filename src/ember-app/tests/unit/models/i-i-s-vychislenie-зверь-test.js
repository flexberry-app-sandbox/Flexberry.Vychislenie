import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vychislenie-зверь', 'Unit | Model | i-i-s-vychislenie-зверь', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-vychislenie-зверь',
    'model:i-i-s-vychislenie-лес',
    'model:i-i-s-vychislenie-страна',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
