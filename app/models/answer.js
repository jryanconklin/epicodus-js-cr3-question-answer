import DS from 'ember-data';

export default DS.Model.extend({
  response: DS.attr('response'), //Answer Content
  genius: DS.attr('genius'), //Responder
  question: DS.belongsTo('question', { async: true }) //Connection to Answer
});
