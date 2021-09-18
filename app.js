const app = Vue.createApp({
    data: function(){//must be property name "data"
        return {//must return
            //return key value paris
            'courseName': 'Vue - The complete guide',
            'websiteLink': 'https://vuejs.org',
            'courseGoalA' : '<h1>Learn Vue</h1>',
            'courseGoalB' : '<h1>Master Vue</h1>'
        }
    },
    methods: {//it also reserved name, like as "data", 
        //inside methods, can set methods as you like
        /**
         * Understanding "this" keyword
         * Inside data object, we return data method, and it merges into
         * gloabl Vue object instance, managed by Vue.
         * Methods also. 
         * And they do have access to anything stroed into global object through this keyworkd
         */
        courseGoal() {
            let value = Math.random();
            if(value<0.5) return this.courseGoalA;
            else return this.courseGoalB;
        }
    },
});
app.mount('#course-goal')