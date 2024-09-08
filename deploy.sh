#!/bin/bash

# Navigate to the directory where your app is stored
cd apps/QuickMart-Web-App

# Pull the latest changes from the repository
git pull origin master

# Navigate to the backend directory where your backend app is config
cd backend

# Install dependencies
npm i

# Restart index.js using pm2
/root/.nvm/versions/node/v18.20.2/bin/pm2 restart index.js