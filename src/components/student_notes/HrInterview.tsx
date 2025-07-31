import { Document, Page, pdfjs } from "react-pdf";

import "pdfjs-dist/web/pdf_viewer.css";

import workerSrc from "pdfjs-dist/build/pdf.worker.min.mjs?url";

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

import rrPdf from "/rr.pdf";
const HrList = [
  {
    id: "id2",
    title: "hr",
    file: rrPdf, // Use imported PDF file
    subject: "interview",
    tags: ["math", "sample"],
  },
  // Add more notes here if needed
];
function HrInterview(){
    return(
        <div>
            <h1>HR Interview</h1>
        </div>
    );
}
export default HrInterview;