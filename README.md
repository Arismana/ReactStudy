# React study

## 2025.8.19

1. How to create a react project（Vite）

    npm create vite@latest my-app -- --template react

2. How run it

    npm install

    npm run dev

3. Project Architecture

         my-app/
            node_modules/  # Dependencies
            public/ # Public Static Assets
            src/ # Main Code
              assets/ # Static Assets (images, fonts, CSS, etc.)
              components/ # Reusable Components
              App.jsx # Root Component
              main.jsx # Mount the Root Component to the Template HTML
              xx.css  # Style Files, written separately in a single file (different from Vue)
            index.html # Project Template HTML
            package.json # Records Information about the Project’s Dependency Packages
            package-lock.json # Dependency Lock File
            vite.config.js # Vite Configuration File
            .gitignore # Manage Git Commits and Pushes



