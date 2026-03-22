import React, { useState, useCallback } from 'react';
import HeaderActions from './components/HeaderActions';
import BillingForm from './components/BillingForm';
import ItemsEditor from './components/ItemsEditor';
import TotalsBox from './components/TotalsBox';
import PreviewHeader from './components/PreviewHeader';
import PreviewA4 from './components/PreviewA4';
import MiniPreview from './components/MiniPreview';
import PaymentSection from './components/PaymentSection';
import defaultData from './data/defaultData';
import { calculateTotals } from './utils/calculations.js';
import { exportPDF } from './utils/pdfExport.js';

const App = () => {
  const [state, setState] = useState(defaultData);
  const [viewMode, setViewMode] = useState("editor");
  const [previewType, setPreviewType] = useState("a4");

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

  if (viewMode === "editor") {
    return (
      <div className="app editor-mode">
        <HeaderActions
          quotationNumber={state.quotationInfo.quotationNumber}
          previewType={previewType}
          onQuotationNumberChange={(num) => updateState({ quotationInfo: { ...state.quotationInfo, quotationNumber: num } })}
          onPreviewTypeChange={setPreviewType}
          onPreview={() => setViewMode("preview")}
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
    );
  }

  return (
    <div className="app preview-mode">
      <PreviewHeader onBackToEditor={() => setViewMode("editor")} />
      
      <div className="preview-container">
        {previewType === "a4" ? (
          <PreviewA4 data={state} totals={totals} />
        ) : (
          <MiniPreview data={state} totals={totals} />
        )}
        
        <PaymentSection />
      </div>
    </div>
  );
};

export default App;

