import Ember from 'ember';

export default Ember.Component.extend({
  newQuestionForm: false,

  actions: {
    showQuestionForm() {
      this.set('newQuestionForm', true);
    },

    createQuestion() {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes'),
        created_at: new Date()
      }
      this.set("newQuestionForm", false);
      this.sendAction('createQuestion', params);
    }
  }
});
