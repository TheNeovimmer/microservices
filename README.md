# Microservices E-Commerce Platform
**Teaching Project by TheNeovimmer**

A comprehensive microservices e-commerce platform designed for teaching purposes. This project demonstrates real-world microservices architecture patterns and is maintained under the GitHub username **TheNeovimmer** as an educational resource for developers learning about distributed systems.

## Architecture Overview

This project demonstrates a microservices architecture with the following services:

### Backend Services

- **User Service** (Node.js/Express) - Handles user authentication, registration, and profile management
- **Product Service** (Node.js/Express) - Manages product catalog and inventory
- **Order Service** (Node.js/Express) - Processes orders and manages order history
- **Review Service** (Python/FastAPI) - Handles product reviews and ratings

### Frontend

- **Client** (Svelte/Vite) - Modern web application for user interaction

## Technology Stack

### Backend Services
- **Node.js Services**: Express.js, Sequelize/Mongoose, JWT authentication
- **Python Service**: FastAPI, Pydantic, MongoDB
- **Databases**: MySQL (User Service), MongoDB (Product/Order/Review Services)

### Frontend
- **Svelte** - Modern reactive UI framework
- **Vite** - Fast build tool and development server
- **Axios** - HTTP client for API communication

## Service Endpoints

### User Service (Port 4000)
- `POST /users/register` - User registration
- `POST /users/login` - User authentication
- `GET /users/profile` - Get user profile

### Product Service (Port 4001)
- `GET /products` - Get all products
- `POST /products` - Create new product
- `GET /products/:id` - Get product by ID

### Order Service (Port 4002)
- `POST /orders` - Create new order
- `GET /orders` - Get all orders
- `GET /orders/:id` - Get order by ID

### Review Service (Port 4003)
- `POST /reviews` - Add product review
- `GET /reviews/:product_id` - Get reviews for product

## Prerequisites

- Node.js (v18 or higher)
- Python (v3.8 or higher)
- MySQL
- MongoDB
- npm or yarn

## Getting Started

### 1. Clone the Repository
```bash
git clone <repository-url>
cd microservices
```

### 2. Setup Backend Services

#### User Service
```bash
cd backend/user-service
npm install
npm run dev
```

#### Product Service
```bash
cd backend/product-service
npm install
npm run dev
```

#### Order Service
```bash
cd backend/order-service
npm install
npm run dev
```

#### Review Service
```bash
cd backend/review-service
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install fastapi uvicorn pymongo requests
uvicorn main:app --reload
```

### 3. Setup Frontend
```bash
cd client
npm install
npm run dev
```

### 4. Database Setup

#### MySQL (User Service)
```sql
CREATE DATABASE userdb;
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

#### MongoDB (Product, Order, Review Services)
```bash
# Create databases
use productdb
use orderdb
use reviewsdb
```

## Service Communication

The services communicate through REST APIs:
- Review Service calls Product Service to validate product existence
- Order Service can integrate with User and Product Services for order processing
- Frontend communicates with all services via Axios

## Development

### Running All Services
Each service runs on its own port:
- User Service: http://localhost:4000
- Product Service: http://localhost:4001
- Order Service: http://localhost:4002
- Review Service: http://localhost:4003
- Frontend: http://localhost:5173

### API Documentation
- FastAPI services (Review Service) provide automatic Swagger documentation at `/docs`
- Express services follow RESTful conventions

## Features

- **User Management**: Registration, authentication, profile management
- **Product Catalog**: Product listing, creation, and management
- **Order Processing**: Order creation and tracking
- **Review System**: Product ratings and reviews
- **Cross-Service Communication**: Services validate data across boundaries
- **Modern Frontend**: Reactive UI with Svelte

## Future Enhancements

- Docker containerization for each service
- API Gateway for unified entry point
- Service discovery with Consul or etcd
- Message queue for asynchronous communication
- Monitoring and logging with ELK stack
- CI/CD pipeline setup
- Load balancing and scaling

## Contributing

This is a teaching project maintained by **TheNeovimmer**. Contributions are welcome as learning opportunities:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request with a clear description of what you learned

## Educational Purpose

This project serves as a practical learning resource for:
- Microservices architecture patterns
- Cross-service communication
- Database design in distributed systems
- Frontend-backend integration
- Modern development practices

## Trainer Information

**Maintainer**: TheNeovimmer  
**Purpose**: Educational training and skill development  
**Platform**: GitHub - [TheNeovimmer](https://github.com/TheNeovimmer)

## License

This project is licensed under the ISC License and is intended for educational purposes.