
type EquipmentType = {
    label: string;
    key: string;
    range: string[];
    wear: number,
    value: number,
    load: number,
    skills: string[],
    tags: string[];
  }
type TagType = {
  description: string;
  type: string[];
  value?: number;
}
export { EquipmentType, TagType };