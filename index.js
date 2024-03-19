const baseUrl = "https://jsonplaceholder.typicode.com/posts"


Vue.createApp({
    data() {
        return {
            name: "Anders",
            message: null,
            posts: [],
            error: null
        }
    },
    // livcyklus metode, skal IKKE være i metode afdelingen.
    created(){
        this.getPosts()
    },
    methods: {
       async getPosts(){
            try {
                const response = await axios.get(baseUrl)
                this.posts = await response.data
            } catch (error) {
                this.error = error.message            
            }

        },

    }
}).mount("#app")