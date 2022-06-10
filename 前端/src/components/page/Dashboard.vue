<template>
    <div>
        <el-carousel height="500px">
            <el-carousel-item >
                <img src="../../static/1.jpg" height="100%" width="100%">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/2.png" height="100%" width="100%">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/3.jpg" height="100%" width="100%">
            </el-carousel-item>
            <el-carousel-item >
                <img src="../../static/4.jpg" height="100%" width="100%">
            </el-carousel-item>
        </el-carousel>
    </div>
</template>

<script>
    export default {
        name: "dashboard",

        data() {
            return {
                loading: true,
                notifyPromise:Promise.resolve(),
            };
        },

        watch: {
            "$route" : {
                handler(to,from){
                    const that = this;
                    if (to.path==="/dashboard") {
                        that.getData();
                    }
                },
                deep: true
            }
        },

        created(){
            this.getData();
        },

        methods: {
            getData() {

            },

            notify(info) {
                this.notifyPromise = this.notifyPromise.then(this.$nextTick).then(()=>{
                    this.$notify({
                        title: "通知",
                        message: info,
                        duration: 0,
                        type: 'warning',
                    });
                })
            },
        },
    }
</script>

<style scoped>
    .handle-box {
        margin-bottom: 20px;
    }

    .handle-select {
        width: 143px;
    }

    .handle-add {
        width: 100px;
    }

    .handle-input {
        width: 120px;
        display: inline-block;
    }
    .table {
        width: 100%;
        font-size: 14px;
    }
    .red {
        color: #ff0000;
    }
    .mr10 {
        margin-right: 10px;
    }
    .table-td-thumb {
        display: block;
        margin: auto;
        height: 7px;
    }

    </style>