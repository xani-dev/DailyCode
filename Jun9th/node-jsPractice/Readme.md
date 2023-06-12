# JavaScript Node Express API
Project used to illustrate Node, Express and MySQL.

Assignments are located [here](Assignments.md).

# Getting Started
- Fork & Clone this repo
- Install dependencies: `npm install`
- Create `PromisePool.js` in your server directory based from [PromisePool.js.template](PromisePool.js.template)
- From your server directory, start the API: `node index.js` or `nodemon index.js`

# Endpoint Parsing Reference
```
app.get('/person/:id', cors(corsOptions), async (req, res) => { 
    // const result = await mySqlProxy.<YOUR FUNCTION HERE>
    // const id = req.params['id']                  // Read parameters from URL.
    // const personType = req.query['personType']   // Read query parameters from URL.
    // const body = req.body                        // Read request body.
    // res.send(<YOUR OBJECT HERE>)
    res.send({message: 'Hello World'})
})
```

# Notes
- Built with VS Code 
