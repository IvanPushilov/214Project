const React = require('react');
const ReactDOMServer = require('react-dom/server');
const router = require('express').Router();
const Themes = require('../db/models')
const Main = require('../views/Main')

// router.get('/', async (req, res) =>{
    

// const game = React.createElement({bla});
// const html = ReactDOMServer.renderToStaticMarkup(game);
// res.send(`<!DOCTYPE html>${html}`);
//  });



router.get('/', async (req, res) =>{
    const themes = await Themes.findAll()
const main = React.createElement(Main, {themes});
const html = ReactDOMServer.renderToStaticMarkup(main);
res.send(`<!DOCTYPE html>${html}`);

 });

 module.exports = router