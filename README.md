# ❌ No-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/hotheadhacker/no-as-a-service/main/assets/imgs/naas-with-no-logo-bunny.png" width="800" alt="No-as-a-Service Banner" width="70%"/>
</p>


Ever needed a graceful way to say “no”?  
This tiny API returns random, generic, creative, and sometimes hilarious rejection reasons — perfectly suited for any scenario: personal, professional, student life, dev life, or just because.

Built for humans, excuses, and humor.

<!-- GitAds Sponsorship Badge -->
<p align="center">
  <a href="https://docs.gitads.dev/">
    <img src="https://gitads.dev/assets/images/sponsor/camos/camo-3.png" alt="Sponsored by GitAds" />
  </a>
</p>

<p align="center">
  This project is <strong>sponsored by <a href="https://docs.gitads.dev/docs/getting-started/publishers">GitAds</a></strong>.<br>
  You can get your GitHub repository sponsored too — <a href="https://docs.gitads.dev/docs/getting-started/publishers">create your account now</a>.
</p>

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

### ✅ Example Response
```json
{
  "reason": "This feels like something Future Me would yell at Present Me for agreeing to."
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
├── README.md
├── Containerfile
└── .devcontainer.json  # VS Code / Github devcontainer setup
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

## 🫙 Containerfile

### How to Build

podman / docker - use the same arguments, replace podman with docker if needed.
```bash
cd no-as-a-service
podman build -t your-image-name -f Containerfile
```

### How to Use

podman / docker - use the same arguments, replace podman with docker if needed.

If desired, change the host port, which is the first port listed below. eg; To use local port 4000 change the argument to -p 4000:3000, which maps your host port 4000 to the container port 3000

```bash
podman run -d -p 3000:3000 your-image-name
```

---
## ⚓ Devcontainer

If you open this repo in Github Codespaces, it will automatically use `.devcontainer.json` to set up your environment.  If you open it in VSCode, it will ask you if you want to reopen it in a container.

---
## Projects Using No-as-a-Service

Here are some projects and websites that creatively integrate [no-as-a-service](https://naas.isalman.dev/no) to deliver humorous or programmatic "no" responses:

1. **[no-as-a-service-rust](https://github.com/ZAZPRO/no-as-a-service-rust)**  
   Rust implementation of this project.

2. **[CSG Admins](https://csg-admins.de)**  
   A system administration and gaming service hub using no-as-a-service to provide playful negative responses across some admin panels and commands.

3. **[FunnyAnswers - /no endpoint](https://www.funnyanswers.lol/no)**  
   A humor-focused API playground that includes a mirror or wrapper for no-as-a-service, perfect for developers exploring fun HTTP-based responses.

4. **[Gerador de Frases Aleatórias (pt-BR)](https://github.com/timeuz/frases-aleatorias)**
   Uma reinterpretação em Python com frases em português, frontend e novas categorias.

5. **[NoAsAnApp](https://github.com/omar-jarid/NoAsAnApp)**  
   A simple native Android app calling no-as-a-service to provide negative responses.

6. **[FunnyReasons](https://github.com/amitbiswal007/FunnyReasons)**  
   A simple Web app using `no-as-a-service` to provide funny reasons to say No.

7. **[How About No?](https://github.com/lloyd094/How-About-No-)**
   A basic GUI using no-as-a-service as the backend. Built with docker in mind.
   
8. **[no-as-a-service-asp](https://github.com/sapph42/no-as-a-service)**  
   A straight-forward implementation of NaaS in ASP.NET Core
   
9. **[No as a Service - Raycast Extension](https://www.raycast.com/nedini/no-as-a-service)**  
   Get a random No from within Raycast. Just install the extension from the Raycast store, open Raycast, then type in 'Random No'. Raycast extension: [No as a Service](https://www.raycast.com/nedini/no-as-a-service).
10. **[Nopeify]([https://github.com/omar-jarid/NoAsAnApp](https://apps.apple.com/us/app/nopeify/id6757724453))**  
   A simple native iOS app calling no-as-a-service to provide negative responses.

11. **[No-as-a-Service - Slack App](https://github.com/pro100svitlo/no-as-a-service-slack-app)**  
   Get a random `No` from within Slack. [Install](https://slack.com/oauth/v2/authorize?client_id=2550998207090.10222067205218&scope=commands,chat:write&user_scope=) the app to your workspace and then use the `/no` command to get a random response. 

12. **[No-as-a-Service - Signal Bot](https://github.com/samtate/signal-no-as-a-service-bot)**  
    Get a random `No` from within Signal. Deploy the Docker container, link your Signal account, and use the `/no` command to get a random response.

13. **[No-as-a-Service GNOME Search](https://extensions.gnome.org/extension/9186/naas-gnome-search/)**
   GNOME search provider for the No-as-a-Service API. Type 'no' to get a random excuse. Click or press Enter to copy to clipboard.

14 **[No MCP](https://github.com/clafoutis42/no-mcp)**  
    Perfect for when you want your AI to be consistently negative or just want to add some humor to your MCP setup.
    
15. **[Your Project Here?](https://github.com/YOUR_REPO)**
   If you're using no-as-a-service in your project, open a pull request to be featured here!

---

> Want to use no-as-a-service in your own project? Check out the usage section in this README and start returning **"no"** like a pro.
---

## 👤 Author

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)

---

## 📄 License

MIT — do whatever, just don’t say yes when you should say no.
