// Create web server
// 1. Import express module
const express = require('express');
// 2. Create an express server
const app = express();
// 3. Define a port
const port = 3000;
// 4. Define a route
app.get('/', (req, res) => {
    res.send('Hello World!');
});
// 5. Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});