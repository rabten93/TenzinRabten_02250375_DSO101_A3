# TenzinRabten_02250375_DSO101_A3
Chatbot API — DSO101 Assignment 3
A rule-based Chatbot API web is built with Node.js and Express, deployed using a full CI/CD pipeline with GitHub Actions, Docker, DockerHub, and Render.com.
Live URL = [https://chatbot-api-ttlq.onrender.com]
Tools & Technologies
Node.js & Express
Jest & Supertest
Docker
GitHub Actions
Render
Implementation of Steps
Built the Node.js Application (ChatBot)
Created a rule-based chatbot API using Express.js
Built a simple chat UI using HTML, CSS, and JavaScript that accepts a message and returns a bot reply
The chatbot responds to greetings, jokes, facts, time, date, and general conversation
Jest Tests
npm test
Used Jest and Supertest to write 4 unit tests
Tests cover: welcome route, valid chat message, empty message validation, and time query
All 4 tests pass successfully
Dockerized the Application
Created a Dockerfile using node:20-alpine as base image
Built and tested the Docker image locally
Pushed the image to DockerHub at chimirinzin/chatbot-api:latest
GitHub Actions
Created .github/workflows/deploy.yml
Pipeline steps:
Checkout repository
Setup Node.js
Install dependencies
Run tests
Login to DockerHub
Build Docker image
Push Docker image
Trigger Render deployment via webhook
Deployed on Render.com
Created a new Web Service on Render
Selected "Deploy from existing image" using DockerHub image
Copied the Deploy Hook URL and added it as a GitHub Secret
Every push to main branch now automatically redeploys the app
GitHub Secrets Used
Go to your GitHub repository
Click Settings
Click Secrets and variables → Actions
Click New repository secret
| DOCKERHUB_USERNAME | DockerHub account username | | DOCKERHUB_TOKEN | DockerHub access token for pushing images | | RENDER_DEPLOY_HOOK | Render webhook URL to trigger redeployment |

How to get Personal Docker Tokens?
Open Docker
Click your profile icon → Account Settings
Click Personal access tokens
Click Generate new token
Copy the token
Reflection
💭 Contemplation
Establishing the CI/CD pipeline revealed to me that contemporary software development involves more than just composing quality code . Whenever I submit code to GitHub, the pipeline automatically verifies it, constructs a Docker container, uploads it to DockerHub,and automatically deploys it to Render. GitHub Actions represented another significant lesson. Creating the deploy.yml document and observing each step execute on its own increased my appreciation for the amount of time and effort CI/CD conserves in actual software teams. Rather than executing tests manually and deploying each time, the pipeline manages everything reliably.

=============================== Challenges Faced and Solutions
Initially created a Read-only token which caused authentication failure in GitHub Actions. Fixed by regenerating with Read & Write permissions.
Project files were accidentally created inside a nested folder, causing commands to run in the wrong directory and not finding the right files. Used the cd command to navigate into the correct project directory before running any npm
Learning Outcomes
Understood CI/CD workflow from code push to live deployment
Learned how to containerize a Node.js app using Docker
Learned how to use GitHub Actions
Understood the importance of GitHub Secrets for securing credentials
Gained hands-on experience with DockerHub and Render
