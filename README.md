# Todo App

Welcome to the Todo App! This is a simple Angular application that allows you to manage your daily tasks efficiently. It provides features to add, edit, and delete tasks, and helps you keep track of what you need to accomplish.

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as complete or incomplete
- Delete tasks
- Filter tasks based on their status (all, active, completed)

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Angular CLI](https://angular.io/cli) (You can install it globally using `npm install -g @angular/cli`)

## Getting Started

Follow these steps to get the application up and running on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/prathapreddy0227/todo-app-angular.git
cd todo-app-angular
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
ng serve
```

Open your browser and navigate to `http://localhost:4200`. You should see the Todo App running.

### 4. Build for Production

To build the application for production, run:

```bash
ng build --prod
```

This will create a `dist/` directory with the production-ready build.

## Directory Structure

- `src/`
  - `app/` - Contains the main application code
    - `components/` - Contains Angular components
    - `services/` - Contains services for business logic
    - `models/` - Contains TypeScript models
  - `assets/` - Contains images, styles, and other static assets
  - `environments/` - Contains environment configuration files
  - `index.html` - The main HTML file
  - `styles.css` - Global styles

## Configuration

- **Environment Variables**: Configuration settings can be found in `src/environments/`.
- **API Endpoints**: If your app connects to a backend API, ensure the correct endpoints are set in the environment files.

## Testing

To run unit tests:

```bash
ng test
```

To run end-to-end tests:

```bash
ng e2e
```

## Contributing

We welcome contributions! To contribute to this project, please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Make your changes
4. Commit your changes (`git commit -am 'Add some feature'`)
5. Push to the branch (`git push origin feature/your-feature-name`)
6. Create a new Pull Request

Please ensure your code adheres to the existing style and passes all tests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For any questions or support, please open an issue on the [GitHub repository](https://github.com/yourusername/todo-app-angular/issues) or contact me at [your-email@example.com](mailto:your-email@example.com).

---

Happy coding! 🎉
