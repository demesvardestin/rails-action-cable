//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require toastr
//= require cable
//= require_self
//= require_tree

this.App = {};

App.cable = ActionCable.createConsumer();  