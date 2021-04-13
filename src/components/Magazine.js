import React from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";

import "./Magazine.css";

export default class Magazine extends React.Component {
  state = { numPages: 53, pageNumber: 1 };

  onDocumentLoadSuccess = ({ numPages }) => {
    this.setState({ numPages });
  };

  goToPrevPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber - 1 }));
  goToNextPage = () =>
    this.setState((state) => ({ pageNumber: state.pageNumber + 1 }));

  render() {
    const { pageNumber, numPages } = this.state;

    return (
      <div id="MagContainer">
        <Document
          className={"Mag"}
          file="./src.pdf"
          onLoadSuccess={this.onDocumentLoadSuccess}
          loading={
            <div className="loadText">
              <h1>Loading, Please Wait.</h1>
            </div>
          }
        >
          {Array.from(new Array(numPages), (el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={600}
              className={"MagPage"}
            />
          ))}
        </Document>
      </div>
    );
  }
}
