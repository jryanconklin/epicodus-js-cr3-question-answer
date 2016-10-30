import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
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
    }


//End
  }
});
