
function calculateAndDisplayAge() {
   // Get the birth date value from the input field
   const birthDateInput = document.getElementById('birthDate');
   const birthDateValue = birthDateInput.value;
 
   // Check if a valid date is entered
   if (!birthDateValue) {
       alert('Please enter a valid birth date.');
       return;
   }
 
   // Calculate the age
   const age = calculateAge(birthDateValue);
 
   // Display the result
   document.getElementById('years').innerHTML = `Years: ${age.years}`;
   document.getElementById('months').innerHTML = `Months: ${age.months}`;
   document.getElementById('days').innerHTML = `Days: ${age.days}`;
   document.getElementById('hours').innerHTML = `Hours: ${age.hours}`;
   document.getElementById('minutes').innerHTML = `Minutes: ${age.minutes}`;
   document.getElementById('seconds').innerHTML = `Seconds: ${age.seconds}`;
 }
 
 function calculateAge(birthDate) {
   // Parse the birth date string to a Date object
   const birthDateObject = new Date(birthDate);
 
   // Check if the parsed date is valid
   if (isNaN(birthDateObject.getTime())) {
       return null;
   }
 
   // Get the current date and time
   const currentDate = new Date();
 
   // Calculate the difference in milliseconds between the current date and birth date
   const timeDifference = currentDate - birthDateObject;
 
   // Calculate years, months, days, hours, minutes, and seconds
   const millisecondsInSecond = 1000;
   const millisecondsInMinute = 60 * millisecondsInSecond;
   const millisecondsInHour = 60 * millisecondsInMinute;
   const millisecondsInDay = 24 * millisecondsInHour;
   const millisecondsInMonth = 30 * millisecondsInDay; // Approximation, not precise
 
   const years = Math.floor(timeDifference / (365.25 * millisecondsInDay));
   const months = Math.floor(timeDifference / millisecondsInMonth);
   const days = Math.floor((timeDifference % millisecondsInMonth) / millisecondsInDay);
   const hours = Math.floor((timeDifference % millisecondsInDay) / millisecondsInHour);
   const minutes = Math.floor((timeDifference % millisecondsInHour) / millisecondsInMinute);
   const seconds = Math.floor((timeDifference % millisecondsInMinute) / millisecondsInSecond);
 
   // Return the result
   return {
       years,
       months,
       days,
       hours,
       minutes,
       seconds
   };
 }
 
 function toggleDarkMode() {
   const body = document.body;
   body.classList.toggle('dark-mode');
 }
 
 // The rest of your existing JavaScript code
 