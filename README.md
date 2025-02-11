# TalentBridge

TalentBridge is a job portal that connects job seekers with employers. This application allows users to search for jobs, apply for them, and for employers to post job openings.

## Features
- **Job Seekers**: Sign up, search for jobs, and apply.
- **Employers**: Post job listings, review applications.
- **Messaging**: Built-in messaging system between job seekers and employers.

## Technologies Used
- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB Atlas
- **Authentication**: JWT (JSON Web Tokens)

## Setup Instructions

### Prerequisites
- Node.js (v14+)
- MongoDB Atlas Account
- An Email Service Provider for sending emails (e.g., SendGrid, SMTP)

### Backend Setup
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/talentbridge.git
    cd talentbridge
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure environment variables:
    - Create a `.env` file in the root directory with the following variables:
        ```plaintext
        MONGODB_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret
        JWT_EXPIRE=30d
        EMAIL_SERVICE=your_email_service_provider
        EMAIL_USERNAME=your_email_username
        EMAIL_PASSWORD=your_email_password
        EMAIL_FROM=your_email_address
        ```

4. Start the server:
    ```bash
    npm run start
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    ```

3. Start the React development server:
    ```bash
    npm start
    ```

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License
This project is licensed under the MIT License.
