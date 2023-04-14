const React = require('react');

const Layout = require('./Layout');
// const Themes = require('./Themes');

module.exports = function Main({ themes }) {
  return (

    <Layout>
      <div>
        {themes.map((theme) => (
          <p>key={theme.id} name={theme.theme} </p>
        ))}
      </div>
    </Layout>
  );
};
