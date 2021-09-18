const app = Vue.createApp({
    data: function(){//must be property name "data"
        return {//must return
            //return key value paris
            'courseName': 'Vue - The complete guide'
        }
    }
});
app.mount('#course-goal')