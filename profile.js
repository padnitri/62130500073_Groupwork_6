// from demo 9 - main6
const constraints = {
    Firstname: {
        presence: true,
    },
    Lastname: {
        presence: true,
    },
    Age: {
        presence: true,
        numericality: {
            lessThan: 150
        }
    },
    Gender: {
        presence: true,
    },
    Email: {
        presence: true,
        email: true
    },
    Tel: {
        presence: true,
        length: {
            minimum: 10,
            message: "must be at least 10 digits"
        },
    },
    Job: {
        presence: true,
    }

}
// end constraints

const app = Vue.createApp({
    data() {
        return {
            Firstname: null,
            Lastname: null,
            Age: null,
            Gender: null,
            Tel: null,
            Email: null,
            Job: null,
            image: './images/padzphere_profile.png',
            errors: null,
        }
    },

    methods: {
        checkForm() {
            this.errors = validate({
                Firstname: this.Firstname,
                Lastname: this.Lastname,
                Age: this.Age,
                Gender: this.Gender,
                // added
                Tel: this.Tel,
                Email: this.Email,
                Job: this.Job
            },
                constraints)
            if (!this.errors) {
                alert("Registered successfully.")
                Object.assign
            }
        }
    }

})