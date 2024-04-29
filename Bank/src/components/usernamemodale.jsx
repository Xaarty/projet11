import { Form } from "react-router-dom";

export default function UsernameModale ({openModal}) {
    return (
        <section className="modale_user">
            <button onClick={openModal} ></button>
            <p>Set your username</p>
            <Form id="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={handleChange}
                />
                <button type="submit">Save</button>
            </Form>
        </section>
    )
}