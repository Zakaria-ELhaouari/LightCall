import { Field, Form, Formik } from 'formik';
import React, { Component ,useEffect, useState } from 'react';
import MyTextInput from "../../common/form/MyTextInput"
import { shippingCompany } from '../../models/shippingCompany';
import { useStore } from '../../stores/Store';
import Select from 'react-select';
import { observer } from 'mobx-react-lite';
import { City } from '../../models/city';
// import {multiSelect} from 'multiselect-react-dropdown';

export default observer(function ShippingCompanyForm(){
    const {shippingCompanyStore , cityStore} = useStore();
    const {creatShippingCompany , updateShippingCompany , shippingCompanySelected} = shippingCompanyStore;
    const {cities} = cityStore;
    let initialValues  = shippingCompanySelected ?? {
      id : '',
      name : '',
      apiClient : '',
      cities : [] ,
    }
    const allCities :City[] = [];
    const [company ] = useState(initialValues);
    var CountryName=[{}]

    cities.map(city =>{
      CountryName.push({
        value:city.id,
        label:city.cityName
      })
    })

    useEffect(()=>{
      cityStore.laodCities()
    } , [cityStore])

    const onchange  = (e : any)=>{
      e.forEach((el : any )  => {
        allCities.push(el.value)
        // console.log(initialValues.citiesIds);
      });
    } 

    function handleSubmit(values : shippingCompany  , {setErrors } : any) {
      // console.log(values)
      // console.log(allCities);
      values.cities = allCities;
      // console.log(values.cities);
      shippingCompanySelected ? updateShippingCompany(values) : creatShippingCompany(values);
      console.log(values);
    }

    if(cityStore.loadingInitial) return(<div>Loading...</div>)
    return(
        <div className="card card-primary">
            <div className="card-header"><h4>Add shipping Company</h4></div>
            <div className="card-body">
            <Formik initialValues={company} 
                onSubmit={(values, {setErrors}) =>
                {handleSubmit(values, {setErrors})}}>
              {({errors, touched, handleSubmit, isSubmitting, isValid, dirty , values}) => (
                <Form onSubmit={handleSubmit}  autoComplete="off">
                        <div className="form-group">
                          <MyTextInput type="Name" placeholder="Name" name="name" label="Name" />
                        </div>
                        <div className="form-group">
                          <MyTextInput type="Name" placeholder="Name" name="apiClient" label="Api Client" />
                        </div>
                        <div className="form-group">
                          <Select isMulti options={CountryName} name='cities' onChange={onchange} />
                        </div>
                        <div className="form-group">
                          <button type="submit" className="btn btn-primary btn-lg btn-block">
                            Add shipping company
                          </button>
                          
                        </div>
                </Form>
             )}
         </Formik>

        </div>
      </div>
    )
})