<template>
  <div class="fill-information">
    <header class="header">
      <div>您正在申请婚礼纪专享情侣信用卡</div>
      <div>您的资料将采用加密技术传输，请放心填写</div>
    </header>

    <section class="base-info">
      <div class="title">基本信息<span>(必填)</span>
      </div>
      <v-field label="姓名" placeholder="请输入真实姓名" :maxlength="10"
               v-model="baseInfo.name" @change="handleChange"></v-field>
      <v-field label="身份证号" type="number" :maxlength="18" placeholder="请输入身份证号"
               v-model="baseInfo.idCard" @change="handleChange"></v-field>
      <v-field label="所在单位名称" :maxlength="18" placeholder="学生、非在职人员暂不受理"
               v-model="baseInfo.company.name" @change="handleChange"></v-field>
      <city-select label="单位所在地" @input="handleSelectCity"></city-select>
      <v-field label="单位详细地址"
               v-model="baseInfo.company.addressDetail" @change="handleChange"></v-field>
      <v-education label="学历" @change="handleChange"></v-education>
    </section>

    <section class="recipient-info">
      <div class="title">
        <div class="left">收件信息 <span>(必填)</span></div>
        <div class="right">请填写真实有效收件地址和联系人</div>
      </div>
      <v-field label="收件人姓名" :maxlength="10" placeholder="请输入真实姓名"
               v-model="recipientInfo.name" @change="handleChange"></v-field>
      <v-field label="联系方式" :maxlength="11" type="number" placeholder="请输入手机号"
               v-model="recipientInfo.telephone" @change="handleChange"></v-field>
      <city-select label="收件地址" @input="handleSelectCity"></city-select>
      <v-field label="详细地址"
               v-model="recipientInfo.addressDetail" @change="handleChange"></v-field>
    </section>

    <footer class="footer">立即提交</footer>
    <!--基本信息-->
  </div>
</template>

<script>
import CitySelect from '../../components/city-select'
import Field from './components/field'
import EducationSelect from './components/education-select'

export default {
  name: 'information',
  components: {
    'city-select': CitySelect,
    'v-field': Field,
    'v-education': EducationSelect
  },
  data () {
    return {
      baseInfo: {
        name: '',
        idCard: '',
        education: '',
        company: {
          name: '',
          address: '',
          addressDetail: ''
        }
      },
      recipientInfo: {
        name: '',
        telephone: '',
        address: '',
        addressDetail: ''
      }
    }
  },
  methods: {
    handleSelectCity (info) {
      console.log(info)
    },
    handleChange (name) {
      console.log(name)
    }
  },
  mounted () {
    window.vue = this
  }
}
</script>

<style lang="less" scoped>
  @titleColor: #000;
  @infoColor: #aaa;
  @borderColor: #e7e7e7;
  .fill-information {
    background-color: #fff;
    height: calc(100vh - 50px);
    padding-bottom: 20px;
    overflow-y: scroll;
    overflow-x: hidden;
  }
  .header {
    width: 100%;
    height: 60px;
    border-bottom: 1PX solid @borderColor;
    color: @infoColor;
    font-size: 13PX;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div:nth-last-child(1) {
      margin-top: 5px;
    }
  }
  .base-info {
    color: @titleColor;
    .title {
      height: 44px;
      padding-left: 15px;
      font-size: 15px;
      display: flex;
      align-items: center;
      span {
        margin-left: 6px;
        font-size: 12px;
        color: #333;
      }
    }
  }
  .recipient-info {
    margin-top: 34px;
    .title {
      height: 44px;
      padding: 0 15px;
      font-size: 15px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left {
        color: @titleColor;
        display: flex;
        align-items: center;
        span {
          margin-left: 6px;
          font-size: 12px;
          color: #333;
        }
      }
      .right {
        font-size: 12px;
        color: #b6b6b6;
      }
    }
  }

  .footer {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 50PX;
    background-color: #f83244;
    color: #fff;
    font-size: 16PX;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
