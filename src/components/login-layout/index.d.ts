declare module "@vue/runtime-core" {
  interface GlobalComponents {
    "login-layout": typeof import("./index.comp.vue").default;
  }
}
export {};
