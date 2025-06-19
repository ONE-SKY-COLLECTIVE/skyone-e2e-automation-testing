
# SkyOne E2E Automation Testing

This repository contains end-to-end mobile automation tests for the **SkyOne** application using [WebdriverIO](https://webdriver.io/) and [BrowserStack](https://www.browserstack.com/).

Tests are written to support both Android APK and iOS IPA file testing.

---

## 🔧 Project Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/skyone-e2e-automation-testing.git
cd skyone-e2e-automation-testing
```

### 2. Install Dependencies

```bash
npm install
```

> Requires Node.js v16+ and NPM.

---

## 📁 Project Structure

```
skyone-e2e-automation-testing/
├── android.conf.js         # WebdriverIO config for Android
├── ios.conf.js             # WebdriverIO config for iOS
├── test/
│   └── signup.test.js      # Example test script
├── apks/
│   └── skyone-app.apk      # Android APK (local or BrowserStack App URL)
├── ipas/
│   └── skyone-app.ipa      # iOS IPA (BrowserStack App URL)
├── package.json
└── README.md
```

---

## 🚀 Running Tests

### For Local environ:
  
  ```bash
npx wdio run wdio.conf.js

### For Android:

```bash
npx wdio run android.conf.js
```

### For iOS:

```bash
npx wdio run ios.conf.js
```

---

## 🌐 BrowserStack Setup

Ensure you’ve set the following environment variables:

```bash
export BROWSERSTACK_USERNAME='your_username'
export BROWSERSTACK_ACCESS_KEY='your_access_key'
```

Or use a `.env` file with:

```
BROWSERSTACK_USERNAME=your_username
BROWSERSTACK_ACCESS_KEY=your_access_key
```

You must upload your app (APK/IPA) to BrowserStack and use the `bs://` URL in your config.

---

## 📦 Dependencies

- WebdriverIO
- @wdio/appium-service
- dotenv
- BrowserStack Local (for local testing, optional)

---

## 🧪 Additional Notes

- iOS testing requires a valid IPA file uploaded to BrowserStack.
- Local testing via BrowserStack Local tunnel can be enabled in the config.
- Use `wdio.conf.js` templates to structure capabilities by platform.

---

## 🤝 Contributing

This is a volunteer testing project for the [One Sky Collective](https://oneskycollective.org). Feel free to fork or open pull requests.

---

## 📄 License

MIT
