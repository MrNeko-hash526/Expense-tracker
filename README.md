📊 Expense Tracker
A modern full-stack web application to manage personal finances — track income and expenses, analyze trends with interactive charts, and export detailed financial reports in .xlsx format using ExcelJS.

🚀 Key Features
✅ Add, edit, and delete income and expense entries

📈 Real-time interactive charts to compare income vs. expenses

📁 Export reports to Excel (.xlsx) using ExcelJS

🧮 Auto-calculates total income, total expenses, and current balance

📊 Visual analytics with Chart.js (Pie, Bar, and Line charts)

💾 Persistent data storage via localStorage, APIs, or MongoDB

🔐 Secure JWT-based login system

🛠️ Tech Stack
Frontend:

Vite + React

Tailwind CSS (for styling)

Backend:

Node.js

Express.js

JWT Authentication

Database:

MongoDB (Mongoose)

Charts & Export:

Chart.js (data visualization)

ExcelJS (exporting .xlsx reports)

🧪 Test Credentials
To explore the app:

text
"email": "john@example.com",
"password": "secure123"
📦 Installation & Setup
🔧 Prerequisites:
Node.js

npm or yarn

📥 Clone and Run Locally:
bash
# Clone the repository
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker

# Install dependencies
npm install

# Start the development server
npm run dev
📁 Project Structure
text
Expense tracker/
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── layouts/
│   │   │   │   └── SideMenu.jsx
│   │   │   └── Cards/
│   │   │       └── CharAvatar.jsx
│   │   ├── context/
│   │   │   └── UserContext.jsx
│   │   ├── pages/
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx
│   │   │   │   └── SignUp.jsx
│   │   │   └── Dashboard/
│   │   │       ├── Home.jsx
│   │   │       ├── Income.jsx
│   │   │       └── Expense.jsx
│   │   ├── routes/
│   │   │   └── PrivateRoute.jsx
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── config/
│   ├── server.js
│   └── package.json
└── README.md
📁 Extras
Download your income and expense reports in Excel format for offline tracking and analysis.

Fully responsive UI with intuitive financial visualization.

Modular codebase ready for enhancements like recurring entries, budget planning, and mobile-first support.

Quick Start:

bash
# Install dependencies
npm install

# Start the development server
npm run dev
