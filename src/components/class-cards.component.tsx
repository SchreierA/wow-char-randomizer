import React from "react";
import { Class, Classes } from "../model/class.model";
import "./class-card.style.scss";

export default function ClassCards({
  selectedClass,
}: {
  selectedClass?: Class;
}) {
  return (
    <div className="class-card-wrapper">
      {Object.values(Classes).map((clazz) => (
        <div
          key={clazz.name}
          className={
            "card" +
            " " +
            (clazz.name === selectedClass?.name ? "card--selected" : "")
          }
          style={{ backgroundImage: `url(${clazz.image})` }}
        ></div>
      ))}
    </div>
  );
}
