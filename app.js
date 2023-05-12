const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('public'))

var items = ['kill anand' , 'learn new thing']

app.get('/', (req, res) => {
    
    var today = new Date();

    var options = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }

    var day = today.toLocaleDateString("en-US", options)
    res.render("list", { kindOfDay: day , newListItems : items  })
});
app.post('/', (req, res) => {
    todo = req.body.newItem
    items.push(todo)
    res.redirect('/')
})


app.listen(3000, () => {
    console.log("server started running at port 3000")
});
