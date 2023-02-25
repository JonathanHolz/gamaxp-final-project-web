import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext/useAuth";

interface FormValues {
    email: string;
    password: string;
}

const Form: React.FC = () => {
    const auth = useAuth();
    const navigate = useNavigate();

    async function onFinish(values: { email: string, password: string }) {
        try {
            await auth.authenticate(values.email, values.password)
            navigate("/profile");
        } catch (error) {
            console.log(error)
        }
    }

    const [formValues, setFormValues] = useState<FormValues>({
        email: "",
        password: ""
    });

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onFinish(formValues)
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formValues.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formValues.password}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default Form;



