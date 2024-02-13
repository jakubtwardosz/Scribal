



import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap'; // Załóżmy, że używamy biblioteki react-bootstrap
import { BodyText } from 'react-bootstrap-icons';
import './App.scss'; // Importuj plik SCSS



const App = () => {
    const [formData, setFormData] = useState({
        login: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tutaj możesz dodać logikę przesyłania danych przez API
        console.log('Dane przesłane:', formData);
    };

    return (
        <Container>
            <Row>
                <Col>
                    <div className="form-signin w-100 m-auto">

                        <BodyText size={72} />

                        <Form onSubmit={handleSubmit} className="mt-4">
                                
                                <h1 className="h3 mb-3 fw-normal">Zarejestruj się w Scribal</h1>

                                <div className="form-floating">
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="login"
                                        value={formData.login}
                                        onChange={handleInputChange}
                                        required
                                    />
                                    <Form.Label>Email address</Form.Label>
                                </div>

                                <div className="form-floating">
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleInputChange}
                                        required
                                    />
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
                </Col>
            </Row>
        </Container>
    );
};

export default App;