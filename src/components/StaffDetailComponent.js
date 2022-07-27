import React from "react";
import { Media, Card, CardImg, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";

import { Link } from "react-router-dom";

function RenderStaff({ staff }) {
  return (
    <Card className="col-12 col-md-5 m-1">
      <CardImg width="100%" src={staff.image} alt={staff.name} />
    </Card>
  );
}

function RenderDetail({ staff }) {
  if (staff != null) {
    return (
      <div className="col-lg-4 col-sm-6 mt-5 border rounded">
        <Media>
          <Media body className="ml-5">
            <Media heading>Họ và tên: {staff.name}</Media>
            <p>Ngày sinh: {dateFormat(staff.doB, "dd/mm/yyyy")}</p>
            <p>Ngày vào công ty: {dateFormat(staff.startDate, "dd/mm/yyyy")}</p>
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

const StaffDetail = (props) => {
  if (props.staff != null)
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/staff">Nhân viên</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>{props.staff.name}</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>{props.staff.name}</h3>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <RenderStaff staff={props.staff} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <RenderDetail staff={props.staff} />
          </div>
        </div>
      </div>
    );
  else return <div></div>;
};
export default StaffDetail;
