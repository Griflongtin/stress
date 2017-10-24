$(function() {
  $("form").submit(function(event) {
    event.preventDefault();
    var stressLevelHigh = 0;
    var stressLevelLow = 0;
    $("input:checkbox[name=stress-up]:checked").each(function() {
      var stressUp = parseInt($(this).val());
      stressLevelHigh += stressUp;
    });
    $("input:checkbox[name=stress-down]:checked").each(function() {
      var stressDown = parseInt($(this).val());
      stressLevelLow += stressDown;
    });
    var stress = stressLevelHigh - stressLevelLow;
    $("#output").append("<p>" + stress + "</p>");
  });
});
