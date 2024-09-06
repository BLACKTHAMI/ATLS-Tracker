# ATLS Course Notifier

ATLS Course Notifier is a web application built using the MERN stack (MongoDB, Express, React, Node.js) that periodically checks for open registration spots on the [ATLS Course Website](http://www.atls.co.za/Course). When courses become available, the app notifies subscribed users via email and WhatsApp.

## Project Structure
```
atls-course-notifier/
├── client/
│   ├── public/
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── App.js
│       └── index.js
├── server/
│   ├── config/
│   ├── models/
│   ├── routes/
│   ├── services/
│   ├── utils/
│   └── server.js
├── .gitignore
├── package.json
└── README.md
```

## Features

- User subscription system for course notifications
- Automated course availability checking
- Email notifications using Nodemailer
- WhatsApp notifications using Twilio's WhatsApp API
- React-based frontend for easy subscription management

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- MongoDB
- npm or yarn
- Twilio account for WhatsApp notifications
- SMTP server for email notifications

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/atls-course-notifier.git
   cd atls-course-notifier
   ```

2. Install dependencies:
   ```
   npm install
   cd client && npm install
   ```

3. Create a `.env` file in the root directory and add the following environment variables:
   ```
   MONGODB_URI=your_mongodb_connection_string
   SMTP_HOST=your_smtp_host
   SMTP_PORT=your_smtp_port
   SMTP_USER=your_smtp_username
   SMTP_PASS=your_smtp_password
   FROM_EMAIL=your_from_email_address
   TWILIO_ACCOUNT_SID=your_twilio_account_sid
   TWILIO_AUTH_TOKEN=your_twilio_auth_token
   TWILIO_WHATSAPP_NUMBER=your_twilio_whatsapp_number
   ```

## Usage

1. Start the server:
   ```
   npm run server
   ```

2. Start the client:
   ```
   npm run client
   ```

3. Visit `http://localhost:3000` in your browser to access the application.

## Contributing

Contributions to the ATLS Course Notifier project are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/your-feature-name`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature-name`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contact

If you have any questions or feedback, please contact [Your Name] at [your.email@example.com].