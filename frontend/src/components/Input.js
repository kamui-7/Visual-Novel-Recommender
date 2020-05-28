import React, { Component } from "react";

export default class Input extends Component {
  render() {
    return (
      <div>
        <div className="container" style={{ marginTop: "1em" }}>
          <link
            rel="stylesheet"
            href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
            crossOrigin="anonymous"
          />

          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder=""
              aria-label="Example text with button addon"
              aria-describedby="button-addon1"
              onChange={this.props.typeHandler}
              onKeyDown={k => {
                if (k.keyCode === 13) {
                  this.props.finishHandler();
                }
              }}
            />
            <div className="input-group-append">
              <button
                className="btn btn-dark"
                type="button"
                id="button-addon1"
                onClick={this.props.finishHandler}
              >
                Done!
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
