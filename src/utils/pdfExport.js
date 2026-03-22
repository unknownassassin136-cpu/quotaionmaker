import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

export const exportPDF = async (state) => {
  const element = document.getElementById('a4-preview');
  if (!element) {
    alert('A4 preview not found. Please switch to A4 mode.');
    return;
  }

  try {
    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
      allowTaint: true,
      backgroundColor: '#ffffff',
      width: 794,
      height: 1123
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    pdf.save(`Quotation_${state.quotationInfo.quotationNumber}.pdf`);
  } catch (error) {
    console.error('PDF export failed:', error);
    alert('PDF export failed. Please try again.');
  }
};
