declare module "@vue/runtime-core" {
  interface GlobalComponents {
    "home-layout": typeof import("./index.comp.vue").default;
  }
}
export {};
