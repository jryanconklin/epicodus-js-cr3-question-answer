import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    delete(question) {
      if(confirm('For Realsies?')) {
        this.sendAction('destroyQuestion', question);
      }
    }

//End
  }
});
