import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr(),
  genius: DS.attr(),
  questions: DS.belongsTo('question', { async: true })
});
