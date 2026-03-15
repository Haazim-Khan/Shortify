# Shortify – URL Shortener

Shortify is a modern URL shortening web application built using **Next.js (App Router)** and **MongoDB**.
It allows users to convert long URLs into short, shareable links and automatically redirects users to the original URL.

---

## 🚀 Features

* 🔗 Generate short URLs for long links
* ⚡ Instant redirection using dynamic routes
* 🧾 Custom short link support
* 📱 Fully responsive UI using Tailwind CSS
* 🧠 Form handling with React Hook Form
* 🗄 MongoDB database integration
* 🧩 Clean project structure using Next.js App Router

---

## 🛠 Tech Stack

* **Frontend:** Next.js, React
* **Styling:** Tailwind CSS
* **Form Handling:** React Hook Form
* **Backend:** Next.js API Routes
* **Database:** MongoDB with Mongoose

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/shortify.git
```

Navigate to project directory:

```bash
cd shortify
```

Install dependencies:

```bash
npm install
```

Run development server:

```bash
npm run dev
```

---

## 🌐 Usage

1. Open the application in your browser.
2. Enter a long URL.
3. Provide a custom short name.
4. Click **Generate Short URL**.
5. Use the generated short link to redirect to the original website.

Example:

```
Original URL:
https://youtube.com/watch?v=abc123

Short URL:
http://localhost:3000/yt
```

---

## 🔄 URL Redirection Flow

```
User enters URL
        ↓
Form submission
        ↓
API stores URL in MongoDB
        ↓
Short link generated
        ↓
Dynamic route captures slug
        ↓
Database lookup
        ↓
Redirect to original URL
```

---

## 📌 Future Improvements

* Copy-to-clipboard button for short URLs
* Analytics for link clicks
* QR code generation
* Link expiration support
* Authentication for managing links

---

## 👨‍💻 Author

**Haazim**
