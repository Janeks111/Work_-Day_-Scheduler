$(document).ready(function () {
  // Display current day using dayjs
  $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  // Function to color-code time blocks
  function updateHourlyBlocks() {
    var currentHour = dayjs().hour();

    $(".time-block").each(function () {
      var blockHour = parseInt($(this).attr("data-hour"));

      if (blockHour < currentHour) {
        $(this).removeClass("future present").addClass("past");
      } else if (blockHour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  function loadEvents() {
    $(".time-block").each(function () {
      var blockHour = $(this).attr("data-hour");
      var storedEvent = localStorage.getItem(blockHour);

      if (storedEvent !== null) {
        $(this).find("textarea").val(storedEvent);
      }
    });
  }
});
