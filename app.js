const express = require('express')
const app = express()

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/api/:city/:year/:month/:day?', (req, res) => {

    var city = (req.params.city >= 1 && req.params.city <= 115) ? req.params.city : 0;
    var month = (req.params.month >= 1 && req.params.month <= 12) ? removeZero(req.params.month) : 0;
    var day = (req.params.day && req.params.day >= 1 && req.params.day <= 31) ? removeZero(req.params.day) : 0;
    if (city && month) {

        const data = require(`./${req.params.year}/${city}/${month}`)

        if (day) { res.json(data[`${day}`]) } else res.json(data)
    } else {
        res.send("0");
    }
})

app.get('/api/:city/today', (req, res) => {

    var city = (req.params.city >= 1 && req.params.city <= 115) ? req.params.city : 0;
    var d = new Date();
    
        if (req.query.timezone) {
            
            timezone = req.query.timezone;
            timezone = timezone.replace(" ", "+")
            d = convertTZ(d, timezone)
        } else {
            d = convertTZ(d, "Africa/Casablanca");
        }

    var path = `./${d.getFullYear()}/${city}/${(d.getMonth() + 1)}`

    const data = require(path)

    res.json(data[d.getDate()])

})

app.get('/api/cities/:id?', (req, res) => {
    const data = require('./cities')
    id = (req.params.id >= 1 && req.params.id <= 115) ? req.params.id : 0;
    if (id) {
        res.json(data[id.toString()])
    } else {
        res.json(data)
    }
    
})


app.get('/api/', (req, res) => {
    
    res.sendFile(__dirname +"/public/index.html");
})

app.get('*', (req, res) => {
    res.send("Coming Soon")
})



app.listen(3000, () => console.log("Listenin on port 3000..."))

/* Functions */
function removeZero(s) {

    while (s.charAt(0) === '0') {
        s = s.substring(1);
    }

    return s;
}

function convertTZ(date, tzString) {
    
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
}