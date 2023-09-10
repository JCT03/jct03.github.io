var joke = "No joke today :("
var activity = "No activity today :("
var advice = "No advice today :("
var fact = "No fact today :("
$(document).ready(function() {
    $.ajax({
    dataType: "json",
    url: "https://api.open-meteo.com/v1/forecast?latitude=35.0995&longitude=-92.4407&daily=temperature_2m_max,temperature_2m_min,weathercode&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FChicago&forecast_days=1",
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
        $('#date').text(date);
        var report = "Today you can expect ";
        var code = results["daily"]["weathercode"];
        if (code == 0) {
            report += "clear skies";
            $('#weatherImage').attr("src", "images/clear.jpg");
        }
        else if (code == 1) {
            report += "mostly clear skies";
            $('#weatherImage').attr("src", "images/mostlyClear.jpg");
        }
        else if (code == 2) {
            report += "partly cloudy skies";
            $('#weatherImage').attr("src", "images/partlyCloudy.jpg");
        }
        else if (code == 3) {
            report += "overcast skies";
            $('#weatherImage').attr("src", "images/overcast.jpg");
        }
        else if (code == 45) {
            report += "foggy conditions";
            $('#weatherImage').attr("src", "images/fog.jpg");
        }
        else if (code == 48) {
            report += "foggy conditions";
            $('#weatherImage').attr("src", "images/fog.jpg");
        }
        else if (code == 51) {
            report += "a light drizzle";
            $('#weatherImage').attr("src", "images/drizzle.jpg");
        }
        else if (code == 53) {
            report += "a moderate drizzle";
            $('#weatherImage').attr("src", "images/drizzle.jpg");
        }
        else if (code == 55) {
            report += "a dense drizzle";
            $('#weatherImage').attr("src", "images/drizzle.jpg");
        }
        else if (code == 56) {
            report += "a light, freezing drizzle";
            $('#weatherImage').attr("src", "images/freezingDrizzle.jpg");
        }
        else if (code == 57) {
            report += "a dense, freezing drizzle";
            $('#weatherImage').attr("src", "images/freezingDrizzle.jpg");
        }
        else if (code == 61) {
            report += "slight rain";
            $('#weatherImage').attr("src", "images/rain.jpg");
        }
        else if (code == 63) {
            report += "moderate rain";
            $('#weatherImage').attr("src", "images/rain.jpg");
        }
        else if (code == 65) {
            report += "heavy rain";
            $('#weatherImage').attr("src", "images/rain.jpg");
        }
        else if (code == 66) {
            report += "light, freezing rain";
            $('#weatherImage').attr("src", "images/freezingRain.jpg");
        }
        else if (code == 67) {
            report += "heavy, freezing rain";
            $('#weatherImage').attr("src", "images/freezingRain.jpg");
        }
        else if (code == 71) {
            report += "slight snow";
            $('#weatherImage').attr("src", "images/snow.jpg");
        }
        else if (code == 73) {
            report += "moderate snow";
            $('#weatherImage').attr("src", "images/snow.jpg");
        }
        else if (code == 75) {
            report += "heavy snow";
            $('#weatherImage').attr("src", "images/snow.jpg");
        }
        else if (code == 77) {
            report += "snow grains";
            $('#weatherImage').attr("src", "images/snow.jpg");
        }
        else if (code == 80) {
            report += "slight rain showers";
            $('#weatherImage').attr("src", "images/rain.jpg");
        }
        else if (code == 81) {
            report += "moderate rain showers";
            $('#weatherImage').attr("src", "images/rain.jpg");
        }
        else if (code == 82) {
            report += "violent rain showers";
            $('#weatherImage').attr("src", "images/rain.jpg");
        }
        else if (code == 85) {
            report += "slight snow showers";
            $('#weatherImage').attr("src", "images/snow.jpg");
        }
        else if (code == 86) {
            report += "heavy snow showers";
            $('#weatherImage').attr("src", "images/snow.jpg");
        }
        else if (code == 95) {
            report += "thunderstorms";
            $('#weatherImage').attr("src", "images/thunderstorms.jpg");
        }
        else if (code == 96) {
            report += "thunderstorms with slight hail";
            $('#weatherImage').attr("src", "images/thunderstorms.jpg");
        }
        else if (code == 99) {
            report += "thunderstorms with heavy hail";
            $('#weatherImage').attr("src", "images/thunderstorms.jpg");
        }
        else {
            report += "unknown conditions";
        }
        report+= ", with a high of " + results["daily"]["temperature_2m_max"] + "°F and a low of " + results["daily"]["temperature_2m_min"] + "°F.";
        $('#report').text(report);
    },
    error: function(xhr,status,error) {
        console.log(error);
    }
    });
    $.ajax({
        dataType: "json",
        url: "https://icanhazdadjoke.com/",
        success: function(results) {
            $('#sectionHeader').text("Joke of the Day");
            $('#sectionContent').text(results["joke"]);
            joke = results["joke"];
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
    });
    $.ajax({
        dataType: "json",
        url: "https://www.boredapi.com/api/activity/",
        success: function(results) {
            activity = results["activity"];
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
    });
    $.ajax({
        dataType: "json",
        url: "https://uselessfacts.jsph.pl/api/v2/facts/today",
        success: function(results) {
            fact = results["text"];
            
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
    });
    $.ajax({
        dataType: "json",
        url: "https://api.adviceslip.com/advice",
        success: function(results) {
            advice = results["slip"]["advice"];
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
    });
    $.ajax({
        dataType: "json",
        url: "https://random.dog/woof.json",
        success: function(results) {
            $('#dogImage').attr("src",results["url"])
        },
        error: function(xhr,status,error) {
            console.log(error);
        }
    });
    $('#button1').click(function() {
        $('#sectionHeader').text("Joke of the Day");
        $('#sectionContent').text(joke);
    });
    $('#button2').click(function() {
        $('#sectionHeader').text("Activity of the Day");
        $('#sectionContent').text(activity);
    });
    $('#button3').click(function() {
        $('#sectionHeader').text("Fact of the Day");
        $('#sectionContent').text(fact);
    });
    $('#button4').click(function() {
        $('#sectionHeader').text("Advice of the Day");
        $('#sectionContent').text(advice);
    });
});