import { Document, Page, pdfjs } from 'react-pdf';
import { GlobalWorkerOptions } from 'pdfjs-dist';
import { useState } from 'react';

GlobalWorkerOptions.workerSrc = worker;

export default function PDFViewer({ filePath }) {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div style={{ borderRadius: '8px', marginTop: '1rem', overflow: 'hidden' }}>
      <Document file={filePath} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={1} width={600} />
      </Document>
    </div>
  );
}