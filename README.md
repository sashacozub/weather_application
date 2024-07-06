# Weather Application

This is a university project developed for the Web Development subject.

- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
  - [Accessing the Application](#accessing-the-application)
- [Architecture Diagram](#accessing-the-application)
- [Application Screenshot](#accessing-the-application)

## Overview

The aim of this project is to create a weather application that delivers real-time weather information for the user’s desired location. It caters to travelers, hikers, photographers, event planners, and anyone needing timely weather forecasts.

## Features

- **Location Selection**: Users can specify their desired location by entering a city name or choosing to get the weather from their current location.
- **Real-time Weather Information**: The application displays real-time weather information, including temperature, wind speed, and weather conditions.
- **Forecast**: Users can view a 5-day forecast to plan ahead.
- **Customization**: Users can toggle between different temperature units (e.g., Celsius, Fahrenheit).
- **Responsive Design**: The application is responsive and works seamlessly across desktop and mobile devices.

## Technologies Used

- Next.js
- Tailwind CSS
- [openweathermap](https://openweathermap.org/) API
- axios
- TanStack Query

## Getting Started

### Prerequisites

- Node.js
- npm or yarn package manager

### Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/your-username/your-project.git
   ```

2. **Navigate into the project directory:**

   ```sh
   cd your-project
   ```

3. **Install dependencies:**

   ```sh
   npm install
   ```

   or

   ```sh
   yarn install
   ```

4. **Set Up Environment Variables:**

   To insert your API key, open the .env.local file in the root directory and replace YOUR_API_KEY with your actual API key from openweathermap.org.

### Running the Application

To run the application locally, use the following command:

```sh
npm run dev
```

To build the application for production, use the following command:

```sh
npm run build
```

After building the application, you can start the production server using:

```sh
npm start
```

These commands will build the optimized production bundle and start a production server to serve the application.

### Accessing the Application

After running the application locally, you should be able to access it in your web browser using the following URL: http://localhost:3000. If you encounter any issues accessing it, ensure that the server started by your IDE is running correctly.

## Architecture Diagram

<img src="https://i.imgur.com/qU43SHd.png" alt="architecture diagram for weather application" width="1080"/>

## Application Screenshot

<img src="https://i.imgur.com/ZQdZ0fC.png" alt="screenshot of weather application" width="1080"/>
