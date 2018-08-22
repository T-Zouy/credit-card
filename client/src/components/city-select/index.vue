<template>
  <div class="city-select">
    <div class="left">
      <span>*</span>{{label}}
    </div>
    <div class="right">
      <select v-model="selectedProvince" name="province">
        <option v-for="(item, index) in provinces"
                v-if="item.level === 1"
                :key="index"
                :value="item" :style="{display: index === 0 && 'none'}">
          {{ item.name }}
        </option>
      </select>
      <select v-model="selectedCity" name="city">
        <option
          v-for="(item, index) in cities"
          :key="index"
          :value="item">
          {{ item.name }}
        </option>
      </select>
      <select v-model="selectedBlock" name="block">
        <option
          v-for="(item, index) in blocks"
          :key="index"
          :value="item">
          {{ item.name }}
        </option>
      </select>
    </div>
  </div>
</template>
<script>
/**
 *  省 市 区/县城  三联动选择器
 */
import provinces from './provinces.js'

export default {
  name: 'city-select',
  props: {
    label: String
  },
  created () {
    // 数据初始化,默认选中北京市,默认选中第一个;北京市数据为总数据的前18个
    let defaultValue = this.provinces.slice(0, 2)
    this.cities = defaultValue.filter(item => {
      if (item.level === 2) {
        return true
      }
    })
    this.selectedCity = this.cities[0]
    this.blocks = defaultValue.filter(item => {
      if (item.level === 3) {
        return true
      }
    })
    this.selectedBlock = this.blocks[0]
  },
  watch: {
    selectedProvince (newVal, oldVal) {
      // 港澳台数据只有一级,特殊处理
      if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
        this.cities = [newVal]
        this.blocks = [newVal]
      } else {
        this.cities = this.provinces.filter(item => {
          if (item.level === 2 && item.sheng && newVal.sheng === item.sheng) {
            return true
          }
        })
      }
      // 此时在渲染DOM,渲染结束之后再选中第一个
      this.$nextTick(() => {
        this.selectedCity = this.cities[0]
        this.$emit('input', this.info)
      })
    },
    selectedBlock () {
      this.$nextTick(() => {
        this.$emit('input', this.info)
      })
    },
    selectedCity (newVal) {
      // 选择了一个市,要选择区了 di是城市的代表,sheng
      if (newVal.sheng === '71' || newVal.sheng === '81' || newVal.sheng === '82') {
        this.blocks = [newVal]
        this.cities = [newVal]
      } else {
        this.blocks = this.provinces.filter(item => {
          if (item.level === 3 && item.sheng && item.sheng === newVal.sheng && item.di === newVal.di && item.name !== '市辖区') {
            return true
          }
        })
      }
      this.$nextTick(() => {
        this.selectedBlock = this.blocks[0]
        // 触发与 v-model相关的 input事件
        this.$emit('input', this.info)
      })
    }
  },
  computed: {
    info () {
      return {
        province: this.selectedProvince,
        city: this.selectedCity,
        block: this.selectedBlock
      }
    }
  },
  data () {
    return {
      selectedProvince: provinces[0],
      selectedCity: 0,
      selectedBlock: 0,
      cities: 0,
      provinces,
      blocks: 0
    }
  }
}
</script>
<style lang="less" scoped>
  .city-select {
    outline: 0;
    margin: 0 15px;
    padding: 12px 0;
    border-bottom: 1PX solid #e7e7e7;
    font-size: 15px;
    display: flex;
    justify-content: space-between;
    select {
      outline: 0;
    }
  }
  .left {
    white-space: nowrap;
    color: #000;
    span {
      color: #f83244;
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    select {
      width: 200px;
      height: 25px;
      margin-bottom: 12px;
      border-radius: 2px;
      border-color: #aaa;
    }
  }
</style>
