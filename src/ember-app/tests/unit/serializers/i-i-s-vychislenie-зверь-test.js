import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-vychislenie-зверь', 'Unit | Serializer | i-i-s-vychislenie-зверь', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-vychislenie-зверь',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'model:i-i-s-vychislenie-зверь',
    'model:i-i-s-vychislenie-лес',
    'model:i-i-s-vychislenie-страна',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
