import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Fin from './components/fin';
import store from './store'

class App extends Component {
  render() {
    return (
		<Provider store={store}>
			<div>
				<Fin />
			</div>
		</Provider>
    );
  }
}

export default App;

