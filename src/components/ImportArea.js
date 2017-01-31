import React from 'react';

const ImportArea = ({onChange}) => {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="5" onChange={onChange}/>
        </div>
    );
};

export default ImportArea;