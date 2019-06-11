var wolves = require('../controllers/wolves.js');

module.exports = function(app){
    app.get('/', (req, res) => {
        wolves.index(req, res);
    })
    app.get('/new', (req, res) => {
        wolves.new(req, res);
    })
    app.post('/create', (req, res) => {
        wolves.create(req, res);
    })
    app.get('/wolfpack/:id/edit', (req, res) => {
        wolves.edit(req, res);
    })
    app.get('/wolfpack/:id', (req, res) => {
        wolves.show(req, res);
    })
    app.post('/wolfpack/:id/update', (req, res) => {
        wolves.update(req, res);
    })
    app.get('/wolfpack/:id/destroy', function(req,res){
        wolves.destroy(req, res);
    })
}