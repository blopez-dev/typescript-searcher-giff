import { configure } from "@testing-library/dom";

configure({
  testIdAttribute: "data-testid",
});

window.matchMedia =
  window.matchMedia ||
  (() => ({
    media: "",
    onchange() {},
    matches: false,
    addListener() {},
    addEventListener() {},
    removeListener() {},
    removeEventListener() {},
    dispatchEvent: () => true,
  }));

window["PUBLIC_PATH"] = "";
window["DEPLOY_ENV"] = "";
window["ASSET_PATH"] = "";
