import { IndexDateState } from "@/layouts/ServiceLayout";

export function nameServiceActive(arr: IndexDateState[] | null, id: string) {
  if (!arr) {
    return null;
  }

  return arr.findIndex((el) => el.id === id);
}
