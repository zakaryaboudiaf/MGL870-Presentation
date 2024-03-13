

mainRouteController = (req, res) => {
    res.send('Hello World!')
}

userRouteController = (req, res) => {
    res.send('Hello user!')
}

usersRouteController = (req, res) => {
    res.send('Hello users!')
}
module.exports = { mainRouteController , userRouteController , usersRouteController }