
# RwandaConnect – Rwanda Opportunities Explorer

## Project Overview

RwandaConnect is a React web application that helps people discover opportunities across Rwanda. Users can explore workshops, career events, community activities and short courses in different cities.

The application allows users to search, filter, sort, save and add opportunities.

## Technologies Used

- React
- Vite
- JavaScript
- Tailwind CSS v4
- HTML5
- CSS3

## Main Features

### 1. Explore Opportunities

- Displays 12 sample opportunities.
- Shows opportunity titles, descriptions, categories, cities, dates, prices and available places.
- Highlights featured opportunities.
- Identifies free and fully booked opportunities.

### 2. Search and Filtering

- Search by opportunity title or city.
- Filter by category.
- Show available opportunities only.
- Show saved opportunities only.
- Combine multiple filters.
- Reset filters.

### 3. Sorting

- Sort by earliest date.
- Sort alphabetically by title.
- Sort by the highest number of available places.

### 4. Save Opportunities

- Save opportunities.
- Unsave opportunities.
- Filter to display saved opportunities.

### 5. Add New Opportunities

- Add a new opportunity using a controlled form.
- Select a category and enter opportunity details.
- Validate required fields.
- Validate dates, capacity and price.
- Display success and validation messages.
- Clear the form.

### 6. UI States

- Loading demonstration state.
- Error demonstration state.
- Opportunity listing state.
- Empty search results with a reset option.

## Sample Data

The application includes sample opportunities from:

- Kigali
- Huye
- Musanze

Opportunity categories include:

- Workshops
- Career Events
- Community Activities
- Short Courses

## Installation

Clone the repository:

    git clone https://github.com/YOUR-GITHUB-USERNAME/rwanda-opportunities-explorer.git

Move into the project directory:

    cd rwanda-opportunities-explorer

Install dependencies:

    npm install

Start the development server:

    npm run dev

Open the local URL provided by Vite in your browser.

## Project Structure

    rwanda-opportunities-explorer/
    ├── public/
    ├── src/
    │   ├── components/
    │   │   ├── AddOpportunityForm.jsx
    │   │   ├── Badge.jsx
    │   │   ├── Button.jsx
    │   │   ├── OpportunityCard.jsx
    │   │   ├── OpportunityFilters.jsx
    │   │   └── OpportunityList.jsx
    │   ├── data/
    │   │   └── seedOpportunities.js
    │   ├── App.jsx
    │   ├── App.css
    │   ├── index.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    └── README.md

## Project Limitations

This is a frontend-only educational project. It uses local sample data and React state. It does not use a backend, database or external API.

New opportunities and saved selections are kept in application state and are not permanently stored.

