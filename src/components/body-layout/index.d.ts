declare module "@vue/runtime-core" {
  interface GlobalComponents {
    "body-layout": typeof import("./index.comp.vue").default;
  }
}
export {};
