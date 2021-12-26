# Work Day Scheduler

## Description

This daily Planner application can be used to organize events for your busy work day! when you load the page, the current date is displayed on top. A box for each hour between 9am and 5pm is shown, color coded based on the current hour (hours that have passed ar grey, the current hour is red, and future hours are green). When the user clicks a time block, it becomes a text-box where the user can enter information for that hour. There is a save button to the right of each row that allows the user to save their input. Information saves to local storage, so that it persists through page reloads. 

[Link to the webpage of the deployed application](https://danidelia253.github.io/work-day-scheduler/)

[Project Repository](https://github.com/DaniDelia253/work-day-scheduler)

---

## Table of Contents

* [Usage](#usage)
* [Credits](#credits)

---

## Usage

Here is what the application looks like on page load:
![Workday Scheduler Landing Page](./assets/images/screenshot-page-load.png)

* When the user clicks inside a time block, the time block becomes a starts the timer and shows the first question.
    ![First question shown with timer ticking down from 75 secondos](./assets/images/screenshot-question.png)

* When a **correct answer** is submitted, the next question is shown and a green indicator shows on the bottom of the page for 2 seconds.
    ![Indicator for a correct response](./assets/images/screenshot-correct-answer.png)

* When an **incorrect answer** is submitted, the next question is shown and a red indicator shows on the bottom of the page for 2 seconds. Additionally, 10 seconds is deducted from the time and the timer flashes red for 2 seconds.
    ![Indicator for an incorrect response](./assets/images/screenshot-incorrect-answer.png)

* When the  timer reaches 0 or all the questions are answered, the quiz is over and the Score Form page loads to show the user their score and ask fro an input of user's initials to save score.
    ![Score Form Page](./assets/images/screenshot-score-form.png)

* High scores are saved in local storage and displayed on the High Score Page.
    ![High Score Page](./assets/images/screenshot-highscores-page.png)


---

## Credits

User Story and Mock Up provided by Trinity Education Sercice © 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

[Project Repository](https://github.com/DaniDelia253/code-quiz)


---