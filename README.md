# React | TypeScript | API Integration | Material-Ui

This is a React Application with TypeScript based E-commerce app and configured with:

1. **Linters:** ESLint and Prettier.
2. **TypeScript and React specific folders:** `components`, `containers`, `store`, `icons`, `interfaces`, `lib`, `reducers`, `routes`, `services`,`css`, and `actions` (Folder Structure).
3. **Styled-Components:** configured Material-UI types.
4. **Redux:** for state management.

## Project structure

The app has the following structure:

`components`, `containers`, `store`, `icons`, `interfaces`, `lib`, `reducers`, `routes`, `services`, and `actions`

- `components`: React components used accross the app.
- `containers`: Holding the business logic and perform actions and be limited to the page-specific logic.
- `store`: Redux store which Contains single object with holind entire data of application.
- `icons`: Static SVG Icons
- `interfaces`: Define interfaces for each modules and each page.
- `lib`: Contains the unilities function and constant values
- `reducers`: Contains what should next once Action will perform.
- `routes`: used for redirection from one page to another.
- `services`: define services and api calls.
- `actions`: Define functions for what to do.

### Tasks : What I done.

1. Create React Application with TypeScript based E-commerce app.
2. Used Material UI for Design - https://v4.mui.com/
3. Used this Template for design - https://www.figma.com/file/f2lq64bTjXzIWLojR096bs/Fashion-Website-TemplateKit?node-id=1%3A3
4. App perform like below step,
   - Home Screen
     - Click on Shop button
     - User can see the Current location on Header.
   - Products Screen
     - Click on any product and redirect to Product Detail Page
     - Filters functionality
     - Sorting functionality.
     - Search functionality.
     - Pagination.
   - Product Details Page
     - Click on Add to Cart button
   - Cart Screen
     - List of Card and you can remove from Cart As well.
5. App is resonsive as much as i can.
6. Divide component as much as i can. It could be more but due to time constraint i did not done more.
7. Used CRUD APIs from these docs - https://fakestoreapi.com/docs for retrieving the product details.
8. Setup ESLint for Code standardrization.
9. Setup Prettier for Code format.
10. WriteTechnical documentation on README.md file for how approach and solution.
11. Implementation of geo-location which gets the current user’s location.

### Notes

1. Used fetch for API call. we can also use [Axios](https://github.com/axios/axios).
2. Crete seperate File for API call where you can see it requires only one time implemetation and it will used allover the app as when require.

### I Make sure below things for this app.

1. _Structure of the code:_ both in terms of the actual code and the organization of files/folders.
2. _React patterns:_ efficient and well-structure React code.
3. _TypeScript:_ clear, helpful and explicit use of TypeScript.
4. _Documentation:_ clear and well commented your code.
5. _Git processes:_ clear and well-structured your commits and commit messages are.

## Prerequisites

To set up the codebase and the required dependencies, simply run the following command.

```bash
$ npm i
```

## Running the app

```bash
# development
$ npm run start

# production
$ npm run build && npm run start
```
