const express = require('express')

const { mainRouteController } = require("../CI of Node APP/src/controllerrs/controllers")
const { userRouteController } = require("../CI of Node APP/src/controllerrs/controllers")
const { usersRouteController } = require("../CI of Node APP/src/controllerrs/controllers")

const app = express()
const port = 5000


app.get('/', mainRouteController )

app.get('/user', userRouteController)

app.get('/users', usersRouteController)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})