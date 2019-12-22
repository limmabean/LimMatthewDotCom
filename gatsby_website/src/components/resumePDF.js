import React, { Component } from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import resumeFile from '../pdfs/Matthew_Lim_CS_Resume.pdf';
import './resumePDF.css'
const options = {
  cMapUrl: 'cmaps/',
  cMapPacked: true,
};

export default class ResumePDF extends Component {
  state = {
    numPages: null,
  }

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  }

  render() {
    const { numPages } = this.state;
    return (
      <Document
        file={resumeFile}
        onLoadSuccess={this.onDocumentLoadSuccess}
        options={options}
      >
        {
          Array.from(
            new Array(numPages),
            (el, index) => (
              <Page
                key={`page_${index + 1}`}
                pageNumber={index + 1}
              />
            ),
          )
        }
      </Document>
    );
  }
}