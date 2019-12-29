import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resumeFile from '../pdfs/Matthew_Lim_CS_Resume.pdf';
import './resumePDF.css'

export default class ResumePDF extends Component {
  render() {
    return (
      <Document
        file={resumeFile}
        onLoadSuccess={this.onDocumentLoadSuccess}
        loading="Loading Resume..."
        error="Failed to load Resume PDF."
      >
        <Page
          renderMode="canvas"
          key={`page_1`}
          pageNumber={1}
          error="Failed to load Resume PDF."
          scale={1.5}
        />
      </Document>
    );
  }
}