# Codify: Web-Based Code Editor

Codify is a web-based code editor built using the MERN stack (MongoDB, Express, React, Node.js) with additional integration of Redux and Jest for state management and testing. The platform is designed to allow users to build, edit, and preview websites directly in their browser, making it an invaluable tool for developers and learners alike.

## Features

### Multi-Language Support
Codify supports multiple programming languages including **JavaScript**, **Python**, and **Dart**. This enables users to work in various coding environments without switching between multiple platforms or setups.

### Real-Time Code Execution
The platform is optimized for handling large amounts of code, capable of processing **over 1,000,000 lines of HTML, CSS, and JavaScript code**. This ensures smooth real-time code execution, making it easy for developers to see immediate results as they build and test their websites.

### Image-to-Code Conversion with Tesseract.js
Codify includes an **image-to-code feature** that leverages **Tesseract.js**, an OCR (optical character recognition) library, to extract code snippets from images and convert them into editable text. This feature provides **over 90% accuracy**, helping developers to quickly digitize and edit code from screenshots, diagrams, or scanned documents, significantly improving efficiency in debugging and documentation tasks.

## Technologies Used

- **React**: For building the user interface, ensuring a smooth, dynamic, and responsive experience.
- **Node.js & Express**: For backend services, including handling API requests, user authentication, and real-time execution of code.
- **MongoDB**: For storing user data and code projects, allowing for efficient querying and management of the data.
- **Redux**: For state management, enabling seamless user interactions and maintaining consistent state across the application.
- **Jest**: For testing, ensuring that all components and functionalities are working as expected.

## Setup and Usage

### Prerequisites
To get started, make sure you have the following tools installed:
- **Node.js** (with npm)
- **MongoDB** (or use a MongoDB cloud service)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/codify.git
   cd codify
2. Install dependencies for both the backend and frontend:
   ```bash
   # For backend (Node.js and Express)
   cd backend
   npm install

   # For frontend (React, Redux)
   cd frontend
   npm install
3. Set up MongoDB:
   - You can use either a local MongoDB instance or a cloud-based solution like **MongoDB Atlas**.
   - If you're using **MongoDB Atlas**, create a new cluster and get the connection string. Update the connection string in the backend configuration file (`backend/config/db.js`).
   - For a local MongoDB setup, ensure MongoDB is installed and running on your machine.

4. Environment Variables:
   - Create a `.env` file in both the backend and frontend directories to store sensitive information such as API keys, MongoDB URI, and any other configuration settings.
   - Example backend `.env` file:
     ```
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_jwt_secret
     ```
   - Example frontend `.env` file:
     ```
     REACT_APP_API_URL=http://localhost:5000
     ```

5. Start the Backend:
   - Navigate to the backend directory and run the following command to start the backend server:
   ```bash
   cd backend
   npm start
6. Start the Frontend:
   - Navigate to the frontend directory and run the following command to start the React development server:
   ```bash
   cd frontend
   npm start
6. Testing:
   - The project is equipped with tests using **Jest**. To ensure everything is working as expected, you can run the tests for both the backend and frontend.

   - For the backend tests:
     ```bash
     cd backend
     npm test
     ```
     - This command will execute the test suite for the backend. The results will be displayed in the terminal, allowing you to verify that the backend functionality, such as the API endpoints and server logic, is working correctly.

   - For the frontend tests:
     ```bash
     cd frontend
     npm test
     ```
     - This command will run the test suite for the frontend, ensuring that the user interface components, code editor, and interactions are functioning as expected. Jest will show the test results in the console.

     - If you prefer to run tests in watch mode, which re-runs tests as you make changes, simply execute the `npm test` command in either the backend or frontend directory. Watch mode will automatically pick up changes in your code and run the relevant tests.

     - If any tests fail, review the console output for debugging and fix the issues accordingly. It's recommended to have all tests pass before continuing with the development process.

7. Accessing the Application:
   - Once both the backend and frontend servers are running, you can access the Codify application by opening [http://localhost:3000](http://localhost:3000) in your browser.
   - The homepage will allow you to register or log in to access the code editor and other features of the application.

8. Image-to-Code Feature:
   - One of the key features of Codify is the **image-to-code functionality** powered by **Tesseract.js**.
   - You can upload images containing code snippets, and the application will extract and convert them into editable text with over 90% accuracy, allowing you to quickly work with code from screenshots or images.

9. Deployment:
   - Once you're ready to deploy the project, you can use cloud platforms like **Heroku** for the backend and **Netlify** or **Vercel** for the frontend.
   - Make sure to configure your environment variables for production deployment:
     - Set up the MongoDB URI (for MongoDB Atlas or other cloud databases).
     - Ensure the backend and frontend are set up to work seamlessly in the production environment, adjusting any necessary configurations.

Following these steps will set up the full project environment, making the web-based code editor and its features fully functional for both development and use.
