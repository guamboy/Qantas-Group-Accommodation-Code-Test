# Qantas Group Accommodation app (React + TypeScript + Vite)

## Run in dev mode

yarn

yarn dev

# Build and run locally

yarn global add serve
yarn build
serve dist

## Assumptions made in development

# Several assumptions were made.

JSON Payload Types
Preliminary types were assigned to the JSON payload. Ordinarily, the payload would be obtained through API requests (e.g., fetch, axios), but for demonstration purposes, it was directly loaded from a file.

Visual Styling
Colours, fonts, and sizing were aligned to the desired design by eyeballing. They are not pixel-perfect.

Folder Structure
In this implementation, all components are organized within the "components" folder. In a more complex project, components would likely be categorized based on their functionality, possibly following a page-based structure.

Star Rating
For simplicity, CSS was used to create the star rating. Alternatively, SVGs could be employed for more complex and customizable rendering.

Layout
The layout and styling have been developed only for desktop and aren’t optimised for mobile viewing.

## No commit history

There's no commit history. I thought I was emailing you a zip file.

1. Initial Setup: Started by setting up a blank Vite/React/TypeScript application to kick the project off.
2. Static Component Creation: Created the initial static version of the component using HTML and CSS.
3. Data and Types: Incorporated mock data and developed corresponding types to represent the data structure accurately.
4. Data Integration: Integrated the mock data into the application.
5. Component Refinement: Refactored the application by breaking it into distinct components, namely SortBy and HotelContainer. Basic tests were added to ensure the initial functionality.
6. Dynamic Content Rendering: Enhanced the HotelContainer component by introducing dynamic content rendering with the help of functions. Tests were also updated to ensure comprehensive code coverage.
7. Sorting Functionality: Implemented a sorting function to facilitate data organization based on specific criteria.
8. Enhanced Sorting Component: Upgraded the sorting component with accurate types and integrated it with the parent component to enable sorting functionality. Tests were further updated to validate the improved code coverage.
9. Code Cleanup: Conducted essential code cleanup to enhance readability and maintainability.

## Given more time

Further refinment is possible however with the limited time this is as much as I could do.
