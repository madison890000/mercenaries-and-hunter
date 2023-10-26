import * as PDFJS from 'pdfjs-dist';

// @ts-ignore
import workerSrc from 'pdfjs-dist/build/pdf.worker.entry';

PDFJS.GlobalWorkerOptions.workerSrc = workerSrc;
export const importPdfFromArrayBuffer = (pdf: ArrayBuffer) => {
  return PDFJS.getDocument(pdf).promise;
};

export const pdf2TextArray = (pdf: any) => {
  const numPages = pdf.numPages;
  const textPromises = [];

  for (let pageNum = 1; pageNum <= numPages; pageNum++) {
    textPromises.push(
      pdf.getPage(pageNum).then((page: { getTextContent: () => Promise<any> }) => {
        return page.getTextContent().then(textContent => {
          const pageText = textContent.items.map((item: { str: any }) => item.str).join(' ');
          return pageText;
        });
      })
    );
  }

  return Promise.all(textPromises)
    .then(pagesText => {
      const allText = pagesText;
      return allText;
    })
    .catch(error => {
      console.error('Error extracting text:', error);
    });
};
