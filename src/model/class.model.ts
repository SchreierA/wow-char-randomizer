interface Specialization {
  name: string;
  subSpecialization?: string[];
}

export class Class {
  name: string;
  color: string;
  image: string;
  specializations: Specialization[];
}

export const Classes: Record<string, Class> = {
  warrior: {
    name: "Warrior",
    image: "./assets/classes/warrior.jpg",
    color: "#C69B6D",
    specializations: [
      { name: "Arms" },
      { name: "Fury" },
      { name: "Protection" },
    ],
  },
  hunter: {
    name: "Hunter",
    image: "./assets/classes/hunter.jpg",
    color: "#AAD372",
    specializations: [
      { name: "Marksmanship" },
      { name: "Beast Mastery" },
      { name: "Survival" },
    ],
  },
  mage: {
    name: "Mage",
    image: "./assets/classes/mage.jpg",
    color: "#3FC7EB",
    specializations: [{ name: "Forst" }, { name: "Fire" }, { name: "Arcane" }],
  },
  rogue: {
    name: "Rogue",
    image: "./assets/classes/rogue.jpg",
    color: "#FFF468",
    specializations: [
      { name: "Assassination" },
      { name: "Outlaw" },
      { name: "Subtlety" },
    ],
  },
  priest: {
    name: "Priest",
    image: "./assets/classes/priest.jpg",
    color: "#FFFFFF",
    specializations: [
      { name: "Holy" },
      { name: "Shadow" },
      { name: "Discipline" },
    ],
  },
  warlock: {
    name: "Warlock",
    image: "./assets/classes/warlock.jpg",
    color: "#8788EE",
    specializations: [
      { name: "Affliction" },
      { name: "Destruction" },
      { name: "Demonology" },
    ],
  },
  paladin: {
    name: "Paladin",
    image: "./assets/classes/paladin.jpg",
    color: "#F48CBA",
    specializations: [
      { name: "Holy" },
      { name: "Retribution" },
      { name: "Protection" },
    ],
  },
  druid: {
    name: "Druid",
    image: "./assets/classes/druid.jpg",
    color: "#FF7C0A",
    specializations: [
      { name: "Guardian" },
      { name: "Feral" },
      { name: "Balance" },
      { name: "Restoration" },
    ],
  },
  shaman: {
    name: "Shaman",
    image: "./assets/classes/shaman.jpg",
    color: "#0070DD",
    specializations: [
      { name: "Enchancement" },
      { name: "Elemental" },
      { name: "Restoration" },
    ],
  },
  monk: {
    name: "Monk",
    image: "./assets/classes/monk.jpg",
    color: "#00FF98",
    specializations: [
      { name: "Windwalker" },
      { name: "Mistweaver" },
      { name: "Brewmaster" },
    ],
  },
  demonHunter: {
    name: "Demon Hunter",
    image: "./assets/classes/dh.jpg",
    color: "#A330C9",
    specializations: [{ name: "Havoc" }, { name: "Vengeance " }],
  },
  deathKnight: {
    name: "Death Knight",
    image: "./assets/classes/dk.jpg",
    color: "#C41E3A",
    specializations: [{ name: "Blood" }, { name: "Unholy" }, { name: "Frost" }],
  },
  evoker: {
    name: "Evoker",
    image: "./assets/classes/evoker.jpg",
    color: "#33937F",
    specializations: [
      { name: "Augmentation" },
      { name: "Devastation" },
      { name: "Preservation" },
    ],
  },
};
