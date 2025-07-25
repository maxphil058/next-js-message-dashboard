# 📨 Next.js Message Board App

This is a simple **message board** built with **Next.js 14 App Router** using:

- ✅ Client-side rendering for form validation
- ✅ API routes (`/api/messages`) for storing and retrieving messages
- ✅ Navigation with `useRouter()`
- ✅ Tailwind CSS for styling

---

## 📸 Preview

![Message Board Screenshot](./screenshot.png)

---

## 📁 Project Structure

/app
├── page.tsx # Homepage – fetches and displays messages
├── submit/page.tsx # Message form – allows writing a message
└── api/messages/route.js # API handler (GET/POST messages)

---

## 🚀 Features

- See all submitted messages on the homepage.
- Submit a new message via a form.
- Data is stored in memory (mock database).
- Navigation handled with `useRouter().push()`.
- Built with React hooks (`useState`, `useEffect`).
- Form validation handled on the client side.

---

## ✨ How to Run Locally

1. **Clone the repo**

   ```bash
   git clone https://github.com/your-username/message-board-app.git
   cd message-board-app

   ```

2. **Install dependencies**
   npm install
   Run the dev server
   npm run dev
   Open your browser at http://localhost:3000

--

## 🔧 Technologies Used

Next.js 14 (App Router)
React
Tailwind CSS
