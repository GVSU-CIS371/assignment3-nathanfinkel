import { defineStore } from "pinia";
import tempretures from "../data/tempretures.json";
import base from "../data/bases.json";
import creamer from "../data/creamers.json";
import syrup from "../data/syrups.json";

export const useBeverageStore = defineStore("BeverageStore", {
  state: () => ({
    temps: tempretures,
    currentTemp: tempretures[0],
    bases: base,
    currentBase: base[0],
    creamers: creamer,
    currentCreamer: creamer[0],
    syrups: syrup,
    currentSyrup: syrup[0],
    beverages: [] as any[],
  }),

  actions: {
    makeBeverage(name: string) {
      const newBeverage = {
        name,
        temp: this.currentTemp,
        base: this.currentBase,
        creamer: this.currentCreamer,
        syrup: this.currentSyrup,
      };
      this.beverages.push(newBeverage);
    },
    showBeverage(name: string) {
      const beverage = this.beverages.find((b) => b.name === name);
      this.currentTemp = beverage.temp;
      this.currentBase = beverage.base;
      this.currentCreamer = beverage.creamer;
      this.currentSyrup = beverage.syrup;
    },
  },
  persist: true,
});
