# Restaurant Search App
**A mobile application built with React Native that helps users discover restaurants based on their location and preferences. This is a learning project that demonstrates React Native development with Expo.**

## Features
* Location-based Search: Find restaurants near your current location or any specified area
* Restaurant Listings: Browse through various restaurants with key information
* Restaurant Details: View comprehensive details including menus and reviews
* Expo Integration: Easy development and testing with Expo Go
* Cross-Platform: Works on both iOS and Android devices

## Getting Started
### Prerequisites
Before running this application, make sure you have:
* Node.js (version 14 or higher)
* npm or yarn package manager
- **Expo Go app installed on your mobile device**
  - [iOS](https://apps.apple.com/us/app/expo-go/id982107779)
  - [Android](https://play.google.com/store/apps/details?id=host.exp.exponent)
    
### Installation
Clone the repository:
```bash
git clone https://github.com/soldelv/restaurant-search-app.git
cd restaurant-search-app
```

### Install dependencies:
```bash
npm install
# or
yarn install
```
### Start the development server:
```bash
npm start
# or
yarn start
# or
expo start
```
### Run the app:
Scan the QR code with the Expo Go app (Android)
For iOS, use the Camera app to scan the QR code
Alternatively, press 'a' to run on Android emulator or 'i' for iOS simulator

## Project Structure
```
restaurant-search-app/
├── assets/             # Images, icons, and other static files
├── src/               
     ├── api/           # Apis
     ├── components/    # Reusable React components
     ├── hooks/         # Navigation configuration
     ├── screens/       # Main screen components
├── App.js              # Main application component
└── app.json            # Expo configuration
```

## Technologies Used
* React Native - Framework for building mobile apps
* Expo - Development platform for React Native
* React Navigation - Routing and navigation for React Native

## Learning Objectives
### This project demonstrates:
* React Native fundamentals
* Expo development workflow
* Mobile UI/UX design principles
* Working with external APIs
* Navigation between screens
* Component-based architecture

### Troubleshooting
If you encounter issues:
* Make sure your device and computer are on the same network
* Ensure you have the latest version of Expo Go
* Try restarting the development server: `npm start -- --reset-cache`

## Acknowledgments
* Built with Expo
* Part of React Native learning journey

