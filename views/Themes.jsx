/* eslint-disable react/prop-types */
const React = require('react');

module.exports = function Themes({ name }) {
  //   console.log(them.name, '>>>>>>>>>>>>>>>>');
  return (
    <div className="otrisovka">
      <div className="card" style={{ width: '18rem' }}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
        </div>
        <button type="button" className="btn btn-primary">
          Lets go!!!
        </button>
      </div>
    </div>
  );
};
