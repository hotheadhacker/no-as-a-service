# No-as-a-Service

<p align="center">
  <img src="https://raw.githubusercontent.com/hotheadhacker/no-as-a-service/main/assets/imgs/naas-with-no-logo-bunny.png" width="800" alt="No-as-a-Service Banner" width="70%"/>
</p>

This tiny API returns random, creative, and sometimes hilarious reasons for saying "no". Use it personally, professionally, as a student, as a developer or just because.

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

## API Usage

Request:
```http
GET https://naas.isalman.dev/no
```

Response:
```json
{
  "reason": "This feels like something Future Me would yell at Present Me for agreeing to."
}
```

The API is rate-limited at 120 requests per minute per IP.

---

## Self-Hosting

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

## Project Structure

```
no-as-service/
├── index.js            # Express API
├── reasons.json        # Reasons for rejection
├── package.json
├── .devcontainer.json  # VS Code / Github devcontainer setup
└── README.md
```

---

## package.json

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

## ⚓ Devcontainer

If you open this repo in Github Codespaces, it will automatically use `.devcontainer.json` to set up your environment.  If you open it in VSCode, it will ask you if you want to reopen it in a container.

---
## Projects Using No-as-a-Service

Here are some projects and websites using [no-as-a-service](https://naas.isalman.dev/no):

1. **[no-as-a-service-rust](https://github.com/ZAZPRO/no-as-a-service-rust)**  
   Rust implementation of this project.

2. **[CSG Admins](https://csg-admins.de)**  
   A system administration and gaming service hub using no-as-a-service to provide negative responses across some admin panels and commands.

3. **[FunnyAnswers](https://www.funnyanswers.lol/no)**  
   An API playground featuring a wrapper for the API.

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

14. **[Nope App](https://github.com/foss-nope/apple-nope) for iPhone and iPad. Available on [AppStore](https://apps.apple.com/app/id6759522055) **  
    Simple OpenSource iOS app inspired by this service to find and curate reasons to say no!

15. **[No MCP](https://github.com/clafoutis42/no-mcp)**  
    Perfect for when you want your AI to be consistently negative or just want to add some humor to your MCP setup.

16. **[Your Project Here?](https://github.com/YOUR_REPO)**
   If you're using no-as-a-service in your project, open a pull request to be featured here!

---

> Want to use no-as-a-service in your own project? Check out the usage section in this README and start returning **"no"** like a pro.
---

## Author

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)

---

## 📄 License

MIT — do whatever, just don’t say yes when you should say no.
