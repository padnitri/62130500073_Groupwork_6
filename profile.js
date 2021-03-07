// from demo 9 - main6
const constraints = {
    firstname: {
        presence: true,
    },
    lastname: {
        presence: true,
    },
    age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    gender: {
        presence: true,
    },
    // added
    username:{
        presence:true,
    }
    ,

    email: {
        presence: true,
        email: true
    },
    phone: {
        presence: true,
        length: {
            minimum : 10,
            message: "must be at least 10 digits"
        },        
    },
    // chosensubject: {
    //     presence: true
    // }
}
   // end constraints

    const app = {
        data() {
            return {
                firstname: 'Pattranit',
                lastname: 'Kongsaenkam',
                role: 'Content Creator',
                Article:    53,
                Followers: 328,
                Ratings: 5.0,
                image: './images/padzphere_profile.png',

                // from Demo 9 - main6
                firstname: null,
                lastname: null,
                gender: null,
                //added
                username: null,
                age: null,
                email: null,
                phone: null,
                chosensubject: null,
                subject_lists: [{subject_id: 1, subject_name:'Intro to Vue 3'},
                                {subject_id: 2, subject_name: 'Vue 3 Forms'},
                                {subject_id: 3, subject_name: 'Vue 3 Reactivity'}],
                errors: null,
            }
        },

        methods: {
            checkForm(e){
                this.errors = validate({firstname: this.firstname,
                                        lastname: this.lastname,
                                        age: this.age,
                                        gender: this.gender,
                                        // added
                                        username: this.username,
                                        email: this.email,
                                        phone: this.phone,
                                        chosensubject: this.chosensubject},
                                        constraints)
                if(this.errors){
                    e.preventDefault();
                }
            }
        }
    
    }
    mountedApp = Vue.createApp(app).mount('#app')