import Ember from 'ember';

export default Ember.Route.extend({
  model(params)  {
  return this.store.findRecord('question', params.question_id);
  },

  actions: {
    updateQuestion: function(question, params) {
      Object.keys(params).forEach(function(key) {
        if(params[key] !== undefined) {
          question.set(key, params[key]);
        }
      });
      question.save();
      this.transitionTo('question');
    },

    deleteQuestion: function(question) {
      if (confirm('Delete Question?')) {
        question.destroyRecord();
        this.transitionTo('index');
      }
    },

    saveAnswer: function(params) {
      var newAnswer = this.store.createRecord('answer', params)
      newAnswer.save();
      params.question.save();
      this.transitionTo('question');
    }
  }
});
