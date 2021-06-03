import React from 'react';
import { history } from '../..';
import { useStore } from '../stores/Store';

function M() {

    const {commonStore} = useStore();
    function rederect(){
        
        history.push("/Status"  );
       
        
    }

    return (
        <div>
            <button onClick={rederect} ></button>
        </div>
    );
}

export default M;