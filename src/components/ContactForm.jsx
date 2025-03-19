import { useState } from "react";

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:5000/send", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const result = await response.json();
            setStatus(result.message);
        } catch (error) {
            setStatus("Ошибка отправки. Попробуйте позже.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Имя:
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label>

            <label>
                Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label>

            <label>
                Сообщение:
                <textarea name="message" value={formData.message} onChange={handleChange} required />
            </label>

            <button type="submit">Отправить</button>

            {status && <p>{status}</p>}
        </form>
    );
};

export default ContactForm;

