import React , {useState , useEffect} from 'react';
import { useStore } from '../../stores/Store';
import { Radio, RadioGroup  } from "react-radio-group";
import { observer } from 'mobx-react-lite';
import Lottie from 'lottie-react';
import OrderLottie from '../../assets/order.json';
import loaderAnimation from "../../assets/loader.json";



function OperatorOrder() {

    const {orderStore , statusStore ,  } = useStore()
    const {assignedOrder , AssigneOrder , ordersRegistry  , updateOrder ,UpdateOperateur} = orderStore
    const {status  , loadStatus , statusRegistry  } = statusStore
   var [autoPlay , setAutoPlay] = useState(false)
   var [isAnimated , setIsAnimated] = useState(false)
  
  


    useEffect(()=>{
      AssigneOrder()
      loadStatus()
     
  } , [ orderStore, statusStore])

    const onChange = id  => {

    var status = statusRegistry.get(id)
    assignedOrder.status = status
    
    updateOrder(assignedOrder);

      
    };

    const onSubmit = ()  => {

    setAutoPlay(true);
    setIsAnimated(true);
  
    setTimeout(()=>{
      UpdateOperateur()
      AssigneOrder();
      setAutoPlay(false);
      setIsAnimated(false);


    } , 2000)
        
      };
  

    if(statusStore.loadingInitial || orderStore.loadingInitial) return( <div className='d-flex justify-content-center' > <Lottie   animationData={loaderAnimation} /> </div>)


    if(assignedOrder == undefined) return( <div className="card p-2 order-card ">
    <div className="card-body">
      <h1 className="text-center" >There no orders Assigned</h1>
      </div>
      </div>)

    return (
      <div className="card p-2 order-card ">
      <div className="card-body">

            <div  className="d-flex text-center justify-content-around align-items-center new-order" >
              <div className={!isAnimated ? "order-animation" : 'order-animation animated'}  >
                <h2 className={`new-order-text ${!isAnimated ? "" : "animated"}`} >New Order</h2>
            <Lottie loop={false}  autoplay={autoPlay} animationData={OrderLottie}  />
            </div>
            <div  className={!isAnimated ? "text-left order-info" : 'text-left order-info animated'}  >
              <div>
                <h3>FullName : <span>{assignedOrder?.customer?.fullName}</span></h3>
                <h3>Adresse  : <span>{assignedOrder?.customer?.fullAdresse}</span></h3>
                <h3>Email    : <span>{assignedOrder?.customer?.email}</span></h3>
                <h3>Phone    : <span>{assignedOrder?.customer?.phone}</span></h3>
                <h3>Product  : <span>{assignedOrder?.product[0]?.name}</span></h3>
                <h3>Quantity : <span>{assignedOrder?.product[0]?.quantity}</span></h3>
                <h3>Price    : <span>{assignedOrder?.price} </span>MAD</h3>
                
              </div>

            </div>
            <div>
            
            </div>
            </div>

      </div>
      <div className={`card-footer d-flex justify-content-around flex-wrap status-btns ${!isAnimated ? "" : "animated"}`  }>


{status.map(status => {

return (
                  <button
                  className="btn btn-primary m-1 mb-2 selected"
                  value={status?.id}
                  
                  style={{
                    backgroundColor: `${status?.id == assignedOrder?.status.id ? "#394eea" : "#a0aaf5"}`
                  }}

                  

                  onClick={()=>onChange(status?.id)}
                >
                  {status?.statusType}
                </button>)})}
  


    {/* <RadioGroup containerStyle="d-flex justify-content-around flex-wrap" onChange={onChange} >
        {status.map(status => (
          <Radio
          
            value={status.id}
            render={({ isSelected }) =>
                <button
                  className="btn btn-primary m-1 mb-2"
                  style={{
                    backgroundColor: ` ${isSelected ? "#394eea" : "##a0aaf5"} `
                  }}
                >
                  {status.statusType}
                </button>
             
            } 
          />
        ))}
      </RadioGroup> */}
      </div>
      <hr  ></hr>
        <div  className={`ml-auto p-3 pr-5 submit-order ${!isAnimated ? "" : "animated"}`} >
          <button className="btn btn-success m-1 btn-lg mb-2 " onClick={onSubmit}>
          Submit
          </button>
        </div>
      </div>
    );
}

export default observer(OperatorOrder) ;

















