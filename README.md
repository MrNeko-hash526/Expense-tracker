<<<<<<< HEAD
# Review Shield 🛡️

## 🏗️ Tech Stack

```
Frontend: React + Vite + Tailwind CSS
Backend:  Flask + Python + DistilBERT
Tools:    Selenium, ExcelJS, Recharts
```

## 📁 Project Structure

```
Review-Shield/
├── 📁 backend/
│   ├── 📄 app.py                    # Flask application entry point
│   ├── 📄 requirements.txt          # Python dependencies
│   ├── 📄 .env                      # Environment variables
│   ├── 📄 README.md                 # Backend documentation
│   ├── 📄 activate.bat              # Windows activation script
│   ├── 📄 install_requirements.bat  # Dependency installer
│   ├── 📄 start_server.bat          # Server starter script
│   ├── 📁 templates/
│   │   ├── 📄 home.html             # Homepage template
│   │   └── 📄 results.html          # Results page template
│   └── 📁 model_of_Review_Shield/
│       └── 📁 fine_tuned_model/     # AI model files
│           └── 📄 README.md         # Model documentation
├── 📁 frontend/
│   ├── 📄 index.html                # Main HTML file
│   ├── 📄 package.json              # Node.js dependencies
│   ├── 📄 vite.config.js            # Vite configuration
│   ├── 📄 eslint.config.js          # ESLint configuration
│   ├── 📄 README.md                 # Frontend documentation
│   ├── 📁 public/
│   │   └── 📄 vite.svg              # Vite logo
│   └── 📁 src/
│       ├── 📄 main.jsx              # React entry point
│       ├── 📄 App.jsx               # Main App component
│       ├── 📄 App.css               # App styles
│       ├── 📄 index.css             # Global styles
│       ├── 📁 assets/
│       │   └── 📄 react.svg         # React logo
│       ├── 📁 components/
│       │   ├── 📁 Footer/
│       │   │   └── 📄 Footer.jsx    # Footer component
│       │   └── 📁 Layout/
│       │       └── 📄 Layout.jsx    # Layout wrapper
│       ├── 📁 NavBar/
│       │   └── 📄 NavBar.jsx        # Navigation component
│       ├── 📁 pages/
│       │   ├── 📄 Home.jsx          # Homepage
│       │   ├── 📄 About.jsx         # About page
│       │   ├── 📄 Services.jsx      # Services page
│       │   ├── 📄 Testimonials.jsx  # Testimonials page
│       │   └── 📄 Contact.jsx       # Contact page
│       └── 📁 Analyzer/
│           └── 📄 Analyzer.jsx      # Main analysis component
├── 📄 README.md                     # Project documentation
└── 📄 .gitignore                    # Git ignore rules
```

## 🚀 Quick StartPowered Review Authenticity Analysis\*\* - Detect fake reviews and make informed purchasing decisions

A sophisticated web application using advanced machine learning to analyze product reviews and determine their authenticity with visual analytics and comprehensive reporting.

![Review Shield](https://img.shields.io/badge/Review%20Shield-AI%20Powered-blue)
![Python](https://img.shields.io/badge/Python-3.8+-green)
![React](https://img.shields.io/badge/React-18.0+-blue)
![Flask](https://img.shields.io/badge/Flask-2.0+-red)

## ⚡ Key Features

- **🧠 AI-Powered Analysis**: Fine-tuned DistilBERT model for review authenticity prediction
- **📊 Visual Analytics**: Interactive charts, trust scores, and risk level indicators
- **🔍 Smart Filtering**: Filter by authenticity, rating, and review patterns
- **📈 Excel Export**: Professional reports with color-coded authenticity indicators
- **🌐 Multi-Platform**: Supports Flipkart and Amazon (more platforms coming)
- **⚡ Real-time Processing**: Live analysis with progress indicators
- **📱 Responsive Design**: Modern UI that works on all devices

## 🏗️ Tech Stack

```
Frontend: React + Vite + Tailwind CSS
Backend:  Flask + Python + DistilBERT
Tools:    Selenium, ExcelJS, Recharts
```

## � Quick Start
=======
#📊 Expense Tracker
A modern full-stack web application to manage personal finances — track income and expenses, analyze trends with interactive charts, and export detailed financial reports in .xlsx format using ExcelJS.

#🚀 Key Features:

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
>>>>>>> 2466d52668f6efe0659b4ea7b1ebd807adb14c9e

Express.js

<<<<<<< HEAD
- Python 3.8+
- Node.js 16+
- Chrome browser

### 1. Backend Setup

```bash
# Clone and navigate
git clone https://github.com/yourusername/Review-Shield.git
cd Review-Shield/backend

# Create virtual environment
python -m venv venv
venv\Scripts\activate  # Windows
# source venv/bin/activate  # macOS/Linux

# Install dependencies
pip install -r requirements.txt

# Start server
python app.py
# Server runs on http://localhost:5000
```

### 2. Frontend Setup

```bash
# Navigate to frontend
cd ../frontend
=======
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
```
# Clone the repository
git clone https://github.com/your-username/expense-tracker.git
cd expense-tracker
>>>>>>> 2466d52668f6efe0659b4ea7b1ebd807adb14c9e

# Install dependencies
npm install

# Start development server
npm run dev
<<<<<<< HEAD
# Frontend runs on http://localhost:5173
```

## 🎯 Usage

1. **Open** `http://localhost:5173` in your browser
2. **Enter** a product URL from Flipkart or Amazon
3. **Click** "Analyze Reviews" to start AI analysis
4. **View** authenticity scores, charts, and detailed review breakdown
5. **Export** results to Excel for further analysis

## 📊 What You Get

- **Trust Score**: Overall authenticity percentage (0-100%)
- **Risk Level**: Low/Medium/High risk assessment
- **Visual Charts**: Pie charts and bar graphs for data visualization
- **Review Breakdown**: Individual review analysis with authenticity scores
- **Excel Reports**: Professional formatted reports with multiple worksheets
- **Advanced Stats**: Confidence levels, word counts, and quality metrics


### Production Setup

```bash
# Backend
pip install gunicorn
gunicorn --bind 0.0.0.0:5000 app:app

# Frontend
npm run build
# Deploy build/ folder to static hosting (Vercel, Netlify, etc.)
```


## 📝 License

This project is licensed under the MIT License.

---

**⭐ Star this repo if you find it helpful!**

Made for smarter online shopping decisions.
=======
#📁 Project Structure
```
```
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
```

📁 Extras
Download your income and expense reports in Excel format for offline tracking and analysis.

Fully responsive UI with intuitive financial visualization.

Modular codebase ready for enhancements like recurring entries, budget planning, and mobile-first support.

Quick Start:

```
# Install dependencies
npm install

# Start the development server
npm run dev
```
>>>>>>> 2466d52668f6efe0659b4ea7b1ebd807adb14c9e
