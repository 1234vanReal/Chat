# Messenger App

## Overview
This Messenger App is a real-time chat application that allows users to register, log in, and communicate with each other through a chat interface. The application is structured into a backend and a frontend, with the backend handling user authentication, chat functionalities, and data storage, while the frontend provides a user-friendly interface for interaction.

## Features
- User registration and login
- Real-time messaging between users
- Chat history storage
- User profile management

## Project Structure
```
messenger-app
├── backend
│   ├── src
│   │   ├── app.ts
│   │   ├── controllers
│   │   │   ├── authController.ts
│   │   │   ├── chatController.ts
│   │   │   └── userController.ts
│   │   ├── models
│   │   │   ├── chatModel.ts
│   │   │   ├── messageModel.ts
│   │   │   └── userModel.ts
│   │   ├── routes
│   │   │   ├── authRoutes.ts
│   │   │   ├── chatRoutes.ts
│   │   │   └── userRoutes.ts
│   │   └── utils
│   │       └── db.ts
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── frontend
│   ├── src
│   │   ├── components
│   │   │   ├── ChatWindow.tsx
│   │   │   ├── LoginForm.tsx
│   │   │   └── RegisterForm.tsx
│   │   ├── pages
│   │   │   ├── ChatPage.tsx
│   │   │   ├── LoginPage.tsx
│   │   │   └── RegisterPage.tsx
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── public
│   │   └── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── README.md
├── README.md
└── render.yaml
```

## Getting Started

### Prerequisites
- Node.js
- npm or yarn
- TypeScript

### Installation
1. Clone the repository:
   ```
   git clone <repository-url>
   cd messenger-app
   ```

2. Install backend dependencies:
   ```
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```
   cd frontend
   npm install
   ```

### Running the Application
1. Start the backend server:
   ```
   cd backend
   npm start
   ```

2. Start the frontend application:
   ```
   cd frontend
   npm start
   ```

### Deployment
This application can be deployed using Render. Configuration settings for deployment are specified in the `render.yaml` file.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.