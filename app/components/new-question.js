import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    saveQuestion() {
      var params = {
        author: this.get('author'),
        query: this.get('query'),
        notes: this.get('notes')
      };
      this.set('author', '');
      this.set('query', '');
      this.set('notes', '');
      this.sendAction('saveQuestion', params);
    }

//End
  }
});
