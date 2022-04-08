
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar

var date = "Today's Date: " + moment().format("MMMM Do YYYY");
$("#currentDay").html(date);

// WHEN I click the save button for that timeblock
// THEN the text for that event is saved in local storage

$(document).ready(function bird() {
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        localStorage.setItem(time, text);
    })
    function theTime() {
        var timeNow = moment().hour();
        $(".time-block").each(function () {
            var theHour = parseInt($(".time-block").attr("id").split("its")[1]);

// WHEN I view the timeblocks for that day
// THEN each timeblock is color coded to indicate whether it is in the past, present, or future
            if (theHour < timeNow) {
                $(".time-block").addClass("past");
            }
            else if (theHour === timeNow) {
                $(".time-block").addClass("present");
            }
            else {
                $(".time-block").addClass("future");
            }
        })
    }
// WHEN I refresh the page
// THEN the saved events persist
    $("#its9 .description").val(localStorage.getItem("its9"));
    $("#its10 .description").val(localStorage.getItem("its10"));
    $("#its11 .description").val(localStorage.getItem("its11"));
    $("#its12 .description").val(localStorage.getItem("its12"));
    $("#its13 .description").val(localStorage.getItem("its13"));
    $("#its14 .description").val(localStorage.getItem("its14"));
    $("#its15 .description").val(localStorage.getItem("its15"));
    $("#its16 .description").val(localStorage.getItem("its16"));
    $("#its17 .description").val(localStorage.getItem("its17"));
    theTime();
})



