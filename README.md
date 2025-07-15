
```markdown
# 💸 GraphQL Expense Tracker

A full-stack Expense Tracker built using **GraphQL**, **Apollo Server**, **Express**, and a **Vite + React** frontend. This project is a learning-driven build — created to understand GraphQL APIs, schema design, and seamless frontend/backend integration.

---

## 🚀 Features

- 📊 Track income and expenses with dynamic updates
- ⚡ Apollo Client + Server for smooth GraphQL querying
- 🎯 Real-time state with React + Vite
- 🧠 Modular schema and resolver setup
---

## 🧱 Stack

| Tech            | Role                         |
|-----------------|------------------------------|
| React (Vite)    | Frontend UI                  |
| GraphQL         | API Query Language           |
| Apollo Server   | Backend GraphQL implementation |
| Express.js      | Server framework             |
| Node.js         | Runtime environment          |
| MongoDB (optional) | For persistent storage (WIP / optional) |

---

## 📂 Folder Structure

```

4.expense-tracker-using-graphql/
│
├── backend/
│   ├── schema/
│   ├── resolvers/
│   ├── server.js
│   └── ...
│
├── frontend/
│   ├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
│
├── package.json  (workspace root)
└── README.md

````

---

## 🔧 Scripts

At the monorepo root:

```bash
# Start both frontend and backend (using concurrently)
npm run dev

# Start backend only
npm run server

# Start frontend only
npm run client
````

---

## 🛠 Deployment

The project is optimized for deployment on **Render**.

> Note: `@vitejs/plugin-react` is listed in `dependencies` (not `devDependencies`) to ensure successful production builds.

---

## 🧠 What I Learned

This project was originally built by following a tutorial, but I'm now reworking it deeply — rethinking every line of code, questioning architecture decisions, and upgrading the UI and UX with AI-assisted enhancements.

I'm learning not just **how** it works, but **why** it works — and how I can make it better.

---


## 📜 License

MIT — use, fork, learn, remix. Just don’t forget to explore. 🌍✨

```

