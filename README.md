# 🍕 Fast React Pizza Co.

Welcome to **Fast React Pizza Co.**, an interactive and stylish React application showcasing a delicious pizza menu. This project highlights the use of React components, props, state management, and conditional rendering, providing a dynamic user experience.

## Demo

This project showcases a pizza menu where users can:

- View the available pizzas.
- See if a pizza is sold out.
- Check the restaurant's open hours.
- Place an order if the restaurant is open.

## 🛠️ Tech Stack

- **React**: JavaScript library for building user interfaces.
- **HTML/CSS**: For structuring and styling the content.
- **JavaScript (ES6+)**: For logic and functionality.

## Features

- **Dynamic Pizza Menu**: Displays a list of pizzas with images, descriptions, and prices.
- **Sold Out State**: Shows when a pizza is sold out.
- **Opening Hours**: The footer dynamically displays if the restaurant is open or closed based on the current time.
- **Order Button**: Available when the restaurant is open.

## Project Structure
📦 Fast React Pizza Co.
 ┣ 📂 public
 ┃ ┗ 📜 index.html
 ┣ 📂 src
 ┃ ┣ 📜 index.js
 ┃ ┣ 📜 index.css
 ┃ ┣ 📜 App.js
 ┃ ┗ 📜 pizzaData.js
 ┣ 📜 package.json
 ┗ 📜 README.md

## How to Run

### Prerequisites
Make sure you have **Node.js** and **npm** installed on your machine.

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/fast-react-pizza-co.git
2. Navigate into the project directory:
 cd fast-react-pizza-co

3. Install dependencies:
   npm install

4. Start the app:
   npm start

The app will now be running locally at http://localhost:3000.

## Component Overview
-  Header: Displays the restaurant's name.
-  Menu: Renders the list of available pizzas. Uses the Pizza component for individual pizza details.
-  Pizza: Shows pizza image, name, ingredients, and price. If a pizza is sold out, it shows a "Sold Out" badge.
-  Footer: Displays the open hours and a button to order if the restaurant is currently open.
   
## Future Enhancements
-  Order Summary: Add a cart system to review orders before placing them.
-  Responsive Design: Improve the app for better mobile experience.
-  API Integration: Fetch pizza data dynamically from a backend service.
