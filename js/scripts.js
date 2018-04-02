function Place(landmarks, timeOfYear, notes) {
  this.landMarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

Place.prototype.visit = function() {
  return this.landMarks + " " + this.timeOfYear + " " + this.notes;
}

var Portland = new Place("Rose Garden", "Summer", "What a beautiful place!");

var Bend = new Place("Smith Rock", "Fall", "Wow, amazing!")

var Seattle = new Place("Space Needle", "Summer", "Wow it's still raining!");

var Salem = new Place("Fair Grounds", "Spring", "Look at all the baby animals!");

// FRONT END //
$(document).ready(function(){
  $("#form1").submit(function(event){
    event.preventDefault();

    var inputPlace = $("#place").val();

    if (inputPlace === "1") {
      return $("#result").text(Portland.visit());
    } else if (inputPlace === "2") {
      return $("#result").text(Bend.visit());
    } else if (inputPlace === "3") {
      return $("#result").text(Seattle.visit());
    } else {
      return $("#result").text(Salem.visit());
    }
  });
});
