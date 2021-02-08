# Create NodeJS / ExpressJS server

**Requiements :**
- Have node install
- Have npm install

## Create the node project 
```js
npm init -y 
```
*-y argument stands for accept all declaration by default*

### Create a index.js file (Or whatEverName.js)

### (Optionnal)
Update the package.json to add the following : 
```json 
"start" : "node index.js"
```
*The script will be run by using 'npm start'*

```json 
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node index.js"
  },
```

### Install express
```bash
npm install express
```

### Import express into the index.js file 
```js
const express = require("express")
```

### Create new instance of express
```js
const app = express()
```

### Create a basic route 
```js
app.get("/", function (req, res) {
    res.send("Hello world")
})
```
*req stand for request and req for response*
(Request is sent by client, and response will be send to client)

### Let's the app listening to a port 
```js
app.listen(3000, function(){
    console.log("Server is running on http://localhost:3000")
})
```
*Can change the port if need, whatever*


### Server can now be launch ! 
```bash
npm start
```
OR
```bash
node index.js
```

# Plus

## Auto restart server on change
*Add nodemon module*
```bash
npm install nodemon
```
*Update package.json*
```json
"start" : "nodemon index.js"
```

## Add many route as needed
```js

app.get("/contact", (req, res) => {
    res.send("Contact")
})

app.post("/form", (req, res) => {
    res.json("Post page")
})
```

## 404
Should be the last route on the file.
If route is not found, express will call the wildcard *
```js
app.get("/*", (req, res) => {
    res.send("404 not found")
})
```

## Return JSON 
```js
app.get("/json", (req, res) => {
    res.json([
        {
            item: 1,
            name: "01"
        },{
            item: 2,
            name:"02"
        }
    ])
})
```


## Communicate with front app
### Front end
*Create folder like 'front' and create in index.html*

```html 
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Express</title>
</head>
<body>

    <h1>I'm front app</h1>
    <h2>And i want to get server datas</h2>

    <script>
        fetch("http://localhost:3000/json")
        .then(rep => rep.json())
        .then(rep => console.log("Server response is : ", rep))
    </script>
</body>
</html>
```
*Fetch will request the server*

### Back end
```bash
npm install cors
```

Add cors and tell express to use it 

```js 
const cors = require("cors")
app.use(cors())
```
*cors will enable an app to request the server*
