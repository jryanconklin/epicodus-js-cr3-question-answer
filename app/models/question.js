import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(), //Question Writer
  query: DS.attr(), //Question Content
  notes: DS.attr(), //Notes on Question
  answer: DS.hasMany('answer', { async: true }) //Data Link to Answers
});
