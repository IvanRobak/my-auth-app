# Authentication App with Next.js and Firebase

A modern authentication application built with Next.js, TypeScript, Material-UI, and Firebase Authentication.

## Features

- User registration with email and password
- User login with email and password
- Password reset functionality
- Protected routes
- Modern UI with Material-UI components
- TypeScript for type safety
- Responsive design

## Prerequisites

- Node.js 16.x or later
- npm or yarn
- Firebase account and project

## Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd my-auth-app
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a Firebase project and enable Email/Password authentication:
   - Go to the [Firebase Console](https://console.firebase.google.com/)
   - Create a new project or select an existing one
   - Go to Authentication > Sign-in method
   - Enable Email/Password authentication

4. Configure environment variables:
   - Copy `.env.local.example` to `.env.local`
   - Replace the placeholder values with your Firebase project configuration
   - You can find these values in your Firebase project settings

5. Run the development server:
```bash
npm run dev
# or
yarn dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
src/
├── components/         # Reusable UI components
├── firebase/          # Firebase configuration
├── hooks/             # Custom React hooks
└── pages/             # Next.js pages
    ├── login.tsx      # Login page
    ├── register.tsx   # Registration page
    ├── forgot-password.tsx  # Forgot password page
    ├── reset-password.tsx   # Password reset page
    └── home.tsx       # Protected home page
```

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production application
- `npm start` - Start the production server
- `npm run lint` - Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Material-UI](https://mui.com/) - UI components
- [Firebase](https://firebase.google.com/) - Authentication
- [React](https://reactjs.org/) - UI library

## License

MIT
