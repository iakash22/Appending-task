
# Simple Blog Application

This is a simple blog application that allows users to register, log in, view, create, edit, and delete posts. It also includes bonus functionality such as a search bar to filter posts based on user input.


## Features

- User Authentication: Users can register and log in using their email and password. Only authenticated users can access the main functionality of the application and The user can also delete his account.
- Post Management: Authenticated users can view a list of posts fetched from the provided API endpoint, create new posts, edit existing posts, and delete posts.
- API Endpoint: Utilizes the provided API endpoint at [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for fetching, creating, updating, and deleting posts.
- Storage: Uses local storage for user authentication and session management.
- Bonus Tasks: Includes a separate header component with a search bar functionality to filter posts.


## Technologies Used
 *Using vite for building react app*
- React, Redux, React-router-dom, react-icons
- Fetch API for making HTTP requests
- Tailwind and Material UI for styling
- JSONPlaceholder API for mock data


## Installation and Usage

To run the application locally, follow these steps:

#### 1. Clone the repository:

```bash
  git clone https://github.com/your-username/simple-blog.git
```

#### 2. Navigate to the project directory:

```bash
  cd simple-blog
```

#### 3. Run the application 

```bash
  npm run dev
```
## How to Test

- Register a new user account using the registration form.
- Log in with the registered email and password.
- Navigate to the posts page where you can view, create, edit, and delete posts. 
 **note :** `CRUD opertaion perform using api but actually not changes in the jsonPlaceholder db`

- Use the search bar in the header to filter posts based on your input.
- Authenticate user can see the comments on Posts
- Log out of the application but your details save. If user delete his account then register another account and login.




## Optimizations

**Optimize user authenticate (Login and Signup) :**
- We can create backend using node.js, express and mongoodb.
- Email Verication 
- Also Add User Setting functionalties `(Update Profile details, reset password)`


**Optimie Post Data :**
`Add Up Post Data`
- Also take Image and Video
- Create Post Schema 


## Contributing

Contributions are welcome! 

If you find any `bugs` or have `suggestions` for improvements, please feel free to open an `issue` or `create` a pull request.




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
