import * as React from 'react';

import HorizontalNav from './components/Navbar/HorizontalNav';
import MasterLayout from './components/Layout/MasterLayout';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap-theme.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './stylesheets/common.less';
import './stylesheets/override.less';

export class App extends React.Component {
  render() {
    return (
      <div>
        <HorizontalNav />
        <MasterLayout />
      </div>
    );
  }
};