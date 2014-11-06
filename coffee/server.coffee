# module dependencies
express = require('express')

# set up app
app = module.exports = express()

app.set('views', __dirname + '/')
app.use(express.static(__dirname + '/'))


# home page
home = (req, res) ->
  res.render('index.html')

# Routes
app.get('/', home)

# listen server on port 3000
app.listen(process.env.PORT || 3000)
