# Full Stack Budgeting App
Budgtr is an application where people can log their financial transactions, View, Delete, Track, Update, etc. The App has plenty of rooom to grow for functionality and esthetics.

## Current Live Use

The Budgtr with full functionality can be accessed at:

https://main--poetic-malabi-4e2adf.netlify.app/

The server can be accessed at:

https://budget-server-9diy.onrender.com/

If the server is not used for a while, and you try to access the App, the server at that time may be down, go to server website to "refresh", then back to App to see data populate.

## GitHub Repositories

FrontEnd: https://github.com/jorammercado/budgetA

BackEnd: https://github.com/jorammercado/budgetS

## Native deployment to own computer

If you want to run the Application on you local machine, fork and clone both Gitbut repositories as children of the same parent directory. You would need to change the .env file in the REACT app

from: VITE_BASE_URL=https://budget-server-9diy.onrender.com

to this:
VITE_BASE_URL=http://localhost:8080

then

React app run command: npm run dev

Server run command: node server.js (or nodemon server.js)

Then App should be running on you local machine with both front and back ends.

## Trello used
https://trello.com/b/SxaUDOVG/budget-app

