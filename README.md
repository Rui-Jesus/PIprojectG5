# PIprojectG5
Collaborative system

To run our programm you will need mongodb and npm.

Since our database is only localhost for now ,follow this commands:

First open a console and execute:

>C:\Users\DanielSilva>mongod

( don't close this console)

Then open another console and execute:

>C:\Users\DanielSilva>mongo

>use testdb 

>db.createCollection("test")

Create has many documents as you want following  this structure:

>db.testdb.insert({ username: "user2", password: "p2", personal_information: { firstname: "User", lastname: "Test", birthdate:"1/1/1990", email: "user@gmail.com", gender: "M" }})

After doing some inserts you may close this console.

To finish, go to the directory to where you clone the project and execute the following command inside "test":

>C:\Users\DanielSilva\Desktop\git\PIprojectG5\test> npm start