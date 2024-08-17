# ⚛️ The Atomic Blog

Welcome to The Atomic Blog! This is a simple React application that simulates a blog where users can create, search, and archive posts. The app also features a "fake dark mode" for a touch of aesthetic.

## ✨ Features

- **📝 Add Posts**: Users can create new blog posts by providing a title and body.
- **🔍 Search Posts**: Users can search through the existing posts.
- **📂 Archive Posts**: Users can toggle the visibility of archived posts, which are pre-generated using the `faker` library.
- **🌙 Fake Dark Mode**: A toggle button allows users to switch between light and dark mode.
- **🗑️ Clear Posts**: Users can clear all the existing posts with a single click.

## 🛠️ Installation

1. **📥 Clone the repository:**

   ```bash
   git clone https://github.com/KarimAdel-1/The-Atomic-Blog.git
   ```

2. **📂 Navigate to the project directory:**

   ```bash
   cd The-Atomic-Blog
   ```

3. **📦 Install dependencies:**

   ```bash
   npm install
   ```

4. **🚀 Run the application:**

   ```bash
   npm start
   ```

## 🗂️ Project Structure

- **`src`**: Contains the main components and context provider.
  - **`App.js`**: The main component that houses the structure of the blog.
  - **`PostContext.js`**: The context provider that handles the state for posts.
  - **`createRandomPost.js`**: Utility function for generating random posts using the `faker` library.
- **`public`**: Contains the `index.html` file and other static assets.
- **`README.md`**: This file, containing information about the project.

## 💡 Usage

### 📝 Adding Posts

- Fill in the "Post title" and "Post body" fields and click "Add post" to create a new post.

### 🔍 Searching Posts

- Use the search bar at the top to filter posts based on the title or body content.

### 📂 Archiving Posts

- Click "Show archive posts" to display a list of pre-generated posts. You can add any of these to the main list by clicking the "Add as new post" button.

### 🗑️ Clearing Posts

- Click the "Clear posts" button to remove all posts from the main list.

### 🌙 Toggling Dark Mode

- Click the moon or sun icon at the top to toggle between fake dark mode and light mode.

## 🧰 Dependencies

- **React**: JavaScript library for building user interfaces.
- **@faker-js/faker**: Library for generating fake data.
- **React Memo**: Used to optimize the rendering of components.
