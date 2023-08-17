import { $fetch } from "ofetch";
import { Equipment, EquipmentSlot } from "../../types";

const parseSlot = (slot: string): EquipmentSlot | null => {
  switch (slot) {
    case "weapon":
      return "weapon";
    case "head":
      return "head";
    case "body":
      return "body";
    case "hands":
      return "hands";
    case "legs":
      return "legs";
    case "feet":
      return "feet";
    case "offHand":
      return "offhand";
    case "ears":
      return "ear";
    case "neck":
      return "neck";
    case "wrists":
      return "wrist";
    case "finger":
      return "ring";
    default:
      return null;
  }
};

const transformData = (data: any, xivApiUrl: string): Equipment[] => {
  if (!Array.isArray(data)) return [];

  return data.map((data) => ({
    id: data.id,
    name: data.name,
    iconSrc: `${xivApiUrl}${data.iconPath}`,
    itemLevel: data.itemLevel,
    slot: parseSlot(data.slotName)!,
  }));
};

export const getEquipments = async (
  etroApiUrl: string,
  bisEquipmentItemLevel: number,
  xivApiUrl: string
) => {
  const data = await $fetch(`${etroApiUrl}/equipment`, {
    query: {
      minItemLevel: bisEquipmentItemLevel,
    },
  });
  return transformData(data, xivApiUrl);
};
