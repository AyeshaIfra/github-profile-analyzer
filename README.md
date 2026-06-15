# GitHub Profile Analyzer API

Backend service that fetches public GitHub profile information, stores insights in MySQL, and exposes APIs to retrieve analyzed profiles.

## Tech Stack

- Node.js
- Express.js
- MySQL
- GitHub Public API

---

## Features

- Analyze GitHub profile by username
- Store profile insights in MySQL
- Fetch all analyzed profiles
- Fetch single analyzed profile
- Prevent duplicate usernames

---

## Installation

Clone repository

```bash
git clone <repo-url>
cd github-profile-analyzer
```

Install dependencies

```bash
npm install
```

Create environment variables

```bash
cp .env.example .env
```

Run server

```bash
npm run dev
```

---

## Environment Variables

```env
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=github_analyzer
```

---

## API Endpoints

### Analyze Profile

```http
GET /api/analyze/:username
```

Example:

```http
GET /api/analyze/octocat
```

---

### Fetch All Profiles

```http
GET /api/profiles
```

---

### Fetch Single Profile

```http
GET /api/profiles/:id
```

---

## Database

Table:

```text
github_profiles
```

---

## Deployment

Live URL:

```text
ADD_DEPLOYMENT_URL_HERE
```

---

## Author

Ayesha Ifra