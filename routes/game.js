const React = require('react');
const ReactDOMServer = require('react-dom/server');
const Themes = require('../views/Themes');
const Themes1 = require('../db/models/themes')

const router = require('express').Router();

router.get('/', async (req, res) =>{
    const bla = await Themes1.findAll()

const game = React.createElement({bla});
const html = ReactDOMServer.renderToStaticMarkup(game);
res.send(`<!DOCTYPE html>${html}`);
 });
 module.exports = router