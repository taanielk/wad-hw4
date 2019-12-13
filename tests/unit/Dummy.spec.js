// Import the mount() method from the test utils
// and the component you want to test
import { mount } from '@vue/test-utils'
import Header from "../../src/components/Header.vue";
import List from "../../src/components/List.vue";
import Footer from "../../src/components/Footer.vue";


describe('List', () => {
    const wrapper = mount(List)

    it('displays Add your first Todo task with no items', () => {
        expect(wrapper.vm.sortedList.length).toBe(0);
        expect(wrapper.html()).toContain('Add your first Todo task');
    })
});

describe('Header', () => {
    // Now mount the component and you have the wrapper
    const wrapper = mount(Header)

    // Check that this component properly displays today's date

    it('renders the correct date', () => {
        let today = new Date();
        let date = today.getDate() < 10 ?  `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })
    it('renders the correct year', () => {
        let year = new Date();
        let date1 = year.getFullYear();
        expect(wrapper.html()).toContain(date1)
    })
    it('renders the correct month', () => {
        const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        let month = new Date();
        let date2 = month.toLocaleString('en-us', { month: 'short' }).toUpperCase();
        expect(wrapper.html()).toContain(date2)
    })
    it('renders the correct week day', () => {
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = new Date();
        let date3 = days[day.getDay()].toUpperCase();
        expect(wrapper.html()).toContain(date3)
    })
});

 describe('Footer', () => {
    var wrapper = mount(Footer)

    it('open changed to true', () => {
        expect(wrapper.vm.open).toBe(false);
        wrapper.find('span').trigger('click');
        expect(wrapper.vm.open).toBe(true);
    })
 });
