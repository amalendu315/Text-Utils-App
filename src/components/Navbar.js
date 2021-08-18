import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{textTransform: 'uppercase'}}>{props.title}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                 <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{color:'cyan'}} >HOME</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired, aboutText: PropTypes.string.isRequired};
Navbar.defaultProps = {aboutText:'About Us', title: 'Required Title'};