// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require_tree .
//= require ./masonry.min.js

//= require foundation

// $(document).foundation();

$(function(){ $(document).foundation(); });

$(document).ready(function() {
  $('.form-toggle').click(function(){
     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
  });

  $(function() {
    $('.directUpload').find("input:file").each(function(i, elem) {
      var fileInput    = $(elem);
      var form         = $(fileInput.parents('form:first'));
      var submitButton = form.find('input[type="submit"]');
      var progressBar  = $("<div class='bar'></div>");
      var barContainer = $("<div class='progress'></div>").append(progressBar);
      fileInput.after(barContainer);
      fileInput.fileupload({
        fileInput:       fileInput,
        url:             form.data('url'),
        type:            'POST',
        autoUpload:       true,
        formData:         form.data('form-data'),
        paramName:        'file', // S3 does not like nested name fields i.e. name="user[avatar_url]"
        dataType:         'XML',  // S3 returns XML if success_action_status is set to 201
        replaceFileInput: false
      });
    });
  });

})
