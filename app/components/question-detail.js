import Ember from 'ember';

export default Ember.Component.extend({

  sortBy: ['vote:desc'],
  sortedVotes: Ember.computed.sort('question.answers', 'sortBy'),

  questionSave: Ember.inject.service('question-save'),

  actions: {

    addSaved(item) {
      this.get('questionSave').add(item);
    },

    delete(question) {
      if(confirm('For Realsies?')) {
        this.sendAction('destroyQuestion', question);
      }
    },

    update(question, params) {
      this.sendAction('update', question, params);
    },

    saveAnswer(params) {
      this.sendAction('saveAnswer', params);
    },

    upVote(answer, params) {
      this.sendAction('upVote', answer, params);
    },

    downVote(answer, params) {
      this.sendAction('downVote', answer, params);
    }


//End
  }
});
