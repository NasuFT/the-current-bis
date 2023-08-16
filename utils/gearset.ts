import { GearsetSlot } from "types";

export const getSlotLabel = (slot: GearsetSlot) => {
  switch (slot) {
    case "weapon":
      return "Weapon";
    case "head":
      return "Head";
    case "body":
      return "Body";
    case "hands":
      return "Hands";
    case "legs":
      return "Legs";
    case "feet":
      return "Feet";
    case "offhand":
      return "Off Hand";
    case "ears":
      return "Earrings";
    case "neck":
      return "Necklace";
    case "wrist":
      return "Wrists";
    case "ringL":
      return "Left Ring";
    case "ringR":
      return "Right Ring";
  }
};
