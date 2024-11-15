import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import ContactCard from "../component/ContactCard.js";

import "../../styles/home.css";

export const Home = () => {
  const { actions, store } = useContext(Context);

  return (
    <div>
      {store.contacts.map((item, index) => {
        return <ContactCard contact={item} key={index} contactKey={index} />;
      })}
    </div>
  );
};
