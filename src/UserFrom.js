import React from 'react';
const UserFrom=(props) => {
    return(
        <from onSubmit={props.getUser}>
            <input style={{marginTop:"20px",display:"block"}} type="text" name="username"/>
            <button>submit</button>

        </from>
    );
}

export default UserFrom;