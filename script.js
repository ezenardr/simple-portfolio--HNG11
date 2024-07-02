'use strict';

const dayEl = document.querySelector('.day');
const timeEl = document.querySelector('.time');

const currDate = new Date();
const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];
const day = currDate.getDate();
dayEl.textContent = weekday[day];

let hours = currDate.getUTCHours();
const minutes = currDate.getUTCMinutes();
const seconds = currDate.getUTCSeconds();
timeEl.textContent = `${hours} : ${minutes}`;
