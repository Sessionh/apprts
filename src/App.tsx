import React, { Component } from 'react';
import RouterConfig from './router/index';
import {
    BrowserRouter as Router,
    Link
} from 'react-router-dom';


class App extends Component {

    render() {

        return (
            <Router>

                <div className="app">
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>

                        <li>
                            <Link to="/user">user</Link>
                        </li>
                    </ul>
                    <hr />
                    <div>

                        <RouterConfig />

                    </div>


                </div>

            </Router>


        );
    }
}

export default App;