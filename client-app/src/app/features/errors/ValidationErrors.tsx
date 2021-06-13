import React from 'react'

interface Props {
    errors: any;
}

const ValidationErrors = ({errors}: Props) => {
    return (
            <div className="card">
                  <div className="card-header">
                    <h4>Erros list</h4>
                  </div>
                  <div className="card-body">
                    <ul className="list-group list-group-flush">
                        {errors && errors.map((err: any, i: any) => (
                            <li className="list-group-item" key={i} >{err}</li>
                        ))}
                    </ul>
                  </div>
            </div>
    )
}

export default ValidationErrors
