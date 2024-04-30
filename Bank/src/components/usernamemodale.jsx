import { Form } from "react-router-dom";


export default function UsernameModale ({handleOpenModal}) {
    return (
        <section className="modale_user">
            <button className="modale_user_button" onClick={handleOpenModal} ></button>
            <p>Set your new username</p>
            <Form id="form">
                <label htmlFor="username"></label>
                <input type="text" id="username" name="username" />
                <button type="submit">Save</button>
            </Form>
        </section>
    )
}