import { defineStore } from "pinia";
export const useMainStore = defineStore("main", {
  state: () => ({
    city: "cairo",
  }),
  actions: {
    changeCity(newCity) {
      if (newCity) this.city = newCity;
    },
  },
});
