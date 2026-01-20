🚀 Mission Control Pro: Cloud-Synced Task DashboardMission Control Pro is a high-performance, mobile-optimized task management application built for real-time productivity. It features a private, cloud-synced backend with an "Archive Vault" system to keep your workspace clean and efficient. 🎯🌟 Key Features☁️ Real-Time Cloud Sync: Instant synchronization between laptop and mobile using Firebase Realtime Database (Asia-Southeast region).🔒 Secure Authentication: Private user accounts with Email/Password login to protect your mission data.📥 Archive Vault: Move completed or old objectives into a hidden vault to declutter your main board.📊 Visual Progress Tracking: A dynamic circular progress ring that calculates your completion rate in real-time.🏷️ Color-Coded Categories: Organize tasks into Work, Home, Personal, or Urgent tags for instant recognition.📱 Mobile Standalone Mode: Optimized meta-tags for a full-screen, app-like experience when added to the home screen.📅 Intelligent Grouping: Automatically categorizes tasks into Previous, Today, and Upcoming (grouped by month).💾 Data Backup: Export your entire task history into a portable JSON file at any time.🛠️ Tech StackFrontend: HTML5, CSS3 (Modern Flexbox/Grid), JavaScript (ES6 Modules)Backend: Firebase Realtime DatabaseAuth: Firebase AuthenticationHosting: GitHub PagesDesign: Google Fonts (Poppins), SVG Vector Graphics⚙️ Setup & Installation1. Firebase Configuration 🔑To get your own instance running, you must provide your Firebase credentials in the firebaseConfig section of index.html:JavaScriptconst firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT-default-rtdb.asia-southeast1.firebasedatabase.app", 
    projectId: "YOUR_PROJECT",
    // ... rest of your config
};
2. Database Security Rules 🛡️Ensure your data remains private by applying these rules in your Firebase Console:JSON{
  "rules": {
    "users": {
      "$uid": {
        ".read": "$uid === auth.uid",
        ".write": "$uid === auth.uid"
      }
    }
  }
}
3. Deployment 🌐Upload index.html to your GitHub repository.Enable GitHub Pages under the Settings tab, selecting the main branch.Access your live link on any device!.📱 Mobile SetupTo use this as a real app on your phone:Open your GitHub Pages URL in your mobile browser.iPhone: Tap Share -> Add to Home Screen.Android: Tap Three Dots -> Add to Home Screen.📈 Progress LogicThe dashboard calculates your daily success using the following logic:$$\text{Completion Percentage} = \left( \frac{\text{Completed Tasks}}{\text{Total Active Tasks}} \right) \times 100$$👨‍💻 AuthorStudent, B.Tech Computer Science and Engineering Galgotias University Specializing in Backend Development & Problem SolvingWould you like me to help you create a "License" file for your repository to protect your code from being used without your permission?
