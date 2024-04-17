import Form from "./form"

export default function Modale () {
    return (
        <section className="main bg-dark">
            <div className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <Form />
            </div>
        </section>
    )
}