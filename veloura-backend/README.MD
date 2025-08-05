## **Folder Structure with File Comments**

Below is the updated folder structure with comments explaining the purpose of each file, focusing on their role in supporting the REST APIs. All files will use TypeScript (`.ts`) as per standard.

```
Veloura-backend/
├── src/
│   ├── config/                     # Configuration files for external services and app setup
│   │   ├── db.ts                 # Configures MongoDB connection for data storage used by all modules
│   │   ├── payment.ts            # Configures payment gateways (e.g., Stripe, PayPal) for payment APIs
│   │   ├── email.ts              # Configures email service (e.g., Nodemailer) for notification APIs
│   │   ├── cache.ts              # Configures Redis for caching product and cart data
│   │   └── index.ts              # Exports all configurations for centralized access
│   │
│   ├── common/                     # Shared utilities for API logic and middleware
│   │   ├── middleware/
│   │   │   ├── auth.middleware.ts  # Handles JWT authentication for protected API endpoints
│   │   │   ├── error.middleware.ts # Global error handling for consistent API error responses
│   │   │   ├── rateLimit.middleware.ts # Limits API request rates to prevent abuse
│   │   │   ├── cors.middleware.ts  # Configures CORS for secure cross-origin API requests
│   │   │   └── sanitize.middleware.ts # Sanitizes API inputs to prevent injection attacks
│   │   ├── types/                # TypeScript type definitions for API data models
│   │   │   ├── user.types.ts     # Defines User-related types for auth and user APIs
│   │   │   ├── product.types.ts  # Defines Product-related types for product and review APIs
│   │   │   ├── order.types.ts    # Defines Order-related types for order and cart APIs
│   │   │   └── response.types.ts # Defines standardized API response formats
│   │   ├── utils/
│   │   │   ├── logger.ts         # Logs API requests and errors for debugging
│   │   │   ├── response.ts       # Standardizes API success/error response formats
│   │   │   ├── validator.ts      # Provides shared validation logic for API inputs
│   │   │   └── queue.ts         # Manages async tasks (e.g., email sending) for APIs
│   │   ├── constants/
│   │   │   ├── roles.ts         # Defines user roles (e.g., user, admin) for API access control
│   │   │   ├── errorCodes.ts    # Defines custom error codes for API responses
│   │   │   ├── config.ts        # Stores app-wide constants (e.g., API limits)
│   │   │   └── events.ts        # Defines event types for analytics and notifications
│   │   └── errors/               # Custom error classes for API error handling
│   │       ├── ApiError.ts       # Base error class for API errors
│   │       ├── ValidationError.ts # Handles validation errors for API inputs
│   │       ├── DatabaseError.ts  # Handles database-related API errors
│   │       └── PaymentError.ts   # Handles payment-related API errors
│   │
│   ├── modules/                    # Feature-based modules for specific API groups
│   │   ├── auth/                 # APIs for user authentication and session management
│   │   │   ├── auth.controller.ts # Handles logic for auth API endpoints
│   │   │   ├── auth.service.ts   # Business logic for auth operations (e.g., JWT creation)
│   │   │   ├── auth.routes.ts    # Defines auth API routes (e.g., login, register)
│   │   │   ├── auth.model.ts     # Defines User schema for auth-related data
│   │   │   └── auth.validation.ts # Validates auth API request payloads
│   │   ├── users/                # APIs for user profile and account management
│   │   │   ├── user.controller.ts # Handles logic for user API endpoints
│   │   │   ├── user.service.ts   # Business logic for user operations (e.g., profile updates)
│   │   │   ├── user.routes.ts    # Defines user API routes (e.g., update profile)
│   │   │   └── user.model.ts     # Defines User schema for user-related data
│   │   ├── products/             # APIs for product listing and management
│   │   │   ├── product.controller.ts # Handles logic for product API endpoints
│   │   │   ├── product.service.ts # Business logic for product operations (e.g., filtering)
│   │   │   ├── product.routes.ts  # Defines product API routes (e.g., get products)
│   │   │   ├── product.model.ts   # Defines Product schema for product data
│   │   │   └── product.validation.ts # Validates product API request payloads
│   │   ├── cart/                 # APIs for shopping cart management
│   │   │   ├── cart.controller.ts # Handles logic for cart API endpoints
│   │   │   ├── cart.service.ts   # Business logic for cart operations (e.g., add item)
│   │   │   ├── cart.routes.ts    # Defines cart API routes (e.g., update cart)
│   │   │   ├── cart.model.ts     # Defines Cart schema for cart data
│   │   │   └── cart.validation.ts # Validates cart API request payloads
│   │   ├── orders/               # APIs for order creation and tracking
│   │   │   ├── order.controller.ts # Handles logic for order API endpoints
│   │   │   ├── order.service.ts  # Business logic for order operations (e.g., checkout)
│   │   │   ├── order.routes.ts   # Defines order API routes (e.g., create order)
│   │   │   ├── order.model.ts    # Defines Order schema for order data
│   │   │   └── order.validation.ts # Validates order API request payloads
│   │   ├── blog/                 # APIs for blog post and comment management
│   │   │   ├── blog.controller.ts # Handles logic for blog API endpoints
│   │   │   ├── blog.service.ts   # Business logic for blog operations (e.g., post creation)
│   │   │   ├── blog.routes.ts    # Defines blog API routes (e.g., get posts)
│   │   │   ├── blog.model.ts     # Defines Blog schema for blog data
│   │   │   └── blog.validation.ts # Validates blog API request payloads
│   │   ├── coupon/               # APIs for coupon code management
│   │   │   ├── coupon.controller.ts # Handles logic for coupon API endpoints
│   │   │   ├── coupon.service.ts  # Business logic for coupon operations (e.g., apply coupon)
│   │   │   ├── coupon.routes.ts  # Defines coupon API routes (e.g., validate coupon)
│   │   │   ├── coupon.model.ts    # Defines Coupon schema for coupon data
│   │   │   └── coupon.validation.ts # Validates coupon API request payloads
│   │   ├── contact/              # APIs for contact form submissions
│   │   │   ├── contact.controller.ts # Handles logic for contact API endpoints
│   │   │   ├── contact.service.ts # Business logic for contact operations (e.g., save message)
│   │   │   ├── contact.routes.ts  # Defines contact API routes (e.g., submit form)
│   │   │   ├── contact.model.ts   # Defines Contact schema for contact data
│   │   │   └── contact.validation.ts # Validates contact API request payloads
│   │   ├── payments/             # APIs for payment processing
│   │   │   ├── payment.controller.ts # Handles logic for payment API endpoints
│   │   │   ├── payment.service.ts # Business logic for payment operations (e.g., Stripe)
│   │   │   ├── payment.routes.ts  # Defines payment API routes (e.g., create payment)
│   │   │   ├── payment.model.ts   # Defines Payment schema for payment data
│   │   │   └── payment.validation.ts # Validates payment API request payloads
│   │   ├── newsletter/           # APIs for newsletter subscriptions
│   │   │   ├── newsletter.controller.ts # Handles logic for newsletter API endpoints
│   │   │   ├── newsletter.service.ts # Business logic for newsletter operations
│   │   │   ├── newsletter.routes.ts # Defines newsletter API routes (e.g., subscribe)
│   │   │   ├── newsletter.model.ts # Defines Newsletter schema for subscriber data
│   │   │   └── newsletter.validation.ts # Validates newsletter API request payloads
│   │   ├── reviews/              # APIs for product reviews
│   │   │   ├── review.controller.ts # Handles logic for review API endpoints
│   │   │   ├── review.service.ts  # Business logic for review operations
│   │   │   ├── review.routes.ts   # Defines review API routes (e.g., add review)
│   │   │   ├── review.model.ts    # Defines Review schema for review data
│   │   │   └── review.validation.ts # Validates review API request payloads
│   │   ├── categories/           # APIs for product categories and tags
│   │   │   ├── category.controller.ts # Handles logic for category API endpoints
│   │   │   ├── category.service.ts # Business logic for category operations
│   │   │   ├── category.routes.ts # Defines category API routes (e.g., list categories)
│   │   │   ├── category.model.ts   # Defines Category schema for category data
│   │   │   └── category.validation.ts # Validates category API request payloads
│   │   ├── uploads/              # APIs for file uploads (e.g., product images)
│   │   │   ├── upload.controller.ts # Handles logic for upload API endpoints
│   │   │   ├── upload.service.ts  # Business logic for upload operations
│   │   │   ├── upload.routes.ts   # Defines upload API routes (e.g., upload image)
│   │   │   ├── upload.middleware.ts # Middleware for handling file uploads
│   │   │   └── upload.validation.ts # Validates upload API request payloads
│   │   ├── inventory/            # APIs for inventory management
│   │   │   ├── inventory.controller.ts # Handles logic for inventory API endpoints
│   │   │   ├── inventory.service.ts # Business logic for inventory operations
│   │   │   ├── inventory.routes.ts # Defines inventory API routes (e.g., check stock)
│   │   │   ├── inventory.model.ts   # Defines Inventory schema for stock data
│   │   │   └── inventory.validation.ts # Validates inventory API request payloads
│   │   ├── search/               # APIs for advanced product search
│   │   │   ├── search.controller.ts # Handles logic for search API endpoints
│   │   │   ├── search.service.ts  # Business logic for search operations
│   │   │   ├── search.routes.ts   # Defines search API routes (e.g., search products)
│   │   │   └── search.validation.ts # Validates search API request payloads
│   │   ├── analytics/            # APIs for user behavior tracking
│   │   │   ├── analytics.controller.ts # Handles logic for analytics API endpoints
│   │   │   ├── analytics.service.ts # Business logic for analytics operations
│   │   │   ├── analytics.routes.ts # Defines analytics API routes (e.g., log event)
│   │   │   ├── analytics.model.ts   # Defines Analytics schema for event data
│   │   │   └── analytics.validation.ts # Validates analytics API request payloads
│   │   ├── notifications/        # APIs for email/SMS notifications
│   │   │   ├── notification.controller.ts # Handles logic for notification API endpoints
│   │   │   ├── notification.service.ts # Business logic for notification operations
│   │   │   ├── notification.routes.ts # Defines notification API routes (e.g., queue email)
│   │   │   ├── notification.model.ts # Defines Notification schema for notification data
│   │   │   └── notification.validation.ts # Validates notification API request payloads
│   │   ├── admin/                # APIs for admin panel functionality
│   │   │   ├── admin.controller.ts # Handles logic for admin API endpoints
│   │   │   ├── admin.service.ts   # Business logic for admin operations
│   │   │   ├── admin.routes.ts    # Defines admin API routes (e.g., manage users)
│   │   │   └── admin.validation.ts # Validates admin API request payloads
│   │
│   ├── jobs/                       # Background jobs for async API tasks
│   │   ├── sendOrderEmail.ts     # Sends order confirmation emails
│   │   ├── syncInventory.ts      # Syncs inventory with order updates
│   │   └── processAnalytics.ts   # Processes analytics events
│   │
│   ├── tests/                      # Test files for API validation
│   │   ├── unit/
│   │   │   ├── auth.test.ts      # Unit tests for auth APIs
│   │   │   ├── product.test.ts   # Unit tests for product APIs
│   │   │   └── order.test.ts     # Unit tests for order APIs
│   │   ├── integration/
│   │   │   ├── auth.test.ts      # Integration tests for auth APIs
│   │   │   ├── product.test.ts   # Integration tests for product APIs
│   │   │   └── order.test.ts     # Integration tests for order APIs
│   │   └── mocks/
│   │       ├── db.mock.ts        # Mocks database for API tests
│   │       └── api.mock.ts       # Mocks external API calls
│   │
│   ├── docs/                       # API documentation
│   │   ├── swagger.yaml          # Swagger spec for API documentation
│   │   ├── redoc.html            # Redoc UI for API documentation
│   │   └── api-reference.md      # Human-readable API reference
│   │
│   ├── app.ts                    # Configures Express app with middleware and routes
│   └── server.ts                 # Entry point for starting the API server
│
├── scripts/                        # Utility scripts for API management
│   ├── deploy.sh                 # Script for deploying the API server
│   ├── seed.ts                   # Script to seed database for testing APIs
│   ├── migrate.ts                # Script for database migrations
│   ├── healthCheck.ts            # Script for API health check endpoint
│   └── backup.ts                 # Script for backing up API-related data
│
├── .env                            # Environment variables for API configuration
├── .env.example                    # Example environment variables
├── .eslintrc.ts                    # ESLint config for TypeScript API code
├── .prettierrc                     # Prettier config for API code formatting
├── docker-compose.yml              # Docker setup for API deployment
├── Dockerfile                      # Docker build file for API server
├── package.json                    # Dependencies and scripts for API project
├── README.md                       # Project overview and API setup instructions
├── tsconfig.json                   # TypeScript configuration for API code
└── .github/                        # CI/CD workflows for API testing/deployment
    └── workflows/
        ├── ci.yml                  # CI workflow for testing APIs
        ├── deploy.yml              # Deployment workflow for API server
        └── test.yml                # Workflow for running API tests
```

---

## **Complete REST APIs**

Below is the complete list of REST APIs for the Veloura backend, organized by module. Each endpoint includes the HTTP method, URL, description, and any authentication requirements. The APIs are designed to support all features of Veloura, including product browsing (e.g., Lira Earrings), cart management, checkout, blog comments, and more.

### **Auth Module**
- **POST /api/auth/register**
  - **Description**: Registers a new user with first name, last name, email, and password.
  - **Auth**: None
  - **Response**: 201 with `{ userId, token }`
- **POST /api/auth/login**
  - **Description**: Authenticates a user and returns a JWT token.
  - **Auth**: None
  - **Response**: 200 with `{ userId, token, displayName }`
- **POST /api/auth/forgot-password**
  - **Description**: Sends a password reset email with a reset token.
  - **Auth**: None
  - **Response**: 200 with `{ message: "Reset link sent" }`
- **POST /api/auth/reset-password**
  - **Description**: Resets the user’s password using a reset token.
  - **Auth**: None
  - **Response**: 200 with `{ message: "Password updated" }`
- **POST /api/auth/refresh-token**
  - **Description**: Refreshes the JWT token using a refresh token.
  - **Auth**: None
  - **Response**: 200 with `{ token }`

### **Users Module**
- **GET /api/users/:userId**
  - **Description**: Retrieves user profile details (e.g., name, addresses).
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ firstName, lastName, email, billingAddress, shippingAddress }`
- **PUT /api/users/:userId**
  - **Description**: Updates user profile (e.g., name, billing/shipping address).
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ message: "Profile updated" }`
- **PUT /api/users/:userId/password**
  - **Description**: Changes the user’s password.
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ message: "Password changed" }`
- **DELETE /api/users/:userId**
  - **Description**: Deletes a user account (soft delete for data retention).
  - **Auth**: JWT (user or admin)
  - **Response**: 200 with `{ message: "Account deleted" }`

### **Products Module**
- **GET /api/products**
  - **Description**: Lists products with filtering (e.g., category=Earring, priceMin=40, priceMax=180) and sorting.
  - **Auth**: None
  - **Response**: 200 with `[{ productId, name, price, discount, category, tags, image, stock, attributes }]`
- **GET /api/products/:productId**
  - **Description**: Retrieves details for a specific product (e.g., Lira Earrings).
  - **Auth**: None
  - **Response**: 200 with `{ productId, name, description, price, discount, category, tags, image, stock, attributes, reviews }`
- **POST /api/products**
  - **Description**: Creates a new product (e.g., Kaede Hair Pin).
  - **Auth**: JWT (admin)
  - **Response**: 201 with `{ productId, message: "Product created" }`
- **PUT /api/products/:productId**
  - **Description**: Updates product details (e.g., price, stock).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Product updated" }`
- **DELETE /api/products/:productId**
  - **Description**: Deletes a product.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Product deleted" }`

### **Cart Module**
- **GET /api/cart/:userId**
  - **Description**: Retrieves the user’s shopping cart.
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ cartId, items: [{ productId, name, price, quantity, attributes }] }`
- **POST /api/cart/:userId**
  - **Description**: Adds an item to the cart (e.g., Lira Earrings, Black/Medium).
  - **Auth**: JWT (user)
  - **Response**: 201 with `{ message: "Item added to cart" }`
- **PUT /api/cart/:userId**
  - **Description**: Updates item quantity or attributes in the cart.
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ message: "Cart updated" }`
- **DELETE /api/cart/:userId/:productId**
  - **Description**: Removes an item from the cart.
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ message: "Item removed" }`
- **POST /api/cart/:userId/coupon**
  - **Description**: Applies a coupon code to the cart (e.g., SAVE21).
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ message: "Coupon applied", discount }`
- **GET /api/cart/guest/:sessionId**
  - **Description**: Retrieves a guest cart by session ID.
  - **Auth**: None
  - **Response**: 200 with `{ cartId, items }`
- **POST /api/cart/guest/:sessionId**
  - **Description**: Adds an item to a guest cart.
  - **Auth**: None
  - **Response**: 201 with `{ message: "Item added to guest cart" }`

### **Orders Module**
- **POST /api/orders**
  - **Description**: Creates a new order from cart items (e.g., order #7643980998990).
  - **Auth**: JWT (user)
  - **Response**: 201 with `{ orderId, orderNumber, total, orderDate }`
- **GET /api/orders/:userId**
  - **Description**: Retrieves a user’s order history.
  - **Auth**: JWT (user)
  - **Response**: 200 with `[{ orderId, orderNumber, orderDate, status, total, items }]`
- **GET /api/orders/:orderId**
  - **Description**: Retrieves details for a specific order.
  - **Auth**: JWT (user or admin)
  - **Response**: 200 with `{ orderId, orderNumber, items, billingAddress, shippingAddress, paymentMethod, status, total }`
- **PUT /api/orders/:orderId/status**
  - **Description**: Updates order status (e.g., Processing to Delivered).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Status updated" }`
- **POST /api/orders/:orderId/cancel**
  - **Description**: Cancels an order if not yet shipped.
  - **Auth**: JWT (user or admin)
  - **Response**: 200 with `{ message: "Order cancelled" }`

### **Blog Module**
- **GET /api/blog**
  - **Description**: Lists blog posts with filtering (e.g., category=Fashion) and sorting.
  - **Auth**: None
  - **Response**: 200 with `[{ postId, title, content, author, categories, tags, publishedDate }]`
- **GET /api/blog/:postId**
  - **Description**: Retrieves details for a specific blog post (e.g., “Fast Fashion, And Faster Fashion”).
  - **Auth**: None
  - **Response**: 200 with `{ postId, title, content, author, categories, tags, comments }`
- **POST /api/blog**
  - **Description**: Creates a new blog post.
  - **Auth**: JWT (admin)
  - **Response**: 201 with `{ postId, message: "Post created" }`
- **PUT /api/blog/:postId**
  - **Description**: Updates a blog post.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Post updated" }`
- **DELETE /api/blog/:postId**
  - **Description**: Deletes a blog post.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Post deleted" }`
- **POST /api/blog/:postId/comments**
  - **Description**: Adds a comment to a blog post (e.g., by Scarlet Witch).
  - **Auth**: None (or JWT for authenticated users)
  - **Response**: 201 with `{ message: "Comment added" }`
- **PUT /api/blog/:postId/comments/:commentId/approve**
  - **Description**: Approves a blog comment (admin moderation).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Comment approved" }`

### **Coupon Module**
- **GET /api/coupons**
  - **Description**: Lists active coupons (e.g., SAVE21).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `[{ couponId, code, discount, validUntil }]`
- **POST /api/coupons**
  - **Description**: Creates a new coupon.
  - **Auth**: JWT (admin)
  - **Response**: 201 with `{ couponId, message: "Coupon created" }`
- **PUT /api/coupons/:couponId**
  - **Description**: Updates a coupon (e.g., change discount).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Coupon updated" }`
- **DELETE /api/coupons/:couponId**
  - **Description**: Deactivates a coupon.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Coupon deleted" }`
- **POST /api/coupons/validate**
  - **Description**: Validates a coupon code.
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ valid: true, discount }`

### **Contact Module**
- **POST /api/contact**
  - **Description**: Submits a contact form message.
  - **Auth**: None
  - **Response**: 201 with `{ message: "Message sent" }`
- **GET /api/contact/messages**
  - **Description**: Lists all contact messages.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `[{ messageId, name, email, subject, message, sentAt }]`
- **DELETE /api/contact/messages/:messageId**
  - **Description**: Deletes a contact message.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Message deleted" }`

### **Payments Module**
- **POST /api/payments/create**
  - **Description**: Creates a payment intent (e.g., Stripe).
  - **Auth**: JWT (user)
  - **Response**: 201 with `{ clientSecret }`
- **POST /api/payments/paypal**
  - **Description**: Processes a PayPal payment.
  - **Auth**: JWT (user)
  - **Response**: 201 with `{ paymentId, status }`
- **POST /api/payments/webhook**
  - **Description**: Handles payment provider webhooks (e.g., Stripe payment confirmation).
  - **Auth**: None (secured by webhook secret)
  - **Response**: 200 with `{ received: true }`
- **GET /api/payments/:orderId**
  - **Description**: Retrieves payment status for an order.
  - **Auth**: JWT (user or admin)
  - **Response**: 200 with `{ paymentId, status, amount }`

### **Newsletter Module**
- **POST /api/newsletter**
  - **Description**: Subscribes an email to the newsletter.
  - **Auth**: None
  - **Response**: 201 with `{ message: "Subscribed" }`
- **DELETE /api/newsletter/:email**
  - **Description**: Unsubscribes an email from the newsletter.
  - **Auth**: None
  - **Response**: 200 with `{ message: "Unsubscribed" }`
- **GET /api/newsletter/subscribers**
  - **Description**: Lists all newsletter subscribers.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `[{ subscriberId, email, subscribedAt }]`

### **Reviews Module**
- **POST /api/reviews**
  - **Description**: Adds a review for a product (e.g., Lira Earrings).
  - **Auth**: JWT (user)
  - **Response**: 201 with `{ message: "Review added" }`
- **GET /api/reviews/:productId**
  - **Description**: Retrieves reviews for a specific product.
  - **Auth**: None
  - **Response**: 200 with `[{ reviewId, userId, rating, comment, date }]`
- **PUT /api/reviews/:reviewId**
  - **Description**: Updates a user’s review.
  - **Auth**: JWT (user or admin)
  - **Response**: 200 with `{ message: "Review updated" }`
- **DELETE /api/reviews/:reviewId**
  - **Description**: Deletes a review.
  - **Auth**: JWT (user or admin)
  - **Response**: 200 with `{ message: "Review deleted" }`

### **Categories Module**
- **GET /api/categories**
  - **Description**: Lists product categories and tags (e.g., Earring, Fashion).
  - **Auth**: None
  - **Response**: 200 with `[{ categoryId, name, type, description }]`
- **POST /api/categories**
  - **Description**: Creates a new category or tag.
  - **Auth**: JWT (admin)
  - **Response**: 201 with `{ categoryId, message: "Category created" }`
- **PUT /api/categories/:categoryId**
  - **Description**: Updates a category or tag.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Category updated" }`
- **DELETE /api/categories/:categoryId**
  - **Description**: Deletes a category or tag.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Category deleted" }`

### **Uploads Module**
- **POST /api/uploads**
  - **Description**: Uploads a product image (e.g., for Lira Earrings).
  - **Auth**: JWT (admin)
  - **Response**: 201 with `{ imageUrl, message: "Image uploaded" }`
- **DELETE /api/uploads/:imageId**
  - **Description**: Deletes a product image.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Image deleted" }`

### **Inventory Module**
- **GET /api/inventory/:productId**
  - **Description**: Checks stock for a product (e.g., 12 items for Lira Earrings).
  - **Auth**: None
  - **Response**: 200 with `{ stock, reserved }`
- **PUT /api/inventory/:productId**
  - **Description**: Updates stock for a product.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Stock updated" }`
- **POST /api/inventory/reserve**
  - **Description**: Reserves stock for cart items.
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ message: "Stock reserved" }`
- **POST /api/inventory/release**
  - **Description**: Releases reserved stock (e.g., if cart is abandoned).
  - **Auth**: JWT (user)
  - **Response**: 200 with `{ message: "Stock released" }`

### **Search Module**
- **GET /api/search**
  - **Description**: Searches products by query (e.g., “Lira Earrings”).
  - **Auth**: None
  - **Response**: 200 with `[{ productId, name, price, image }]`
- **GET /api/search/suggestions**
  - **Description**: Provides search suggestions based on partial query.
  - **Auth**: None
  - **Response**: 200 with `[{ query, score }]`

### **Analytics Module**
- **POST /api/analytics**
  - **Description**: Logs a user event (e.g., product view, add to cart).
  - **Auth**: JWT (user or anonymous)
  - **Response**: 201 with `{ message: "Event logged" }`
- **GET /api/analytics/:userId**
  - **Description**: Retrieves user event history (e.g., viewed products).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `[{ eventId, event, productId, timestamp }]`
- **GET /api/analytics/summary**
  - **Description**: Provides aggregated analytics (e.g., popular products).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ totalViews, topProducts }`

### **Notifications Module**
- **POST /api/notifications**
  - **Description**: Queues a notification (e.g., order confirmation email).
  - **Auth**: JWT (admin or system)
  - **Response**: 201 with `{ message: "Notification queued" }`
- **GET /api/notifications/:userId**
  - **Description**: Retrieves a user’s notification history.
  - **Auth**: JWT (user or admin)
  - **Response**: 200 with `[{ notificationId, type, content, status, createdAt }]`
- **PUT /api/notifications/:notificationId**
  - **Description**: Updates notification status (e.g., mark as sent).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "Notification updated" }`

### **Admin Module**
- **GET /api/admin/users**
  - **Description**: Lists all users for admin management.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `[{ userId, firstName, lastName, email, createdAt }]`
- **PUT /api/admin/users/:userId**
  - **Description**: Updates a user’s details (e.g., role, status).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "User updated" }`
- **DELETE /api/admin/users/:userId**
  - **Description**: Deletes a user account (hard delete for admin).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ message: "User deleted" }`
- **GET /api/admin/orders**
  - **Description**: Lists all orders for admin management.
  - **Auth**: JWT (admin)
  - **Response**: 200 with `[{ orderId, orderNumber, userId, status, total, orderDate }]`
- **GET /api/admin/statistics**
  - **Description**: Provides Veloura statistics (e.g., total sales, users).
  - **Auth**: JWT (admin)
  - **Response**: 200 with `{ totalUsers, totalOrders, totalRevenue }`

### **Health Check**
- **GET /api/health**
  - **Description**: Checks API server health and uptime.
  - **Auth**: None
  - **Response**: 200 with `{ status: "ok", uptime }`

---

## **Conclusion**
The REST APIs listed above provide complete coverage for Veloura Backend, supporting all key features (e.g., product browsing, cart management, checkout, blog comments, reviews, and admin functionality). Each module’s files (`controller.ts`, `service.ts`, `routes.ts`, `model.ts`, `validation.ts`) are designed to handle specific API logic, ensuring modularity and maintainability. The `common` directory supports cross-cutting concerns like authentication, error handling, and logging, while the `config` directory manages external service integrations. The TypeScript-based structure enhances type safety, making the APIs more robust and easier to maintain.
