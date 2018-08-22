<template>
  <div class="education-select">
    <div class="left">
      <span>*</span>{{label}}
    </div>
    <div class="right">
      <select name="education" id="education" v-model="education">
        <option value="none" style="display: none">请选择</option>
        <option v-for="(value, index) in educationList"
                :value="value"
                :key="index">{{value}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'education-select',
  props: {
    label: String
  },
  data () {
    return {
      educationList: ['大专', '本科', '硕士', '博士及以上', '高中、中专及技校', '初中及以下'],
      education: 'none'
    }
  },
  watch: {
    education (newValue) {
      this.$nextTick(() => {
        this.$emit('change', newValue)
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .education-select {
    height: 48px;
    margin: 0 15px;
    border-bottom: 1PX solid #e7e7e7;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .left {
    white-space: nowrap;
    color: #000;
    span {
      color: #f83244;
    }
  }
  .right {
    color: #aaa;
    border-radius: 2px;
    border-color: #aaa;
    outline: 0;
    select {
      width: 200px;
      height: 25px;
      border-radius: 2px;
      border-color: #aaa;
      &:focus {
        outline: 0;
      }
    }
  }
</style>
