new Vue({
    el: ".app2",
    data: {
        counter: 0,
        secondCounter: 0,
    },
    computed: {
        output() {
            return this.secondCounter > 5 ? "greater than 5" : "less than 5";
        },
    },
    methods: {
        result() {
            return this.counter > 5 ? "greater than 5" : "less than 5";
        },
    },
});
