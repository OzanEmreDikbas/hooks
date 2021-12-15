import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";


const EditForm = ({theEmployee}) => {

    const {updateEmployee} = useContext(EmployeeContext);

    const employee = theEmployee;
    const id = employee.id;

    const [name, SetName] = useState(employee.name);
    const [email, SetEmail] = useState(employee.email);
    const [address, SetAddress] = useState(employee.address);
    const [phone, SetPhone] = useState(employee.phone);

    return (
        <Form >
            <Form.Group className="formgroup">
                <Form.Control
                type="text"
                placeholder="Name *"
                name="name"
                value={name} 
                required 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                type="email"
                placeholder="Email *"
                name="email"
                value={email} 
                required 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                as="textarea"
                placeholder="Address *"
                name="address"
                value={address} 
                rows={3} 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                type="number"
                placeholder="Phone *"
                name="phone"
                value={phone} 
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Update Employee
            </Button>
        </Form>  
    )
}

export default EditForm;