import React from 'react';

const OutputArea = ({ text }) => {
    return (
        <div className="form-group">
            <textarea className="form-control" rows={text.split(/\r\n|\r|\n/).length} value={ text }/>
        </div>
    );
};

export default OutputArea;