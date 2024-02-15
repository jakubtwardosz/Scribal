import { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container} from 'react-bootstrap';
import './App.scss';
import MainMenu from "./MainMenu";

function Register() {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const userObject = {
                username: formData.login,
                password: formData.password,
            };

            const response = await axios.post('Auth/register', userObject);

            console.log('OdpowiedŸ z serwera:', response.data);
            }
        catch (error) {
            console.error('B³¹d przesy³ania danych:', error);
        }
    };

    return (
        <Container>
            <MainMenu></MainMenu>
            <div className="form-signin w-100 m-auto">
                <Form onSubmit={handleSubmit} className="mt-4">
                    <h1 className="h3 mb-3 fw-normal">Zarejestruj siê</h1>

                    <div className="form-floating">
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="login"
                            value={formData.login}
                            onChange={handleInputChange}
                            required />
                        <Form.Label>Email address</Form.Label>
                    </div>

                    <div className="form-floating">
                        <Form.Control
                            type="password"
                            placeholder="Enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            required />
                        <Form.Label>Password</Form.Label>
                    </div>

                    <Form.Group className="mb-3" controlId="checkbox mb-3">
                        <Form.Check type="checkbox" label="Remember me" />
                    </Form.Group>

                    <Button class="w-100 btn btn-lg btn-primary" variant="primary" type="submit">
                        Sign in
                    </Button>
                </Form>
            </div>
        </Container>
    );
}

export default Register;
