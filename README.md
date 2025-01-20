# Foonda: Empowering Education and Career Discovery

Foonda is an innovative platform designed to help South Africans explore educational opportunities, bursaries, and career paths tailored to their individual strengths, interests, and aspirations. By providing a personalized experience, Foonda bridges the gap between ambition and opportunity, offering a centralized hub for students, parents, and professionals to make informed decisions about their future.

### Features

- Comprehensive Dataset: Includes information on South African universities, TVET colleges, bursaries, courses, and careers.
- Personalized Recommendations: Guides users based on their interests, strengths, and educational background.
- Relational Data: Simulates a real-world database with connected data for institutions, bursaries, careers, and users.
- Scalable Architecture: Designed for future enhancements, including a robust backend API and dynamic user profiles.

### Tech Stack

- React: JavaScript library for building user interfaces.
- TypeScript: JavaScript with static types.
- Zustand: State management library for managing app state.
- Tailwind CSS: Utility-first CSS framework for fast UI design.
- Framer Motion: Animation library for interactive and engaging animations.
- Vite: Fast build tool and development server for React apps.
- UI/UX: Material-UI (MUI) for components and styling
- Backend: Apollo Server with GraphQL
- Mock Data: JSON mock data generated with @faker-js/faker
- Hosting: Netlify (frontend) and Heroku/Render (backend)
- State Management: Apollo Client
- Real-time Updates: Stay updated with the latest course offerings, career opportunities, and bursaries using GraphQL Subscriptions.
- Styling: MUI (Material-UI) for UI components and theme management
- Testing: Jest and React Testing Library



## Getting Started

### Prerequisites

- Node.js installed on your machine.
- ```json-graphql-server``` package installed globally (if not, install it using ``` npm install -g json-graphql-server ```).




### Steps to Set Up the Mock Server

#### Clone the repository:

```
git clone https://github.com/aya-mash/foonda.git
cd foonda
```

#### Navigate to the mock-data directory:

```
cd mock-data
```

### Generate the mock data:

```
node dataGenerator.js
```

### This will create a foonda_data.json file containing realistic relational mock data.



### Start the mock server:

```
json-graphql-server foonda_data.json
```

The server will be available at http://localhost:3000/graphql.


### Steps to Run the Frontend Application

Navigate to the frontend directory:

```cd ../frontend```

Install the dependencies:

```npm install``` or ```yarn install```

Start the development server with Vite:

```npm run dev```, ```yarn dev``` or ```yarn start```

The frontend application will be available at http://localhost:5173.

Open the app in your browser and start exploring the platform!

### Project Structure

```/foonda
  ├── /mock-data      # Mock data generation for backend
  ├── /src            # Source files for frontend (React, Zustand, etc.)
  ├── /public         # Static assets (images, etc.)
  ├── package.json    # Project metadata and dependencies
  ├── tsconfig.json   # TypeScript configuration
  ├── .env            # Environment variables (API keys, etc.)
```


### Future Enhancements

- Implement dynamic filters for course and career searches.
- Add user authentication and profiles.
- Integrate real-world APIs for live bursary and career updates.
- Provide multi-language support (e.g., English, isiXhosa, isiZulu).
