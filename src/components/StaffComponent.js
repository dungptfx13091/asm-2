import React, { Component } from "react";
import { Media } from "reactstrap";
import "../shared/staffs";
import dateFormat from "dateformat";

class Staffs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedStaff: null,
    };
  }

  onStaffSeclect(staff) {
    this.setState({ selectedStaff: staff });
  }

  renderStaff(staff) {
    if (staff != null) {
      return (
        <div className="col-lg-4 col-sm-6 mt-5 border rounded">
          <Media>
            <Media body className="ml-5">
              <Media heading>Họ và tên: {staff.name}</Media>
              <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
              <p>
                Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}
              </p>
              <p>Phòng ban: {staff.department.name}</p>
              <p>Số ngày nghỉ còn lại: {staff.annualLeave}</p>
              <p>Số ngày đã làm thêm: {staff.overTime}</p>
            </Media>
          </Media>
        </div>
      );
    } else {
      return <div></div>;
    }
  }

  render() {
    const staffs = this.props.staffs.map((staff) => {
      return (
        <div
          key={staff.id}
          className="col-lg-2 col-sm-4 col-6 mt-5 border rounded"
        >
          <Media
            onClick={() => this.onStaffSeclect(staff)}
            tag="li"
            className="list-unstyled"
          >
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
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{staffs}</div>
        <div className="row">{this.renderStaff(this.state.selectedStaff)}</div>
      </div>
    );
  }
}

export default Staffs;
