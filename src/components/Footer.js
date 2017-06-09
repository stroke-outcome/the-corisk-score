import React from 'react';

import './Footer.css';

const Footer = (props) => {

  return (
    <footer className="bg-gray">
      <section id="copyright" className="grid-footer container grid-480 text-center">
        Built with ❤ by <a href="https://smalldata.tech">SmallData</a>. Licensed under the <a href="https://github.com/usb-neurology/the-corisk-score/blob/master/LICENSE">MIT License</a>.
      </section>
    </footer>
  );

};

export default Footer;
