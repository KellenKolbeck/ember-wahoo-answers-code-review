import Ember from 'ember';

export default Ember.Component.extend({
  newAnswerForm: false,
  actions: {
    showAnswerForm: function() {
      this.set('newAnswerForm', true);
    },
    saveAnswer: function() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        body: this.get('body'),
        question: this.get('question')
      };
      this.set('newAnswerForm', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
