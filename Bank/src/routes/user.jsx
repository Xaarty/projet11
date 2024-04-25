import React from "react";
import Balance from "../components/Balance-card";
import jsonData from "../../userbank.json";
import ErrorPage from "../error-page";

import { connect } from 'react-redux';
import { useDispatch } from "react-redux";
import { authenticationReducer } from "../features/userSlic";

// class User extends React.Component {
//     render() {
//       const { isLoggedIn } = this.props
  
//       if (!isLoggedIn) {
//         return <ErrorPage />
//       }
  
//       
//       
//     }
//   }
  
export default function User() {
  const token = window.localStorage.getItem('token');
  var { accounts, accountName } = jsonData;
  if (token != null ) {
    console.log('ok')
    const dispatch = useDispatch()
    dispatch(authenticationReducer(true))
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
            )
  } else {
    console.log('fail')
  }
}

  
  // export default connect(mapStateToProps)(User)