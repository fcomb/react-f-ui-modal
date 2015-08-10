import React from 'react';
import ExampleModal from 'components/modals/example';

import 'styles/default';

React.render((
  <section className="container">
    <div>
      <h1 className="header-title text-center">
        <a href="https://github.com/fcomb/react-f-ui-modal" className="header-title-link">Modal component for React</a>
      </h1>
      <ExampleModal className="container-modal text-center">
        <button className="button-cta">Launch example modal</button>
      </ExampleModal>
    </div>
  </section>
), document.getElementById('app'));
