<template>
    <div>


    </div>
</template>

<script>
import Schart from 'vue-schart';
import bus from '../common/bus';
import 'element-ui/lib/theme-chalk/display.css';
export default {
    name: 'dashboard',
    data() {
        return {

            loading: false,
        };
    },

    created(){
        this.convert();
    },

    watch: {
        "$route" : {
            handler(to,from){
                const that = this;
                if (to.path==="/dashboard") {
                    that.convert();
                }
            },
            deep: true
        }
    },

    // created() {
    //     this.handleListener();
    //     this.changeDate();
    // },
    // activated() {
    //     this.handleListener();
    // },
    // deactivated() {
    //     window.removeEventListener('resize', this.renderChart);
    //     bus.$off('collapse', this.handleBus);
    // },
    methods: {



    }
};
</script>


