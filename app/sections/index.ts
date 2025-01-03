import { Hero } from "./Hero";
import { Info } from "./Info";
import { Location } from "./Location";
import { Dresscode } from "./Dresscode";
import { Response } from "./Response";
import { Gift } from "./Gift";
import { Modal } from "./Modal";

export const sections = [
  { component: Modal, key: "modal" },
  { component: Hero, key: "hero" },
  { component: Info, key: "info" },
  { component: Location, key: "location" },
  { component: Dresscode, key: "dresscode" },
  { component: Response, key: "response" },
  { component: Gift, key: "gift" },
];
