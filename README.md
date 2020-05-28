# node-with-docker
Run your node application in docker container.
You need to make changes in DockerFile to run your app in docker container.
<<<<<<<<<<To Run your Script>>>>>>>>>>
Go to your node project root directory and run this command <docker build -t myapp .> 
  Here myapp is the name of your app in docker and . means root directory of your node project.
<<<<<<<<<<To Run your Application in Docker>>>>>>>>>>
Run this command <docker run -p 3333:3322 myapp>
  Here 3333 is the port no which you expose in your script file and 3322 is the port which is used to listen the app in server.js. 
  you are mapping your docker port to your node application port and exposing it to the client. Now your application can accessed by port   3333.
