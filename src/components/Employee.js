/** @format */
import { useContext } from "react";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { Button, Modal } from "react-bootstrap";
import EditForm from "./EditForm";

const Employee = ({ employee }) => {
  const { deleteEmployee } = useContext(EmployeeContext);

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td>
        <button className='btn text-warning btn-act' data-toggle='modal'>
          <i className='material-icons' data-toggle='tooltip' title='Edit'>
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => deleteEmployee(employee.id)}
          className='btn text-danger btn-act'
          data-toggle='modal'>
          <i className='material-icons' data-toggle='tooltip' title='Delete'>
            &#xE872;
          </i>
        </button>
      </td>
      <Modal >
        <Modal.Header className='modal-header' closeButton>
          <Modal.Title>Add Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary'>
            Close Modal
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default Employee;
