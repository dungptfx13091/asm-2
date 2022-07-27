import React, { Component } from "react";
import { Media, Breadcrumb, BreadcrumbItem } from "reactstrap";
import "../shared/staffs";
import { Link } from "react-router-dom";

class Staffs extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const staffs = this.props.staffs.map((staff) => {
      return (
        <div
          key={staff.id}
          className="col-lg-2 col-sm-4 col-6 mt-5 border rounded"
        >
          <Link to={`/staff/${staff.id}`}>
            <Media tag="li" className="list-unstyled">
              <Media left middle>
                <Media
                  className="w-100"
                  object
                  src={staff.image}
                  alt={staff.name}
                />
              </Media>
              <Media body className="ml-5">
                <Media heading>{staff.name}</Media>
              </Media>
            </Media>
          </Link>
        </div>
      );
    });

    return (
      <div className="container">
        <Breadcrumb className="mt-5">
          <BreadcrumbItem active>Nhân viên</BreadcrumbItem>
        </Breadcrumb>
        <div className="row">{staffs}</div>
      </div>
    );
  }
}

export default Staffs;
