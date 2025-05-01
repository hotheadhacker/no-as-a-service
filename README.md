# ❌ No-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/hotheadhacker/no-as-a-service/main/assets/imgs/image.png" width="800" alt="No-as-a-Service Banner"/>
</p>

Ever needed a graceful way to say “no”?  
This tiny API returns random, generic, creative, and sometimes hilarious rejection reasons — perfectly suited for any scenario: personal, professional, student life, dev life, or just because.

Built for humans, excuses, and humor.

---

## 🚀 API Usage

**Base URL**

```
https://naas.isalman.dev/no
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request

```http
GET /no
```

Or filter by category:

```http
GET /no?category=funny
```

### ✅ Example Response

```json
{
  "reason": "This feels like something Future Me would yell at Present Me for agreeing to."
}
```

### 🗂️ Optional Query: `category`

Use the `category` query parameter to filter reasons by type.

**Available categories:**

- professional
- personal
- funny
- relationship
- direct
- grateful

Example:

```http
GET /no?category=student
```

If no reasons are found for that category:

```json
{
  "error": "No reasons found for the given category."
}
```

Use it in apps, bots, landing pages, Slack integrations, rejection letters, or wherever you need a polite (or witty) no.

---

## 🛠️ Self-Hosting

Want to run it yourself? It’s lightweight and simple.

### 1. Clone this repository

```bash
git clone https://github.com/hotheadhacker/no-as-a-service.git
cd no-as-a-service
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
npm start
```

The API will be live at:

```
http://localhost:3000/no
```

You can also change the port using an environment variable:

```bash
PORT=5000 npm start
```

---

## 📁 Project Structure

```
no-as-service/
├── index.js            # Express API
├── reasons.json        # 1000+ universal rejection reasons
├── package.json
└── README.md
```

---

## 📦 package.json

For reference, here’s the package config:

```json
{
  "name": "no-as-service",
  "version": "1.0.0",
  "description": "A lightweight API that returns random rejection or no reasons.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "hotheadhacker",
  "license": "MIT",
  "dependencies": {
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## 👤 Author

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)

---

## 📄 License

MIT — do whatever, just don’t say yes when you should say no.

```

```
