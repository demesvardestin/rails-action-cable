// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require toastr
//= require cable
//= require_self
//= require_tree ./channels

$('#text-value').on('keyup', function() {
    document.getElementById('send').removeAttribute('disabled');
});

// WE WONT RUN THIS SCRIPT FOR NOW
// const textInput = document.getElementById('text-value');
// $('#text-value').on('keyup', e => {
//     var value = textInput.value;
//     if (value.length > 0) {
//         document.getElementById('send').removeAttribute('disabled');
//     } else {
//         document.getElementById('send').setAttribute('disabled', 'true');
//     }
// });