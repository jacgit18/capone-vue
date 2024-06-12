import { describe, expect, it } from "vitest";

import { shallowMount } from "@vue/test-utils";
import WeatherFooter from "../WeatherFooter.vue";

describe("WatherFooter test", () => {
  it("render message when component is created", () => {
    const wrapper = shallowMount(WeatherFooter, {
      slots: {
        message: "Vue Weather App",
        link: '<a href="https://asreet-tech.com">Asreet Consulting Services</a>',
      },
    });
    expect(wrapper.text()).toMatch("Vue Weather App");
    const items = wrapper.findAll("a");
    expect(items.length).toEqual(1);
    expect(items[0].text()).toMatch("Asreet Consulting Services");
  });
});
