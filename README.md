 

# Card Dispatcher System

Card Dispatcher System is a web application designed to manage cards for different businesses. It allows businesses to create, update, and delete cards for their customers. The system also includes a user authentication system and provides an API for external integration.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Installation

To get started with the Card Dispatcher System, you need to follow these steps:

1. Clone the project repository:

```sh
git clone https://github.com/Rkvishnu/card-dispatcher-system.git
```

2. Install the dependencies for the backend:

```sh
cd card-dispatcher-system/backend
npm install
```

3. Set up the environment variables by creating a `.env` file in the root directory of the backend. The file should contain the following variables:

```sh
DATABASE_URL=mongodb://localhost/card-dispatcher-system
PORT=5000
JWT_SECRET=your_secret_key_here
```

4. Start the backend server:

```sh
npm start
```

5. Install the dependencies for the frontend:

```sh
cd ../frontend
npm install
```

6. Set up the environment variables by creating a `.env` file in the root directory of the frontend. The file should contain the following variables:

```sh
REACT_APP_API_URL=http://localhost:5000/api
```

7. Start the frontend server:

```sh
npm start
```

## Usage

The Card Dispatcher System has two main interfaces:

- **User Interface**: Allows users to create an account, log in, and manage their profile information. Users can also view the cards associated with their account.

- **Admin Interface**: Allows administrators to create, update, and delete cards for different businesses. Administrators can also view a list of all the cards in the system.

To use the Card Dispatcher System, follow these steps:

1. Visit the web application at `http://localhost:3000`.

2. If you are a new user, click on the "Sign Up" button to create an account. If you already have an account, click on the "Log In" button to log in.

3. Once you are logged in, you will see your profile information and a list of the cards associated with your account.

4. If you are an administrator, you can navigate to the "Card Management" page to create, update, or delete cards for different businesses.

5. To add a card to the Apple Wallet, click on the "Add to Wallet" button on the card page. The pass will be generated and distributed to the user's Apple Wallet.

## API Reference

The Card Dispatcher System provides a RESTful API for external integration. The API allows external systems to create, update, or delete cards in the system. The API documentation can be found in the `backend/api-docs` directory.

## Technologies Used

The Card Dispatcher System is built using the following technologies:

- Node.js
- Express.js
- MongoDB
- React.js
- Passport.js
- JWT
- Apple Wallet API
- Passkit.js

 