import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

    const {addEmployee} = useContext(EmployeeContext);

    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [address, setAddress] = useState("");
    // const [phone, setPhone] = useState("");

    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", address:"", phone:""
    })

    const {name, email, address, phone} = newEmployee;

    const onInputChange = (e) => {
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addEmployee(name, email, address, phone)
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="formgroup">
                <Form.Control
                type="text"
                placeholder="Name *"
                name="name" //2.metodda name propertilerini ekledi.
                value={name}
                // onChange={e => setName(e.target.value)}
                onChange={e => onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                type="email"
                placeholder="Email *"
                name="email"
                value={email}
                // onChange={e => setEmail(e.target.value)}
                onChange={e => onInputChange(e)}
                required 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                as="textarea"
                placeholder="Address *"
                name="address"
                value={address}
                // onChange={e => setAddress(e.target.value)}
                onChange={e => onInputChange(e)}
                rows={3} 
                />
            </Form.Group>
            <Form.Group className="formgroup">
                <Form.Control
                type="number"
                placeholder="Phone *"
                name="phone"
                value={phone}
                // onChange={e => setPhone(e.target.value)}
                onChange={e => onInputChange(e)} 
                />
            </Form.Group>
            <Button variant="success" type="submit" block>
                Add New Employee
            </Button>
        </Form>  
    )
}

export default AddForm;