# Food Delivery Application

## Live link
https://foodie-kartik-kapkoti.netlify.app/

## Project Description

This is a food delivery application built with React and Redux. The application allows users to browse food items, add them to their cart, and manage the cart items. The application also includes features such as category filtering and item quantity management.

## Features

- Browse food items with images, names, prices, and types.
- Filter food items by category.
- Add items to the cart.
- Increment and decrement item quantities in the cart.
- Remove items from the cart.
- Responsive design with a clean and modern UI.

## Technologies Used

- React
- Redux
- React-Redux
- Redux Toolkit
- React Icons
- Tailwind CSS
- React Toastify

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/food-delivery.git
   ```

2. Navigate to the project directory:
   ```bash
   cd food-delivery
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open your browser and navigate to `http://localhost:3000` to view the application.

## Project Structure

- `src/Components`: Contains the React components used in the application.
  - `Card.jsx`: Component for displaying individual food items.
  - `Cart.jsx`: Component for displaying the cart and managing cart items.
  - `Category.jsx`: Component for filtering food items by category.
  - `Nav.jsx`: Navigation component.
  - `Footer.jsx`: Footer component.

- `src/pages`: Contains the main pages of the application.
  - `Home.jsx`: Home page component that displays the food items and categories.

- `src/redux`: Contains the Redux setup for state management.
  - `cartSlice.js`: Redux slice for managing cart state.
  - `store.js`: Redux store configuration.

- `src/context`: Contains the context setup for managing global state.
  - `UserContext.js`: Context for managing user-related state.

- `src/data`: Contains the data used in the application.
  - `food.js`: Data file containing the list of food items.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License.

## Acknowledgements

- Icons by [React Icons](https://react-icons.github.io/react-icons/)
- Toast notifications by [React Toastify](https://fkhadra.github.io/react-toastify/)
- Styling by [Tailwind CSS](https://tailwindcss.com/)
