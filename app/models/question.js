import DS from 'ember-data';

export default DS.Model.extend({
  query: DS.attr(), //Question Content
  author: DS.attr(), //Question Writer
  notes: DS.attr(), //Notes on Question
  answer: DS.hasMany('answer', { async: true }) //Data Link to Answers
});
