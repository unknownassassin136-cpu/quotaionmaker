import React from 'react';

const HeaderActions = ({
  quotationNumber,
  previewMode,
  onQuotationNumberChange,
  onPreviewModeChange,
  onReset,
  onExport
}) => {
  return (
    <div className="header-actions">
      <input
        type="text"
        value={quotationNumber}
        onChange={(e) => onQuotationNumberChange(e.target.value)}
        placeholder="Quotation Number"
        style={{ minWidth: '200px' }}
      />
      
      <select
        value={previewMode}
        onChange={(e) => onPreviewModeChange(e.target.value)}
      >
        <option value="A4">A4 Preview</option>
        <option value="MINI">Mini Preview</option>
      </select>
      
      <button className="btn btn-success" onClick={onExport}>
        Export PDF
      </button>
      
      <button className="btn btn-danger" onClick={onReset}>
        Reset Form
      </button>
    </div>
  );
};

export default HeaderActions;
