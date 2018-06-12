function daysInMonth (month, year) {
    return new Date(year, month, 0).getDate();
}

function days_passed_in_year(dt) {
    var current = new Date(dt.getTime());
    var previous = new Date(dt.getFullYear(), 0, 1);
  
    return Math.ceil((current - previous + 1) / 86400000);
  }


function days_of_a_year(year) 
{
    
    return isLeapYear(year) ? 366 : 365;
}

function isLeapYear(year) {
    return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}

function second_past_in_day() {
    date = new Date();
    hour = date.getHours();
    minutes = date.getMinutes();
    seconds = date.getSeconds();

    return hour * 60 * 60 + minutes * 60 + seconds
}

function seconds_past_in_day_percent() {
    seconds_past = second_past_in_day();
    full_seconds = 24 * 3600;
    percent = Math.round( seconds_past / full_seconds * 100 ) + "%";

    return percent
}

var datenow = new Date();
var daysPast = datenow.getDate();
var days_past_percent_month = Math.round((daysPast / daysInMonth(datenow.getMonth(),datenow.getFullYear()) ) * 100,2) + "%";
var days_past_percent_year = Math.round( days_passed_in_year(datenow) / days_of_a_year(datenow.getFullYear()) * 100 ) + "%";
var second_past_percent_day = seconds_past_in_day_percent()

$( document ).ready(function() {
    var myVar = setInterval(function() {
        myTimer();
      }, 1000);
      
      function myTimer() {
        var d = new Date();
        document.getElementById("clock").innerHTML = d.toLocaleTimeString();
      }

    $('#month-percent').animate({
        width:days_past_percent_month},{complete:function() {
            //console.log('done');
            //$("#month-percent").html(days_past_percent_month);
        }}
    );

    $('#year-percent').animate({
        width:days_past_percent_year},{complete:function() {
            //$("#year-percent").html(days_past_percent_year);
        }}
    );

    $('#day-percent').animate({
        width:second_past_percent_day},{complete:function() {
            //$("#day-percent").html(seconds_past_in_day_percent());
        }
    });

    $("#month-percent").prop("Counter", 0).animate({
        Counter: days_past_percent_month
        
    }, {
        duration: 1200,
        easing: "swing",
        step: function(now) {
            $(this).html(Math.ceil(now) + "%")
        }
    })

    $("#year-percent").prop("Counter", 0).animate({
        Counter: days_past_percent_year
        
    }, {
        duration: 1200,
        easing: "swing",
        step: function(now) {
            $(this).html(Math.ceil(now) + "%")
        }
    })

    $("#day-percent").prop("Counter", 0).animate({
        Counter: second_past_percent_day
        
    }, {
        duration: 1200,
        easing: "swing",
        step: function(now) {
            $(this).html(Math.ceil(now) + "%")
        }
    })
    
});









