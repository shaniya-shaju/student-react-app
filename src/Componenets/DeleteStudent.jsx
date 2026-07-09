import React from 'react'
import Navigation from './Navigation'

const DeleteStudent = () => {
  return (
    <div>
        <Navigation />
        <div className="container mt-5">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-8 col-lg-6 mx-auto">

                        <h2 className="text-center mb-4">
                            Delete Student
                        </h2>

                        <div className="card shadow p-4">

                            <label className="form-label">
                                Admission Number
                            </label>

                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter Admission Number"
                            />

                            <button className="btn btn-danger mt-3">
                                Delete
                            </button>

                        </div>

                    </div>
                </div>
            </div>

    </div>
  )
}

export default DeleteStudent