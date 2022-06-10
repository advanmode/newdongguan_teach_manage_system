<template>
    <div style="margin-left: 25%;margin-right: 25%">
      <h1>{{title}}</h1>
      <p>&nbsp</p>
      <div v-html="content"></div>
    </div>
</template>

<script>
    export default {
        name: "DocumentInfo",
        data() {
            return{
                content: '',
                title: '',
                loading: false,
            }
        },
        created(){
            this.getData();
        },

        methods: {
            getData(){
              this.content=this.$route.query.text;
              this.title=this.$route.query.title;
            },
        },

        watch: {
            "$route" : {
                handler(to,from){
                    const that = this;
                    if (to.path==="/text") {
                        that.getData();
                    }
                },
                deep: true
            }
        },
    }
</script>

<style scoped>

</style>