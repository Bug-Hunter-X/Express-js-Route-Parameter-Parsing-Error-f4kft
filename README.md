# Express.js Route Parameter Parsing Error
This repository demonstrates a common error in Express.js applications: improper handling of route parameters. The `bug.js` file contains code with a vulnerability in route parameter parsing.  The `bugSolution.js` file shows how to fix this vulnerability. 

**Problem:** The original code attempts to parse a user ID from a route parameter. However, it lacks validation and error handling. If the `userId` parameter is not a number or if no user with that ID exists, the application will crash or return an unexpected error.

**Solution:** The improved code includes input validation to ensure that `userId` is a number and provides comprehensive error handling to return appropriate HTTP status codes (e.g., 400 Bad Request, 404 Not Found) with informative messages.