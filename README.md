# Clean Architecture NestJS

A professional boilerplate for NestJS applications following **Clean Architecture** principles.

## 🚀 Architecture Overview

This project is structured into four main layers to ensure separation of concerns, testability, and maintainability:

### 1. Domain Layer (`src/domain`)
The heart of the application. It contains:
- **Entities**: Business objects (e.g., `User`, `Post`).
- **Repositories Interfaces**: Abstract definitions of data access methods.
- **Exceptions**: Domain-specific errors.

### 2. Application Layer (`src/application`)
Contains the business logic (Use Cases):
- **Use Cases**: Orchestrate the flow of data to and from entities (e.g., `CreateUserCase`, `GetAllUsersCase`).
- **DTOs (Input/Output)**: Data contracts for use cases.

### 3. Infrastructure Layer (`src/infrastructure`)
External concerns and implementations:
- **Repositories Implementations**: Concrete implementations of domain repositories (e.g., using TypeORM, Prisma, or In-Memory).
- **Storage**: Low-level data handling.
- **Configuration**: External service configs.

### 4. Presentation Layer (`src/presentation`)
The entry point of the application:
- **Controllers**: Handle HTTP requests and call Use Cases.
- **DTOs (Request/Response)**: Validation and documentation (Swagger).
- **Modules**: NestJS module definitions.

## 🛠️ Tech Stack
- **Framework**: [NestJS](https://nestjs.com/)
- **Runtime**: Node.js
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Documentation**: [Swagger](https://swagger.io/)
- **Architecture**: Clean Architecture

## 📋 Features
- [x] **User Management**: Create and list users.
- [x] **Dependency Inversion**: Clean separation between Application and Infrastructure using abstract classes.
- [x] **Swagger Integration**: Automated API documentation.
- [x] **DTO Validation**: Structured data transfer objects.

## 🚦 Getting Started

### Prerequisites
- Node.js (v18+)
- pnpm

### Installation
```bash
$ pnpm install
```

### Running the app
```bash
# development
$ pnpm run start

# watch mode
$ pnpm run start:dev
```

## 🧪 Testing
```bash
# unit tests
$ pnpm run test
```

## 📄 License
UNLICENSED
