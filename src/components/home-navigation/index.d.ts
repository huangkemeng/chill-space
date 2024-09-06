declare module "@vue/runtime-core" {
  interface GlobalComponents {
    "accident-navigation": typeof import("./index.comp.vue").default;
  }
}
export {};
