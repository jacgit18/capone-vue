import { afterEach, beforeEach, describe, expect, it } from "vitest";

import { shallowMount } from "@vue/test-utils";

import CitySearch from "../CitySearch.vue";
// missing test

describe("city search weather ", () => {
    let wrapper: any = null;

    beforeEach(() => {
        wrapper = shallowMount(CitySearch)
    })
    afterEach(() => {
        wrapper.unmount()
    })
    //chaeck the heading is rendered correctly
    it('load the correct elements', () => {
        expect(wrapper.findAll('h2').length).toEqual(1)
        expect(wrapper.findAll('h2').at(0).text()).toMatch('Weather Search')
        //chaeck the label is created
        expect(wrapper.findAll('label').length).toEqual(1)
        expect(wrapper.findAll('label').at(0).text()).toMatch('City:')
    })
});
