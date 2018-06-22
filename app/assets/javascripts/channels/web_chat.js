App.web_chat = App.cable.subscriptions.create("WebChatChannel", {
  connected: function() {
    // Called when the subscription is ready for use on the server
  },

  disconnected: function() {
    // Called when the subscription has been terminated by the server
  },

  received: function(data) {
    // Called when there's incoming data on the websocket for this channel
  }
});

App.web_chat = App.cable.subscriptions.create('WebChatChannel', {  
    received: function(data) {
        return $('#messageList').append(this.renderMessage(data));
    },

    renderMessage: function(data) {
        return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
    }
});