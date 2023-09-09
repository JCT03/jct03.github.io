$(document).ready(function() {
    $.ajax({
    dataType: "json",
    url: "https://api.open-meteo.com/v1/forecast?latitude=35.0995&longitude=-92.4407&daily=temperature_2m_max,temperature_2m_min,precipitation_probability_max&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1",
    success: function(results) {
        var date = "";
        console.log(results["daily"]["time"]);
        month = String(results["daily"]["time"]).substring(5,7);
        if (month == "01") {
            date += "January";
        }
        else if (month == "02") {
            date += "February";
        }
        else if (month == "03") {
            date += "March";
        }
        else if (month == "04") {
            date += "April";
        }
        else if (month == "05") {
            date += "May";
        }
        else if (month == "06") {
            date += "June";
        }
        else if (month == "07") {
            date += "July";
        }
        else if (month == "08") {
            date += "August";
        }
        else if (month == "09") {
            date += "September";
        }
        else if (month == "10") {
            date += "October";
        }
        else if (month == "11") {
            date += "November";
        }
        else if (month == "12") {
            date += "December";
        }
        date += " " + String(results["daily"]["time"]).substring(8) + ", "+ String(results["daily"]["time"]).substring(0,4);
        $('#para').text(date);
    },
    error: function(xhr,status,error) {
        console.log(error);
        }
    });
});