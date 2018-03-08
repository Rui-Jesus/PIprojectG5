# PIprojectG5
Collaborative system

To run our programm you will need mongodb and npm.

First open a console and execute:
>C:\Users\DanielSilva>mongod

( don't close this console)

Since our database is only localhost for now ,open annother command line and  execute the following commands:

>C:\Users\DanielSilva>mongo

>use testdb 

>db.createCollection("test")

Then create has many documents as you want following the this structure:

>db.testdb.insert({ username: "user1", password: p1, personal_information: { firstname: "User", lastname: "Test", birthdate: ISODate("1997-01-01T00:00:00Z"), email: "user@gmail.com", gender: "M" }, webapppreferences: { background: "#000000", fontcolor: "#FFFFFF", font: "Times New Roman" }, sessions: ["test"] })

After doing some inserts you may close this console.

To finish, go to the directory to where you clone the project and execute the following command inside "test":

>C:\Users\DanielSilva\Desktop\git\PIprojectG5\test> npm start