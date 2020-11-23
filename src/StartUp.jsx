import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Navbar from "./Navbar";

class StartUp extends Component {
  state = {
    startuplist: [],
  };

  componentDidMount() {
    this.getstartuplist();
  }
  getstartuplist = () => {
    fetch("http://localhost:4000/")
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        this.setState({ startuplist: response.startuplist });
      });
  };
  render() {
    return (
      <>
        <Navbar title="Welcome to Startup World" />
        <div className="container mt-5">
          <h3 style={{ textAlign: "left" }}>List of Startups</h3>
          {/*<ul className="startuplist mt-3 ">
            {this.state.startuplist.map((item) => {
              return (
                <li key={item.id}>
                  {item.id} {item.name}, {item.country}
                </li>
              );
            })}
          </ul>*/}

          <table class="table table-striped">
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Country</th>
              </tr>
            </thead>
            <tbody>
              {this.state.startuplist.map((item) => {
                return (
                  <tr>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <div className="col-lg-12 d-flex justify-content-center">
            <NavLink className="btn btn-outline-info p-2" to="/createnew">
              Create New
            </NavLink>
          </div>
        </div>
      </>
    );
  }
}

export default StartUp;
