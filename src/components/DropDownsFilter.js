import React from 'react';
 import { useFormik } from 'formik';
 
 export const DropDownsFilter = ( { setSection } ) => {

    // const onItemClick = (event) => {
    //     setSection(event.target.value)       
    // }
   const formik = useFormik({
     initialValues: {
        radioSection: 'hot',
        showViral: 'false',
     },
     onSubmit: values => {
       
       setSection(values)
     },
   });


   return (
     <form onSubmit={formik.handleSubmit}>
       <div className="form-check">
            <input className="form-check-input" type="radio"  name="radioSection" onChange={formik.handleChange} id="radioHot" value="hot" defaultChecked></input> 
            <label className="form-check-label" htmlFor="radioHot">
                Hot
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="radioSection" onChange={formik.handleChange} id="radioTop"  value="top"></input>
            <label className="form-check-label" htmlFor="radioTop">
                Top
            </label>
        </div>
        <div className="form-check">
            <input className="form-check-input" type="radio" name="radioSection" onChange={formik.handleChange} id="radioUser"  value="user"></input>
            <label className="form-check-label" htmlFor="radioUser">
                User
            </label>
        </div>

        <div className="form-check">
            <input className="form-check-input" type="checkbox" name="showViral" onChange={formik.handleChange} id="checkViral" value="true"></input>
            <label className="form-check-label" htmlFor="checkViral">
                ShowViral
            </label>
        </div> 
       <button type="submit" className="btn btn-outline-info">Submit</button>
     </form>
   );
 };