import React, { useEffect, useState } from "react";
import Balance from "../components/Balance-card";
import jsonData from "../../userbank.json";
import UsernameModale from "../components/usernamemodale";

import { useDispatch, useSelector} from "react-redux";
import { openModal, setProfile } from "../features/userSlice";

  
export default function User() {
  var { accounts, accountName } = jsonData;
  const dispatch = useDispatch()
  const isModalOpen = useSelector((state) => state.user.isModalOpen);
  const profile = useSelector((state) => state.user.profile);
  console.log(profile)
  const token = window.localStorage.getItem('token');

  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    const fetchProfileName = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/v1/user/profile", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
             "Authorization": `Bearer ${token}`
          },
          body: JSON.stringify({}),
        });
        const data = await response.json();
        console.log(data)
        if (response.ok) {
          dispatch(setProfile(data.body))
        } else {
          console.error("Failed to fetch profile name:", data.message);
        }
      } catch (error) {
        console.error("Error fetching profile name:", error);
      }
    };

    fetchProfileName();
  }, []);


  const handleOpenModal = () => {
    dispatch(openModal())
  }
  return (
            <div className="full-screen">
              <section className="main bg-dark">
                <div className="header">
                  <h1>Welcome back<br />{profile?.userName}!</h1>
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
            {isModalOpen && <UsernameModale profile = {profile} />}
            </div>
          )

}