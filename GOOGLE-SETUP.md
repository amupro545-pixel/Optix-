# OPTIX - Google sign-in setup (free, about 10 minutes)

> **Important - this is a one-time step for YOU (the owner), not for your users.**
> Google only opens its Gmail account chooser for an app that is registered with Google, and the registration is this Client ID.
> Your visitors never see it or type it: they open your app, tap **Continue with Google**, pick their Gmail account and they are in.
> There is no way for Google to open that chooser without this registration.


OPTIX signs you in with your **Google account** and saves your journal (trades, photos, videos, files, notes, alarms, profile)
in a hidden app folder of **your own Google Drive**. Sign in with the same Google email on any phone or PC and the same journal opens.
There is no other server and no password to remember. Only you can see the data.

> Google sign-in only works when the app is opened from a real web address (https://...), for example GitHub Pages.
> It does not work from a file on your phone or from a preview window.

## 1. Host the files
Upload everything in this folder to a static host (GitHub Pages is free): `index.html`, `styles.css`, `intro.js`, `app.js`, `sw.js`, `manifest.webmanifest`, `.nojekyll`.
Your address will look like `https://YOURNAME.github.io/YOURREPO/`.

## 2. Create the Google project
1. Open https://console.cloud.google.com and create a project (name it OPTIX).
2. **APIs & Services -> Library** -> search **Google Drive API** -> **Enable**.
3. **APIs & Services -> OAuth consent screen** -> **External** -> fill App name (OPTIX), your support email, and the developer contact email.
4. **Scopes** -> **Add or remove scopes** -> add: `openid`, `.../auth/userinfo.email`, `.../auth/userinfo.profile` and **`.../auth/drive.appdata`** (the hidden app folder - not your normal Drive files).
5. While the app is in **Testing**, add your Gmail address under **Test users**. When you are ready for other people, press **Publish app** (these scopes do not need Google review).

## 3. Create the Client ID
1. **APIs & Services -> Credentials -> Create credentials -> OAuth client ID -> Web application**.
2. **Authorized JavaScript origins**: add your site origin only, for example `https://YOURNAME.github.io` (no path, no trailing slash). For tests on your computer also add `http://localhost:8080`.
3. Create it and copy the **Client ID** (ends with `.apps.googleusercontent.com`).

## 4. Put the Client ID in OPTIX
Open `app.js`, find the line
`var OPTIX_GOOGLE_CLIENT_ID="";`
and put the Client ID between the quotes. Upload `app.js` again (and raise the version number in `sw.js`, for example `optix-v4` -> `optix-v5`).
(Or open the app, tap **Set up Google sign-in** on the first screen and paste it - this only sets that one device.)

## How it behaves
- First screen = **Continue with Google**. Log out always returns to this screen.
- **New user**: right after the first sign in OPTIX asks for notification permission, then your trading days (Mon-Fri), trading time and start/end day.
- **Returning user, any device**: sign in with the same Google email and everything is restored, including alarms (no questions asked again).
- Changes are saved to your Google account a few seconds after you make them. Offline, OPTIX keeps working and uploads later.
- Google gives the app a one hour access key. When it ends, OPTIX reconnects the next time you tap the screen; saving then continues.
- Photos, videos and files are stored once in the hidden app folder and downloaded on a new device in the background.

## Optional: "You are registered" email (EmailJS, free, no server)
Google sign-in itself cannot send mail. To send a welcome message to the new user's Gmail, use EmailJS (free plan: 200 emails a month):
1. Create an account at https://www.emailjs.com -> **Email Services -> Add service -> Gmail** (this is the sender account).
2. **Email Templates -> Create**: set **To email** to `{{to_email}}`, subject `Welcome to OPTIX`, and a message such as `Hi {{to_name}}, you are registered to {{app_name}}. Your journal now opens on every device with this Gmail.`
3. Copy the **Service ID**, **Template ID** and your **Public Key** (Account page).
4. In `app.js` fill the line `var OPTIX_EMAILJS={service:"",template:"",key:""};` and upload the file again.
The email is sent once, when a brand new Google user signs in for the first time.
