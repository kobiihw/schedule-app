$(document).ready(function(){
  updateUi()

  $ (".saveBtn").on("click", function() {
    console.log("clicked")

    const text = $(this).siblings(".todo").val()
    // console.log("text: " + text)
    
    var time = $(this).siblings(".hour").text()
    // console.log("time: " + time)

    saveEvent(time, text)
  })
})


//saves one event to the local storage
function saveEvent(time, text){
  // console.log("saveEvent " + time +":" + text)
  localStorage.setItem(time, text)
}

// function getEvent(){
  
// }

// function updateEvent(event){
  
// }

// function deleteEvent(time, text){
//  localStorage.removeItem(time, text)
// }


//gets all events from local storage, iterates, adds them to UI
function updateUi(){

  var currentDate = new Date()
  var currentTime = currentDate.getHours()

  $( ".hour" ).each(function( index ) {
     var divHour = $.trim( $(this).text() )// will be ex...9am, 10am..etc
     console.log("time" + divHour)
     var time24 = get24HourTime(divHour)
     console.log("Time: " + time24 + "  -  CurrentTime: " + currentTime)
     if(currentTime == time24){
       $(this).siblings(".todo").css('color', 'blue');
     }else if(currentTime > time24){
      $(this).siblings(".todo").css('color', 'red');
     }else if(currentTime < time24){
      $(this).siblings(".todo").css('color', 'green');
     }
  });



  Object.keys(localStorage).forEach(function(key){
    const eventKey = key
    const eventVal = localStorage.getItem(key)

    $( "div:contains('"+ key +  "')" ).siblings(".todo").val(eventVal)

    console.log(eventKey+ ":"+ eventVal );
 });

}


function get24HourTime(time){
  switch(time) {
    case "12AM":
      return 0
    case "1AM":
      return 1
    case "2AM":
      return 2
    case "3AM":
      return 3
    case "4AM":
      return 4
    case "5AM":
      return 5
    case "6AM":
      return 6
    case "7AM":
      return 7
    case "8AM":
      return 8
    case "9AM":
      return 9
    case "10AM":
      return 10
    case "11AM":
      return 11
    case "12PM":
      return 12
    case "1PM":
      return 13
    case "2PM":
      return 14
    case "3PM":
      return 15
    case "4PM":
      return 16
    case "5PM":
      return 17
    case "6PM":
      return 18
    case "7PM":
      return 19
    case "8PM":
      return 20
    case "9PM":
      return 21
    case "10PM":
      return 22
    case "11PM":
      return 23
      
  
    default:
      return null
  }
}