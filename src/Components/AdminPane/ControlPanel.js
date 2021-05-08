import React from 'react';
import Button from './Button';
const ControlPanel = () => {

    const createUser = ()=>{
        console.log('loading pending users page');
    }
    return (
        <div className = 'control'>
            <Button onCreateUser = {createUser} border = {true} text = 'create new user' bg = 'white' color= '#0A0721' />
            <Button text = 'remove old book' bg = '#FF9797' color= 'white' />
            <Button text = 'create new book' bg = '#086B22' color= 'white' />
        </div>
    )
}

export default ControlPanel
