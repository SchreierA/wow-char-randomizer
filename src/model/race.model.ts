import { Class, Classes } from "./class.model";

export class Race {
  name: string;
  classes: Class[];
  image: string;
}

const human: Race = {
  name: "Human",
  image: "./assets/races/human.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.monk,
    Classes.deathKnight,
  ],
};

const dwarf: Race = {
  name: "Dwarf",
  image: "./assets/races/dwarf.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.monk,
    Classes.deathKnight,
    Classes.shaman,
  ],
};

const nightElf: Race = {
  name: "Night Elf",
  image: "./assets/races/night-elf.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
    Classes.druid,
    Classes.demonHunter,
  ],
};

const gnome: Race = {
  name: "Gnome",
  image: "./assets/races/gnome.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
  ],
};

const draenei: Race = {
  name: "Draenei",
  image: "./assets/races/draenei.png",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.shaman,
    Classes.monk,
    Classes.deathKnight,
  ],
};

const worgen: Race = {
  name: "Worgen",
  image: "./assets/races/worgen.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
    Classes.druid,
  ],
};

const pandaClasses: Class[] = [
  Classes.warrior,
  Classes.hunter,
  Classes.mage,
  Classes.rogue,
  Classes.priest,
  Classes.warlock,
  Classes.monk,
  Classes.deathKnight,
  Classes.shaman,
];
const pandaImage: string = "./assets/races/pandaren.webp";

const alliancePandaren: Race = {
  name: "Alliance Pandaren",
  image: pandaImage,
  classes: pandaClasses,
};

const hordePandaren: Race = {
  name: "Horde Pandaren",
  image: pandaImage,
  classes: pandaClasses,
};

const lizzardClasses: Class[] = [Classes.evoker];
const lizzardImage: string = "./assets/races/dracthyr.png";

const allianceDracthyr: Race = {
  name: "Alliance Dracthyr",
  classes: lizzardClasses,
  image: lizzardImage,
};

const hordeDracthyr: Race = {
  name: "Horde Dracthyr",
  classes: lizzardClasses,
  image: lizzardImage,
};

const voidElf: Race = {
  name: "Void Elf",
  image: "./assets/races/void-elf.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
  ],
};

const lightforged: Race = {
  name: "Lightforged Draenei",
  image: "./assets/races/lightforged.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.monk,
    Classes.deathKnight,
  ],
};

const darkIronDwarf: Race = {
  name: "Dark Iron Dwarf",
  image: "./assets/races/dark-iron.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.monk,
    Classes.deathKnight,
    Classes.shaman,
  ],
};

const kultiran: Race = {
  name: "Kul Tiran",
  image: "./assets/races/kultiran.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.druid,
    Classes.monk,
    Classes.deathKnight,
    Classes.shaman,
  ],
};

const mechaGnome: Race = {
  name: "Mecha Gnome",
  image: "./assets/races/mecha-gnome.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const AllianceRaces: Record<string, Race> = {
  human: human,
  dwarf: dwarf,
  nightElf: nightElf,
  gnome: gnome,
  draenei: draenei,
  worgen: worgen,
  alliancePandaren: alliancePandaren,
  allianceDracthyr: allianceDracthyr,
  voidElf: voidElf,
  lightforged: lightforged,
  darkIronDwarf: darkIronDwarf,
  kultiran: kultiran,
  mechaGnome: mechaGnome,
};

export const orc: Race = {
  name: "Orc",
  image: "./assets/races/orc.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.shaman,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const undead: Race = {
  name: "Undead",
  image: "./assets/races/undead.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const tauren: Race = {
  name: "Tauren",
  image: "./assets/races/cow.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.druid,
    Classes.shaman,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const troll: Race = {
  name: "Troll",
  image: "./assets/races/troll.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.druid,
    Classes.shaman,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const bloodElf: Race = {
  name: "Blood Elf",
  image: "./assets/races/blood-elf.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.monk,
    Classes.deathKnight,
    Classes.demonHunter,
  ],
};

export const goblin: Race = {
  name: "Goblin",
  image: "./assets/races/goblin.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.shaman,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const nightborne: Race = {
  name: "Nightborne",
  image: "./assets/races/nightborne.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const highmountainTauren: Race = {
  name: "Highmountain Tauren",
  image: "./assets/races/painted-cow.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.druid,
    Classes.shaman,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const magharOrc: Race = {
  name: "Mag'har Orc",
  image: "./assets/races/maghar-orc.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.shaman,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const zandalariTroll: Race = {
  name: "Zandalari Troll",
  image: "./assets/races/zandalari-troll.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.warlock,
    Classes.paladin,
    Classes.druid,
    Classes.shaman,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const vulpera: Race = {
  name: "Vulpera",
  image: "./assets/races/rat.webp",
  classes: [
    Classes.warrior,
    Classes.hunter,
    Classes.mage,
    Classes.rogue,
    Classes.priest,
    Classes.shaman,
    Classes.warlock,
    Classes.monk,
    Classes.deathKnight,
  ],
};

export const HordeRaces: Record<string, Race> = {
  orc: orc,
  undead: undead,
  tauren: tauren,
  troll: troll,
  bloodElf: bloodElf,
  goblin: goblin,
  hordePandaren: hordePandaren,
  hordeDracthyr: hordeDracthyr,
  nightborne: nightborne,
  highmountainTauren: highmountainTauren,
  magharOrc: magharOrc,
  zandalariTroll: zandalariTroll,
  vulpera: vulpera,
};
