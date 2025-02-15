# Cities Application

This is a simple React app that lets users add cities, view a list of cities, and check city details. It follows the Input-Process-Output (IPO) model.

## Input
Users enter **a city name, country, and population** in the "Add City" form. The form makes sure all fields are filled before submitting. Users can also click on any city in the "Cities List" to see its details.

## Process
When the form is submitted, the app captures the input using React's `useState` and temporarily stores the city data. React Router helps with smooth page navigation. Once a city is added, the app redirects users back to the "Cities List."

## Output
The "Cities List" displays all added cities dynamically. Clicking on a city brings up its details, like **country and population**, making it easy to explore different cities.