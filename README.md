Week 5 Homework with JQuery  - Work Day Scheduler
Psuedo code here:
1. [x] Set up HTML to support hourly blocks using CSS from 8-5
2. [X] Separate columns and rows to support time, input, save button
       (hour 2, description input 10, button 2)
3. [x] Set up save on-click button in HTML
4. [ ] Set up basic JS and define variables - elaborate here
5. [ ] Display correct date at top of the page (static scroll - nice to have)  
        (moment.js needed for this)
        Must add year, month, days, and current time
6.  [ ] Set up each month/day (expect to find prepackaged help in
        moment.js or someplace) Allow user to select a day of their choice.
7.  [ ] Set-up local storage to contain input (may need to move down?)
8.  [ ] Not sure what hover coding is needed but need to explore
9.  [ ] Provide user input on-click to accept data for each time-block
10. [ ] Use CSS to activate past, present, future color coding


Instructions for the project below.
# 05 Third-Party APIs: Work Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

You'll need to use the [Moment.js](https://momentjs.com/) library to work with date and time. Be sure to read the documentation carefully and concentrate on using Moment.js in the browser.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

The following animation demonstrates the application functionality:

![day planner demo](./Assets/05-third-party-apis-homework-demo.gif)

## Review

You are required to submit the following for review:

* The URL of the deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2019 Trilogy Education Services, a 2U, Inc. brand. All Rights Reserved.
