const app = Vue.createApp({
    data: function(){//must be property name "data"
        return {//must return
            //return key value paris
            'courseName': 'Vue - The complete guide',
            'websiteLink': 'https://vuejs.org'
        }
    },
    methods: {//it also reserved name, like as "data", 
        //inside methods, can set methods as you like
        rand() {
            let value = Math.random();
            if(value<0.5) return 'Learn Vue';
            else return 'Master Vue';
        }
    },
});
app.mount('#course-goal')