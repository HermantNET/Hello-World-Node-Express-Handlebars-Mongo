var express = require('express')
var router = express.Router()

var bodyParser = require('body-parser')

// Router Middleware
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
    extended: true
}))

router.get('/', function(req, res) {
    res.render('index', { place: "World", video_url: 'public/video/dance.webm' })
})

router.get('/lol', function(req, res) {
    var collection = db.collection('champions')
    collection.find().toArray(function(err, results) {
        res.render('lol', {
            "champions": results,
            "name": results.name,
            "role": results.role,
            "img_path": results.img_path
        })
    })
})

router.post('/add_champ', function(req, res) {
    var champ = {
        name: req.body.name,
        role: req.body.role,
        img_path: ('public/lol/' + req.body.name + '.png').toLowerCase()
    }

    var collection = db.collection('champions')
    collection.insert(champ)
    res.redirect(router.get('/lol'))
})

router.post('/form_handler', function(req, res) {
    var str = req.body.user_name;
    switch (true) {
        case /\%/.test(str):
            res.render('index', { place: (Math.floor(Math.random() * 100) + 1), video_url: 'public/video/drift.webm' })
            break;

        case /420|weed|marijuana|pot|ganja|blaze|alien|ay/.test(str):
            res.render('index', { place: str, video_url: 'public/video/alien_trap.webm' })
            break;

        default:
            res.render('index', { place: str, video_url: 'public/video/idubz.webm' })
    }
})

module.exports = router