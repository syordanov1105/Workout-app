# Workout app

Workout plann application built for learning purposes using Node.js, Express.js, MongoDB and React JS

## App structure


### Frontend
The frontend is built using React and styled using CSS.

The app:
- Login / Signup form
- Add workout form
- Workout details field
- Logout

When is authenticated the user can add and delete new workouts (in the API there is a PATCH for updating, but not implemented in the UI)

### Backend
For the backend I created a REST API using Node JS and Express JS to handle requests for adding new workouts and delete the existing ones. The database I chose to use is MongoDB.

## Installation

In order to run this project locally you need to have Node JS and MongoDB installed on your machine.

After you clone the repository run:

```bash
  npm install
  npm start
```

I have installed `concurrently` and `nodemon` as development dependancies and with only one command both the backend and frontend will run
