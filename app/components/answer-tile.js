import Ember from 'ember';

export default Ember.Component.extend({

  questionSave: Ember.inject.service('question-save'),

  actions: {

    addSaved(item) {
      this.get('questionSave').add(item);
    },

    upVote(answer) {
      var params = {
        vote: answer.get('vote') + 1
      };
      this.sendAction('upVote', answer, params);
    },

    downVote(answer) {
      var params = {
        vote: answer.get('vote') - 1
      };
      this.sendAction('upVote', answer, params);
    },

    disableButton() {
      this.addClass('disabled');
    }

//End
  }
});
