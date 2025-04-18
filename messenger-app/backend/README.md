# Messenger App Backend

This is the backend part of the Messenger App project. It is built using TypeScript and Express.js, providing functionalities for user authentication, chat management, and user profile management.

## Features

- **User Authentication**: Users can register and log in using their credentials.
- **Chat Functionality**: Users can send and receive messages in real-time.
- **User Profiles**: Users can view and update their profiles.

## Project Structure

- **src**: Contains the source code for the backend application.
  - **app.ts**: Entry point of the application, initializes the Express app and sets up middleware.
  - **controllers**: Contains the logic for handling requests.
    - `authController.ts`: Handles user registration and login.
    - `chatController.ts`: Manages sending and retrieving messages.
    - `userController.ts`: Manages user profiles.
  - **models**: Defines the data models for the application.
    - `chatModel.ts`: Schema for chat sessions.
    - `messageModel.ts`: Schema for messages.
    - `userModel.ts`: Schema for user accounts.
  - **routes**: Defines the API routes for the application.
    - `authRoutes.ts`: Routes for authentication.
    - `chatRoutes.ts`: Routes for chat functionalities.
    - `userRoutes.ts`: Routes for user management.
  - **utils**: Contains utility functions.
    - `db.ts`: Handles database connection logic.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the backend directory:
   ```
   cd messenger-app/backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Running the Application

To start the backend server, run:
```
npm start
```

The server will be running on `http://localhost:3000`.

## Database Configuration

Make sure to configure your database connection in the `db.ts` file located in the `utils` directory. 

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.

## License

This project is licensed under the MIT License.