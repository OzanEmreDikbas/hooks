/** @format */

import { useContext, useState } from "react";
import Employee from "./Employee";
import { EmployeeContext } from "../contexts/EmployeeContext";
import {Button, Modal, ModalBody, ModalFooter, ModalTitle} from "react-bootstrap";
import ModalHeader from "react-bootstrap/esm/ModalHeader";
import AddForm from "./AddForm";
import '../index.css';

const EmployeeList = () => {

  const { employees } = useContext(EmployeeContext);
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <div className='table-title'>
        <div className='row'>
          <div className='col-sm-6'>
            <h2>
              Manage <b>Employees</b>
            </h2>
          </div>
          <div className='col-sm-6'>
            <Button
              onClick={handleShow}
              className='btn btn-success text white'
              data-toggle='modal'>
              <i className='material-icons'>&#xE147;</i>{" "}
              <span>Add New Employee</span>
            </Button>
          </div>
        </div>
      </div>
      <table className='table table-striped table-hover'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <Employee employees={employees} />
        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <ModalHeader className="model-header" closeButton>
          <ModalTitle>
            Add Employee
          </ModalTitle>
        </ModalHeader>
        <ModalBody>
          <AddForm />
        </ModalBody>
        <ModalFooter>
          <Button variant="secondary" onClick={handleClose}>
            Close Modal
          </Button>
        </ModalFooter>
      </Modal>
    </>
  );
};
export default EmployeeList;
