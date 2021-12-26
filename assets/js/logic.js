
var dateDisplay = document.querySelector("#currentDay");
var currentDay = moment();
dateDisplay.textContent = currentDay.format("MMMM DD, YYYY");

var hours = [{ hour: "9 am", event: "", hourID: 9 }, { hour: "10 am", event: " ", hourID: 10 }, { hour: "11 am", event: "", hourID: 11 }, { hour: "12 pm", event: " ", hourID: 12 }, { hour: "1 pm", event: " ", hourID: 13 }, { hour: "2 pm", event: " ", hourID: 14 }, { hour: "3 pm", event: " ", hourID: 15 }, { hour: "4 pm", event: " ", hourID: 16 }, { hour: "5 pm", event: " ", hourID: 17 }];

var timeBlockEl = document.createElement("div");
timeBlockEl.classList = "time-block";
var timeBlockContainerEl = document.querySelector("#timeBlockContainer");
timeBlockContainerEl.appendChild(timeBlockEl);



var loadEvents = function () {
    if (localStorage.getItem("events")) {
        var loadedEvents = localStorage.getItem("events");
        hours = JSON.parse(loadedEvents);
    };

};

var createSchedule = function (arr) {

    
    for (var i = 0; i < hours.length; i++) {
        var timeRowEl = document.createElement("div");
        timeRowEl.classList = "row justify-content-center";
        timeRowEl.id = "row" + [i];
        timeBlockEl.appendChild(timeRowEl);

        var hourEl = document.createElement("div");
        hourEl.classList = "hour col-2 col-md-1";
        hourEl.textContent = hours[i].hour;
        var eventEl = document.createElement("div");
        eventEl.classList = "event col-8 ";
        eventEl.id = "event" + [i];
        eventEl.textContent = hours[i].event;
        var saveEl = document.createElement("button");
        saveEl.classList = "saveBtn col-2 col-md-1";
        saveEl.innerHTML = '<i class="fas fa-save"></i>';

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
};


$(timeBlockEl).on('click', '.event', function () {
    // get current text of p element
    var text = $(this)
        .text()
        .trim();
    console.log(text);
    // replace p element with a new textarea
    var textInput = $("<textarea>").val(text).addClass(" event col-8");
    //get index for this specific event
    var index = $(this).closest('.row').index();
    console.log(index);

    $(this).replaceWith(textInput);

    var currentHour = moment().hours();
    if (moment(hours[index].hourID).isSame(currentHour)) {
        textInput.addClass("event col-8 present")
    }
    else if (moment(hours[index].hourID).isBefore(currentHour)) {
        textInput.addClass("event col-8 past");
    }
    else if (moment(hours[index].hourID).isAfter(currentHour)) {
        textInput.addClass("event col-8 future");
    };

    textInput.trigger("focus");
});

$(timeBlockEl).on('click', '.saveBtn', function () {
    console.log('save btn clicked!!!');
    //get index for this specific event
    var index = $(this).closest('.row').index();
    console.log(index);

    //get current value of text area
    var textArea = $(this).prev();
    var text = textArea.val();
    console.log(textArea);
    console.log(text);

    //update correct event in array
    hours[index].event = text;
    localStorage.setItem('events', JSON.stringify(hours));

    //recreate div
    var newEvent = $("<div>")
        .addClass("event col-8")
        .text(text);

    //replace textarea with new div
    $(textArea).replaceWith(newEvent);
    var currentHour = moment().hours();
    if (moment(hours[index].hourID).isSame(currentHour)) {
        newEvent.addClass("event col-8 present")
    }
    else if (moment(hours[index].hourID).isBefore(currentHour)) {
        newEvent.addClass("event col-8 past");
    }
    else if (moment(hours[index].hourID).isAfter(currentHour)) {
        newEvent.addClass("event col-8 future");
    };
})

loadEvents();
createSchedule(hours);
