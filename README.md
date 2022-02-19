# Group 5: Cooking App
## Group Members
#### [Joseph Adrian](https://www.linkedin.com/in/joe-a-175bab115/)
#### [Delilah Andrusko](https://www.linkedin.com/in/delilah-andrusko-a3b646223/)
#### [Alexander Commodore](https://www.linkedin.com/in/alexander-commodore-301150195/)
#### [Paul Emmert](https://www.linkedin.com/in/paul-emmert-0722/)
#### [Sean Lewis](https://github.com/slewis37)
#### [Amanda Weirich](https://www.linkedin.com/in/amanda-weirich-b906711a1/)
## Description
This is the codebase for a group project assigned in COSC484: Web-based Programming, taught by [Jal Irani](https://www.linkedin.com/in/jalirani/) at Towson University during the Spring semester of 2022.

Our goal is to create a web application that can provide users with a list of recipies talored to the specific ingredients that the user has on hand at the moment.

The project is still currently under development.
## Running the Code
To run this project, make sure you have [NodeJS](https://nodejs.org/en/) installed on your computer.
### Setup
Open a command prompt or terminal and navigate to the directory you want the code to be in, then type the following commands:
```
git clone https://github.com/MyGoodSir/COSC484-Group5
cd COSC484-Group5
cd client
npm install
cd ../server
npm install
```
### Run
To run the code, navigate back to the root directory of the project (the folder called `COSC484-Group5`) and then do the following:

First, to start the webserver, type
```
cd server
npm start
```
This should start the webserver and the commandline you were using should be occupied with this process. 
If you wish to stop the webserver from running, either press the Ctrl+C key combonation while the commandline running the webserver is in focus, or just close the commandline running the webserver.

Now open a new commandline and navigate to the project root directory again.
To start the client application, type
```
cd client
npm start
```
Similar to the webserver, whenever you wish to stop the client process, just close the commandline window it is running in, or press Ctrl+C while it's commandline is in focus.

After you start the client, a browser window should open up. If this is not the case, open a web browser and navigate to [http://localhost:3000](http://localhost:3000)