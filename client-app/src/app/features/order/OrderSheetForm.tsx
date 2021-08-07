import React, { useEffect, useState } from 'react';
import { observer } from "mobx-react-lite";
import { useStore } from '../../stores/Store';
import { OrderSheet } from '../../models/OrderSheet';
import { Form, Formik } from 'formik';
import MyTextInput from '../../common/form/MyTextInput';

function OrderSheetForm() {
    const {orderStore} = useStore()
    const {sheetConnect} = orderStore

    let initialValues : OrderSheet =  {
        SpreadsheetId : '',
        sheet: ''
    }

    const [addSheetInfo] = useState(initialValues)

    function handleSubmit(values : OrderSheet  , {setErrors } : any) {
        console.log(values)
        sheetConnect(values) 
    }
    return(
        <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h4>Simple Summernote</h4>
                  </div>
                  <div className="card-body">
                  <Formik 
                    initialValues={addSheetInfo}
                    onSubmit={(values, {setErrors}) =>{handleSubmit(values, {setErrors})}}
                  >
            {({errors, touched, handleSubmit, isSubmitting, isValid, dirty}) => (

               <Form onSubmit={handleSubmit}  autoComplete="off">

                       <div className="form-group">
                         <MyTextInput type="SpreadsheetId" placeholder="Spreadsheet Id" name="SpreadsheetId" label="SpreadsheetId" />
                       </div>

                       <div className="form-group">
                         <MyTextInput type="sheet" placeholder="sheet namr" name="sheet" label="sheet" />
                       </div>
                       <div className="form-group">
                         <button type="submit" className="btn btn-primary btn-lg btn-block">
                           Add sheet
                         </button>
                       </div>
               </Form>
            )}
        </Formik>
                  </div>
                </div>
              </div>
            </div>
    )
}

export default observer(OrderSheetForm) ;