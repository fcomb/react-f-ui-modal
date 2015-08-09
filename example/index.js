import React from 'react';
import ExampleModal from 'components/modal';

import 'styles/default';

React.render((
  <ExampleModal className="container">
    <button className="button-cta">Launch example modal</button>
  </ExampleModal>
), document.getElementById('app'));
