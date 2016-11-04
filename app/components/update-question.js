import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestionForm: false,

  actions: {
    updateQuestionForm() {
      this.set('updateQuestionForm', true);
    },

    //From update-question.hbs
    update(question) {
      var params = {
        author: this.get('author'),
        query: this.get('query'),
        notes: this.get('notes')
      };
      this.set('updateQuestionForm', false);
      this.sendAction('update', question, params);
    }


//End
  }
});
