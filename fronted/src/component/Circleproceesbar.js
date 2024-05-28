import React from 'react'

function Circleproceesbar() {
  return (
   
    
    <div className="container">
        <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="progressfun blue">
                    <span className="progressfun-left">
                        <span className="progressfun-bar"></span>
                    </span>
                    <span className="progressfun-right">
                        <span className="progressfun-bar"></span>
                    </span>
                    <div className="progressfun-value">90%</div>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="progressfun yellow">
                    <span className="progressfun-left">
                        <span className="progressfun-bar"></span>
                    </span>
                    <span className="progressfun-right">
                        <span className="progressfun-bar"></span>
                    </span>
                    <div className="progressfun-value">75%</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Circleproceesbar
