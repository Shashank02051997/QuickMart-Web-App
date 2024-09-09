# Quick Mart
<img width="100" height = "100" alt="Quick Mart Logo" src="https://github.com/user-attachments/assets/f4cf3222-f3aa-4304-8a9a-27133b2e3045">

## Description

🌟 QuickMart is your one-stop e-commerce app for everything you need, from fresh milk 🥛 and groceries 🛒 to stylish dresses 👗, snacks 🍪, and the latest electronics 💻. Built using Flutter 📱 and backed by a powerful Node.js API 🚀 with MySQL 🗄️, QuickMart offers a seamless shopping experience from product search 🔎 to order tracking 📊, complete with an intuitive admin dashboard 🛡️ for streamlined management.

## Table of Contents

- [Installation](#installation)
- [Features](#features)
- [Screenshots](#screenshots)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [Links](#links)
- [License](#license)

## Installation

To install Quick Mart, follow these steps:

1. Clone the repository.
2. Install the dependencies in both the client and server directories by running `npm i` at the root directory.
3. Create a .env file in the server directory and add the following environment variables:

```
PORT
DB_PORT
DB_HOST
DB_NAME
DB_USERNAME
DB_PASSWORD
JWT_SECRET
```

4. Run `npm run dev` at the root directory to start the development server and launch the app in your browser.
5. Navigate to http://localhost:6868/ to view the project.

## Features

### 🔐 User Authentication:
- **Sign In and Sign Up**: Effortlessly create accounts or log in to start your shopping journey.

### 📱 OTP Verification:
- **Secure Verification**: Ensure user authenticity through OTP verification, adding an extra layer of security.

### 🛍️ Product Categories:
- **Diverse Product Range**: Explore a wide variety of product categories, including groceries, fresh milk, electronics, fashion, and more.

### 🔎 Product Search:
- **Find What You Need**: Quickly search for products using the powerful in-app search feature.

### 🛒 Cart Management:
- **Manage Your Cart**: Add, remove, or modify items in your cart for a smooth shopping experience.

### 🚀 Fast Deliveries:
- **Quick and Efficient**: Experience rapid deliveries with real-time tracking, ensuring your orders arrive on time.

### 📊 Order Management:
- **Track Orders Easily**: Stay updated with detailed order statuses, from placement to delivery.

### 👤 User Profile:
- **Manage Your Profile**: Update your personal information and manage your delivery addresses for a hassle-free checkout.

### 🛡️ Admin Dashboard:
- **Streamlined Management**: Intuitive admin dashboard for managing products, orders, and customer data efficiently.


## Screenshots

<img width="1440" alt="Screenshot 1" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.04.05%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 2" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.04.19%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 3" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.04.28%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 4" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.04.38%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 5" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.04.49%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 6" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.05.02%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 7" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.06.23%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 8" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.06.40%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 9" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.07.08%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 10" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.07.21%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 11" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.07.39%E2%80%AFPM.png">
<img width="1440" alt="Screenshot 12" src="https://github.com/Shashank02051997/QuickMart-Web-App/blob/master/screenshots/Screenshot%202024-09-04%20at%208.07.52%E2%80%AFPM.png">

## Technologies Used

Quick Mart is built using a variety of technologies including:

- [Node.js](https://nodejs.org/en)
- [Express](https://expressjs.com/)
- [JWT](https://jwt.io/)
- [MySQL](https://www.mysql.com/)

## Docker Setup

To set up and run Motor Admin using Docker, follow these steps:

1. **Pull the Docker image:**

   ```bash
   sudo docker pull motoradmin/motoradmin:latest
   ```

2. **Run the Docker container:**

   ```bash
   sudo docker run -d \
     --name motoradmin \
     -p 3000:3000 \
     -v ~/motoradmin/data:/app/storage \
     -e SECRET_KEY_BASE=$(openssl rand -hex 64) \
     motoradmin/motoradmin:latest
   ```

   This command will:
   - Run the Motor Admin container in detached mode (`-d`).
   - Name the container `motoradmin`.
   - Map port `3000` on your host to port `3000` in the container.
   - Mount a local directory (`~/motoradmin/data`) to the container’s storage directory.
   - Set a random `SECRET_KEY_BASE` for added security.

3. **Access Motor Admin:**

   Open your web browser and navigate to [http://your_droplet_ip:3000](http://your_droplet_ip:3000).


## Contributing

Please fork this repository and contribute back using
[pull requests](https://github.com/Shashank02051997/QuickMart-Web-App/pulls).

Any contributions, large or small, major features, or bug fixes, are welcomed and appreciated
but will be thoroughly reviewed.

### Contact - Let's become a friend
- [Twitter](https://twitter.com/shashank020597)
- [Github](https://github.com/Shashank02051997)
- [Linkedin](https://www.linkedin.com/in/shashank-singhal-a87729b5/)
- [Facebook](https://www.facebook.com/shashanksinghal02)

### Like our Facebook page
- [Android UI's Bucket](https://www.facebook.com/androiduisbucket)

## Donation
If this project helps you reduce time to develop, you can give me a cup of coffee :) 

<a href="https://www.buymeacoffee.com/mXUuDW7" target="_blank"><img src="https://bmc-cdn.nyc3.digitaloceanspaces.com/BMC-button-images/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

## 💬 Discuss

Have any questions, or doubts or want to present your opinions or views? You're always welcome. You can [start discussions](https://github.com/Shashank02051997/QuickMart-Web-App/discussions).

## Links

- [Link to Flutter GitHub repository](https://github.com/Shashank02051997/QuickMart-Flutter)

## License

This project is licensed under the MIT License.
