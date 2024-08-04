// Create web server
const express = require('express')
const app = express()
// Create a router
const router = express.Router()

// Add a route to the router
router.get('/comments', (req, res) => {
    res.send('Comments page')
})

// Add the router to the app
app.use('/', router)

// Start the server
app.listen(3000, () => {
    console.log('Server started')
})

// Test the route
// http://localhost:3000/comments