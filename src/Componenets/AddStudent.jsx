import React from 'react'
import Navigation from './Navigation'

const AddStudent = () => {
  return (
    <div>
        
        <Navigation />
        <center><h1>Add Student</h1></center>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-4">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                            <label htmlFor="" className="form-label">Admission Number</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Full Name</label>
                            <input type="text" className="form-control" />

                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Date of Birth</label>
                            <input type="date" className="form-control" />

                        </div>
                        <div class="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <div>
    
                                <label htmlFor="" className="form-label me-3 ms-1">Gender   </label>
                                <input type="radio" name="radio" id="radio1" checked/>
                                <label for="radio1" class="me-3 ms-1">Male</label>

                                <input type="radio" name="radio" id="radio2"/>
                                <label for="radio2" class="me-3 ms-1">Female</label>

                                <input type="radio" name="radio" id="radio3"/>
                                <label for="radio3" class="ms-1">Other</label>
                            </div>
                            


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Class/Grade</label>
                            <input type="text" className="form-control" />

                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Section</label>
                            <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label"> Parent/Guardian Name</label>
                            <input type="text" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label"> Contact Number</label>
                            <input type="tel" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label">Email Address</label>
                            <input type="email" className="form-control" />


                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                            <label htmlFor="" className="form-label"> Address</label>
                            <textarea name="" id="" className="form-control"></textarea>


                        </div>

                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <button className="btn btn-success">Submit Application</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>


    </div>
)
}

export default AddStudent
    