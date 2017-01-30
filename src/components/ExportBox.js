import React from 'react';

const ExportBox = ({onExport}) => {
    return (
        <div className="form-group">
            <button className="form-control btn btn-primary" onClick={onExport}>Экспорт в CSV</button>
        </div>
    );
};

export default ExportBox;