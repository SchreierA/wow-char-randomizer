import React, { useEffect, useState } from "react";
import { AllianceRaces, HordeRaces } from "./model/race.model";
import RaceCards from "./components/race-cards.component";
import "./App.scss";
import ClassCards from "./components/class-cards.component";
import { Class } from "./model/class.model";
import Character from "./components/character.component";

function App() {
  const [race, setRace] = useState(undefined);
  const [clazz, setClass] = useState(undefined);
  const [spec, setSpec] = useState(undefined);
  const [gender, setGender] = useState(undefined);

  useEffect(() => {
    // This effect will run after 'race' state is updated
    if (!clazz) randomizeClass();
  }, [race, clazz]);

  function randomizeClass() {
    if (!race) return;
    const result: Class = randomize(race.classes) as Class;
    setClass(result);
    setSpec(randomize(result.specializations));
  }

  function randomizeRace() {
    setClass(undefined);
    setSpec(undefined);
    setGender(Math.floor(Math.random() * 2));
    setRace(randomize({ ...AllianceRaces, ...HordeRaces }));
  }

  function randomize(pool) {
    const raceValues = Object.values(pool);
    const randomRaceIndex = Math.floor(Math.random() * raceValues.length);

    return raceValues[randomRaceIndex];
  }

  return (
    <div className="app">
      <div className="main">
        <aside className="aside aside--left">
          <div className="aside__faction-wrapper">
            <img
              className="aside__faction-icon"
              src="./assets/alliance.png"
            ></img>
            <span className="aside__faction-name">Alliance</span>
          </div>

          <RaceCards races={Object.values(AllianceRaces)} selectedRace={race} />
        </aside>

        <div className="result">
          <Character race={race} clazz={clazz}></Character>
          <p>
            {race?.name} {spec?.name} {clazz?.name}
          </p>
        </div>

        <aside className="aside aside--right">
          <div className="aside__faction-wrapper">
            <img className="aside__faction-icon" src="./assets/horde.png"></img>
            <span className="aside__faction-name">Horde</span>
          </div>

          <RaceCards races={Object.values(HordeRaces)} selectedRace={race} />
        </aside>
      </div>

      <div className="gender-wrapper">
        <div
          className={"card" + " " + (gender ? "" : "card--selected")}
          style={{ backgroundImage: "url(./assets/male.png)" }}
        ></div>
        <div
          className={"card" + " " + (gender ? "card--selected" : "")}
          style={{ backgroundImage: "url(./assets/female.png)" }}
        ></div>
      </div>

      <footer>
        <button
          style={{ visibility: "hidden" }}
          onClick={(_) => randomizeRace()}
        >
          Randomize
        </button>

        <ClassCards selectedClass={clazz} />

        <button onClick={(_) => randomizeRace()}>Randomize</button>
      </footer>
    </div>
  );
}

export default App;
