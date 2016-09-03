'use strict';

//3/ W index.js uruchamiam całość.
let $activities = document.querySelector('.activities');
$activities.innerHTML = '';
View.renderActivities(Model, $activities);
