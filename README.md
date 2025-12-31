# ❌ No-as-a-Service

## Java 25 port that can be run without compilation

<p align="center">
  <img src="https://raw.githubusercontent.com/nderwin/no-as-a-service-java/main/assets/imgs/naas-with-no-logo-bunny.png" width="800" alt="No-as-a-Service Banner" width="70%"/>
</p>


Ever needed a graceful way to say “no”?  
This tiny API returns random, generic, creative, and sometimes hilarious rejection reasons — perfectly suited for any scenario: personal, professional, student life, dev life, or just because.

Built for humans, excuses, and humor.

---

## 🚀 API Usage

**Base URL**
```
http://localhost:8080/no
```

**Method:** `GET`  

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
git clone https://github.com/nderwin/no-as-a-service-java.git
cd no-as-a-service-java
```

### 2. Start the server
```bash
java No.java
```

The API will be live at:
```
http://localhost:8080/no
```

---

## 📁 Project Structure

```
no-as-service-java/
├── src
    └── main
        └── java
            └── No.java # The whole app
├── reasons.json        # 1000+ universal rejection reasons
├── pom.xml             # makes it easier for IDEs to open the project, not really needed
└── README.md
```

---

## 👤 Author

Created with creative stubbornness by [hotheadhacker](https://github.com/hotheadhacker)

Ported to Java by [nderwin](https://github.com/nderwin)

---

## 📄 License

MIT — same as the original.
