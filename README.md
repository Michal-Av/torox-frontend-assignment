# Torox - Frontend Assignment

## 🚀 About the Project
This project is a frontend assignment that displays a list of offers in a mobile-first, responsive web application. The application fetches offer data from a local backend and implements **infinite scrolling** to dynamically load more offers when needed.

## ✨ Features
- 📱 **Mobile-first responsive design**
- 🔄 **Infinite scrolling** for seamless data loading
- 🎨 **Modern UI** with Material-UI (MUI) components
- 🌐 **Backend simulation** for fetching offer data
- 🏷️ **Offer cards with image, badges, and payout details**

## 🛠️ Tech Stack
- **Frontend:** React, TypeScript, Material-UI
- **Backend:** Node.js, Express (for local API simulation)
- **State Management:** React Query (`@tanstack/react-query`)
- **Styling:** Material-UI (MUI) and custom styles

## 📂 Project Structure
```
📦 torox-frontend-assignment
├── 📁 backend            # Local backend for data simulation
│   ├── src
│   │   ├── controllers   # API controllers
│   │   ├── routes        # API routes
│   │   ├── services      # Business logic
│   │   ├── data-access   # Mock database
│   │   ├── models        # Type definitions
│   │   └── server.ts     # Express server
├── 📁 frontend           # React frontend
│   ├── src
│   │   ├── components    # UI components
│   │   ├── containers    # Feature components
│   │   ├── layout        # Page layout components
│   │   ├── pages         # Application pages
│   │   ├── services      # API calls
│   │   ├── styles        # Global styles
│   │   ├── types         # TypeScript types
│   │   ├── App.tsx       # Main App component
│   │   └── index.tsx     # Entry point
│   ├── public            # Static assets
│   ├── package.json      # Dependencies
│   ├── tsconfig.json     # TypeScript config
│   └── README.md         # Project documentation
```

## 📦 Installation & Setup
### 1️⃣ Clone the Repository
```sh
git clone https://github.com/Michal-Av/torox-frontend-assignment.git
cd torox-frontend-assignment
```

### 2️⃣ Install Dependencies
#### Backend
```sh
cd backend
npm install
```
#### Frontend
```sh
cd ../frontend
npm install
```

### 3️⃣ Run the Project
#### Start Backend Server
```sh
cd backend
npm run dev
```
#### Start Frontend
```sh
cd frontend
npm start
```

## 📸 Screenshots
![image](https://github.com/user-attachments/assets/b4202d72-6472-4850-8808-a3185c437fa3)
![image](https://github.com/user-attachments/assets/6a121e60-c1eb-4c76-8eab-b9e6eff6e98b)

## 📌 API Endpoints (Backend Simulation)
- `GET /api/offers?page=1` → Fetches paginated offers
- Supports **pagination** with the `page` query parameter

## 🏗️ Future Improvements
- 🔥 Add real backend integration
- 🎨 Improve UI animations & transitions
- 🔍 Implement search & filtering for offers

## 📝 Author
👤 **Michal Rahat**

📧 michal@example.com  
💼 [LinkedIn](https://www.linkedin.com/in/michal-rahat)  
📁 [GitHub](https://github.com/Michal-Av)

---
📌 **If you like this project, give it a ⭐ on GitHub!** 🚀

