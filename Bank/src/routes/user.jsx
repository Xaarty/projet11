import React, { useState } from "react";
import Balance from "../components/Balance-card";
import jsonData from "../../userbank.json";
import UsernameModale from "../components/usernamemodale";

import { useDispatch, useSelector} from "react-redux";
import { authenticationReducer, openModal } from "../features/userSlice";

  
export default function User() {
  const token = window.localStorage.getItem('token');
  var { accounts, accountName } = jsonData;

  const isModalOpen = useSelector((state) => state.user.isModalOpen);

  if (token != null ) {
    console.log('ok')
    const dispatch = useDispatch()
    dispatch(authenticationReducer(true))

    const handleOpenModal = () => {
      dispatch(openModal())
    }
    return (
              <div className="full-screen">
                <section className="main bg-dark">
                  <div className="header">
                    <h1>Welcome back<br />{accountName}!</h1>
                    <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
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
              {isModalOpen && <UsernameModale />}
              </div>
            )
  } else {
    console.log('fail')
  }
}