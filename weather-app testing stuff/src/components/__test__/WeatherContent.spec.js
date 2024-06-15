import { createTestingPinia } from "@pinia/testing";
import { flushPromises, shallowMount } from "@vue/test-utils";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useCitiesStore } from "../../stores/cities";
import WeatherContent from "../WeatherContent.vue";

var mock = new MockAdapter(axios);
describe("test suite", () => {
  let wrapper = null;
  let store = null;

  beforeEach(() => {
    //mock get request
    const baseURL = 'https://api.openweathermap.org/geo/1.0/direct';
    const geoUrl = new RegExp(`${baseURL}/*`);
    mock.onGet(geoUrl).reply(200, [
      {
        name: "Chicago",
        lat: 41.875,
        lon: -90.34343,
        country: "US",
        state: "Illinois",
      },
    ]);

    const weatherBaseURL = "https://api.openweathermap.org/data/2.5/weather";
    const weatherURL = new RegExp(`${weatherBaseURL}/*`);
    mock.onGet(weatherURL).reply(200, {
      weather: [
        {
          main: "Cloudy",
        },
      ],
      main: {
        temp: 55.0,
        temp_max: 58.9,
        temp_min: 33.9,
      },
    });
    //render the component
    wrapper = shallowMount(WeatherContent, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
          }),
        ],
      },
    });
    store = useCitiesStore();
  });
  afterEach(() => {
    mock.reset();
    wrapper.unmount();
  });

  it('load weather data',async ()=>{
    wrapper.vm.searchCity('Chicago')
    await flushPromises()
    expect(mock.history.get.length).toBe(2)
    expect(mock.history.get[0].url).toMatch('https://api.openweathermap.org/geo/1.0/direct')
    expect(mock.history.get[0].method).toMatch('get')

    expect(store.addCity).toHaveBeenCalledTimes(1)
    expect(store.addCity).toHaveBeenLastCalledWith('Chicago', 'Illinois', 'US', 'Cloudy', 55.0, 58.9, 33.9);

  })
it('reset the banner',()=>{
    wrapper.vm.messageToDisplay='Great search results'
    wrapper.vm.messageType='Success'
    wrapper.vm.clearMessage()
    expect(wrapper.vm.messageToDisplay).toMatch(/^/)
    // expect(wrapper.vm.messageToDisplay).toMatch(/^$/);
    expect(wrapper.vm.messageType).toMatch('Info')

})





});
