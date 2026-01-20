# 🚀 Mission Control Pro
### *The Ultimate Cloud-Synced Productivity Dashboard*

**Mission Control Pro** is a mobile-first task management application designed for real-time synchronization across devices. Built with a focus on clean architecture and data persistence, it serves as a central hub for managing daily objectives, archiving history, and tracking progress.

---

## 🛠️ Tech Stack & Badges

![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![GitHub Pages](https://img.shields.io/badge/github%20pages-121013?style=for-the-badge&logo=github&logoColor=white)

---

## ✨ Key Features

### ☁️ Real-Time Cloud Sync
* Instant synchronization between laptop and mobile devices.
* Powered by Firebase Realtime Database using the **Asia-Southeast** regional cluster for low latency.

### 🔒 Secure Access
* Private user authentication system.
* Personal task data is isolated per user; only you can access your dashboard.

### 📥 Archive Vault
* Move completed or outdated tasks to a dedicated **Archive Vault**.
* Keeps your main board clean while preserving a history of your accomplishments.

### 📊 Visual Analytics
* Dynamic circular progress ring that visualizes your completion rate.
* Real-time calculation of active vs. completed tasks.

### 🏷️ Smart Categorization
* **Work**, **Home**, **Personal**, and **Urgent** tags.
* Automatic color-coding for instant visual prioritization.

---

## 📐 How It Works



The app uses a real-time listener to track changes in the cloud. The completion logic is calculated using the following formula:

$$\text{Completion Percentage} = \left( \frac{\text{Completed Tasks}}{\text{Total Active Tasks}} \right) \times 100$$

---

## 🚀 Setup Instructions

### 1. Database Configuration
Update the `firebaseConfig` in `index.html` with your project credentials. Ensure your database URL matches your region:
`https://your-project-id-default-rtdb.asia-southeast1.firebasedatabase.app`

## 🛡️ Security Rules

Apply these rules in your Firebase Console to ensure your task data remains private. Use a proper code block (shown below) so the text does not turn red:

```json
{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}

```

---
## 🚀 Deployment & Installation

### 1. GitHub Pages Hosting
* **Upload:** Add your `index.html` file to your GitHub repository.
* **Navigate:** Go to the **Settings** tab of your repository and select **Pages** from the left sidebar.
* **Deploy:** Under the "Build and deployment" section, set the branch to `main` and click **Save**.



### 2. Mobile Installation
To use this dashboard as a standalone app on your phone:
* **Open:** Visit your live GitHub Pages URL in your mobile browser.
* **iOS (Safari):** Tap the **Share** icon and select **Add to Home Screen**.
* **Android (Chrome):** Tap the **Three Dots** menu and select **Add to Home Screen**.



---

## 👨‍💻 About the Developer

* **Academic Background:** 1st Year B.Tech Computer Science & Engineering student at **Galgotias University**.
* **Core Expertise:** Backend Developer focused on complex problem solving.
* **Certifications:** Certified in C programming, Java basics, and Python basics.
* **Content Creation:** Founder and creator of **"AQUAIMMORTAL"** YouTube channel.
