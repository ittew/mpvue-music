<template>
  <div class="list">
    <div class="top-nav">
      <div class="navigate-item" v-for="(item,index) in navTitle" :key="index" @tap="handleClick(index)">
        <div class="names" :class="currentTab === index ? 'active' : ''">{{item.title}}</div>
        <div class="currtline" :class="currentTab === index ? 'active' : ''"></div>
      </div>
    </div>
    <!-- 对应的内容区 -->
    <!-- <scroll-view scroll-y> -->
      <div class="content-item" @tap="gotoDetails"  v-for="(item,index) in currentList" :key="index">
        <!-- <div class="indexNumber">
          <div>{{index > 10 ? index : '0'+(index+1)}}</div>
        </div> -->
        <image :src="item.albumCoverUrl290" />
        <div class="content-left">
          <div class="content-title first-ellipse">{{item.title}}</div>
          <div class="content-text first-ellipse">{{item.trackTitle}}</div>
          <div class="count">
            <div style="margin-right:25rpx;">
              <!-- 本例中33.2亿的单位是写死的，此处应该是后端返回数据吧 -->
              <text class="icon-video"></text>
              <text class="">33.2万</text>
            </div>
          </div>
        </div>
      </div>
    <!-- </scroll-view> -->
  </div>
</template>

<script>

export default {
  data () {
    return {
      currentTab: 0,
      navTitle: [
        {title: '热门推荐'},
        {title: '红色之旅'},
        {title: '党的声音'},
        {title: '教育之声'},
        {title: '扶贫先扶智'}
      ],
      currentList: [],
      listData: [
        {
          'hotRecommends': {
            'list': [
              {
                'albumCoverUrl290': '/static/images/list/list1.jpg',
                'title': '西安钟楼',
                'trackTitle': '中国古代遗留的形制最大、保存最完整的一座钟楼，每天都有6场编钟表演。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list2.jpeg',
                'title': '西安小雁塔',
                'trackTitle': '环境清幽，经受了1200多年风雨的侵袭和70余次地震的考验，历史上曾经历过三次离合。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list3.jpg',
                'title': '西安城墙',
                'trackTitle': '古城墙历史悠久，登上城墙，感受到了历史的魅力，城墙很宽阔，俯瞰西安城很不错！'
              },
              {
                'albumCoverUrl290': '/static/images/list/list1.jpg',
                'title': '西安钟楼',
                'trackTitle': '中国古代遗留的形制最大、保存最完整的一座钟楼，每天都有6场编钟表演。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list2.jpeg',
                'title': '西安小雁塔',
                'trackTitle': '环境清幽，经受了1200多年风雨的侵袭和70余次地震的考验，历史上曾经历过三次离合。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list3.jpg',
                'title': '西安城墙',
                'trackTitle': '古城墙历史悠久，登上城墙，感受到了历史的魅力，城墙很宽阔，俯瞰西安城很不错！'
              },
              {
                'albumCoverUrl290': '/static/images/list/list2.jpeg',
                'title': '西安小雁塔',
                'trackTitle': '环境清幽，经受了1200多年风雨的侵袭和70余次地震的考验，历史上曾经历过三次离合。'
              },
              {
                'albumCoverUrl290': '/static/images/list/list3.jpg',
                'title': '西安城墙',
                'trackTitle': '古城墙历史悠久，登上城墙，感受到了历史的魅力，城墙很宽阔，俯瞰西安城很不错！'
              },
              {
                'albumCoverUrl290': '/static/images/list/list1.jpg',
                'title': '西安钟楼',
                'trackTitle': '中国古代遗留的形制最大、保存最完整的一座钟楼，每天都有6场编钟表演。'
              }
            ]
          }
        },
        {
          'hotRecommends': {
            'list': [
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/3603/99/Qk9VQRMOZUk/index/180180',
                'title': '华清宫',
                'trackTitle': '高高骊山上有宫，朱楼紫殿三四重'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/863/65/SU9WRB8OaA/index/180180',
                'title': '秦岭野生动物园',
                'trackTitle': '秦岭北麓。野生动物园。古城旅游的一颗璀璨明珠。'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/3637/52/Qk9WRR8FYUs/index/180180',
                'title': '曲江海洋极地公园',
                'trackTitle': '欢乐的海洋之旅，将洗去你冬日的阴霾'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/3603/99/Qk9VQRMOZUk/index/180180',
                'title': '华清宫',
                'trackTitle': '高高骊山上有宫，朱楼紫殿三四重'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/863/65/SU9WRB8OaA/index/180180',
                'title': '秦岭野生动物园',
                'trackTitle': '秦岭北麓。野生动物园。古城旅游的一颗璀璨明珠。'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/3637/52/Qk9WRR8FYUs/index/180180',
                'title': '曲江海洋极地公园',
                'trackTitle': '欢乐的海洋之旅，将洗去你冬日的阴霾'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/3603/99/Qk9VQRMOZUk/index/180180',
                'title': '华清宫',
                'trackTitle': '高高骊山上有宫，朱楼紫殿三四重'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/863/65/SU9WRB8OaA/index/180180',
                'title': '秦岭野生动物园',
                'trackTitle': '秦岭北麓。野生动物园。古城旅游的一颗璀璨明珠。'
              },
              {
                'albumCoverUrl290': 'https://pic.qyer.com/album/user/3637/52/Qk9WRR8FYUs/index/180180',
                'title': '曲江海洋极地公园',
                'trackTitle': '欢乐的海洋之旅，将洗去你冬日的阴霾'
              }
            ]
          }
        },
        {
          'hotRecommends': {
            'list': [
              {
                'albumCoverUrl290': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1757215097,4034641796&fm=26&gp=0.jpg',
                'title': '人民日报上的陕西声音',
                'trackTitle': '除了来自人民日报记者将陕西这一年的亮点跃然笔下外，从省委书记到基层干部，从高校学者到企业高管，还有不少人都在《人民日报》上发声。例如，陕西省委书记、省长胡和平就曾先后3次发声，陕西省大荔县委书记王青峰、中国延安干部学院副院长赵耀宏、陕西省国税局直属分局党支部书记马建华、西安交通大学电气学院80后女教授刘文凤等也先后在《人民日报》上表达了自己的观点。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1004274672,2251998469&fm=15&gp=0.jpg',
                'title': '胡和平：让党的声音传得更开、传得更广、传得更深入',
                'trackTitle': '胡和平指出，党的十八大以来，习近平总书记就党的新闻舆论工作作出一系列重要论述，提出一系列新思想新观点新论断，为我们做好新时代新闻舆论工作指明了方向。近年来各新闻媒体认真学习贯彻党中央决策部署，积极服务追赶超越大局，举办系列重大主题宣传活动，为陕西发展营造了良好舆论环境。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3663033131,607898090&fm=26&gp=0.jpg',
                'title': '在传达学习习近平总书记对陕西日报创刊80周年重要指示座谈会上的讲话',
                'trackTitle': '习近平总书记的重要指示，充分肯定陕西日报80年来所发挥的重要作用，对做好新时代党的新闻舆论工作提出明确要求，这是对陕西日报的亲切勉励，也是对全省新闻宣传战线的殷切期望，体现了对陕西新闻舆论工作者的关心厚爱和对陕西发展的关心重视，让我们倍感振奋、备受鼓舞。习近平总书记的重要指示，高屋建瓴、思想深刻，贯穿着马克思主义新闻观的立场观点方法，体现着对新时代宣传思想工作的深刻把握，为我们做好工作指明了方向。我们一定要认真学习、深入领会，把习近平总书记的勉励和关怀转化为立足岗位作贡献的干劲和行动，转化为做好宣传思想工作、推动新时代追赶超越的实际成效。'
              },
              {
                'albumCoverUrl290': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1757215097,4034641796&fm=26&gp=0.jpg',
                'title': '人民日报上的陕西声音',
                'trackTitle': '除了来自人民日报记者将陕西这一年的亮点跃然笔下外，从省委书记到基层干部，从高校学者到企业高管，还有不少人都在《人民日报》上发声。例如，陕西省委书记、省长胡和平就曾先后3次发声，陕西省大荔县委书记王青峰、中国延安干部学院副院长赵耀宏、陕西省国税局直属分局党支部书记马建华、西安交通大学电气学院80后女教授刘文凤等也先后在《人民日报》上表达了自己的观点。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1004274672,2251998469&fm=15&gp=0.jpg',
                'title': '胡和平：让党的声音传得更开、传得更广、传得更深入',
                'trackTitle': '胡和平指出，党的十八大以来，习近平总书记就党的新闻舆论工作作出一系列重要论述，提出一系列新思想新观点新论断，为我们做好新时代新闻舆论工作指明了方向。近年来各新闻媒体认真学习贯彻党中央决策部署，积极服务追赶超越大局，举办系列重大主题宣传活动，为陕西发展营造了良好舆论环境。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3663033131,607898090&fm=26&gp=0.jpg',
                'title': '在传达学习习近平总书记对陕西日报创刊80周年重要指示座谈会上的讲话',
                'trackTitle': '习近平总书记的重要指示，充分肯定陕西日报80年来所发挥的重要作用，对做好新时代党的新闻舆论工作提出明确要求，这是对陕西日报的亲切勉励，也是对全省新闻宣传战线的殷切期望，体现了对陕西新闻舆论工作者的关心厚爱和对陕西发展的关心重视，让我们倍感振奋、备受鼓舞。习近平总书记的重要指示，高屋建瓴、思想深刻，贯穿着马克思主义新闻观的立场观点方法，体现着对新时代宣传思想工作的深刻把握，为我们做好工作指明了方向。我们一定要认真学习、深入领会，把习近平总书记的勉励和关怀转化为立足岗位作贡献的干劲和行动，转化为做好宣传思想工作、推动新时代追赶超越的实际成效。'
              },
              {
                'albumCoverUrl290': 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1757215097,4034641796&fm=26&gp=0.jpg',
                'title': '人民日报上的陕西声音',
                'trackTitle': '除了来自人民日报记者将陕西这一年的亮点跃然笔下外，从省委书记到基层干部，从高校学者到企业高管，还有不少人都在《人民日报》上发声。例如，陕西省委书记、省长胡和平就曾先后3次发声，陕西省大荔县委书记王青峰、中国延安干部学院副院长赵耀宏、陕西省国税局直属分局党支部书记马建华、西安交通大学电气学院80后女教授刘文凤等也先后在《人民日报》上表达了自己的观点。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1004274672,2251998469&fm=15&gp=0.jpg',
                'title': '胡和平：让党的声音传得更开、传得更广、传得更深入',
                'trackTitle': '胡和平指出，党的十八大以来，习近平总书记就党的新闻舆论工作作出一系列重要论述，提出一系列新思想新观点新论断，为我们做好新时代新闻舆论工作指明了方向。近年来各新闻媒体认真学习贯彻党中央决策部署，积极服务追赶超越大局，举办系列重大主题宣传活动，为陕西发展营造了良好舆论环境。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3663033131,607898090&fm=26&gp=0.jpg',
                'title': '在传达学习习近平总书记对陕西日报创刊80周年重要指示座谈会上的讲话',
                'trackTitle': '习近平总书记的重要指示，充分肯定陕西日报80年来所发挥的重要作用，对做好新时代党的新闻舆论工作提出明确要求，这是对陕西日报的亲切勉励，也是对全省新闻宣传战线的殷切期望，体现了对陕西新闻舆论工作者的关心厚爱和对陕西发展的关心重视，让我们倍感振奋、备受鼓舞。习近平总书记的重要指示，高屋建瓴、思想深刻，贯穿着马克思主义新闻观的立场观点方法，体现着对新时代宣传思想工作的深刻把握，为我们做好工作指明了方向。我们一定要认真学习、深入领会，把习近平总书记的勉励和关怀转化为立足岗位作贡献的干劲和行动，转化为做好宣传思想工作、推动新时代追赶超越的实际成效。'
              }
            ]
          }
        },
        {
          'hotRecommends': {
            'list': [
              {
                'albumCoverUrl290': '/static/images/index/ed1.jpg',
                'title': '面授在线一致化',
                'trackTitle': '无论面授课还是在线课，我们都是同一套教材编写、教师培训体系，保证线上线下一致化。'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed2.jpg',
                'title': '教师教研本地化',
                'trackTitle': '依托线下教学教研体系，专注本地化的学情研究，优选本地高端师资，更适合本地孩子'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed3.jpg',
                'title': '专属班主任服务',
                'trackTitle': '授课内容针对孩子存在的障碍专项讲解，课上高频互动，关注每个孩子的学习吸收情况。'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed1.jpg',
                'title': '面授在线一致化',
                'trackTitle': '无论面授课还是在线课，我们都是同一套教材编写、教师培训体系，保证线上线下一致化。'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed2.jpg',
                'title': '教师教研本地化',
                'trackTitle': '依托线下教学教研体系，专注本地化的学情研究，优选本地高端师资，更适合本地孩子'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed3.jpg',
                'title': '专属班主任服务',
                'trackTitle': '授课内容针对孩子存在的障碍专项讲解，课上高频互动，关注每个孩子的学习吸收情况。'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed1.jpg',
                'title': '面授在线一致化',
                'trackTitle': '无论面授课还是在线课，我们都是同一套教材编写、教师培训体系，保证线上线下一致化。'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed2.jpg',
                'title': '教师教研本地化',
                'trackTitle': '依托线下教学教研体系，专注本地化的学情研究，优选本地高端师资，更适合本地孩子'
              },
              {
                'albumCoverUrl290': '/static/images/index/ed3.jpg',
                'title': '专属班主任服务',
                'trackTitle': '授课内容针对孩子存在的障碍专项讲解，课上高频互动，关注每个孩子的学习吸收情况。'
              }
            ]
          }
        },
        {
          'hotRecommends': {
            'list': [
              {
                'albumCoverUrl290': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4243585695,3630614309&fm=26&gp=0.jpg',
                'title': '陕西省教育精准扶贫：扶贫先扶智 扶智先强教',
                'trackTitle': '研究建立校、乡镇、县、市、省五级定期报告制度，确保建档立卡家庭义务教育学生无辍学。精准实施职业教育扶贫脱贫计划。引导支持高职院校、中职学校，围绕贫困县主导产业，与县级职教中心开展“3+2”人才培养、联合招生办学，加大职业教育技术技能人才培训，培养更多实用人才，更好服务脱贫攻坚。精准实施高校与贫困县对口帮扶机制。结合“两联一包”工作安排，建立省内多所高校对口支持1市发展、1所高校对口帮扶1县脱贫的机制，促进校地合作。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4081154940,3063760191&fm=26&gp=0.jpg',
                'title': '汉阴县扶贫先扶智 斩断贫困根',
                'trackTitle': '好政策有了，关键在落实。利用寒暑假，汉阴县要求教育系统的全体老师深入贫困学生家中辅导其完成家庭作业，并指导学生家长加强学生行为习惯教育。在双乳镇中心小学，42名教师深入到6个村，对118名学生进行文明礼仪与安全教育；在汉阴县幼儿园，16位幼师分别深入到20余名贫困学生家中，通过赠送书包、毛毯、图书等用品，鼓励孩子们从小养成良好的习惯。'
              },
              {
                'albumCoverUrl290': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3294693722,104867324&fm=26&gp=0.jpg',
                'title': '陕西米脂扶贫扶智采访见闻',
                'trackTitle': '李均沟是典型的陕北农村，由于人口居住分散、交通不便，村里没有成规模的养殖、种植产业，更没有运输、厂矿等企业，是一个名副其实的传统农业村。国家电网西安供电公司驻李均沟村工作队队长赵钒钋说，全村625户1681人中，青壮年劳力大多在外务工，在家的以“妇幼、老弱、病残”及无技术特长的农民为主，发展生产缺计划、缺技术、缺经营能力，更缺脱贫致富的信心和决心。“文化水平普遍较低，部分群众思想观念落后，等、靠、要现象严重。这就需要在脱贫攻坚中将扶智、扶志与产业发展放到同等重要的位置一并谋划。”'
              },
              {
                'albumCoverUrl290': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4243585695,3630614309&fm=26&gp=0.jpg',
                'title': '陕西省教育精准扶贫：扶贫先扶智 扶智先强教',
                'trackTitle': '研究建立校、乡镇、县、市、省五级定期报告制度，确保建档立卡家庭义务教育学生无辍学。精准实施职业教育扶贫脱贫计划。引导支持高职院校、中职学校，围绕贫困县主导产业，与县级职教中心开展“3+2”人才培养、联合招生办学，加大职业教育技术技能人才培训，培养更多实用人才，更好服务脱贫攻坚。精准实施高校与贫困县对口帮扶机制。结合“两联一包”工作安排，建立省内多所高校对口支持1市发展、1所高校对口帮扶1县脱贫的机制，促进校地合作。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4081154940,3063760191&fm=26&gp=0.jpg',
                'title': '汉阴县扶贫先扶智 斩断贫困根',
                'trackTitle': '好政策有了，关键在落实。利用寒暑假，汉阴县要求教育系统的全体老师深入贫困学生家中辅导其完成家庭作业，并指导学生家长加强学生行为习惯教育。在双乳镇中心小学，42名教师深入到6个村，对118名学生进行文明礼仪与安全教育；在汉阴县幼儿园，16位幼师分别深入到20余名贫困学生家中，通过赠送书包、毛毯、图书等用品，鼓励孩子们从小养成良好的习惯。'
              },
              {
                'albumCoverUrl290': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3294693722,104867324&fm=26&gp=0.jpg',
                'title': '陕西米脂扶贫扶智采访见闻',
                'trackTitle': '李均沟是典型的陕北农村，由于人口居住分散、交通不便，村里没有成规模的养殖、种植产业，更没有运输、厂矿等企业，是一个名副其实的传统农业村。国家电网西安供电公司驻李均沟村工作队队长赵钒钋说，全村625户1681人中，青壮年劳力大多在外务工，在家的以“妇幼、老弱、病残”及无技术特长的农民为主，发展生产缺计划、缺技术、缺经营能力，更缺脱贫致富的信心和决心。“文化水平普遍较低，部分群众思想观念落后，等、靠、要现象严重。这就需要在脱贫攻坚中将扶智、扶志与产业发展放到同等重要的位置一并谋划。”'
              },
              {
                'albumCoverUrl290': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=4243585695,3630614309&fm=26&gp=0.jpg',
                'title': '陕西省教育精准扶贫：扶贫先扶智 扶智先强教',
                'trackTitle': '研究建立校、乡镇、县、市、省五级定期报告制度，确保建档立卡家庭义务教育学生无辍学。精准实施职业教育扶贫脱贫计划。引导支持高职院校、中职学校，围绕贫困县主导产业，与县级职教中心开展“3+2”人才培养、联合招生办学，加大职业教育技术技能人才培训，培养更多实用人才，更好服务脱贫攻坚。精准实施高校与贫困县对口帮扶机制。结合“两联一包”工作安排，建立省内多所高校对口支持1市发展、1所高校对口帮扶1县脱贫的机制，促进校地合作。'
              },
              {
                'albumCoverUrl290': 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4081154940,3063760191&fm=26&gp=0.jpg',
                'title': '汉阴县扶贫先扶智 斩断贫困根',
                'trackTitle': '好政策有了，关键在落实。利用寒暑假，汉阴县要求教育系统的全体老师深入贫困学生家中辅导其完成家庭作业，并指导学生家长加强学生行为习惯教育。在双乳镇中心小学，42名教师深入到6个村，对118名学生进行文明礼仪与安全教育；在汉阴县幼儿园，16位幼师分别深入到20余名贫困学生家中，通过赠送书包、毛毯、图书等用品，鼓励孩子们从小养成良好的习惯。'
              },
              {
                'albumCoverUrl290': 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3294693722,104867324&fm=26&gp=0.jpg',
                'title': '陕西米脂扶贫扶智采访见闻',
                'trackTitle': '李均沟是典型的陕北农村，由于人口居住分散、交通不便，村里没有成规模的养殖、种植产业，更没有运输、厂矿等企业，是一个名副其实的传统农业村。国家电网西安供电公司驻李均沟村工作队队长赵钒钋说，全村625户1681人中，青壮年劳力大多在外务工，在家的以“妇幼、老弱、病残”及无技术特长的农民为主，发展生产缺计划、缺技术、缺经营能力，更缺脱贫致富的信心和决心。“文化水平普遍较低，部分群众思想观念落后，等、靠、要现象严重。这就需要在脱贫攻坚中将扶智、扶志与产业发展放到同等重要的位置一并谋划。”'
              }
            ]
          }
        }
      ]
    }
  },
  beforeMount () {
    // this.currentTab = this.$router.query.index
    this.currentList = this.listData[0].hotRecommends.list
  },
  methods: {
    // 跳转商品详情页面
    gotoDetails () {
      wx.navigateTo({
        url: '/pages/detail/main'
      })
    },
    // 跳转商品详情页面
    handleClick (i) {
      this.currentTab = i
      this.currentList = this.listData[i].hotRecommends.list
      console.log(this.currentList)
    }
  }
}
</script>
<style lang="scss">
  page {
    // background-color: #0f0;
    height: 100%;
  }
  .top-nav{
    width: 100%;
    height: 80rpx;
    display: flex;
    margin-bottom: 10rpx;
  }
  .navigate-item {
    flex:1;
    text-align: center;
    height: 90rpx;
    line-height: 90rpx;
  }

  .names {
    font-size: 28rpx;
    color: #3c3c3c;
  }

  .names.active {
    color: #ff520f;
    font-weight: bold;
    font-size: 30rpx;
  }

  .currtline {
    margin: -8rpx auto 0 auto;
    width: 100rpx;
    height: 1rpx;
    border-radius: 4rpx;
  }

  .currtline.active {
    background: #ff520f;
    transition: all .3s;
  }
  .content-item{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 10rpx 20rpx;
  }

  .indexNumber {
    width: 15%;
    height: auto;
    padding: 20rpx 0rpx;
    text-align: center;
    font-size: 50rpx;
    color: #ff520f;
  }

  .content-item image {
    width: 150rpx;
    height: 150rpx;
    margin-top: 10rpx;
    border-radius: 15rpx;
  }

  .content-left {
    padding: 10rpx 0rpx;
    width: 73%;
    height: auto;
    border-bottom: 1rpx solid #f1f1f1;
  }

  .content-title{
    font-size: 35rpx;
    // height: 40rpx;
    color: #000;
    display: -webkit-box;
    -webkit-line-clamp: 2;/*行数n*/
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .first-ellipse {
    -webkit-line-clamp: 1;/*行数n*/
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .content-text{
    // height: 40rpx;
    display: -webkit-box;
    font-size: 27rpx;
    text-align: left;
    color: #ccc;
    margin-top: 15rpx;
  }
  .count{
    font-size: 27rpx;
    color: #ccc;
    display: flex;
    justify-content: start;
    margin-top: 15rpx;
  }
</style>
