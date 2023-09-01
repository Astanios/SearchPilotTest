import { create } from "zustand";
import { getItems, getItem, validate, putItem } from "../utils/axios";
const useItemsStore = create((set) => ({
  itemsList: [],
  selectedItem: null,
  fetchItems: async () => {
    const response = await getItems();

    set({ itemsList: response });
  },
  fetchItem: async (id) => {
    const response = await getItem(id);
    set({ selectedItem: response });
  },
  updateItem: async (id, data) => {
    const response = await putItem(id, data);
    console.log("response", response);
  },
  validateName: async (id, name) => {
    const response = await validate(id, name);
    return response;
  },
}));

export default useItemsStore;
