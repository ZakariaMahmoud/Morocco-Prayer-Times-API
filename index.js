const express = require('express')
const app = express()

app.get('/', (req, res) => {
    res.send('')
})

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

app.listen(3000, () => console.log("Listenin on port 3000..."))

/* Functions */
function removeZero(s) {

    while (s.charAt(0) === '0') {
        s = s.substring(1);
    }

    return s;
}