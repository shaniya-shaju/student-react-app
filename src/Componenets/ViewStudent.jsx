import React, { useState } from 'react'
import Navigation from './Navigation'

const ViewStudent = () => {

    const [data,changeData]= useState(
        [
            {"name":"Agna Benny","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"MCA","admn":"ST001"},
            {"name":"Sruthy P S","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"MTECH","admn":"ST002"},
            {"name":"Pratheeksha Prakashan","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"MBA","admn":"ST003"},
            {"name":"Christina Joy","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"MCA","admn":"ST004"},
            {"name":"Devika V","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"BTECH","admn":"ST005"},
            {"name":"Ashika Farsana","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"MBA","admn":"ST006"},
            {"name":"Ann Maria Roy","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"MCA","admn":"ST007"},
            {"name":"Gilsha Bennet","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"BTECH","admn":"ST008"},
            {"name":"Delna Denny","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10","course":"MCA","admn":"ST009"},
            {"name":"Anu Mariya V","avatar":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB9CVlF_C0yrqyjWABsOKjw3BzBCLYV8t17HwrdqDCIA&s=10.+","course":"MBA","admn":"ST010"},
        ]
    )

  return (
    <div>
      <Navigation />
        <div className="container">
             <center><h3>VIEW BOOKS</h3></center> 
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                    <div className="row g-3">
                        {data.map(
                            (value,index) => {
                                return (
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4">

                            <div class="card">
                                
                                <div class="card-body">
                                    <img src={value.avatar} class="card-img-top" alt="..."height="350"/>
                                    <h5 class="card-title">
                                        {value.name}
                                    </h5>
                                    <p><strong>Admission No:</strong> {value.admn}</p>
                                    <p><strong>Class/Grade:</strong> {value.course}</p>
                                    <button className="btn btn-success w-100">View Details</button>
                                </div>
                            </div>
                        </div>  
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewStudent