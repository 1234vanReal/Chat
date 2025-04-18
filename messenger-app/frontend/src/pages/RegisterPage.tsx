import React, { useState } from 'react';
import RegisterForm from '../components/RegisterForm';

const RegisterPage: React.FC = () => {
    const [error, setError] = useState<string | null>(null);

    const handleRegister = async (username: string, password: string) => {
        try {
            const response = await fetch('/api/auth/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Registration failed');
            }

            // Handle successful registration (e.g., redirect to login page)
        } catch (err) {
            setError(err.message);
        }
    };

    return (
        <div>
            <h1>Register</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <RegisterForm onRegister={handleRegister} />
        </div>
    );
};

export default RegisterPage;