<figure><img src="./public/respondez-app.png" alt="The Respondez App" style="width: 60%; display: block; margin-left: auto; margin-right: auto;"/><figcaption style=" text-align: center;">Respondez App</figcaption></figure>

# About
- The Respondez App was named off of the popular expression "respondez s'il vous plait", or R.S.V.P. for short 
- I want to built this out of the desire for our Free Code Camp Ashburn Group so we can manage our events external from popular platforms such as Facebook or Meetup


## Features
- Log in and authenticate with your Github account
- Events, attendees, comments, attending list, and log in state persists in Firebase
- Create new events, edit, delete events (Events section)
- Add and remove RSVP's to different events (Events/Attendees section)
- Create and delete comments under events (Events/Comments section)
- Save a user's events attending list for each user that login (My Events section)
- View user github description on hover over rsvp photo
- View date and time comment was posted on hover

## Technologies
- [Create-React-App](https://github.com/facebookincubator/create-react-app)
- [Firebase](https://firebase.google.com/) for database storage
- [Immutability-Helper](https://github.com/kolodny/immutability-helper) for deep state manipulation
- [Github Pages](https://github.com/tschaub/gh-pages) for app deployment 
- See package.json for other technologies

# To run this project
## Method 1: Visit deployed website
1. Visit https://timh1203.github.io/respondez-app/ to view deployed app

## Method 2: Download repo to view on local computer
1. Have NPM and NodeJS installed on your computer
2. Copy the URL address this repo: https://github.com/timh1203/respondez-app.git
3. Open the terminal and go to the directory of choice, then run `git clone https://github.com/timh1203/respondez-app.git` 
3. Run `npm install` to install all the depedencies of the app
4. Copy `src/helpers/baseExample.js` to `src/helpers.base.js` and fill in your Firebase config details
5. Run `npm start` to start the server
6. The app should auto-load with Create React App, otherwise, navigate to `localhost:3000` on your browser

==========
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).