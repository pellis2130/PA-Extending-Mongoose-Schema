# PA-Extending-Mongoose-Schema

**Student:** Princess Ellis  
**Course:** Web Application Development  
**Assignment:** 2.4 Performance Assessment – Extending Mongoose Schema

## Project Description

This project builds on the Mongoose Integration Guided Practice. The purpose of this assignment is to extend an existing Mongoose User schema by adding default values, schema modifiers, and virtual attributes.

The application uses Node.js, Express, MongoDB, and Mongoose to create and store user information in a MongoDB database.

## Technologies Used

- JavaScript
- Node.js
- Express.js
- MongoDB
- Mongoose
- Visual Studio Code
- Git Bash
- GitHub

## Features Implemented

### 1. Default Values
Added a `created` field that automatically records the date and time when a new user is created.

### 2. Predefined Schema Modifiers
Added `trim: true` to the username field to remove extra spaces at the beginning and end of usernames.

### 3. Custom Setter Modifier
Created a custom setter for the website field that automatically adds `http://` when the user does not provide `http://` or `https://`.

### 4. Custom Getter Modifier
Added a custom getter to format website addresses when retrieving user information.

### 5. Virtual Attributes
Created a virtual `fullName` attribute that combines the user's first and last names. It also supports splitting a full name into separate fields.

## How to Run the Application

1. Open the project folder in Visual Studio Code.
2. Open the terminal.
3. Install the required dependencies:

```bash
npm install
```

4. Make sure MongoDB is running locally.
5. Start the application:

```bash
node server.js
```

6. The server runs at:

`http://localhost:3000/`

## Testing the Application

The application was tested using Git Bash and the CURL command.

The following POST request was used to create a new user:

```bash
curl -X POST \
-H "Content-Type: application/json" \
-d '{"firstName":"Princess","lastName":"Ellis","email":"princess.pa@example.com","username":"  princesspa2026  ","password":"test123","website":"princessportfolio.com"}' \
http://localhost:3000/users
```

### Test Results

The application successfully processed the POST request and returned:

```text
User Added
```

The VS Code terminal displayed:

```text
POST /users 200
```

The saved user included:

- First Name: Princess
- Last Name: Ellis
- Email: princess.pa@example.com
- Username: princesspa2026
- Website: http://princessportfolio.com
- Created: Automatically generated date and time

These results confirmed that the application successfully saved the user and applied the default date, username trimming, and website setter.

## Screenshots

The following screenshots are included in the repository:

**1. Server_Success.png**

Shows the Node.js server running in Visual Studio Code and the successful POST request with the saved user information.

**2. GitBash_Curl_Success.png**

Shows the CURL command executed in Git Bash and the successful response from the application.

## Conclusion

This performance assessment helped me understand how to extend a Mongoose schema and manage user information in MongoDB. I learned how default values can automatically add information, how schema modifiers can format user input, and how virtual attributes can provide additional information without storing extra fields in the database.

I also practiced testing an Express application using CURL commands and uploading my completed project to GitHub.

## Author

**Princess Ellis**  
ECPI University  
Software Development
