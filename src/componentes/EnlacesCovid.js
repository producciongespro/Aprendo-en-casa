import React from 'react';

function EnlacesCovid (props) {
    
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Enlaces COVID-19</h1>
            </div>
            <div className="row">
                <div className="col-sm-12 text-right">
                    <button data-comp="menu" className="btn btn-info" onClick={props.handleCargarComponente} >
                        Volver
                    </button>
                </div>
            </div>
            <div className="row">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis unde quidem esse minus deserunt eligendi, pariatur, optio eius enim a officia quod laborum necessitatibus ad ipsum? Necessitatibus hic quidem consectetur.
            </div>
        </div>
    );
}


export default EnlacesCovid;