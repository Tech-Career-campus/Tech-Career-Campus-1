import React from "react";
import { informationForCorses, Collaborations,titles } from "./Information";

export const HomeInfo = () => {
  return (
    <div >
      <h2>{titles.titleForCorses}</h2>
      {informationForCorses.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img}/>
            <h3>{item.title}</h3>
            <p>{item.paragraph}</p>
          </div>
        );
      })}

      <h2>{titles.titleCollaborations}</h2>

      {Collaborations.map((item, index) => {
        return (
          <div key={index}>
            <img src={item.img}/>
            <p>{item.information}</p>
          </div>
        );
      })}
    </div>
  );
};
