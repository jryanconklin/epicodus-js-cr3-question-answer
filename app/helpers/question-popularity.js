import Ember from 'ember';

export function questionPopularity(params) {
  var question = params[0];

  if (question.get('answers').get('length') >= 1) {
    return Ember.String.htmlSafe('Answered');
  } else if (question.get('answers').get('length') < 1) {
    return Ember.String.htmlSafe('Unanswered');
  }
}

export default Ember.Helper.helper(questionPopularity);
