import React from 'react';

import './Footer.css';

const Footer = (props) => {

  return (
    <footer className="bg-gray">
      <section className="grid-footer container grid-480">
        <p>
          Licensed under the <a href="https://github.com/stroke-outcome/the-corisk-score/blob/master/LICENSE">MIT License</a>. Version {props.version}
        </p>
        <p>
          Built with ❤ by <a href="https://smalldata.tech">SmallData</a>.
        </p>
      </section>
    </footer>
  );

};

export default Footer;
