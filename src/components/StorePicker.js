import React, { Component }from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';



class StorePicker extends Component {
    static propTypes = {
        history: PropTypes.object
    }

    myInput = React.createRef();
    
    goToStore = e => {
        e.preventDefault()
        const storeName = this.myInput.value.value
        this.props.history.push(`/store/${storeName}`)
    }

    render(){
        return (
            <form className="store-selector" onSubmit={this.goToStore}> 
                <h2> Please enter a store</h2>
                <input type='text' ref={this.myInput} required placeholder="Store Name" defaultValue={ getFunName() }/>
                <button type ='submit'> Visit store → </button>
            </form>
    
    )}

}

export default StorePicker;