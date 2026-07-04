<div align="center">

<img src="https://raw.githubusercontent.com/gitXharshit/InteriewAI/main/client/src/assets/ai-ans.png" width="120" alt="InterviewAI logo" />

# 🎙️ InterviewAI

### AI-Powered Mock Interview Platform for Job Seekers

Practice realistic HR & Technical interviews with an AI interviewer that reads your résumé, asks role-specific questions, listens to your spoken answers, scores your confidence/communication/correctness in real time, and hands you a downloadable PDF report at the end.

[![Live Client](https://img.shields.io/badge/Live_Demo-Client-2ea44f?style=for-the-badge&logo=render&logoColor=white)](https://interiewai-client.onrender.com)
[![Live Server](https://img.shields.io/badge/Live_Demo-API-2ea44f?style=for-the-badge&logo=render&logoColor=white)](https://interiewai.onrender.com)

</div>

---

## 🛠️ Tech Stack

<div align="center">

**Frontend**

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Redux Toolkit](https://img.shields.io/badge/Redux_Toolkit-764ABC?style=for-the-badge&logo=redux&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Motion-0055FF?style=for-the-badge&logo=framer&logoColor=white)

**Backend**

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express_5-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtokens&logoColor=white)

**AI, Auth & Payments**

![OpenRouter](https://img.shields.io/badge/OpenRouter-GPT--4o--mini-412991?style=for-the-badge&logo=openai&logoColor=white)
![Firebase](https://img.shields.io/badge/Firebase_Auth-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)
![Razorpay](https://img.shields.io/badge/Razorpay-02042B?style=for-the-badge&logo=razorpay&logoColor=00D9FF)

</div>

---

## 📖 Table of Contents

- [About](#-about)
- [Key Features](#-key-features)
- [Folder Structure](#-folder-structure)
- [Installation & Setup](#-installation--setup)
- [Environment Variables](#-environment-variables)
- [Usage](#-usage)
- [API Reference](#-api-reference)
- [Contributing](#-contributing)
- [License](#-license)

---

## 📌 About

**InterviewAI** simulates a real, one-on-one interview using AI. A candidate signs in, uploads a résumé (or fills in role/experience manually), picks **HR** or **Technical** mode, and is presented with 5 questions of increasing difficulty (easy → easy → medium → medium → hard). Each spoken answer is transcribed via the browser's speech recognition API, timed against a per-question limit, and graded by an LLM on **confidence**, **communication**, and **correctness**. At the end, the candidate gets an aggregated score, a chart of their performance, a downloadable PDF report, and the session is stored in their interview history. Access to interviews is metered through a **credit system**, topped up via **Razorpay**.

---

## ✨ Key Features

- 🔐 **Google Sign-In** — Passwordless auth via Firebase, backed by JWT httpOnly cookies on the server.
- 📄 **Résumé Parsing** — Upload a PDF résumé; it's parsed with `pdfjs-dist` and summarized by AI into role, experience, projects & skills.
- 🤖 **AI-Generated Questions** — 5 tailored questions per session, generated from role, experience, mode, and résumé context, with a built-in easy → hard difficulty curve.
- 🗣️ **Voice-Based Interview** — Speak your answers using the Web Speech API while an animated AI interviewer avatar (male/female) guides the session.
- ⏱️ **Per-Question Timer** — Realistic time pressure (60s / 60s / 90s / 90s / 120s) — answers submitted late are auto-marked as not evaluated.
- 🧠 **Two Interview Modes** — **HR** (behavioral/communication) and **Technical** (role-specific depth).
- 📊 **AI Answer Evaluation** — Each answer is scored 0–10 on confidence, communication & correctness, plus short human-style feedback.
- 📈 **Performance Reports** — Final report with average scores and an interactive area chart (Recharts) of question-by-question performance.
- 🧾 **Downloadable PDF Report** — Export your full interview report and score breakdown via `jsPDF` + `jspdf-autotable`.
- 🕘 **Interview History** — Revisit every past session, its mode, role, and final score.
- 💳 **Credit System + Razorpay Payments** — Each interview costs credits (new users start with 100); buy more credits through a verified Razorpay checkout flow.
- 📱 **Responsive, Animated UI** — Built with Tailwind CSS v4 and Framer Motion for smooth, modern interactions.

<div align="center">

<img src="https://raw.githubusercontent.com/gitXharshit/InteriewAI/main/client/src/assets/resume.png" width="150" alt="Resume based interview" />
<img src="https://raw.githubusercontent.com/gitXharshit/InteriewAI/main/client/src/assets/HR.png" width="150" alt="HR interview mode" />
<img src="https://raw.githubusercontent.com/gitXharshit/InteriewAI/main/client/src/assets/tech.png" width="150" alt="Technical interview mode" />
<img src="https://raw.githubusercontent.com/gitXharshit/InteriewAI/main/client/src/assets/pdf.png" width="150" alt="Downloadable PDF report" />
<img src="https://raw.githubusercontent.com/gitXharshit/InteriewAI/main/client/src/assets/history.png" width="150" alt="History and analytics" />

</div>

---

## 📂 Folder Structure

```text
InteriewAI/
├── client/                        # React + Vite frontend
│   ├── public/
│   │   └── img1.png
│   └── src/
│       ├── assets/                # Images & AI interviewer avatar videos
│       │   └── Videos/
│       │       ├── male-ai.mp4
│       │       └── female-ai.mp4
│       ├── components/
│       │   ├── AuthModel.jsx      # Google sign-in modal
│       │   ├── Footer.jsx
│       │   ├── Navbar.jsx
│       │   ├── Step1SetUp.jsx     # Role/experience/résumé setup
│       │   ├── Step2Interview.jsx # Live voice interview + timer + avatar
│       │   ├── Step3Report.jsx    # Score chart + PDF export
│       │   └── Timer.jsx
│       ├── pages/
│       │   ├── Auth.jsx
│       │   ├── Home.jsx
│       │   ├── InterviewPage.jsx
│       │   ├── InterviewHistory.jsx
│       │   ├── InterviewReport.jsx
│       │   └── Pricing.jsx
│       ├── redux/
│       │   ├── store.js
│       │   └── userSlice.js
│       ├── utils/
│       │   └── firebase.js        # Firebase Auth config
│       ├── App.jsx                # Routes + current-user bootstrap
│       └── main.jsx               # App entry point
│
└── server/                        # Node.js + Express backend
    ├── config/
    │   ├── connectDb.js           # MongoDB connection
    │   └── token.js               # JWT signing
    ├── controllers/
    │   ├── auth.controller.js     # Google auth, logout
    │   ├── interview.controller.js# Résumé parsing, Q&A, scoring, reports
    │   ├── payment.controller.js  # Razorpay order + verification
    │   └── user.conroller.js      # Current user lookup
    ├── middlewares/
    │   ├── isAuth.js              # JWT cookie verification
    │   └── multer.js              # Résumé upload handling
    ├── models/
    │   ├── interview.model.js
    │   ├── payment.model.js
    │   └── user-models.js
    ├── public/                    # Uploaded résumés (temp storage)
    ├── routes/
    │   ├── auth.route.js
    │   ├── interview.route.js
    │   ├── payment.route.js
    │   └── user.route.js
    ├── services/
    │   ├── openRouter.service.js  # AI (GPT-4o-mini via OpenRouter)
    │   └── razorpay.service.js    # Razorpay client
    └── index.js                   # Express app entry point
```

---

## 🚀 Installation & Setup

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher & npm
- A [MongoDB](https://www.mongodb.com/atlas) database (local or Atlas)
- A [Firebase](https://console.firebase.google.com/) project with Google Sign-In enabled
- An [OpenRouter](https://openrouter.ai/) API key (for AI question generation & scoring)
- A [Razorpay](https://razorpay.com/) account (for the credits/payments flow)

### 1. Clone the repository

```bash
git clone https://github.com/gitXharshit/InteriewAI.git
cd InteriewAI
```

### 2. Set up the backend (server)

```bash
cd server
npm install

# create a .env file (see Environment Variables section below)
touch .env

# start in development mode (auto-restarts with nodemon)
npm run dev

# or start in production mode
npm start
```

The API will run on `http://localhost:6000` by default (or whatever `PORT` you set).

### 3. Set up the frontend (client)

Open a new terminal tab:

```bash
cd client
npm install

# create a .env file (see Environment Variables section below)
touch .env

# start the Vite dev server
npm run dev
```

The client will run on `http://localhost:5173` by default.

> ⚠️ **Note:** By default, the client points at the deployed API (`ServerUrl` in `client/src/App.jsx`) and the server's CORS is locked to the deployed client URL. For local development, update `ServerUrl` in `client/src/App.jsx` to `http://localhost:6000` and update the `cors({ origin: ... })` value in `server/index.js` to `http://localhost:5173`.

---

## 🔑 Environment Variables

**`server/.env`**

| Variable             | Description                                      |
| --------------------- | ------------------------------------------------- |
| `PORT`                | Port for the Express server (defaults to `6000`) |
| `MONGODB_URL`         | MongoDB connection string                          |
| `JWT_SECRET`          | Secret used to sign JWT auth tokens                |
| `OPENROUTER_API_KEY`  | API key for OpenRouter (AI question/answer engine) |
| `RAZORPAY_KEY_ID`     | Razorpay public key ID                             |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key                                |

**`client/.env`**

| Variable                 | Description                          |
| ------------------------ | ------------------------------------- |
| `VITE_FIREBASE_API_KEY`  | Firebase Web API key (Google Sign-In) |
| `VITE_RAZORPAY_KEY_ID`   | Razorpay public key ID (checkout)     |

---

## 💡 Usage

### Typical flow

1. **Sign in** with your Google account on the landing page.
2. **Set up** your interview — pick a role, experience level, and mode (HR or Technical), or upload your résumé to auto-fill these fields.
3. **Take the interview** — answer 5 spoken questions before each timer runs out, guided by an animated AI interviewer.
4. **Get your report** — view your confidence/communication/correctness breakdown, then download it as a PDF or revisit it anytime from **Interview History**.

### Example: generating interview questions via the API

```bash
curl -X POST http://localhost:6000/api/interview/generate-questions \
  -H "Content-Type: application/json" \
  --cookie "token=<your_jwt_token>" \
  -d '{
        "role": "Frontend Developer",
        "experience": "2 years",
        "mode": "Technical",
        "resumeText": "Built dashboards with React and Redux...",
        "projects": ["Portfolio site", "E-commerce dashboard"],
        "skills": ["React", "Redux", "Tailwind CSS"]
      }'
```

**Response**

```json
{
  "interviewId": "665f1c2a1b2c3d4e5f6a7b8c",
  "creditsLeft": 50,
  "userName": "Jane Doe",
  "questions": [
    {
      "question": "Can you walk me through a recent React project you're proud of?",
      "difficulty": "easy",
      "timeLimit": 60
    }
  ]
}
```

---

## 📡 API Reference

| Method | Endpoint                          | Description                                   | Auth |
| ------ | ---------------------------------- | ---------------------------------------------- | ---- |
| POST   | `/api/auth/google`                 | Sign in / register via Google                 | ❌   |
| GET    | `/api/auth/logout`                 | Clear session cookie                           | ❌   |
| GET    | `/api/user/current-user`           | Get the logged-in user's profile               | ✅   |
| POST   | `/api/interview/resume`            | Upload & AI-parse a résumé PDF                 | ✅   |
| POST   | `/api/interview/generate-questions`| Generate a 5-question interview session        | ✅   |
| POST   | `/api/interview/submit-answer`     | Submit & AI-score an answer                    | ✅   |
| POST   | `/api/interview/finish`            | Finalize the interview and compute the report  | ✅   |
| GET    | `/api/interview/get-interview`     | List the user's past interviews                | ✅   |
| GET    | `/api/interview/report/:id`        | Get a full report for one interview            | ✅   |
| POST   | `/api/payment/order`               | Create a Razorpay order for buying credits     | ✅   |
| POST   | `/api/payment/verify`              | Verify payment & add credits to the account    | ✅   |

---

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please open an issue first to discuss what you would like to change.

---

## 📄 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

<div align="center">

Made with ❤️ by <a href="https://github.com/gitXharshit">gitXharshit</a>

</div>
