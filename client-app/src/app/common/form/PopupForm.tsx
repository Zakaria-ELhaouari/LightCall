import { observer } from 'mobx-react-lite';
import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import { useStore } from '../../stores/Store';

interface props {
    for : string ;
    value : string ;
}

function PopupForm(props : props) {

    const {orderStore  } = useStore()
    const {assignedOrder , updateOrder } = orderStore
    const [value, setValue] = useState(props.value);
    const [isOpen, setOpen] = useState(false);

    const UpdateOrder = ()=> {
    

        switch (props.for) {
            
            case "price" :

            assignedOrder!.price = Number(value);
            console.log(assignedOrder) ;
           
           
            
            
            updateOrder(assignedOrder!);
            
                break;
        
            default:
                break;
        }

        setOpen(false);
        console.log(isOpen);

    }

    return (
        <Popup open={isOpen} onOpen={()=>setOpen(true)} trigger={<span  >{props.value}</span>} position="right center">
            <div className="d-flex justify-content-around align-items-center shadow-sm p-2  bg-white rounded" >
                <input type="number"  value={value} onChange={(e)=>setValue(e.target.value)} className="form-control form-control-sm" /> 
                <button  onClick={UpdateOrder} className="btn btn-primary btn-sm editable-submit ml-2 mr-2">
                    <i className="fa fa-check" aria-hidden="true"></i>
                </button> 
                <button onClick={()=>setOpen(false)} type="button" className="btn btn-default btn-sm editable-cancel">
                    <i className="fa fa-times" aria-hidden="true"></i>
                </button>
            </div>
        </Popup>
    );
}

export default observer(PopupForm);