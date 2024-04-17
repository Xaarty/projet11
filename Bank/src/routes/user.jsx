import Button from "../components/button"
import Balance from "../components/Balance-card"

export default function User() {
    return (
        <section className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <Balance />
            <Balance />
            <Balance />
        </section>
    )
}