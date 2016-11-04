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
        response: this.get('response'),
        question: this.get('question'),
        vote: 0,
        time: new Date().getTime()
      };
      this.set('genius', '');
      this.set('response', '');
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }


//End
  }
});
