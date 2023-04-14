require('@babel/register');
const express = require('express');
const mainRouter = require('./routes/mainRouter')
// const game = require('./routes/game');

const app = express();



app.use(mainRouter);
// app.use(game);


app.listen(3000, () => {
  console.log(`Server started at 3000 port`);
});
