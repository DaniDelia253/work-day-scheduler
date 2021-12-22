//✅current date is displayed at the top of the calendar

//✅page contains time blocks for hours 9 am - 5 pm

// time blocks are color coded to show whether they are in the past, present, or future

//click a time block allows me to enter an event & click save button saves the event

//save button saves content to local storage

//refresh the page, tasks persist bc they load from local storage

var dateDisplay = document.querySelector("#currentDay");
var currentDay = moment();

dateDisplay.textContent = currentDay.format("MMMM DD, YYYY");


var timeBlockEl = document.createElement("div");
timeBlockEl.classList="time-block";
var timeBlockContainerEl = document.querySelector("#timeBlockContainer");
timeBlockContainerEl.appendChild(timeBlockEl);

var hours = [
    { hour: "9 am", event:" ", hourID: 9}, { hour: "10 am", event:" ", hourID: 10}, { hour: "11 am", event:" " , hourID: 11}, { hour: "12 pm", event:" ", hourID: 12 }, { hour: "1 pm", event:" ", hourID: 1}, { hour: "2 pm", event:" ", hourID: 2}, { hour: "3 pm", event:" ", hourID: 3}, { hour: "4 pm", event:" ", hourID: 4}, { hour: "5 pm", event:" ", hourID: 5} ];

for (var i = 0; i < hours.length; i++) {
    var timeRowEl = document.createElement("div");
    timeRowEl.classList = "row justify-content-center";
    timeRowEl.id = "row" + [i];
    timeBlockEl.appendChild(timeRowEl);

    var hourEl = document.createElement("div");
    hourEl.classList="hour col-1";
    hourEl.textContent = hours[i].hour;
    var eventEl = document.createElement("div");
    eventEl.classList="event col-8";
    eventEl.id = "event"+[i];
    eventEl.textContent="this is the event";
    var saveEl = document.createElement("button");
    saveEl.classList="saveBtn col-1";
    saveEl.innerHTML= '<i class="fas fa-save"></i>';

    timeRowEl.appendChild(hourEl);
    timeRowEl.appendChild(eventEl);
    timeRowEl.appendChild(saveEl);
    
    var currentHour = moment().hours();
    if (moment(hours[i].hourID).isSame(currentHour)) {
        eventEl.classList = "event col-8 present"
    }
    else if (moment(hours[i].hourID).isBefore(currentHour)) {
        eventEl.classList = "event col-8 past"
    }
    else if (moment(hours[i].hourID).isAfter(currentHour)) {
        eventEl.classList = "event col-8 future"
    }

};
