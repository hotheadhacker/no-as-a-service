# 🔥 Roast-as-a-Service

<p align="center">
  <img src="./assets/imgs/image.png" width="800" alt="Roast-as-a-Service Banner" width="70%"/>
</p>

Need to roast someone? We've got the perfect insult ready for you!  
This tiny API returns random, hilarious, creative roasts — perfectly suited for any scenario: roasting friends, developers, that colleague who keeps breaking production, or just because they deserve it.

Built for humans who know how to take a joke, and those who need to give better ones.

---

## 🚀 API Usage

**Base URL**

```
https://raas.rishmi5h.com/roast
```

**Method:** `GET`  
**Rate Limit:** `120 requests per minute per IP`

### 🔄 Example Request

```http
GET /roast
```

### ✅ Example Response

```json
{
  "roast": "You're the human equivalent of a participation trophy."
}
```

### 🎌 Hindi Roast Endpoint

Get roasts in Hindi:

```http
GET /roast/hindi
```

### ✅ Hindi Example Response

```json
{
  "roast": "तुम्हारी value एक refund की तरह है।"
}
```

Use it in apps, bots, Discord bots, Slack integrations, burn your friends, or anywhere you need to deliver a perfectly crafted insult.

---

## 🛠️ Self-Hosting

Want to run it yourself? It's lightweight and simple.

### 1. Clone this repository

```bash
git clone https://github.com/hotheadhacker/roast-as-a-service.git
cd roast-as-a-service
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
http://localhost:3000/roast
```

You can also change the port using an environment variable:

```bash
PORT=5000 npm start
```

---

## 📁 Project Structure

```
roast-as-a-service/
├── index.js            # Express API
├── roasts.json         # 200+ hilarious roasts
├── package.json
├── Dockerfile          # Docker support
├── assets/
│   └── imgs/           # Image assets
└── README.md
```

---

## 📦 package.json

For reference, here's the package config:

```json
{
  "name": "roast-as-a-service",
  "version": "1.0.0",
  "description": "A lightweight API that returns random, hilarious roasts. Perfect for when you need to roast someone in the most creative way possible.",
  "main": "index.js",
  "scripts": {
    "start": "node index.js"
  },
  "author": "hotheadhacker",
  "license": "MIT",
  "dependencies": {
    "cors": "^2.8.5",
    "express": "^4.18.2",
    "express-rate-limit": "^7.0.0"
  }
}
```

---

## 🎯 Use Cases

- **Discord Bots**: Roast your friends with style
- **Slack Integrations**: Spice up your workspace
- **Dev Teams**: When someone breaks production
- **Apps & Games**: Add humor to your user experience
- **Social Media**: Generate witty comebacks
- **Just For Fun**: Always have a comeback ready

---

## 🔥 Sample Roasts

Here are a few of the 200+ roasts available:

- "You're the human equivalent of a participation trophy."
- "If you were a programming language, you'd be COBOL—outdated and painful."
- "You have the charisma of a printer paper."
- "Your potential is like a file I didn't bother to save."
- "You're what would happen if mediocrity had a spirit animal."

And many, MANY more hilarious insults!

---

## Projects Using Roast-as-a-Service

Here are some projects that creatively integrate roast-as-a-service:

1. **[Your Project Here?](https://github.com/YOUR_REPO)**  
   If you're using roast-as-a-service in your project, open a pull request to be featured here!

---

> Want to use roast-as-a-service in your own project? Check out the usage section in this README and start roasting **like a pro**.

---

## 👤 Author

Created with creative stubbornness and a sense of humor by [rishmi5h](https://github.com/rishmi5h)

**Inspired by** [no-as-a-service](https://github.com/hotheadhacker/no-as-a-service) by [hotheadhacker](https://github.com/hotheadhacker)

---

## 📄 License

MIT — do whatever, just remember to roast responsibly.
