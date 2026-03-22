import React, { useState, useCallback } from 'react';
import BillingForm from './components/BillingForm';
import ItemsEditor from './components/ItemsEditor';
import TotalsBox from './components/TotalsBox';
import HeaderActions from './components/HeaderActions';
import PreviewA4 from './components/PreviewA4';
import MiniPreview from './components/MiniPreview';
import defaultData from './data/defaultData';
import { calculateTotals } from './utils/calculations.js';
import { exportPDF } from './utils/pdfExport.js';

const App = () => {
  const [state, setState] = useState(defaultData);
  const [previewMode, setPreviewMode] = useState('A4');

  const updateState = useCallback((updates) => {
    setState(prev => ({ ...prev, ...updates }));
  }, []);

  const resetForm = useCallback(() => {
    setState(defaultData);
  }, []);

  const exportCurrentPDF = useCallback(() => {
    exportPDF(state);
  }, [state]);

  const totals = calculateTotals(state.items, state.charges);

  return (
    <div className="app">
      <div className="editor-panel">
        <HeaderActions
          quotationNumber={state.quotationInfo.quotationNumber}
          previewMode={previewMode}
          onQuotationNumberChange={(num) => updateState({ quotationInfo: { ...state.quotationInfo, quotationNumber: num } })}
          onPreviewModeChange={setPreviewMode}
          onReset={resetForm}
          onExport={exportCurrentPDF}
        />
        
        <BillingForm
          companyDetails={state.companyDetails}
          billTo={state.billTo}
          quotationInfo={state.quotationInfo}
          onUpdate={(section, data) => updateState({ [section]: data })}
        />
        
        <ItemsEditor
          items={state.items}
          onItemsChange={(items) => updateState({ items })}
        />
        
        <TotalsBox
          charges={state.charges}
          totals={totals}
          onChargesChange={(charges) => updateState({ charges })}
        />
      </div>
      
      <div className="preview-panel">
        {previewMode === 'A4' ? (
          <PreviewA4 data={state} totals={totals} />
        ) : (
          <MiniPreview data={state} totals={totals} />
        )}
      </div>
    </div>
  );
};

export default App;

