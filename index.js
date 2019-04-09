var min_age = 21;

function underAge() {
    localStorage.setItem("off_age", 'false'); 
    $('#checkbox-value').text('Sorry you are underage!');
    window.open("https://www.gotmilk.com/");
}

function ofAge() {
    localStorage.setItem("off_age", 'true'); 
    $('#checkbox-value').text('Welcome, you are of age!');
    window.open("https://www.aarp.org/membership/");
}

$(document).ready(function(){
    var today = new Date();
    var todayMonth = today.getUTCMonth() +1;
    var todayDate = today.getUTCDate();
    var todayYear = today.getUTCFullYear();

    if(localStorage.getItem('off_age') === 'true' && localStorage.getItem('remember_me') === 'true') {
        ofAge();
    }

    $("#datepicker").datepicker({ 
        autoclose: true, 
        todayHighlight: true
    });

    $("#checkbox").on('change', function() {
      if ($(this).is(':checked')) {
        $(this).attr('value', 'true');
      } else {
        $(this).attr('value', 'false');
      }
    });

    $("form").submit(function(event ){
        var bday = $('#date').val().toString();
        var yearThen = parseInt(bday.substring(6,10));
        var monthThen = parseInt(bday.substring(0,2));
        var dayThen = parseInt(bday.substring(3,5));
        event.preventDefault();
        if($('#date').val() === ''){ return $('#checkbox-value').text('Please enter a date')};
        if( todayYear - yearThen < 21 ){
            underAge();
        } else if (todayYear - yearThen === 21 &&  todayMonth <  monthThen) {
            underAge();
        } else if (todayYear - yearThen === 21 &&  todayMonth === monthThen  && todayDate <  dayThen) {
            underAge();
        } else {
            ofAge();
        };
        localStorage.setItem("remember_me", $('#checkbox').val());
    });
});


  


