import React from "react";
import { Race } from "../model/race.model";
import "./race-card.style.scss";

export default function RaceCards({
  races,
  selectedRace,
}: {
  races: Race[];
  selectedRace?: Race;
}) {
  return (
    <div className="race-card-wrapper">
      {races.map((race) => (
        <div
          key={race.name}
          className={
            "card" +
            " " +
            (race.name === selectedRace?.name ? "card--selected" : "")
          }
          style={{ backgroundImage: `url(${race.image})` }}
        ></div>
      ))}
    </div>
  );
}
