import React, { Component } from "react";
import Navbar from "./Navbar";
import { Redirect } from "react-router-dom";

class CreateNew extends Component {
  state = {
    name: "",
    country: "",
  };
  submitform = () => {
    if (this.state.name !== "" && this.state.country !== "") {
      console.log(this.state.name);
      console.log(this.state.country);
      const data = { name: this.state.name, country: this.state.country };
      fetch("http://localhost:4000/api/savedata", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Success:", response);
          this.props.history.push("/");
        })
        .catch((err) => console.error(err));
    }
  };
  render() {
    return (
      <>
        <Navbar title="Create New Startup" />

        <div className="container col-md-8 col-lg-5 col-10 mt-5">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Name</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="inputName"
                  required
                  onChange={(e) =>
                    this.setState({
                      name: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-3 col-form-label">Country</label>
              <div className="col-sm-9">
                <input
                  type="text"
                  className="form-control"
                  id="inputCountry"
                  required
                  onChange={(e) =>
                    this.setState({
                      country: e.target.value,
                    })
                  }
                ></input>
              </div>
            </div>
            <div className="form-group row">
              <div className="col-lg-12 d-flex justify-content-center">
                <button
                  type="submit"
                  className="btn btn-outline-info savebtn"
                  onClick={this.submitform}
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </>
    );
  }
}

export default CreateNew;
