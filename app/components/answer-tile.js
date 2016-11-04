import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

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
