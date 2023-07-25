function validate_login(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputEmail = document.getElementById("useremail");
if(!inputEmail.value.match(mailformat))
{
  alert("You have entered an invalid email address!");
  document.form1.text1.focus();
}
  var password = document.getElementById("password");
  if(password.value.length < 8) {
    alert("Length of the password must be greater than 7.");
  }
  var numbers = /[0-9]/g;
  if(!password.value.match(numbers)) {  
    alert("Password must contain a digit.");
  }
  var upperCaseLetters = /[A-Z]/g;
  if(!password.value.match(upperCaseLetters)) {  
    alert("Password must contain a uppercase letter.");
  }
  var lowerCaseLetters = /[a-z]/g;
  if(!password.value.match(lowerCaseLetters)) {  
    alert("Password must contain a lowercase letter.");
  }
}

function validate_donate(){
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var inputEmail = document.getElementById("UserEmail");
if(!inputEmail.value.match(mailformat))
{
  alert("You have entered an invalid email address!");
  document.form1.text1.focus();
}
}

$(document).ready(function () {
  $('#searchbar').focus()

  $('#donate-buttons').on('click', '.btn-blue', function (e) {
    e.preventDefault()
    $('.active').removeClass('active')
    $('#other-input').hide().siblings('#other').show()
    $(this).filter('.btn-blue').addClass('active')
    var value = $(this).data('impact')
    $(this)
      .closest('div')
      .find('p')
      .text('' + value)
    $('#other-input').find('input').val('')
  })

  $('.btn-green').on('click', function () {
    var dollar
    var input = $('#other-input').find('input').val()
    if (!input) {
      dollar = $('.active').data('dollars')
    } else if ($.trim(input) === '' || isNaN(input)) {
      // empty space leaves value = 'undefined'.
      // Have to fix $.trim(input) == '' above so that it works.
      console.log('Yes')
      dollar = 'Please enter a number.'
    } else {
      dollar = input
    }
    $('#price').text('' + dollar)
  })

  $('#other').on('click', function (e) {
    e.preventDefault()
    var buttons = $(this).parent('#donate-buttons')
    buttons.find('.active').removeClass('active')
    var other = $(this).hide().siblings('#other-input')
    other.show()
    other.find('input').focus()
    var pText = buttons.siblings('p')
    pText.text('Thank you!')
    var oValue = other.find('input')
    oValue.keyup(function () {
      if (oValue.val() > 50) {
        pText.text(
          'Thank you!' +
            " You're donation covers housing and counseling services for " +
            oValue.val() / 25 +
            ' people.'
        )
      } else {
        pText.text('Thank you!')
      }
    })
  })
})
