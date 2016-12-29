import React, {Component} from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-fixed-top navbar-light bg-faded">
                    <a className="navbar-brand" href="#">Fixed top</a>
                </nav>
            </div>
        );
    }
}

export default Navbar;
