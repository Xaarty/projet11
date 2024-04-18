import Balance from "../components/Balance-card";
import jsonData from "../../userbank.json";

export default function User() {
    var json = jsonData;
    return (
        <section className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            {json.map((props) => (
                <Balance title={props.title} amount={props.amount} balance={props.balance} key={props.id} />
            ))}
        </section>
    )
}