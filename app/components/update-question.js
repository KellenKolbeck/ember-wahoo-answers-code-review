import Ember from 'ember';

export default Ember.Component.extend({
  showUpdateForm: false,

  actions: {
    showUpdateForm: function() {
      this.set('showUpdateForm', true);
    },

    updateQuestion: function(question) {
      var params = {
        title: this.get('title'),
        author: this.get('author'),
        notes: this.get('notes')
      }
      this.set("showUpdateForm", false);
      this.sendAction('updateQuestion', question, params);
    }
  }
});
