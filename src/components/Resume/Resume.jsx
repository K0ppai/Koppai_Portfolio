import { Document, Page } from 'react-pdf';

const Resume = () => {
  const pdfUrl = './assets/Resume.pdf';

  return (
    <div className="h-auto w-screen">
      <p>resume</p>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default Resume;
