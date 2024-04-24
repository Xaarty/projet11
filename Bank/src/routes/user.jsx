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
  
      var { accounts, accountName } = jsonData;
      return (
        <section className="main bg-dark">
          <div className="header">
            <h1>Welcome back<br />{accountName}!</h1>
            <button className="edit-button">Edit Name</button>
          </div>
          {accounts.map((account) => (
            <Balance
              title={account.title}
              amount={account.amount}
              balance={account.balance}
              key={account.id}
            />
          ))}
        </section>
      );
    }
  }
  
  const mapStateToProps = (state) => ({
    isLoggedIn: state.authenticationReducer.isLoggedIn,
  });
  
  export default connect(mapStateToProps)(User);