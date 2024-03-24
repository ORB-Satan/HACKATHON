document.addEventListener("DOMContentLoaded", function() {
    // Set the progress values
    setProgress("progress-bar-1", 30);
    setProgress("progress-bar-2", 50);
    setProgress("progress-bar-3", 80);
  });
  
  function setProgress(id, percentage) {
    const progressBar = document.getElementById(id);
    const innerBar = progressBar.querySelector(".inner");
    const number = progressBar.querySelector(".number");
  
    innerBar.style.width = percentage + "%";
    number.textContent = percentage + "%";
  }
  
/*
const categories = [];
const plants = [];
const plantingDates = [];

function addCategory() {
  const categoryInput = document.getElementById("category-input");
  const category = categoryInput.value.trim();
  if (category) {
    categories.push(category);
    renderCategories();
    categoryInput.value = "";
  }
}

function renderCategories() {
  const categoryList = document.getElementById("category-list");
  categoryList.innerHTML = "";
  categories.forEach(category => {
    const li = document.createElement("li");
    li.textContent = category;
    categoryList.appendChild(li);
  });
}

function addPlant() {
  const plantInput = document.getElementById("plant-input");
  const plant = plantInput.value.trim();
  const categorySelect = document.getElementById("category-select");
  const category = categorySelect.value;
  if (plant && category) {
    plants.push({ name: plant, category });
    renderPlants();
    plantInput.value = "";
  }
}

function renderPlants() {
  const plantList = document.getElementById("plant-list");
  plantList.innerHTML = "";
  plants.forEach(plant => {
    const li = document.createElement("li");
    li.textContent = `${plant.name} (${plant.category})`;
    plantList.appendChild(li);
  });
}

function setPlantingDate() {
  const plantingInput = document.getElementById("planting-input");
  const date = plantingInput.value.trim();
  if (isValidDate(date)) {
    plantingDates.push(date);
    renderPlantingDates();
    plantingInput.value = "";
  } else {
    alert("Invalid date format. Please use YYYY-MM-DD.");
  }
}

function isValidDate(dateString) {
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  return regex.test(dateString);
}

function renderPlantingDates() {
  const plantingList = document.getElementById("planting-list");
  plantingList.innerHTML = "";
  plantingDates.forEach(date => {
    const li = document.createElement("li");
    li.textContent = date;
    plantingList.appendChild(li);
  });
}

// Populate category select options
document.addEventListener("DOMContentLoaded", function() {
  const categorySelect = document.getElementById("category-select");
  categories.forEach(category => {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelect.appendChild(option);
  });
});

let date = new Date();
let year = date.getFullYear();
let Month = date.getMonth();

const day = document.querySelector(".calendar-dates");

const currdate = document
	.querySelector(".calendar-current-date");

const prenexIcons = document
	.querySelectorAll(".calendar-navigation span");

// Array of month names
const month = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];

let events = [];

// letiables to store event input fields and reminder list
let eventDateInput =
	document.getElementById("eventDate");
let eventTitleInput =
	document.getElementById("eventTitle");
let eventDescriptionInput =
	document.getElementById("eventDescription");
let reminderList =
	document.getElementById("reminderList");

// Counter to generate unique event IDs
let eventIdCounter = 1;

// Function to add events
function addEvent() {
	let date = eventDateInput.value;
	let title = eventTitleInput.value;
	let description = eventDescriptionInput.value;

	if (date && title) {
		// Create a unique event ID
		let eventId = eventIdCounter++;

		events.push(
			{
				id: eventId, date: date,
				title: title,
				description: description
			}
		);
		showCalendar(currentMonth, currentYear);
		eventDateInput.value = "";
		eventTitleInput.value = "";
		eventDescriptionInput.value = "";
		displayReminders();
	}
}

// Function to delete an event by ID
function deleteEvent(eventId) {
	// Find the index of the event with the given ID
	let eventIndex =
		events.findIndex((event) =>
			event.id === eventId);

	if (eventIndex !== -1) {
		// Remove the event from the events array
		events.splice(eventIndex, 1);
		showCalendar(currentMonth, currentYear);
		displayReminders();
	}
}

// Function to display reminders
function displayReminders() {
	reminderList.innerHTML = "";
	for (let i = 0; i < events.length; i++) {
		let event = events[i];
		let eventDate = new Date(event.date);
		if (eventDate.getMonth() ===
			currentMonth &&
			eventDate.getFullYear() ===
			currentYear) {
			let listItem = document.createElement("li");
			listItem.innerHTML =
				`<strong>${event.title}</strong> - 
			${event.description} on 
			${eventDate.toLocaleDateString()}`;

			// Add a delete button for each reminder item
			let deleteButton =
				document.createElement("button");
			deleteButton.className = "delete-event";
			deleteButton.textContent = "Delete";
			deleteButton.onclick = function () {
				deleteEvent(event.id);
			};

			listItem.appendChild(deleteButton);
			reminderList.appendChild(listItem);
		}
	}
}

// Function to generate a range of 
// years for the year select input
function generate_year_range(start, end) {
	let years = "";
	for (let year = start; year <= end; year++) {
		years += "<option value='" +
			year + "'>" + year + "</option>";
	}
	return years;
}

// Initialize date-related letiables
today = new Date();
currentMonth = today.getMonth();
currentYear = today.getFullYear();
selectYear = document.getElementById("year");
selectMonth = document.getElementById("month");

createYear = generate_year_range(1970, 2050);

document.getElementById("year").innerHTML = createYear;

let calendar = document.getElementById("calendar");

let months = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December"
];
let days = [
	"Sun", "Mon", "Tue", "Wed",
	"Thu", "Fri", "Sat"];

$dataHead = "<tr>";
for (dhead in days) {
	$dataHead += "<th data-days='" +
		days[dhead] + "'>" +
		days[dhead] + "</th>";
}
$dataHead += "</tr>";

document.getElementById("thead-month").innerHTML = $dataHead;

monthAndYear =
	document.getElementById("monthAndYear");
showCalendar(currentMonth, currentYear);

// Function to navigate to the next month
function next() {
	currentYear = currentMonth === 11 ?
		currentYear + 1 : currentYear;
	currentMonth = (currentMonth + 1) % 12;
	showCalendar(currentMonth, currentYear);
}

// Function to navigate to the previous month
function previous() {
	currentYear = currentMonth === 0 ?
		currentYear - 1 : currentYear;
	currentMonth = currentMonth === 0 ?
		11 : currentMonth - 1;
	showCalendar(currentMonth, currentYear);
}

// Function to jump to a specific month and year
function jump() {
	currentYear = parseInt(selectYear.value);
	currentMonth = parseInt(selectMonth.value);
	showCalendar(currentMonth, currentYear);
}

// Function to display the calendar
function showCalendar(month, year) {
	let firstDay = new Date(year, month, 1).getDay();
	tbl = document.getElementById("calendar-body");
	tbl.innerHTML = "";
	monthAndYear.innerHTML = months[month] + " " + year;
	selectYear.value = year;
	selectMonth.value = month;

	let date = 1;
	for (let i = 0; i < 6; i++) {
		let row = document.createElement("tr");
		for (let j = 0; j < 7; j++) {
			if (i === 0 && j < firstDay) {
				cell = document.createElement("td");
				cellText = document.createTextNode("");
				cell.appendChild(cellText);
				row.appendChild(cell);
			} else if (date > daysInMonth(month, year)) {
				break;
			} else {
				cell = document.createElement("td");
				cell.setAttribute("data-date", date);
				cell.setAttribute("data-month", month + 1);
				cell.setAttribute("data-year", year);
				cell.setAttribute("data-month_name", months[month]);
				cell.className = "date-picker";
				cell.innerHTML = "<span>" + date + "</span";

				if (
					date === today.getDate() &&
					year === today.getFullYear() &&
					month === today.getMonth()
				) {
					cell.className = "date-picker selected";
				}

				// Check if there are events on this date
				if (hasEventOnDate(date, month, year)) {
					cell.classList.add("event-marker");
					cell.appendChild(
						createEventTooltip(date, month, year)
				);
				}

				row.appendChild(cell);
				date++;
			}
		}
		tbl.appendChild(row);
	}

	displayReminders();
}

// Function to create an event tooltip
function createEventTooltip(date, month, year) {
	let tooltip = document.createElement("div");
	tooltip.className = "event-tooltip";
	let eventsOnDate = getEventsOnDate(date, month, year);
	for (let i = 0; i < eventsOnDate.length; i++) {
		let event = eventsOnDate[i];
		let eventDate = new Date(event.date);
		let eventText = `<strong>${event.title}</strong> - 
			${event.description} on 
			${eventDate.toLocaleDateString()}`;
		let eventElement = document.createElement("p");
		eventElement.innerHTML = eventText;
		tooltip.appendChild(eventElement);
	}
	return tooltip;
}

// Function to get events on a specific date
function getEventsOnDate(date, month, year) {
	return events.filter(function (event) {
		let eventDate = new Date(event.date);
		return (
			eventDate.getDate() === date &&
			eventDate.getMonth() === month &&
			eventDate.getFullYear() === year
		);
	});
}

// Function to check if there are events on a specific date
function hasEventOnDate(date, month, year) {
	return getEventsOnDate(date, month, year).length > 0;
}

// Function to get the number of days in a month
function daysInMonth(iMonth, iYear) {
	return 32 - new Date(iYear, iMonth, 32).getDate();
}

// Call the showCalendar function initially to display the calendar
showCalendar(currentMonth, currentYear);

/*Prediction page
document.addEventListener("DOMContentLoaded", function() {
  var progressBarsContainer = document.getElementById('progressBars');
  var startBtn = document.getElementById('startBtn');

  // Function to start the progress
  function startProgress() {
      var progressBarsData = [
          { name: 'Progress 1', value: 20 },
          { name: 'Progress 2', value: 40 },
          { name: 'Progress 3', value: 60 },
          { name: 'Progress 4', value: 80 },
          { name: 'Progress 5', value: 40 },
          { name: 'Progress 6', value: 70 }
      ];

      progressBarsData.forEach(function(item) {
          var progressBarWrapper = document.createElement('div');
          progressBarWrapper.classList.add('mb-3');

          var progressBarLabel = document.createElement('div');
          progressBarLabel.textContent = item.name;
          progressBarWrapper.appendChild(progressBarLabel);

          var progressBar = document.createElement('div');
          progressBar.classList.add('progress');
          progressBar.innerHTML = `
              <div class="progress-bar" role="progressbar" style="width: ${item.value}%" aria-valuenow="${item.value}" aria-valuemin="0" aria-valuemax="100">${item.value}%</div>
          `;
          progressBarWrapper.appendChild(progressBar);

          progressBarsContainer.appendChild(progressBarWrapper);
      });
  }

  // Event listener for the start button
  startBtn.addEventListener('click', function() {
      startProgress();
  });
});*/