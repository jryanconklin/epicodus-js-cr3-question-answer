import Ember from 'ember';

export default Ember.Component.extend({

  questionSave: Ember.inject.service('question-save'),

  actions: {
    addSaved(item) {
      this.get('questionSave').add(item);
    },


  } // End Actions

}); // End Component
