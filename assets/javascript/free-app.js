
var config = {
  apiKey: "AIzaSyDmlxzVgqsttBne_yPiYtqXR8MK3exXRLE",
  authDomain: "multiplayer-rps-9647f.firebaseapp.com",
  databaseURL: "https://multiplayer-rps-9647f.firebaseio.com",
  projectId: "multiplayer-rps-9647f",
  storageBucket: "multiplayer-rps-9647f.appspot.com",
  messagingSenderId: "1062129787281"
};
firebase.initializeApp(config);
var database = firebase.database();




$(document).ready(function () {







  $('select').formSelect();
  $('.modal').modal();
  var instance = M.Modal.getInstance($("#modal1"));
  var valInstance = M.Modal.getInstance($("#modal2"));
  // var goalInstance = M.FormSelect.getInstance($("#goal"));




  $('#submit-info').on('click', function () {

    
    var firstName = $('#first_name').val().trim();
    var lastName = $('#last_name').val().trim();
    var companyName = $('#company_name').val().trim();
    var website = $('#website').val().trim();
    var email = $('#email').val().trim();
    var phone = $('#icon_telephone').val().trim();
    var goal = $('#selection')[0].value;
    console.log($('#selection'));
    var description = $('#textarea1').val().trim();

    if (firstName.length > 1 && lastName.length > 1 && email.length > 1 && goal != "" && description != "" && companyName.length > 1) {
      var newApplicant = {

        firstName: firstName,
        lastName: lastName,
        companyName: companyName,
        website: website,
        email: email,
        phone: phone,
        goal: goal,
        description: description,
      }
  
      database.ref().push().set(newApplicant);
      clearForm();
      instance.open();
      toggleDivs();
      $("#apply-now").attr("disabled", true);
    } else {
      valInstance.open();
    }
  });

  function clearForm() {
    $('#first_name').val("");
    $('#last_name').val("");
    $('#company_name').val("");
    $('#website').val("");
    $('#email').val("");
    $('#icon-telephone').val("") ;
    $('#goal').val("");
    $('#textarea1').val("");
    };

    $('#apply-now').on('click', function () {
        toggleDivs();
    });

});



function toggleDivs() {
    $("#grid-container, #grid-container2").toggle();
}

function showthankYou() {

}







