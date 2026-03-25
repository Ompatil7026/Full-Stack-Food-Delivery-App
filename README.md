🍔 Full Stack Food Delivery App
A comprehensive full-stack food delivery application built with Spring Boot and React, featuring an admin panel, user authentication, payment integration, and responsive design.

🛠️ Tech Stack
Backend: Java · Spring Boot · MongoDB
Frontend: React · Bootstrap 5
Payment: Razorpay
Cloud: AWS

✨ Features

Admin Panel — Manage users, orders, and menu items from a centralized dashboard
User Authentication — Secure registration and login flow
Payment Integration — Razorpay-powered checkout for safe transactions
Responsive Design — Mobile and desktop ready with Bootstrap 5
REST APIs — Clean, modular backend APIs for all core modules
MongoDB — Efficient NoSQL data management


📁 Project Structure
food-delivery-app/
├── backend/          # Spring Boot REST API
│   ├── admin/        # Admin panel APIs
│   ├── auth/         # Register & Login APIs
│   ├── cart/         # Cart module
│   └── orders/       # Order & payment APIs
├── frontend/
│   ├── admin-panel/  # React admin dashboard
│   └── customer-app/ # Customer-facing React app

🚀 Getting Started
Prerequisites

Java 17+
Node.js 18+
MongoDB
Razorpay API keys

Backend Setup
bashcd backend
./mvnw spring-boot:run

Frontend Setup
bashcd frontend
npm install
npm start
Environment Variables
Create a .env file in the frontend and application.properties in the backend:
env# Frontend
REACT_APP_RAZORPAY_KEY=your_razorpay_key

# Backend (application.properties)
spring.data.mongodb.uri=your_mongodb_uri
razorpay.key.id=your_key_id
razorpay.key.secret=your_key_secret

📸 Screenshots

Add your screenshots here

Admin DashboardCustomer AppCheckoutShow ImageShow ImageShow Image

📚 Resources

Spring Boot Documentation
React Documentation
Bootstrap 5 Documentation


🤝 Contributing
Contributions, issues, and feature requests are welcome! Feel free to open an issue or submit a pull request.
