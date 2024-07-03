
# Project Name

This project is a TypeScript application using Express, designed with a Hexagonal Architecture (Ports and Adapters). It demonstrates the separation of concerns, making the application more maintainable, testable, and scalable.

## Table of Contents

- [Project Name](#project-name)
- [Table of Contents](#table-of-contents)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Endpoints](#endpoints)
- [Running Tests](#running-tests)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/your-repo-name.git
    cd your-repo-name
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file in the root directory and add your environment variables:
    ```bash
    PORT=3000
    ```

## Usage

1. Start the application:
    ```bash
    npm run start
    ```

2. The API will be running at `http://localhost:3000`.

## Project Structure

```
project/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── v1/
│   │   │   │   ├── userRouter.ts
│   │   │   │   ├── productRouter.ts
│   │   │   └── index.ts
│   │   ├── config/
│   │   │   ├── index.ts
│   │   └── main.ts
│   ├── domain/
│   │   ├── models/
│   │   │   ├── User.ts
│   │   │   ├── Product.ts
│   │   ├── services/
│   │   │   ├── UserService.ts
│   │   │   ├── ProductService.ts
│   ├── infrastructure/
│   │   ├── db/
│   │   │   ├── index.ts
│   │   │   ├── repositories/
│   │   │   │   ├── UserRepository.ts
│   │   │   │   ├── ProductRepository.ts
│   ├── schemas/
│   │   ├── UserSchema.ts
│   │   ├── ProductSchema.ts
│   ├── tests/
│   │   ├── user.test.ts
│   │   ├── product.test.ts
├── .env
├── package.json
├── tsconfig.json
└── README.md
```

### Description

- **app/**: Application layer containing API routes and main configuration.
  - **api/**: API routes and controllers.
  - **config/**: Main application configurations.
  - **main.ts**: Application entry point.

- **domain/**: Domain layer containing business logic.
  - **models/**: Domain models representing business entities.
  - **services/**: Domain services containing business logic.

- **infrastructure/**: Infrastructure layer containing database interactions.
  - **db/**: Database configuration and repository implementations.

- **schemas/**: Schemas for data validation.

- **tests/**: Test files for unit and integration tests.

## Endpoints

### User Endpoints

- **POST /api/v1/users**: Create a new user
  - Request Body:
    ```json
    {
      "id": "1",
      "username": "john",
      "email": "john@example.com",
      "password": "password"
    }
    ```

- **GET /api/v1/users/:id**: Get a user by ID

### Product Endpoints

- **POST /api/v1/products**: Create a new product
  - Request Body:
    ```json
    {
      "id": "1",
      "name": "Product1",
      "price": 100
    }
    ```

- **GET /api/v1/products/:id**: Get a product by ID

## Running Tests

1. To run the tests, use the following command:
    ```bash
    npm run test
    ```

## Contributing

1. Fork the repository.
2. Create a new branch:
    ```bash
    git checkout -b feature/your-feature-name
    ```
3. Make your changes.
4. Commit your changes:
    ```bash
    git commit -m 'Add some feature'
    ```
5. Push to the branch:
    ```bash
    git push origin feature/your-feature-name
    ```
6. Open a pull request.

## License

This project is licensed under the MIT License.
