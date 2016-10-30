import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,

  actions: {
    answerFormShow() {
      this.set('addNewAnswer', true);
    },

    saveAnswer() {
      var params = {
        genius: this.get('genius'),
        response: this.get('response')
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }


//End
  }
});
