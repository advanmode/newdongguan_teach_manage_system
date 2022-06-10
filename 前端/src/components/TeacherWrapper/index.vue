<template>
  <el-scrollbar view-class="mx-auto a b teacher-wrapper" v-if="teacherItems && teacherItems.length > 0"  :view-style="{
    width : '1140px'
  }">
    <TeacherInfo
        class="t-i"
        :item="item"
        v-for="(item, i) in teacherItems"
        :key="i"
      />
  </el-scrollbar>
</template>

<script>
import TeacherInfo from "./TeacherInfo";
export default {
  components: {
    TeacherInfo,
  },
  props: {
    teacherItems: Array,
  },
};
</script>

<style lang="less" scoped>
/deep/.a {
  height: 583px;
}
/deep/ .b {
  display: flex;
  flex-wrap: wrap;
  padding: 50px 0;
}
.teacher-wrapper {
  width: 1140px;
  display: flex;
  margin-top: 30px !important;
  justify-content: space-around;
  flex-wrap: wrap;
  .t-i {
    width: 48%;
  }
}
</style>