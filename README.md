# BYTEGENIE TEST UI

This project is a React-based frontend for querying data from an API and displaying the results in a table format. It uses Material-UI for styling and components, and Axios for making API requests.

## Key Functionalities

1. **Search Input**: A search bar where users can enter a query.
2. **Submit Button**: A button to submit the search query to the backend API.
3. **Loading Indicator**: Shows a loading indicator while the request is being processed.
4. **Error Handling**: Displays an error message if the API request fails.
5. **Result Display**: Shows the generated query and the results in a table format.
6. **Dynamic Table**: The table headers and rows are dynamically generated based on the API response.
## Project Setup
To run the project first you need to install node any version then open project and run
 ```bash
 npm install
```
after that to start the project you just need to run command 
 ```bash
 npm start
```
## API Endpoints

The UI interacts with the following API endpoint:

- `POST /generate_query`: This endpoint accepts a JSON body with a `question` field and returns the generated SQL query, column names, and results.

## API Endpoints

- `POST /generate_query`: 
  - **Description**: Generates an SQL query based on the user-provided question and executes it against the database.

  - **Request URL**: We need to provide url local ip address from backend code to here in the request url 
    ```djangourlpath
    http://192.168.1.252:5000/generate_query"
     ```
  - **Request Body**: JSON object with a single field `question` (string).
    ```json
    {
      "question": "your query here"
    }
    ```
  - **Response**: JSON object with the generated `query` (string), `column_names` (array of strings), and `results` (array of arrays).
    ```json
    {
      "query": "SELECT * FROM table WHERE condition",
      "column_names": ["column1", "column2", "column3"],
      "results": [
        ["value1", "value2", "value3"],
        ["value4", "value5", "value6"]
      ]
    }
    ```
## Key Challenges

1. **State Management**: Managing the state for search value, loading indicator, error messages, query, table headers, and table rows.
2. **Asynchronous API Requests**: Handling asynchronous API requests and updating the UI accordingly.
3. **Error Handling**: Properly catching and displaying errors from the API.
4. **Dynamic Table Rendering**: Rendering a table dynamically based on the API response structure.

## Improvements

If given more time, the following improvements could be made:

1. **Enhanced Error Handling**: Provide more detailed error messages and possibly retry logic.
2. **Form Validation**: Add validation to the search input to ensure valid queries.
3. **Loading States**: Improve the loading states to provide better feedback to the user.
4. **UI/UX Enhancements**: Enhance the overall UI/UX, such as adding animations, improving responsiveness, and making the design more visually appealing.
5. **Testing**: Implement comprehensive unit and integration tests for the components.
6. **Code Optimization**: Refactor the code to make it more modular and maintainable.

## How to Run

1. **Clone the Repository**: 
   ```sh
   git clone https://github.com/yourusername/bytegenie-test-ui.git
   ```