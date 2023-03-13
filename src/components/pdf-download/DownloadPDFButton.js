import React, { useRef } from 'react';
import { PDFDownloadLink, Page, Text, View, Document } from '@react-pdf/renderer';

const URL = 'http://localhost:8080/api/teams';

const MyPDF = React.forwardRef(({ data }) => (
  <Document>
    <Page>
      <View>
        <Text>Data:</Text>
        <Text>{JSON.stringify(data)}</Text>
      </View>
    </Page>
  </Document>
));

const MyPDFWithRef = React.forwardRef((props, ref) => <MyPDF {...props} ref={ref} />);

const DownloadPDFButton = ({ data }) => {
  const pdfRef = useRef(null);

  const handleDownload = () => {
    if (pdfRef.current) {
      pdfRef.current.updateContainer();
      const blob = pdfRef.current.toBlob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'my-pdf.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const myPdf = <MyPDFWithRef data={data} ref={pdfRef} />;

  return (
    <div className="pdf-buttons">
      <PDFDownloadLink document={myPdf} fileName="my-pdf.pdf">
        {/*{({ blob, url, loading, error }) =>*/}
        {/*  loading ? 'Loading document...' : 'Download PDF'*/}
        {/*}*/}
      </PDFDownloadLink>
      <button onClick={handleDownload}>Generate PDF</button>
    </div>
  );
};

export default DownloadPDFButton;
