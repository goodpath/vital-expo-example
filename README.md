# Welcome to your Expo app 👋

This is an [Expo](https://expo.dev) project created with [`create-expo-app`](https://www.npmjs.com/package/create-expo-app).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Start the app

   ```bash
    npx expo start
   ```

In the output, you'll find options to open the app in a

- [development build](https://docs.expo.dev/develop/development-builds/introduction/)
- [Android emulator](https://docs.expo.dev/workflow/android-studio-emulator/)
- [iOS simulator](https://docs.expo.dev/workflow/ios-simulator/)
- [Expo Go](https://expo.dev/go), a limited sandbox for trying out app development with Expo

You can start developing by editing the files inside the **app** directory. This project uses [file-based routing](https://docs.expo.dev/router/introduction).

## Get a fresh project

When you're ready, run:

```bash
npm run reset-project
```

This command will move the starter code to the **app-example** directory and create a blank **app** directory where you can start developing.

## Learn more

To learn more about developing your project with Expo, look at the following resources:

- [Expo documentation](https://docs.expo.dev/): Learn fundamentals, or go into advanced topics with our [guides](https://docs.expo.dev/guides).
- [Learn Expo tutorial](https://docs.expo.dev/tutorial/introduction/): Follow a step-by-step tutorial where you'll create a project that runs on Android, iOS, and the web.

## Join the community

Join our community of developers creating universal apps.

- [Expo on GitHub](https://github.com/expo/expo): View our open source platform and contribute.
- [Discord community](https://chat.expo.dev): Chat with Expo users and ask questions.

## Setup to add Vital SDK

- Created project with standard expo creation: `npx create-expo-app@latest vital-expo-example`
- Copy in `.node-version` and `.nvmrc` to set a default node version to use.
- Verify native code can build with `npx expo run:android` (set a package name).
- Downgrade to expo 50 since vital fails to run with expo 51. Re-verify native apps build/run.
- Add the vital libraries (with patches for now since they don't work with expo).
  - Requires `patch-package` package for patches and `expo-build-properties` package for setting minimum SDK versions for iOS / Android.
- Add permissions, min app version configs, and vital expo plugin configs to app.json.
- Add a new tab for vital with buttons to sign in and request permissions
- Add the signing and permission request functionality the buttons can use.

The app expects a `.env` file that looks like the following:

```
EXPO_PUBLIC_VITAL_API_KEY=YOUR_VITAL_API_KEY
EXPO_PUBLIC_VITAL_ENVIRONMENT=sandbox
EXPO_PUBLIC_VITAL_COUNTRY=us
EXPO_PUBLIC_VITAL_USER_ID=YOUR_VITAL_USER_ID
```

where `YOUR_VITAL_API_KEY` is your API key and `YOUR_VITAL_USER_ID` is a user ID of an existing user. The country and environment can be
changed as desired, but sandbox and us is assumed for the example.

- NOTE: This uses the API key signing flow to simplify the example (no backend server). Real apps should use the vital sign in token.

## Running native builds

First you need to install node dependencies with `npm install`.

Then you can run the native builds with either:

- Android: `npm run android -- -d`
- iOS: `npm run ios -- -d`

These will prompt for the device to install and run on. You must have native tools installed to perform the builds (e.g., cocoapods / xcode for iOS and android studio / java 17 for android).
