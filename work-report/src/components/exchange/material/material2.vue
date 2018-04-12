<template>
  <div>
    <x-header @on-click-back="back"
              :left-options="{backText: '',preventGoBack: true}">
    </x-header>
    <div class="room">
      <p>中国平煤神马集团2018年信息化工作会发言材料五</p>
      <h3 class="center">苦练内功，提升信息化管理水平</h3>
      <h3 class="center">（2018年2月7日）</h3>
      <h3 class="center">开封炭素</h3>
      <p>尊敬的各位领导、同志们：</p>
      <div>
        <span style="color: transparent">集团</span>大家上午好！
      </div>
      <div>
        <span style="color: transparent">集团</span>下面由我就中国平煤神马集团开封炭素有限公司信息化建设现状和未来打算向大家作交流发言，有不足之处敬请批评指正。
      </div>
      <div>
        <span style="color: transparent">集团</span>一、统一思想，提高认识，加快信息化建设步伐。
      </div>
      <div>
        <span style="color: transparent">集团</span>一年来，开封炭素高度重视信息化工作，大力推进信息技术在安全、生产、经营等方面的应用和普及，公司信息化建设和应用水平不断提高。一是公司ERP项目基本建成；逐步成为生产经营决策的有效平台。目前已实现了财务与业务的一体化建设工作，2017年上半年全面完工，届时公司生产状况及生产成本能够基本实现自动计算。二是充分论证能源管理系统建设方案；公司领导作出了“多思考、不浪费、重效益”的9字原则，努力将能源管理项目做成示范项目。三是信息化基础工作稳步推进；信息安全基础设施不断完善，解决宿舍职工上网需要丰富员工日常工作学习娱乐需要。四是信息化制度创新工作齐头并进；通过对ERP系统的实施公司修改、废除、新制定各项制度、工作流程、工作标准20余项，使ERP系统与日常工作做到深度融合，避免了信息系统与工作流程两层皮的现象发生。六是形成了开炭特色的信息化推进路子；公司领导提出“需求主导、应用为先、小步快跑、注重效益”的建设原则，“跨越式发展，选择式突破，低成本实施”的推进思路和“统一规划、统一开发、统一建设、统一管理、统一使用”的“五统一”信息系统建设管理格局，是我公司信息化建设多年形成的成功做法和经验，我们做到认真总结，坚持发扬。
      </div>
      <div>
        <span style="color: transparent">集团</span>二、认真总结，提出问题，明确行动目标
      </div>
      <div>
        <span style="color: transparent">集团</span>开封炭素公司信息化建设仍然存在一些问题。主要表现在：个别部门信息化需求不明确，导致需求变更抓不住重点；信息化项目工作进展不平衡，部门之间协调难度较大，个别部门对信息化项目工作不理解，不重视,“被推进”现象较为严重；信息化技术力量较薄弱，人才短缺、人员不足的问题比较突出；信息化应用系统平台间深度系统集成工作滞后，存在信息孤岛。这些问题，急需深入研究，切实加以解决。
      </div>
      <div>
        <span style="color: transparent">集团</span>2018年是开封炭素公司信息化建设的关键年，年度工作会议中提出ERP系统6月份要全模块上线，生产条码追溯系统要与ERP系统紧密结合，能源管理系统年内完工上线。我们也将面对着压力和挑战。
      </div>
      <div>
        <span style="color: transparent">集团</span>借此机会也想集团公司提几点建议。一是利用集团优势让信息化管理人员和企业主要领导“走出去，多交流”开拓眼界。二是对信息化工作较好的单位或较为先进的信息化项目进行资金扶持。
      </div>
      <div>
        <span style="color: transparent">集团</span>总之，信息化工作是一场管理变革，我们要紧紧抓住工作重点，合理制定目标，脚踏实地的推进信息化进程。充分依托集团公司的人才、技术优势、和先进经验，沟通交流经验教训，培养综合信息化人才队伍，我们的信息化之路才能越走越宽。
      </div>
      <div>
        <span style="color: transparent">集团</span>谢谢大家！
      </div>
      <div class="clearfix attachment">
        <div class="fl" style="padding: 2vw;margin-right: 2vw;background-color: #fff">
          <img style="width: 5vw;vertical-align: middle;" src="./image/accessory.png" alt="">
        </div>
        <div class="fl">
          <p style="width: 60vw;">2018年信息化工作会--开封炭素发言材料</p>
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
        window.open('http://qywx.pmcc.com.cn/meet/static/file/2018年信息化工作会--开封炭素发言材料.doc')
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
