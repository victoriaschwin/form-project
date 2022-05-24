import React, { Component } from 'react';
import PropTypes from 'prop-types';


class Form extends Component {
    render() {
        return (
            <div>
                
                <form>
                <input type='email' requiere></input>
                <br/>
                <input type='password' requiere></input>
                <br/>
                </form>
            
            </div>
        );
    }
}


Form.propTypes = {

};


export default Form;
