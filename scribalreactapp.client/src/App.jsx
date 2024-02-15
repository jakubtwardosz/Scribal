import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { BodyText } from 'react-bootstrap-icons';
import './App.scss';


const App = () => {
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
            // Przygotowanie obiektu z danymi użytkownika
            const userObject = {
                username: formData.login,
                password: formData.password,
                // Dodaj inne pola, jeśli są potrzebne
            };

            // Wywołanie żądania POST do serwera
            const response = await axios.post('Auth/register', userObject);

            console.log('Odpowiedź z serwera:', response.data);
            // Możesz dostosować obsługę odpowiedzi serwera (np. przekierowanie użytkownika, aktualizacja stanu itp.)
        }
        catch (error) {
            console.error('Błąd przesyłania danych:', error);
        }
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
                </Col>
            </Row>
        </Container>
    );
};

export default App;