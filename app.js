new Vue({
    el: "#app",
    data: {
        title: 'The Vue App',
        showPara: false,
    },
    methods: {
        show: function() {
            this.showPara = true;
            this.updateTitle('New Updated Title (Updated...!)');
        },
        updateTitle: function(title) {
            this.title = title;
        },
    },
    computed: {
        lowercaseTitle: function() {
            return this.title.toLowerCase();
        },
    },
    watch: {
        title: function(value) {
            alert('Title changed: ' + value);
        },
    }
});
