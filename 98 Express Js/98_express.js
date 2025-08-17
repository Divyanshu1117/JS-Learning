const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(req.query.name);
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'));
    // res.send('about')
})

app.get('/contact', (req, res) => {
    res.send('contact')
})

app.get('/map', (req, res) => {
    res.send('map')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})




// http://localhost:3000/?name=Divyanshu
// npm install express
//  npm i -g nodemon
// nodemon .\98_express.js

/*

Extra Notes:

1. To run the server (starts your Express app normally):
   node 98_express.js
   -> This directly runs your file using Node.js.

2. Install nodemon globally (one-time setup):
   npm i -g nodemon
   -> "nodemon" is a tool that automatically restarts your server
      whenever you make changes in the code, so you don't need to
      manually stop & start Node.js every time.

3. Run the server using nodemon:
   nodemon .\98_express.js
   -> This starts your app with nodemon.
      If you edit your code and save, the server will restart automatically.

4. Test URL (with query parameter):
   http://localhost:3000/?name=Divyanshu
   -> Output: Hello Divyanshu!
*/

// npm install express
// npm i -g nodemon
// nodemon .\98_express.js