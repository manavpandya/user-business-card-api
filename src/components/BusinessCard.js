import { useEffect, useState } from "react";
import "../styles.css";

export default function BusinessCard({ userData }) {
  return (
    <>
      <p>This is a user business card page</p>
      <hr />
      <div className="business-container">
        {userData.map((user) => {
          return (
            <div className="card">
              <div className="card-title">{user.name}</div>
              <div className="id-details">
                <div>Email us : {user.email}</div>
                <div>Call us on : {user.phone}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
