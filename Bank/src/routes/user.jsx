import React from "react";
import Balance from "../components/Balance-card";
import jsonData from "../../userbank.json";
import ErrorPage from "../error-page";

import { connect } from 'react-redux';

class User extends React.Component {
    render() {
      const { isLoggedIn } = this.props;
  
      if (!isLoggedIn) {
        return <ErrorPage />; // Render ErrorPage if user is not authenticated
      }
  
      var json = jsonData;
      return (
        <section className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />Tony Jarvis!</h1>
            <button className="edit-button">Edit Name</button>
          </div>
          {json.map((props) => (
            <Balance
              title={props.title}
              amount={props.amount}
              balance={props.balance}
              key={props.id}
            />
          ))}
        </section>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    isLoggedIn: state.authentication.isLoggedIn,
    // Map other authentication-related state as needed
  });
  
  export default connect(mapStateToProps)(User);