# OPTIX Trading Journal

Installable offline trading journal. Files:

- `index.html` - page markup
- `styles.css` - all styling (liquid glass look, mobile + desktop layouts)
- `intro.js` - opening animation
- `app.js` - the application (journal, calendar, analytics, alarms, PDF export, Google account + Drive sync)
- `sw.js` - service worker (offline cache + phone notifications)
- `manifest.webmanifest` - lets the browser offer the app on the home screen

## Quick start
1. Follow **GOOGLE-SETUP.md** (Google Client ID, 10 minutes).
2. Upload all files to GitHub Pages (or Netlify / Vercel / Cloudflare Pages).
3. Open the https address in Chrome -> menu -> **Install app**.
4. Sign in with Google. Turn on **Settings -> Notifications** (it asks the real browser permission and shows a real test notification).

## Phone notifications
Alarms are set in **Tools -> Alarm** (days, time, start/end day, deadline). From the alarm time you get a notification every hour with a rotating message until you save a trade that day; after the deadline they turn into red DANGER alerts.
Notifications appear outside the app in the normal phone notification area (installed app, via the service worker).

Honest limit: a website cannot run an exact timer while the phone has it fully closed. The app uses what the browser allows (exact scheduled notifications where Chrome supports them, background checks for the installed app, and checks while the app is open or recent). For guaranteed exact alarms with the app fully closed you need a native Android wrapper; the page already calls `window.Android.scheduleAlarms(json)`, `showNotification`, `requestNotificationPermission`, `openNotificationSettings`, `setNotificationsEnabled`, `cancelAlarm` and `saveFile` if such a wrapper provides them.

## Updating
Replace the changed files and raise the `CACHE` name in `sw.js` (for example `optix-v5`).
