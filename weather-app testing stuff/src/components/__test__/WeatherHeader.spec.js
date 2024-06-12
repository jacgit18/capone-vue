import { describe, expect, it } from "vitest";

import { shallowMount } from "@vue/test-utils";

import WeatherHeader from "../WeatherHeader.vue";

describe("testing weather header", () => {
  it("render message", () => {
    const wrapper = shallowMount(WeatherHeader, {
      propsData: {
        title: "Vue Project",
      },
    });
    expect(wrapper.text()).toMatch("Vue Project");
  });
});








