import Ember from 'ember';

export default Ember.Component.extend({

  actions: {

    upVote(answer) {
      var params = {
        vote: this.get('vote') + 1
      };
      console.log(params.vote);
      this.sendAction('upVote', answer, params);
    },

    downVote() {
      this.set('vote' - 1);
    }


//End
  }
});
