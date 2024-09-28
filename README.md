# Country Info Application

## Overview

This project provides an API and frontend application to retrieve and display country information, including names, flags, border countries, and population data over time.

# Getting Started

## Backend Setup

Navigate to the API Directory, Open your terminal and run:

```bash
cd api

npm install
```

Environment Variables: Ensure that the .env file is correctly set up. (Note: This file has been included in the repository as per task requirements.)

Start the Server: Run the following command to start the backend serve

```bash
npm run start
```

You should see:

```bash
Server listening on port http://localhost:3001/
```

## API Endpoints:

Access the home route:

```bash
http://localhost:3001/
```

Response: "Welcome to country info api"

-    List all available countries:

```bash
http://localhost:3001/countries/
```

This returns an array of available countries whit names and codes.

-    Get detailed information about a specific country:

```bash
http://localhost:3001/countries/{countryCode}

// Example http://localhost:3001/countries/arg
```

Response includes the country name, flag, bordering countries, and population data.

-    Error Handling:
     Valid country codes can be 2-letter (e.g., "AR") or 3-letter (e.g., "ARG"). Invalid codes return an error message, while missing information fields return empty values (e.g., "flag": "").

# Frontend Setup

Keep the Backend Server Running, Open a New Terminal Tab and run:

```bash
cd client

npm install
```

Start the Frontend Development Server: Execute:

```bash
npm run dev
```

The frontend will be available at:

```bash
http://localhost:3000/
```

Usage:

-    Visit the landing page and click on "Welcome to Country Info App" to view the list of countries (a GET request is made to the backend).

-    Select a country to see its details, including the name, flag, bordering countries, and population data over time.

-    Clicking on a bordering country will navigate to its detail screen.
