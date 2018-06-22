App.web_chat = App.cable.subscriptions.create('WebChatChannel', {  
    connected: function() {
      console.log('Websocket connection starting...');
    },
    
    received: function(data) {
        return $('#messageList').append(this.renderMessage(data));
    },

    renderMessage: function(data) {
        return "<p> <b>" + data.user + ": </b>" + data.message + "</p>";
    },
    
    disconnected: function() {
      console.log('websocket connection ended.');
    }
});