import React, { useEffect, useState } from "react";
import Balance from "../components/Balance-card";
import jsonData from "../../userbank.json";
import UsernameModale from "../components/usernamemodale";

import { useDispatch, useSelector} from "react-redux";
import { openModal, setProfile } from "../features/userSlice";
import { fetchUserProfile } from "../lib/fetch";
  
export default function User() {
  var { accounts } = jsonData;
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.user.isModalOpen);
  const profile = useSelector((state) => state.user.profile);
  console.log(profile)
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await fetchUserProfile(token);
        dispatch(setProfile(userProfile));
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, [dispatch, token]);

  const handleOpenModal = () => {
    dispatch(openModal())
  }
  return (
            <div className="full-screen">
              <section className="main bg-dark">
                {isModalOpen ? (
                  <UsernameModale profile={profile} />
                ) : (
                  <div className="header">
                    <h1>Welcome back<br />{profile?.userName}!</h1>
                    <button className="edit-button" onClick={handleOpenModal}>Edit Name</button>
                  </div>
                )}
                {accounts.map((account) => (
                  <Balance
                    title={account.title}
                    amount={account.amount}
                    balance={account.balance}
                    key={account.id}
                  />
                ))}
                
            </section>
            </div>
          )

}