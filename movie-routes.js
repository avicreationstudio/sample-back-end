const express = require('express');

const movieRouter = express.Router();

const db = {
    movies_list: ["godzilla", "king kong"]
};

// movie routing
// CRUD : READ
movieRouter.get('/', (req, res) => {
    res.json({
        msg: 'data coming from server',
        data: db
    });
});

// CRUD : CREATE
movieRouter.post('/', (req, res) => {
    const obj = req.body;
    db.movies_list.push(obj.name);
    res.json({
        msg: 'new item added in db'
    });
});

// CRUD : UPDATE
movieRouter.put('/:id', (req, res) => {
    const idx = req.params.id;
    const obj = req.body;
    db.movies_list[idx] = obj.name;
    res.json({
        msg: 'your data has been updated'
    });
});

module.exports = movieRouter;