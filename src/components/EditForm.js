import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext } from "react";


const EditForm = () => {

    const {updateEmployee} = useContext(EmployeeContext);

    return (
        <Form >
            <Form.Group className="formgroup">
                <Form.Control
                type="text"
                placeholder="Name *"
                name="name" 
                required 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                type="email"
                placeholder="Email *"
                name="email"
                required 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                as="textarea"
                placeholder="Address *"
                name="address"
                rows={3} 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                type="number"
                placeholder="Phone *"
                name="phone"
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>  
    )
}

export default EditForm;