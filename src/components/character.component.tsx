import React from "react";
import { Race } from "../model/race.model";
import { Class } from "../model/class.model";
import "./character.style.scss";

export default function Character({
  race,
  clazz,
}: {
  race: Race;
  clazz: Class;
}) {
  return (
    <div
      className="character"
      style={{
        backgroundImage: race
          ? "url(./assets/super-high-res-character-model.png)"
          : "",
      }}
    >
      <div
        className="character__head"
        style={{
          backgroundImage: race ? `url(${race.image})` : "",
        }}
      ></div>

      <div
        className="character__weapon"
        style={{
          backgroundImage: clazz ? `url(${clazz.image})` : "",
        }}
      ></div>
    </div>
  );
}
