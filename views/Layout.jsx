const React = require("react");
const Navbar = require("./Navbar");
const Main = require("./Main");

module.exports = function Layout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* <link rel="stylesheet" href="/style/index.css" /> */}
        {/* <script defer src="/client.js" /> */}
        <title>главная страница</title>
      </head>
      <body className="body">
       
        {children}
      </body>
    </html>
  );
};
