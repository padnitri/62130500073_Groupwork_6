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
            }
        },
        // created(){
        //     console.log('message is ' + this.msg)
        // },
        // update(){
        //     console.log('message is changed to ' + this.msg)
        // },
    }
    mountedApp = Vue.createApp(app).mount('#app')