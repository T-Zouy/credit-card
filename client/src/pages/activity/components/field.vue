<template>
  <div class="field">
    <div class="left">
      <span>*</span>{{label}}
    </div>
    <div class="right">
      <input
        @change="$emit('change', currentValue)"
        ref="input"
        :placeholder="placeholder"
        :number="type === 'number'"
        :type="type"
        :maxlength="maxlength"
        :autofocus="active"
        @focus="active = true"
        :disabled="disabled"
        :readonly="readonly"
        :value="currentValue"
        @input="handleInput">
    </div>
  </div>
</template>

<script>
export default {
  name: 'field',
  props: {
    type: {
      type: String,
      default: 'text'
    },
    value: String,
    label: String,
    placeholder: String,
    maxlength: Number,
    readonly: Boolean,
    disabled: Boolean
  },
  data () {
    return {
      active: false,
      currentValue: this.value
    }
  },
  methods: {
    handleInput (event) {
      this.currentValue = event.target.value
    },
    doCloseActive () {
      this.active = false
    }
  }
}
</script>

<style lang="less" scoped>
  input {
    text-align: right;
  }
  input::-webkit-input-placeholder {
    color:#aaa;
  }
  .field {
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
    color: #000;
  }
</style>
