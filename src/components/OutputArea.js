import React from 'react';

const OutputArea = ({ text }) => {
    return (
        <div className="form-group">
            <textarea className="form-control" rows="3" value={ text }/>
        </div>
    );
};

export default OutputArea;