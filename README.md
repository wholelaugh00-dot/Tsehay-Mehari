#  Tsehay Mehari

## Premium Habesha Dress Rental & Shopping Platform

## Project Description

Tsehay Mehari is a full-stack web application developed to simplify the rental and purchase of premium Ethiopian traditional (Habesha) dresses. The platform provides customers with an easy way to browse dress collections, search products, add items to a shopping cart or wishlist, rent dresses, and manage their accounts through a secure login system.

The application also provides an admin interface for managing products and uses PostgreSQL for data storage with RESTful APIs built using Express.js.


# Technology Stack

## Frontend
- HTML5
- CSS3
- JavaScript

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL
- pgAdmin 4

## API Testing
- Postman

## Authentication
- JWT (JSON Web Token)
- Password Hashing (bcrypt)


# Project Features

- User Registration
- User Login
- Secure Authentication
- Product Search
- Premium Habesha Dress Collection
- Shopping Cart
- Wishlist
- Dress Rental System
- Product Purchase
- Admin Dashboard
- Shop Dashboard
- CRUD Operations
- Responsive Design
- REST API Integration

# Project Structure
Tsehay-Mehari/
│
├── public/
│   ├── css/
│   ├── images/
│   ├── js/
│   ├── index.html
│   ├── collection.html
│   ├── gallery.html
│   ├── rental.html
│   ├── cart.html
│   ├── wishlist.html
│   ├── contact.html
│   └── login.html
│
├── routes/
├── controllers/
├── models/
├── server.js
├── package.json
├── README.md
└── database.sql


# Setup Instructions

## Prerequisites

Make sure you have installed:

- Node.js
- PostgreSQL
- pgAdmin 4
- Git
- Postman


## Clone the Repository
git clone https://github.com/wholelaugh00-dot/Tsehay-Mehari.git

Move into the project directory:
cd Tsehay-Mehari


## Install Dependencies
npm install


## Environment Variables

Create a .env file in the project root.

Example:
PORT=3000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=tsehay_mehari
DB_USER=postgres
DB_PASSWORD=your_password

JWT_SECRET=your_secret_key

Replace the database credentials with your PostgreSQL configuration.


## Database Setup

1. Open PostgreSQL (pgAdmin 4).

2. Create a database named:
tsehay_mehari

3. Import the SQL schema from:
database.sql

or from the SQL file included in this repository.

# Running the Project

Start the server:
npm start

or
node server.js

Open your browser and visit:
http://localhost:3000


# API Testing

All backend APIs were tested using Postman.

Example API endpoints include:

- User Registration
- User Login
- Products
- Rentals
- Shopping Cart
- Wishlist


# Database Schema (DDL)

This project uses PostgreSQL as its primary database management system.
Database Name:
tsehay_mehari_db
Schema:
public
The database schema includes tables for:

- Users
- Products
- Categories
- Cart Items
- Rentals
- Wishlist (if implemented)

The database structure can be viewed in PostgreSQL using pgAdmin 4 under:
tsehay_mehari_db → Schemas → public → Tables

To initialize the database, create a PostgreSQL database named tsehay_mehari_db and execute the SQL schema script included in the repository.

# Extra Features

The project includes several features beyond the basic course requirements:

- Responsive user interface
- Product search functionality
- Shopping cart
- Wishlist
- JWT Authentication
- Password hashing
- Premium gallery page
- Rental management
- PostgreSQL database integration
- RESTful API design
- Postman API testing

# Future Improvements

- Online payment integration
- Email notifications
- Order tracking
- Customer reviews
- Advanced filtering
- Product recommendations


# Author

Tsehay Mehari

Web Programming Final Project

Developed using HTML5, CSS3, JavaScript, Node.js, Express.js, PostgreSQL, pgAdmin 4, and Postman.