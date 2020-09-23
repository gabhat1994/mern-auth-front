import React, { useEffect, useContext, useState } from "react";
import UserContext from "../../context/UserContext";
import { useHistory } from "react-router-dom";

export default function Home() {
  const [urlOne, setUrlOne] = useState();
  const [urlTwo, setUrlTwo] = useState();
  const { userData } = useContext(UserContext);

  const history = useHistory();
  useEffect(() => {
    if (!userData.user) {
      history.push("/login");
    }
  }, [userData]);
  const HandelOne = (e) => {
    e.preventDefault();
    setUrlOne(e.target.value);
  };
  const HandelTwo = (e) => {
    e.preventDefault();
    setUrlTwo(e.target.value);
  };

  return (
    <div className="page test">
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input type="text" id="url" onChange={(e) => HandelOne(e)} />
        <input type="text" id="url1" onChange={(e) => HandelTwo(e)} />
      </div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <iframe
          src={urlOne}
          style={{ border: "0px #ffffff none" }}
          name="myiFrame"
          scrolling="yes"
          frameborder="1"
          marginheight="0px"
          marginwidth="0px"
          height="400px"
          width="600px"
        ></iframe>
        <iframe
          src={urlTwo}
          style={{ border: "0px #ffffff none" }}
          name="myiFrame1"
          scrolling="yes"
          frameborder="1"
          marginheight="0px"
          marginwidth="0px"
          height="400px"
          width="600px"
        ></iframe>
      </div>
    </div>
  );
}
