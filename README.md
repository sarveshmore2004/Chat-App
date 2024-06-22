# Chat Application

A real-time chat application built with React, Zustand, and Socket.io, featuring message fetching, sending, and displaying last seen status.

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)

## Project Overview

This chat application provides real-time messaging capabilities, user authentication, and user profile management. Users can send and receive messages instantly, update their profiles, and see the online status of their contacts.

## Features

- **Real-Time Personal Messaging**: Users can send and receive messages in real-time.
- **Authentication**: Username and password-based authentication system using JWT.
- **User Profiles**:
  - Display name, avatar, about section, and last seen status in realtime.
  - Update profile details functionality.
  - Search functionality for users.

## Tech Stack

**Frontend**:
- React
- Zustand (for state management)
- Socket.io-client
- React Hot Toast (for notifications)
- TailwindCSS
- Daisy UI
  
**Backend**:
- Node.js
- Express
- Socket.io
- MongoDB
- Mongoose
- JWT (JSON Web Token) for authentication
- bcryptjs (for password hashing)

## Installation

To get a local copy up and running, follow these steps:


### Setup .env file

```js
PORT=...
MONGO_DB_URI=...
JWT_SECRET=...
NODE_ENV=...
```

### Build the app

```shell
npm run build
```

### Start the app

```shell
npm start
```
