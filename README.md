# Portfolio Website - Shivan Anand

This is a personal portfolio website built using **Node.js**, **Express**, **MongoDB**, and **EJS** as the view engine. The website showcases projects, blog posts, and information about my work as a web developer. It also features a responsive design and a minimalistic style.

The site is deployed on [Railway](shivan.up.railway.app).

## Features

- Dynamic blog section: Posts are fetched from MongoDB and displayed on the blog page.
- Projects section: Projects with descriptions and links are dynamically rendered from the database.
- Resume section: A detailed resume with education and professional skills.
- Responsive design optimized for mobile and desktop views.
- Custom fonts and styles for a modern look and feel.

## Tech Stack

- **Frontend**: HTML, CSS, EJS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Hosting**: Render.com
- **Version Control**: Git, GitHub

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/username/portfolio.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in the root folder and add your MongoDB connection string:

   ```env
   mongoDB=mongodb+srv://<username>:<password>@cluster.mongodb.net/blog
   ```

4. Start the server:

   ```bash
   npm start
   ```

5. Visit `http://localhost:3000` in your browser to view the website locally.
