<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
    </x-header>
    <div class="room">
      <p>中国平煤神马集团2018年信息化工作会发言材料四</p>
      <h3 class="center">强化管理注重实效，打造两化融合示范公司</h3>
      <h3 class="center">（2018年2月7日）</h3>
      <h3 class="center">首山焦化</h3>
      <p>尊敬的各位领导、同志们：</p>
      <div>
        <span style="color: transparent">集团</span>大家上午好！
      </div>
      <div>
        <span style="color: transparent">集团</span>2017年首山焦化公司根据集团公司信息办下发的《中国平煤神马集团年度企业信息化水平考核评价办法》有针对性的对公司局域网环境进行了一系列的治理和升级。取得了良好的效果。
      </div>
      <div>
        <span style="color: transparent">集团</span>2017年我公司完善了信息化的相关领导机构，配备有专职工作人员，在信息办与公司领导的指导下，积极参与到信息化、两化融合等专题中。两化融合方面，能源管理中心一期项目的完工，便捷的数据交换大大提高了工作人员的应对时间，有效提高了安全系数，降低了安全风险。在确保产品质量的同时，为提高产量保驾护航。
      </div>
      <div>
        <span style="color: transparent">集团</span>11月份对公司所属的监控系统、局域网、网络设备等进行了一次全面的自查检修，确保节日期间稳定、高效运行。集团公司组织的信息化、网络安全等相关培训，均认真组织人员参加。根据公司相关文件的指示，每月按时汇报上一月的网络运行情况，方便了集团公司领导及时了解各单位网络运行情况。结合安全部对新进员工进行安全生产培训，提高了首山焦化公司员工的安全生产意识及信息化、办公自动化的重要性。第三、完善了信息化的相关工作制度，做到了制度上墙并严格遵守。第四、在公司推行无纸化办公之后，对相关员工进行了必要的培训，使之能熟练掌握和使用OA，并为部分领导安装了手机客户端，大大提高了办事效率，普及了OA的使用。
      </div>
      <div>
        <span style="color: transparent">集团</span>2018年工作打算
      </div>
      <div>
        <span style="color: transparent">集团</span>第一、根据办公区、生活区、生产区的区域划分，在接下来的一年中，优化员工宿舍的上网环境。
      </div>
      <div>
        <span style="color: transparent">集团</span>第二、计划对老办公楼的网络进行更换。
      </div>
      <div>
        <span style="color: transparent">集团</span>第三、根据集团公司出台的对于无线管理的规定，强化首山焦化的相关规定。
      </div>
      <div>
        <span style="color: transparent">集团</span>第四、能源管理中心二期项目的建设：一期建设为生产主管领导提供各控制系统集成的实时信息在线查询及分析功能。二期项目的建设完成后将实现在实时信息基础上的生产调度指挥包括安全管理、生产管理、设备管理、质量管理等应用，做到拉近各个生产现场到管理人员的距离，可以使领导们不用到达现场只用点击鼠标就可以掌握分布在不同区域生产现场的全面生产实时信息，为公司领导和生产调度指挥提供全面、及时、准确的现场实施生产信息，为生产决策提供可靠的数据基础及历史数据追溯，并为设备、质检、生产等各职能岗位运用信息化手段规范现行的业务管理，从而实现生产的信息化、网络化，及时协调各分厂、各部门的能源需求，确保生产稳定，高效，做到了能源集中管理和自动化同步操作，提高了劳动生产率。
      </div>
      <div>
        <span style="color: transparent">集团</span>我公司工业化与信息化建设虽取得了一定的进步，但与集团公司要求目标的还有一定距离，还存在一些问题，需要不断地加强完善，争取在一四年里完成集团下达的任务，紧跟集团脚步，努力把我公司打造成两化融合示范公司。
      </div>
      <div>
        <span style="color: transparent">集团</span>谢谢大家！
      </div>
      <div class="clearfix attachment">
        <div class="fl" style="padding: 2vw;margin-right: 2vw;background-color: #fff">
          <img style="width: 5vw;vertical-align: middle;" src="./image/accessory.png" alt="">
        </div>
        <div class="fl">
          <p style="width: 60vw;">2018年信息化工作会--首山焦化发言材料</p>
        </div>
        <div class="fr">
          <p style="padding: 2vw;background: #41619C;color: #fff;" @click="open()">下载</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {XHeader} from 'vux'
  export default {
    components: {
      XHeader
    },
    methods: {
      back () {
        this.$router.replace({name: 'exchange'})
      },
      open () {
        window.open('http://qywx.pmcc.com.cn/meet/static/file/2018年信息化工作会--首山焦化发言材料.doc')
      }
    }
  }
</script>

<style scoped lang="less" rel="stylesheet/less">
  .room {
    padding: 2vw;
    .attachment{
      padding: 2vw;
      background-color: #ddd;
      margin-top: 5vw;
    }
  }
</style>
