# Foonda: Empowering Education and Career Discovery

### Foonda is an innovative platform designed to help South Africans explore educational opportunities, bursaries, and career paths tailored to their individual strengths, interests, and aspirations. By providing a personalized experience, Foonda bridges the gap between ambition and opportunity, offering a centralized hub for students, parents, and professionals to make informed decisions about their future.
Features

- Comprehensive Dataset: Includes information on South African universities, TVET colleges, bursaries, courses, and careers.
- Personalized Recommendations: Guides users based on their interests, strengths, and educational background.
- Relational Data: Simulates a real-world database with connected data for institutions, bursaries, careers, and users.
- Scalable Architecture: Designed for future enhancements, including a robust backend API and dynamic user profiles.

### Tech Stack

- Frontend: React
- Backend: Apollo Server with GraphQL
- Mock Data: JSON mock data generated with @faker-js/faker
- Hosting: Netlify (frontend) and Heroku/Render (backend)
- State Management: Apollo Client
- Styling: Styled Components
- Testing: Jest and React Testing Library

## Getting Started

### Prerequisites

- Node.js installed on your machine.
- ```json-graphql-server``` package installed globally (if not, install it using ``` npm install -g json-graphql-server ```).

### Steps to Set Up the Mock Server

### Clone the repository:

```
git clone https://github.com/aya-mash/foonda.git
cd foonda
```

### Navigate to the mock-data directory:

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

### Project Structure

    /mock-data: Contains the data generator script and generated JSON file.
    /frontend: React-based frontend application for user interaction.
    /backend: (Future) Apollo Server backend for real-world API integration.

### Future Enhancements

- Implement dynamic filters for course and career searches.
- Add user authentication and profiles.
- Integrate real-world APIs for live bursary and career updates.
- Provide multi-language support (e.g., English, isiXhosa, isiZulu).
