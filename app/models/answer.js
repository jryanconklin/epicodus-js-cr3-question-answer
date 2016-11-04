import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr(),
  genius: DS.attr(),
  vote: DS.attr('number'),
  time: DS.attr(),
  questions: DS.belongsTo('question', { async: true })
});
