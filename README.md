Default Route (/):
Method: GET
Description: Renders the default home page with the title "Express."
Todo List Route (/todos):

Method: GET
Description: Retrieves all todos from the database and returns them as JSON. Handles errors and sends a 500 status with an error message if any issues occur.
Todo by ID Route (/todos/:id):

Method: GET
Description: Retrieves a specific todo by its ID from the database and returns it as JSON. Handles errors and sends a 500 status with an error message if any issues occur.
Create Todo Route (/todos):

Method: POST
Description: Creates a new todo in the database based on the provided request body parameters (id, desc, completed). Returns the created todo as JSON. Handles errors and sends a 500 status with an error message if any issues occur.
Update Todo Route (/todos/:id):

Method: PUT
Description: Updates an existing todo in the database based on the provided ID and request body parameters (desc, completed). Returns the updated todo as JSON. Handles errors and sends a 404 status if the todo with the given ID is not found, and a 500 status with an error message for other issues.
Delete Todo Route (/todos/:id):

Method: DELETE
Description: Deletes a todo from the database based on the provided ID. Returns the ID of the deleted todo. Handles errors and sends a 404 status if the todo with the given ID is not found, and a 500 status with an error message for other issues.
