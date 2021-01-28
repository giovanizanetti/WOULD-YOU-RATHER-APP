# Would You Rather Game Project

## [Check out the deployed version here!](https://zanetti-would-you-rather-game.netlify.app/)

## What this project is about

I am creating a Would you Rather Game as part of the Udacity's React Nanodegre, using ReactJS. In this project, I'm practising React CRUD operations and Redux architecture.

## Technologies used

- React.js
- Redux
- React-Redux
- React-Select

## Goals for this project:

- Practise: React hooks, Redux architecture, CRUD app, semantic GIT commit messages and PR's.
- Delivery Udacity assignment.
- Showcase a new working application on my portfolio.

## Instalation

- Run `git clone https://github.com/giovanizanetti/WOULD-YOU-RATHER-APP.git` from your machine.
- `cd` to project folder
- `run npm install` or `yarn install` to install all dependencies of the project.
- run `yarn start` or `npm start` to see the project on your browser.

## Create React App

This project was scaffolded using the create-react-app cli. For more instructions of how to run in your machine check it here👇👇👇

**[The standard create-react-app docs can be found in here](./REACT_README.md)**

## Requirements

- Is the application easy to install and start?
- Does the application include README with clear installation and launch instructions?
- Does the application have a way to log in and log out?
  - Does the application work correctly regardless of which person the user impersonates?
  - There should be a way for the user to impersonate/ log in as an existing user. (This could be as simple as having a login box that appears at the root of the application. The user could then select a name from the list of existing users.)
  - The application works correctly regardless of which user is selected.
  - The application allows the user to log out and log back in. The user should be logged in to submit new polling questions, vote, and view the leaderboard.
  - Once the user logs in, the home page is shown.
  - Whenever the user types something in the address bar, the user is asked to log in before the requested page is shown.
- Does information persist between page refreshes?
- Does the home page have the desired functionality?
  - The answered and unanswered polls are both available at the root.
  - The user can alternate between viewing answered and unanswered polls.
  - The unanswered questions are shown by default.
  - The name of the logged in user is visible on the page.
  - The user can navigate to the leaderboard.
  - The user can navigate to the form that allows the user to create a new poll.
- Are the polling questions listed in the correct category (Unanswered vs Answered), and do they have the desired functionality on the home page?
  - Each polling question resides in the correct category. For example, if a question hasn’t been answered by the current user, it should be in the “Unanswered” category.
  - A polling question links to details of that poll.
  - The polls in both categories are arranged from the most recently created (top) to the least recently created (bottom).
- Are the details of each poll displayed with all of the relevant information?
  - The details of the poll are available at questions/:question_id.
  - When a poll is clicked on the home page, the following is shown:
    -the text “Would You Rather”;
    - the picture of the user who posted the polling question;
    - and the two options.
  - For answered polls, each of the two options contains the following:
    - the text of the option;
    - the number of people who voted for that option;
    - the percentage of people who voted for that option.
  - The option selected by the logged in user should be clearly marked.
  - When the user is logged in, the details of the poll are shown. If the user is logged out, he/she is asked to log in before before being able to access the poll.
  - The application asks the user to sign in and shows a 404 page if that poll does not exist. (In other words, if a user creates a poll and then the same or another user tries to access that poll by its url, the user should be asked to sign in and then be shown a 404 page. Please keep in mind that new polls will not be accessible at their url because of the way the backend is set up in this application.)
- Does the voting mechanism work correctly?
  - Upon voting in a poll, all of the information of the answered poll is displayed.
  - The user’s response is recorded and is clearly visible on the poll details page.
  - When the user comes back to the home page, the polling question appears in the “Answered” column.
  - The voting mechanism works correctly, and the data on the leaderboard changes appropriately.
- Can users add new polls?
  - The form is available at/add.
  - The application shows the text “Would You Rather” and has a form for creating two options.
  - Upon submitting the form, a new poll is created and the user is taken to the home page.
  - The new polling question appears in the correct category on the home page.
- Does the leaderboard work correctly and have the desired functionality?
  - The Leaderboard is available at/leaderboard.
  - Each entry on the leaderboard contains the following:
    - the user’s name;
    - the user’s picture;
    - the number of questions the user asked; and
    - the number of questions the user answered.
  - Users are ordered in descending order based on the sum of the number of questions they’ve answered and the number of questions they’ve asked.
- Is the application navigable?
  - The app contains a navigation bar that is visible on all of the pages.
  - The user can navigate between the page for creating new polls, and the leaderboard page, and the home page without typing the address into the address bar.
- Does the application interact with the backend correctly?
  - The data that’s initially displayed is populated correctly from the backend.
  - Each user’s answer and each new poll is correctly recorded on the backend.
- Does the code run without errors? Is the code free of warnings that resulted from not following the best practices listed in the documentation, such as using key for list items? Is the code formatted properly?
  - The code runs without errors. There are no warnings that resulted from not following the best practices listed in the documentation, such as using key for list items. All code is functional and formatted properly.


## Features

- Login / Logout.
- Add new question.
- Vote.

#### Planing

- Draw mockups on Figma 👇👇👇
- Draw all views of the application.
- Break each view Into a Hierarchy of Components.
- Determine the data each component needs by drawing on top of the mockups.
- Determine which component each piece of data should live in.

Check the mockups on my [Figma canvas](https://www.figma.com/file/80lXGPjuSORn8Olf70IeQw/Would-You-Rather-App?node-id=137%3A98)

#### Process

- I always do one small step at the time.
- Test.
- Commit.
- Push to GitHub.

Usually, when I encounter a bug which is not related to the functionality I am working with, I take a note to tackle it later.
If I have any idea during the development process, I take a note and try to implement it later.

If I get stuck I always try to find the solution in one of the options:

- Documentation
- Google
- Stackoverflow
- Youtube / Udemy tutorials

## [Check out the deployed version here!](https://zanetti-would-you-rather-game.netlify.app/)
