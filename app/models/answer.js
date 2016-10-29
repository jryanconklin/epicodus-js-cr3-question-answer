import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr('response'),
  genius: DS.attr('genius'),
  questions: DS.belongsTo('question', { async: true })
});
