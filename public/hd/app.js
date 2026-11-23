/* ============================================================
   1. Mock 数据层（真实业务字段结构，可直接替换为接口返回）
   ============================================================ */
let COVERS = [
  ['#8E3B2C','#C0664A'],['#2F5B63','#5E8D94'],['#7A5A2E','#B08F55'],
  ['#3E4A52','#76858D'],['#5A3A55','#94668B'],['#2E5B45','#6E9C82'],
  ['#9C4A22','#D08447'],['#4A3A6B','#8779A8'],['#0F5566','#3E8A9C'],
  ['#6B4A2E','#A8825E']
];
const c = (i, h, lb) => ({c: COVERS[i % COVERS.length], h: h || 120, lb: lb || ''});

let USER = { name:'王睿笛', nick:'旅行的笛子', level:'文旅探索家 Lv.4', city:'邯郸', points:320, follow:12, fans:86 };

let BANNERS = [
  {id:'b1', t:'串城街 · 三千年一条街', d:'学步桥 → 回车巷 → 丛台，一天走完赵都老城', lb:'CITYWALK', go:{p:'route', id:'r1'}},
  {id:'b2', t:'磁州窑手作体验季', d:'磁州窑、傩面具、皮影 5 场体验开放报名', lb:'非遗', go:{p:'activity', id:'a1'}},
  {id:'b3', t:'AI 帮你规划 2 天邯郸', d:'说出偏好，30 秒生成专属行程', lb:'AI PLANNER', go:{p:'ai'}}
];

let ENTRIES = [
  {ic:'🏛', t:'文化场馆', bg:'#F6E6E0', fg:'#8E3B2C', go:{p:'venues'}},
  {ic:'🗺', t:'推荐路线', bg:'#E2EFEA', fg:'#2E6B5E', go:{p:'routes'}, hot:'热'},
  {ic:'🍜', t:'餐饮住宿', bg:'#F7F0DC', fg:'#A98428', go:{p:'service'}},
  {ic:'🎨', t:'非遗体验', bg:'#EFE9F2', fg:'#5A3A55', go:{p:'mall', tab:'act'}},
  {ic:'🎫', t:'活动预约', bg:'#E4EDF5', fg:'#2F5B63', go:{p:'activities'}},
  {ic:'🛍', t:'文创商城', bg:'#F6E6E0', fg:'#9C4A22', go:{p:'mall', tab:'goods'}},
  {ic:'🎧', t:'语音导览', bg:'#E2EFEA', fg:'#2E6B5E', go:{p:'route', id:'r1'}},
  {ic:'👣', t:'我的足迹', bg:'#EEF1EE', fg:'#5B4E48', go:{p:'trips'}}
];

let THEMES = [
  {id:'th1', t:'赵都建筑', d:'高台、石拱与窄巷里，一套应对北方气候的营造法', n:118, ci:0, lb:'ARCHITECTURE'},
  {id:'th2', t:'成语典故', d:'1500 多条成语，从老城的几条街上长出来', n:236, ci:1, lb:'IDIOMS'},
  {id:'th3', t:'非遗手作', d:'磁州窑、傩面具、皮影与剪纸的一双手', n:87, ci:4, lb:'CRAFTSMANSHIP'}
];

let ROUTES = [
  {
    id:'r1', t:'串城街主轴 · 三千年一街', lb:'CITYWALK', ci:0,
    sub:'学步桥 → 回车巷 → 秦皇出生地 → 荀子文化园 → 武灵丛台',
    intro:'从一座因成语得名的明代石桥起步，走进不到 3 米宽的回车巷，再沿串城街北上，最后登上赵武灵王的点将台。这一天，你会看到邯郸如何把三千年折叠进一条 500 多米的街。',
    days:'1 天', km:'3.4 km', spots:5, walk:'约 4600 步', heat:'3.1 万人走过', score:4.9,
    tags:['历史建筑','城市漫步','成语典故'], best:'全年 · 春秋最佳，上午 9 点前街上人少',
    pois:['p1','p2','p3','p4','p5'],
    tip:'丛台登台需另购票，台阶陡且窄；回车巷很窄，双向会人需侧身。'
  },
  {
    id:'r2', t:'老城烟火 · 早汤到夜市', lb:'FOOD', ci:6,
    sub:'一篓油水饺 → 串城街夜市 → 丛台广场',
    intro:'一条用胃来丈量的路线。清晨在老字号喝一碗驴肉汤，入夜钻进串城街的夜食摊子，最后在丛台广场坐到路灯亮起。',
    days:'1 天', km:'2.2 km', spots:3, walk:'约 3000 步', heat:'1.8 万人走过', score:4.8,
    tags:['邯郸美食','市井烟火','夜游'], best:'全年 · 18:30 后夜市最热闹',
    pois:['p6','p7','p8'],
    tip:'夜市高峰在 18:30-21:00，建议错峰；焖子要趁热吃。'
  },
  {
    id:'r3', t:'赵都溯源 · 都城与王城', lb:'HISTORY', ci:1,
    sub:'邯郸市博物馆 → 赵王城遗址 → 赵苑公园',
    intro:'从八千年前的一粒粟，走到两千多年前那座"品"字形的都城。赵国的城市怎么规划、王的苑囿长什么样，这条线上都有实物可看。',
    days:'1 天', km:'8.6 km', spots:3, walk:'约 11000 步', heat:'9200 人走过', score:4.8,
    tags:['历史','博物馆','遗址'], best:'全年 · 周一博物馆闭馆，注意避开',
    pois:['p9','p10','p11'],
    tip:'邯郸市博物馆周一闭馆；赵王城遗址以露天展示为主，夏季注意防晒。'
  },
  {
    id:'r4', t:'广府水城 · 城墙与太极', lb:'WATERTOWN', ci:8,
    sub:'广府古城墙 → 弘济桥 → 杨露禅故居',
    intro:'北方少见的水城。明代砖城墙外是护城河与永年洼湿地，城外还有一座与赵州桥同源的隋代石拱桥，以及两大太极拳流派的共同发源地。',
    days:'1 天', km:'5.8 km', spots:3, walk:'约 7300 步', heat:'7600 人走过', score:4.8,
    tags:['古城','古桥','太极拳'], best:'春秋 · 夏季洼地蚊虫较多',
    pois:['p12','p13','p14'],
    tip:'点位间约 3-8 km，建议自驾或打车衔接；城墙可租自行车环行。'
  },
  {
    id:'r5', t:'太行寻艺 · 石窟与窑火', lb:'HERITAGE', ci:2,
    sub:'响堂山石窟 → 磁州窑遗址 → 娲皇宫',
    intro:'从北齐的造像，到宋代的窑火，再到挂在崖壁上的楼阁。邯郸西部的太行山麓，藏着北方民间工艺与宗教建筑最密集的一条线索。',
    days:'1-2 天', km:'42 km', spots:3, walk:'约 8600 步', heat:'5400 人走过', score:4.9,
    tags:['石窟','非遗','山地建筑'], best:'春秋 · 建议自驾，行程分两天更从容',
    pois:['p15','p16','p17'],
    tip:'三个点位分属不同区县，距离较远，建议自驾或包车；窟内禁止闪光灯。'
  }
];

let POIS = [
  {id:'p1', n:'学步桥 · 明代石拱桥', r:'r1', ord:1, ci:3, lb:'邯郸学步', cat:'历史建筑', stay:'30 分钟',
   score:4.7, rev:9680, addr:'邯郸市丛台区陵西北大街 · 沁河之上', open:'全天开放',
   desc:'横跨沁河的明代石拱桥，因"邯郸学步"的典故而改名。桥为多孔石拱，两侧设栏板与望柱，青石砌筑、拱券采用纵联式砌法，是研究明代北方石拱桥结构做法难得的实物——桥窄、拱薄、用料省，做法直接服务于当时的通行量。',
   view:['石拱券','成语浮雕栏板','望柱石狮','沁河水面'],
   audio:{len:'02:36', txt:'语音讲解 · 一座桥和一个成语'},
   tips:'桥面仍在通行且较窄，早晚高峰注意来车；看拱券砌法要到桥下河滩侧。'},

  {id:'p2', n:'回车巷 · 将相和故地', r:'r1', ord:2, ci:4, lb:'负荆请罪', cat:'历史街区', stay:'40 分钟',
   score:4.8, rev:11200, addr:'邯郸市丛台区串城街南段', open:'全天开放',
   desc:'串城街南段的一条窄巷，相传是战国时赵国上卿蔺相如为避让大将军廉颇而回车让路之处，"负荆请罪""将相和"的典故都出于此。巷口立有明代"蔺相如回车巷"石碑。巷子最窄处不足 3 米，两侧青砖墙高约 6 米——这个接近 1:2 的宽高比，是北方老城为冬季防风保温做出的选择。',
   view:['回车巷石碑','窄巷砖墙','将相和浮雕','串城街街口'],
   audio:{len:'02:12', txt:'语音讲解 · 回车这一步'},
   tips:'巷内很窄，双向会人需侧身；石碑嵌在巷口东侧墙面内，容易错过。'},

  {id:'p3', n:'秦始皇出生地纪念馆', r:'r1', ord:3, ci:7, lb:'奇货可居', cat:'文化场馆', stay:'40 分钟',
   score:4.6, rev:5240, addr:'邯郸市丛台区串城街 · 原朱家巷一带', open:'09:00-17:00',
   desc:'秦始皇嬴政的出生地。其父嬴异人早年在邯郸为质，后经吕不韦运作归秦，嬴政即生于赵都邯郸。纪念馆以"奇货可居"的历史脉络为主线，一层用沙盘呈现战国后期赵都邯郸的城市格局，二层展线讲述秦赵之间的往来与质子制度。',
   view:['朱家巷旧址','赵都格局沙盘','秦赵关系展','串城街院落'],
   audio:{len:'02:48', txt:'语音讲解 · 一个出生在邯郸的皇帝'},
   tips:'与回车巷隔街相望，可一并参观；建议先看一层沙盘再上楼，展线更顺。'},

  {id:'p4', n:'荀子文化园 · 荀子故居', r:'r1', ord:4, ci:2, lb:'赵国人荀子', cat:'文化场馆', stay:'35 分钟',
   score:4.5, rev:3120, addr:'邯郸市丛台区串城街中段', open:'09:00-17:00',
   desc:'荀子名况，赵国人，战国末期思想家。串城街内的这组仿古院落以"劝学""制天命而用之"等主张作为展陈线索。院落是北方合院形制，正房采用抬梁式木构、进深较大以避冬季寒风，庭院尺度紧凑——与南方为通风遮阳而生的通透开敞，正好是两个方向的答案。',
   view:['仿古合院','抬梁式木构','劝学碑廊','院落天井'],
   audio:{len:'02:24', txt:'语音讲解 · 赵国人荀子'},
   tips:'院落坐北朝南，正午光线最好；碑廊的刻石可以细看。'},

  {id:'p5', n:'武灵丛台 · 赵武灵王点将台', r:'r1', ord:5, ci:0, lb:'胡服骑射', cat:'历史遗址', stay:'70 分钟',
   score:4.9, rev:18600, addr:'邯郸市丛台区中华北大街 · 丛台公园内', open:'06:00-21:00',
   desc:'相传为赵武灵王阅兵与观赏歌舞之处，"胡服骑射"的改革由此发端。丛台是战国"高台建筑"的代表性遗存——以夯土高台为基，台上再建据胜亭、回澜亭等。高台形制既是对地势的利用，也是权力在垂直方向上的表达。现存建筑为清代及近现代重修，丛台作为"赵邯郸故城"的组成部分，已列入全国重点文物保护单位。',
   view:['夯土高台','据胜亭','回澜亭','丛台碑刻'],
   audio:{len:'03:24', txt:'语音讲解 · 台为什么要这么高'},
   tips:'登台需购票，台阶陡且窄，建议穿平底鞋；下午 4 点后台上光斜射，看细部最好。'},

  {id:'p6', n:'一篓油水饺 · 老字号', r:'r2', ord:1, ci:5, lb:'老字号', cat:'地方餐饮', stay:'50 分钟',
   score:4.7, rev:8420, addr:'邯郸市丛台区 · 老城区', open:'10:00-20:30',
   desc:'邯郸老字号，店名取"馅大汁足、咬开一篓油"之意。皮薄馅实、现包现煮，是本地人从小吃到大的味道。老店的现状是无数北方老字号的共同样本：门脸不大、翻台极快、菜单只印一页，招牌菜三十年没变过。',
   view:['手工水饺','明档操作','老店门脸','本地食客'],
   audio:{len:'01:52', txt:'语音讲解 · 一篓油的来历'},
   tips:'11:30 前到可避免排队；饺子按两卖，两人点两两半比较合适。'},

  {id:'p7', n:'串城街夜市 · 老城夜食', r:'r2', ord:2, ci:6, lb:'烟火气', cat:'商业街区', stay:'80 分钟',
   score:4.8, rev:16400, addr:'邯郸市丛台区串城街', open:'全天开放',
   desc:'入夜后串城街两侧支起摊子，驴肉汤、邯郸焖子、武安拽面、磁县鲜粉皮、饸饹面与烤串在同一段街上排开。街道两侧是改造后的仿明清立面，青砖灰瓦之下是商铺的灯光——这种"旧形制 + 新业态"的组合，是当下历史文化街区更新最普遍的策略，也是串城街最值得讨论的地方。',
   view:['仿明清立面','夜食摊位','灯笼街灯','街巷纵深'],
   audio:{len:'02:30', txt:'语音讲解 · 一条街的两种时间'},
   tips:'18:30-21:00 最热闹；夜市收摊约 22:30，想拍照建议 19:30 前后。'},

  {id:'p8', n:'丛台广场 · 城市客厅', r:'r2', ord:3, ci:8, lb:'夜生活', cat:'城市广场', stay:'40 分钟',
   score:4.5, rev:4860, addr:'邯郸市丛台区中华北大街', open:'全天开放',
   desc:'串城街北端的城市广场，入夜后是本地人纳凉、跳舞、遛娃的场所。广场与丛台公园、串城街在空间上连成一个序列：园—街—场，三种公共空间的尺度在这里一次性展示出来——从围合的园林，到线性的商业街，再到开敞的广场。',
   view:['广场夜景','丛台灯光','市民活动','街巷对景'],
   audio:{len:'01:44', txt:'语音讲解 · 三种公共空间'},
   tips:'夏夜 20:00 后有灯光效果；广场西侧可以同时望见丛台的轮廓。'},

  {id:'p9', n:'邯郸市博物馆', r:'r3', ord:1, ci:3, lb:'国家一级博物馆', cat:'文化场馆', stay:'100 分钟',
   score:4.9, rev:12800, addr:'邯郸市丛台区中华北大街', open:'09:00-17:00（周一闭馆）',
   desc:'以磁山文化、赵文化、北朝造像与磁州窑四大体系为常设主线。武安磁山遗址出土的碳化粟标本，把黄河流域旱作农业的时间推到了约八千年前；赵文化展厅里的青铜器、瓦当与车马器，则是理解赵国都城形态最直接的材料。',
   view:['磁山文化展','赵文化青铜器','北朝造像','磁州窑瓷枕'],
   audio:{len:'03:36', txt:'语音讲解 · 八千年前的粮仓'},
   tips:'周一闭馆；展线较长，建议预留 1.5 小时以上。'},

  {id:'p10', n:'赵王城遗址公园', r:'r3', ord:2, ci:1, lb:'赵邯郸故城', cat:'历史遗址', stay:'80 分钟',
   score:4.7, rev:6340, addr:'邯郸市邯山区 · 赵王城遗址', open:'08:30-17:30',
   desc:'赵国宫城遗址，由东城、西城、北城组成"品"字形布局，城垣夯土台基至今仍在地表绵延数公里。站在龙台遗址上，可以看到城中高台与轴线如何组织起一座两千多年前的都城——这是中国城市史上最早的完整都城规划实例之一。',
   view:['龙台夯土台基','城墙遗迹','都城轴线','赵文化展陈馆'],
   audio:{len:'03:02', txt:'语音讲解 · 品字形的都城'},
   tips:'以露天展示为主，夏季提前看天气并做好防晒；园区大，从西城入口进更顺。'},

  {id:'p11', n:'赵苑公园 · 插箭岭与照眉池', r:'r3', ord:3, ci:5, lb:'苑囿遗址', cat:'园林遗址', stay:'60 分钟',
   score:4.5, rev:3980, addr:'邯郸市丛台区联纺东路', open:'06:00-21:00',
   desc:'依托战国赵国的苑囿遗址而建。"插箭岭"相传为赵武灵王练箭之处，"照眉池"相传为宫中女子梳妆之地。地表仍可辨认夯土高台与水域的关系——苑囿在赵国的形态，在这里留下了可以用脚走一遍的地形轮廓。',
   view:['插箭岭夯土','照眉池水面','苑囿地形','赵苑绿荫'],
   audio:{len:'02:18', txt:'语音讲解 · 王的猎场'},
   tips:'免费开放；插箭岭一带地形起伏，雨后路面湿滑。'},

  {id:'p12', n:'广府古城 · 水城与城墙', r:'r4', ord:1, ci:2, lb:'北方水城', cat:'古城', stay:'100 分钟',
   score:4.8, rev:10400, addr:'邯郸市永年区广府镇', open:'08:00-18:00',
   desc:'永年广府古城现存城墙为明代砖砌，周长约 4.5 公里、高约 12 米，城外护城河与永年洼湿地环绕，形成"一城双水"的格局——这在北方干旱地区极为罕见。城墙顶部可环行，是观察明代北方城池防御体系与砖砌做法的一手样本。',
   view:['明代砖城墙','护城河水面','永年洼湿地','城门与瓮城'],
   audio:{len:'03:18', txt:'语音讲解 · 北方为什么会有水城'},
   tips:'城墙可租自行车环行；夏季洼地蚊虫多，备好驱蚊用品。'},

  {id:'p13', n:'弘济桥 · 隋代石拱桥', r:'r4', ord:2, ci:3, lb:'赵州桥姊妹桥', cat:'历史建筑', stay:'40 分钟',
   score:4.8, rev:5960, addr:'邯郸市永年区广府镇东桥村', open:'全天开放',
   desc:'横跨滏阳河故道的敞肩式石拱桥，结构与赵州桥同源：主拱两端各开小拱，既减轻自重又能泄洪。桥面栏板与望柱上留有浮雕，石料以青石为主。作为隋代桥梁做法的实物，它的价值在于为赵州桥提供了一条可以互证的证据链。',
   view:['敞肩主拱','小拱泄洪','栏板浮雕','滏阳河道'],
   audio:{len:'02:26', txt:'语音讲解 · 和赵州桥是一家的'},
   tips:'桥上仍有通行，注意来车；要看拱券构造需下到河滩侧。'},

  {id:'p14', n:'杨露禅故居 · 太极发源地', r:'r4', ord:3, ci:7, lb:'杨式太极', cat:'名人故居', stay:'40 分钟',
   score:4.6, rev:4120, addr:'邯郸市永年区广府镇南关', open:'08:30-17:30',
   desc:'杨式太极拳创始人杨露禅的故居，位于广府古城南关，是一组北方四合院式民居。正房、厢房与院落尺度紧凑，反映的是晚清北方县城中等人家的居住形态。永年是杨式、武式两大太极拳流派共同的发源地。',
   view:['四合院落','正房木构','演武场','故居展陈'],
   audio:{len:'02:14', txt:'语音讲解 · 一个县城出的两门太极'},
   tips:'晨间常有本地人在此练拳，可以看但不必打扰；拍摄前先询问。'},

  {id:'p15', n:'响堂山石窟', r:'r5', ord:1, ci:1, lb:'北齐造像', cat:'石窟寺', stay:'120 分钟',
   score:4.9, rev:7820, addr:'邯郸市峰峰矿区 / 武安市 · 太行山东麓', open:'08:00-17:00',
   desc:'分南响堂与北响堂两处，开凿于北齐，是北朝晚期佛教造像与石窟形制的重要遗存。塔形窟与中心方柱窟的组合，呈现了北齐石窟从外来形制走向本土做法的关键一步；造像的"北齐样式"——体态丰满、衣纹贴体——在美术史上影响深远。',
   view:['塔形窟','中心方柱窟','北齐造像','刻经洞'],
   audio:{len:'04:12', txt:'语音讲解 · 北齐的一张脸'},
   tips:'南、北两区相距较远，需分两次参观；窟内禁止闪光灯，部分造像已流失海外。'},

  {id:'p16', n:'磁州窑遗址 · 彭城窑火', r:'r5', ord:2, ci:4, lb:'白地黑花', cat:'历史遗址', stay:'90 分钟',
   score:4.8, rev:6480, addr:'邯郸市峰峰矿区彭城镇', open:'08:30-17:30',
   desc:'磁州窑是宋代北方民窑的代表，以"白地黑花"的化妆土绘花与剔划工艺闻名，把文人的书画趣味带进了日用器物。彭城一带现存窑址、作坊与窑神庙遗存，可以看到从拉坯、施化妆土到剔刻、入窑的完整工艺链条。',
   view:['馒头窑遗迹','白地黑花瓷片','剔刻工艺','窑神庙'],
   audio:{len:'03:08', txt:'语音讲解 · 土与火的分工'},
   tips:'可顺路参观磁州窑博物馆；体验工坊需提前预约。'},

  {id:'p17', n:'娲皇宫 · 悬空而建', r:'r5', ord:3, ci:0, lb:'女娲祭典', cat:'宗教建筑', stay:'100 分钟',
   score:4.8, rev:9160, addr:'邯郸市涉县索堡镇 · 中皇山', open:'07:30-18:00',
   desc:'依山崖崖壁而建的一组建筑群，以"悬空"著称：建筑背倚崖壁，前以木柱支撑，在陡峭山体上争取出完整的楼阁空间。女娲祭典已列入国家级非物质文化遗产名录。从建筑角度看，它解决的是同一个问题——在地形几乎不给余地的地方，如何用最少的地面换取最多的使用空间。',
   view:['悬空楼阁','摩崖刻经','补天石','山崖栈道'],
   audio:{len:'03:30', txt:'语音讲解 · 挂在崖壁上'},
   tips:'上行多为石阶，体力一般可从索道上山；摩崖刻经需单独购票，别错过。'}
];

let NOTES = [
  {id:'n1', au:'阿森', av:'a', t:'在串城街迷路的一下午', h:210, ci:4,
   body:'本来只想拍街口的石碑，结果拐进一条没有名字的巷子，被一位大爷拉去看他家的老门楼。他说这条街以前更窄，两边都是自家院墙，冬天站在巷里不冷，风从街口一过就走了。\n\n突然明白北方的巷子为什么修得这么窄——它不是为了好看，是为了挡风。',
   topic:'#赵都建筑', poi:'p2', route:'r1', fav:1268, like:3400, cmt:88, tags:['建筑','街巷']},
  {id:'n2', au:'小满', av:'b', t:'丛台的瓦当，我抬头看了半小时', h:170, ci:0,
   body:'所有人都挤在台上拍照，只有我在台下抬头。\n\n檐口的瓦当一层压一层，从下往上收得很有道理。凑近看，连滴水上的纹样都不是重复的。一个两千年后重修的建筑，居然还愿意在这种地方花心思。',
   topic:'#赵都建筑', poi:'p5', route:'r1', fav:942, like:2180, cmt:52, tags:['工艺','细节']},
  {id:'n3', au:'Kiwi', av:'c', t:'串城街拍照机位，8 个位置实测', h:240, ci:6,
   body:'走了三小时整理出来的机位：\n①街口牌坊下，压低机位仰拍；②夜市灯笼段，等一位骑车人经过；③青砖墙面旁，侧光下午 4 点半最好……\n\n最重要的一条：不要站在街中间，这条街上真的有人在生活。',
   topic:'#拍照机位', poi:'p7', route:'r2', fav:2310, like:5620, cmt:174, tags:['摄影','攻略']},
  {id:'n4', au:'老陈', av:'d', t:'回车巷不到 3 米宽，我拿尺子量了一下', h:190, ci:4,
   body:'实测最窄处 2.8 米，两侧墙高约 6 米，宽高比接近 1:2。\n\n这个比例在南方会被嫌弃——太暗。但在北方它是合理的：冬季太阳高度角低，正午前后直射光仍能照到巷底，而窄巷本身把冬季西北风挡在外面。采光和保温在北方老城里是一笔要一起算的账。',
   topic:'#赵都建筑', poi:'p2', route:'r1', fav:1580, like:3930, cmt:96, tags:['建筑','采光']},
  {id:'n5', au:'阿森', av:'a', t:'邯郸早餐生存指南（外地人版）', h:230, ci:5,
   body:'① 7 点前到，晚了老店就只剩素馅；\n② 驴肉汤配饼，汤可以免费续，别不好意思；\n③ 饺子按两卖，第一次点两两就够；\n④ 结账前记得看一眼墙上贴的单子，有时候手写的是老价格。\n\n最重要：慢一点。这顿饭本来就是用来开始的。',
   topic:'#邯郸美食', poi:'p6', route:'r2', fav:3120, like:7840, cmt:268, tags:['美食','攻略']},
  {id:'n6', au:'Kiwi', av:'c', t:'博物馆里最打动我的，是八千年前的一粒粟', h:180, ci:3,
   body:'一粒碳化的粟米，比米粒还小，装在展柜正中间。\n\n它出土在武安磁山，说明八千年前这片土地上的人已经在种地了。一座以"成语"闻名的城市，最早的故事其实写在土里。',
   topic:'#博物馆', poi:'p9', route:'r3', fav:760, like:1840, cmt:41, tags:['历史','考古']},
  {id:'n7', au:'小满', av:'b', t:'在丛台广场坐到路灯亮起', h:250, ci:8,
   body:'下午来的时候广场上只有几个下棋的老人，等我再抬头，跳舞的、遛娃的、卖气球的全都出来了，路灯一起亮。\n\n同一个场地，两个小时里换了三拨人。城市的好，有时候就是这么具体的事。',
   topic:'#城市夜景', poi:'p8', route:'r2', fav:1120, like:2760, cmt:63, tags:['夜景','生活']}
];

let TOPICS = ['#赵都建筑','#邯郸美食','#非遗手作','#城市漫步','#拍照机位','#博物馆','#成语典故','#历史建筑'];

let PRODUCTS = [
  {id:'g1', t:'磁州窑白地黑花瓷罐 · 缠枝牡丹', price:168, old:228, lb:'非遗好物', ci:4, cat:'goods',
   sell:'已售 1286', rate:4.9, spec:['小罐 / 单只','小罐 / 一对','大罐 / 单只'],
   shop:'彭城磁州窑工坊', story:'磁州窑烧制技艺于 2006 年列入首批国家级非物质文化遗产名录。这只罐子在素胎上施白色化妆土，再用含铁颜料绘出缠枝牡丹，罩透明釉一次烧成。因是手绘，每一只的花头都不完全一样。'},
  {id:'g2', t:'武安傩戏面具 · 彩绘手作', price:268, old:0, lb:'手作', ci:6, cat:'goods',
   sell:'已售 642', rate:4.8, spec:['小号 / 挂饰','中号 / 摆件','中号 + 底座'],
   shop:'武安傩戏传习所', story:'武安傩戏被誉为"中国戏剧的活化石"，2006 年列入首批国家级非物质文化遗产名录。面具以柳木或杨木雕刻成型，再以矿物颜料彩绘，从开脸到上色约需 5 天。'},
  {id:'g3', t:'成语典故书签盲盒 · 第一辑', price:79, old:99, lb:'爆款', ci:0, cat:'goods',
   sell:'已售 5320', rate:4.9, spec:['随机单枚','全套 6 枚','全套 + 竹制书匣'],
   shop:'邯道文创', story:'与邯郸相关的成语多达 1500 余条。本辑选取邯郸学步、胡服骑射、完璧归赵、负荆请罪、纸上谈兵、奇货可居六则，以黄铜蚀刻工艺制成书签，其中 1 款为隐藏款。'},
  {id:'g4', t:'冀南皮影 · 手工影人摆件', price:398, old:0, lb:'非遗', ci:5, cat:'goods',
   sell:'已售 318', rate:4.7, spec:['武将 / 单件','旦角 / 单件','武将 + 旦角 对装'],
   shop:'冀南皮影传习所', story:'冀南皮影戏于 2006 年列入首批国家级非物质文化遗产名录。影人以驴皮或牛皮为料，经刮制、雕刻、染色、装订等十余道工序做成，一件武将在灯下呈半透的暖色。'},
  {id:'g5', t:'大名府烧鸡香肠礼盒', price:128, old:168, lb:'地方特产', ci:3, cat:'goods',
   sell:'已售 2180', rate:4.8, spec:['烧鸡 1 只','烧鸡 1 只 + 香肠 2 袋','双人礼盒装'],
   shop:'邯道优选', story:'大名二毛烧鸡与五百居香肠都是邯郸本地的老字号，制作技艺延续百年。礼盒采用真空封装，常温可存放，是当地人最常带出门的手信组合。'},
  {id:'g6', t:'邯郸剪纸冰箱贴 · 六款', price:39, old:0, lb:'文创', ci:1, cat:'goods',
   sell:'已售 4210', rate:4.9, spec:['随机一款','全套 6 款','全套 + 磁贴板'],
   shop:'邯道文创', story:'邯郸剪纸以线条细密、构图饱满见长，题材多为丛台、回车巷、太极与民俗场景。六款图案分别取自邯郸老城与广府古城的经典景观。'},
  {id:'g7', t:'磁州窑绘制体验 · 90 分钟', price:158, old:0, lb:'非遗体验', ci:4, cat:'act',
   date:'每周二 / 四 / 六 14:00', place:'串城街非遗工坊', quota:'每场 12 人', left:4,
   sell:'已售 428', rate:4.9, spec:['2 月 14 日 14:00','2 月 18 日 14:00','2 月 22 日 14:00'],
   shop:'彭城磁州窑工坊', story:'由非遗传承人现场讲解化妆土的作用与白地黑花的绘制原理，完成后可带走自己绘制的瓷盘（烧制后 7 天内寄出）。'},
  {id:'g8', t:'傩戏面具彩绘营 · 半天', price:228, old:298, lb:'亲子热门', ci:6, cat:'act',
   date:'每周日 09:30-12:00', place:'荀子文化园西侧工坊', quota:'每场 20 人', left:7,
   sell:'已售 216', rate:4.8, spec:['2 月 15 日 09:30','3 月 1 日 09:30'],
   shop:'武安傩戏传习所', story:'认识傩戏面具的角色分类与配色规则，在木坯上完成一件自己的彩绘面具，适合 6 岁以上亲子家庭。'},
  {id:'g9', t:'冀南皮影 DIY · 亲子场', price:98, old:0, lb:'非遗体验', ci:5, cat:'act',
   date:'每周六 10:00', place:'串城街非遗工坊', quota:'每场 15 人', left:9,
   sell:'已售 512', rate:4.7, spec:['2 月 14 日 10:00','2 月 21 日 10:00'],
   shop:'冀南皮影传习所', story:'在老师指导下完成影人的上色与装订，再在幕布后演一小段，完成后带走自己的影人作品。'},
  {id:'g10', t:'串城街夜游 · 成语灯光秀', price:188, old:238, lb:'夜游', ci:8, cat:'act',
   date:'每日 19:30 / 20:30', place:'串城街南入口集合', quota:'每场 60 人', left:23,
   sell:'已售 1860', rate:4.8, spec:['2 月 14 日 19:30','2 月 14 日 20:30','2 月 15 日 19:30'],
   shop:'邯道夜游', story:'沿串城街步行约 90 分钟，由讲解员串起回车巷、秦皇出生地与丛台广场三处夜景点位，途中安排一段成语主题灯光投影。'},
  {id:'g11', t:'邯郸剪纸入门课 · 团花小品', price:198, old:0, lb:'非遗体验', ci:1, cat:'act',
   date:'每周三 15:00', place:'串城街非遗工坊', quota:'每场 8 人', left:3,
   sell:'已售 184', rate:4.9, spec:['2 月 19 日 15:00','2 月 26 日 15:00'],
   shop:'邯道文创', story:'从折纸、起稿到运剪，完成一幅可装框的团花小品。全程由剪纸艺人一对一指导，零基础可参加。'}
];

let ACTIVITIES = PRODUCTS.filter(p => p.cat === 'act');

let VENUES = [
  {id:'v1', n:'邯郸市博物馆', ci:3, lb:'国家一级博物馆', free:'免费', open:'09:00-17:00 · 周一闭馆', poi:'p9', tag:'需预约'},
  {id:'v2', n:'武灵丛台（丛台公园）', ci:0, lb:'全国重点文物保护单位', free:'公园免费 · 登台另计', open:'06:00-21:00', poi:'p5', tag:'免预约'},
  {id:'v3', n:'秦始皇出生地纪念馆', ci:7, lb:'专题纪念馆', free:'免费', open:'09:00-17:00', poi:'p3', tag:'需预约'},
  {id:'v4', n:'荀子文化园', ci:2, lb:'文化园区', free:'免费', open:'09:00-17:00', poi:'p4', tag:'免预约'},
  {id:'v5', n:'磁州窑博物馆', ci:4, lb:'专题博物馆', free:'免费', open:'09:00-17:00 · 周一闭馆', poi:'p16', tag:'需预约'},
  {id:'v6', n:'邺城博物馆', ci:1, lb:'遗址博物馆', free:'免费', open:'09:00-17:00 · 周一闭馆', poi:'', tag:'需预约'}
];

let SERVICES = [
  {id:'sv1', ic:'🍜', t:'老字号驴肉汤 · 本地早餐', d:'12 家 · 人均 ¥18 · 步行 5 分钟', ci:5},
  {id:'sv2', ic:'🏨', t:'串城街民宿 · 老城住宿', d:'9 家 · 人均 ¥260 · 距街区 200m', ci:0},
  {id:'sv3', ic:'☕', t:'赵都茶馆 · 围炉煮茶', d:'15 家 · 人均 ¥38 · 支持地图导览', ci:9},
  {id:'sv4', ic:'🚌', t:'交通接驳方案', d:'邯郸东站 / 邯郸站 · 3 条公交直达', ci:2}
];

/* 个人中心初始状态 */
const INIT = {
  trips: [], favNotes: [], favRoutes: [], favGoods: [], likes: [],
  cart: [], orders: [], visited: ['p2','p3'], points: 320,
  funnel: {}
};
/* ============================================================
   2. 全局状态与工具
   ============================================================ */
let S = JSON.parse(JSON.stringify(INIT));
let STACK = [{p:'home'}];
let TMP = { cartSel:[], orderType:null, curActivity:null, curProduct:null, audioTimer:null, audioPct:0, playing:false, mallTab:'goods', expTab:'rec', exploreChip:'推荐', routeChip:'全部', cartAll:true, aiDone:false };
let autoRunning = false;

/* ============================================================
   2.5 后端接入（Next.js API Routes + Supabase）
   ============================================================ */
const HD_UID = (function () {
  try {
    let u = localStorage.getItem('hd_uid');
    if (!u) {
      u = 'u_' + Math.random().toString(36).slice(2, 10) + Date.now().toString(36);
      localStorage.setItem('hd_uid', u);
    }
    return u;
  } catch (e) { return 'anon'; }
})();
async function api(path, body, method) {
  const opt = { method: method || (body ? 'POST' : 'GET'), headers: { 'x-hd-uid': HD_UID } };
  if (body) { opt.headers['content-type'] = 'application/json'; opt.body = JSON.stringify(body); }
  const r = await fetch('/api' + path, opt);
  if (!r.ok) throw new Error('API ' + path + ' -> ' + r.status);
  return r.json();
}
function fire(path, body) { api(path, body).catch(function () {}); }


const $ = id => document.getElementById(id);
const P = id => POIS.find(x => x.id === id);
const R = id => ROUTES.find(x => x.id === id);
const G = id => PRODUCTS.find(x => x.id === id);
const N = id => NOTES.find(x => x.id === id);
const money = n => (n % 1 === 0 ? '¥' + n : '¥' + n.toFixed(2));
const esc = s => String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');

function cov(i, h, lb, extra){
  const p = COVERS[i % COVERS.length];
  return '<div class="cover ' + (extra || '') + '" style="--c1:' + p[0] + ';--c2:' + p[1] + (h ? ';height:' + h + 'px' : '') + '">'
       + (lb ? '<span class="lb">' + lb + '</span>' : '') + '</div>';
}

/* 埋点 + 漏斗 */
function track(page, evt, extra){
  const t = new Date();
  const ts = String(t.getHours()).padStart(2,'0') + ':' + String(t.getMinutes()).padStart(2,'0') + ':' + String(t.getSeconds()).padStart(2,'0');
  const line = document.createElement('div');
  line.className = 'l';
  line.innerHTML = '<span class="t">' + ts + '</span><span class="m"><b>[' + page + ']</b> ' + esc(evt) + (extra ? ' · ' + esc(extra) : '') + '</span>';
  fire('/events', { page: page, evt: evt, extra: extra || '' });
  const box = $('log');
  box.insertBefore(line, box.firstChild);
  while (box.children.length > 120) box.removeChild(box.lastChild);
}

const FUNNEL_STEPS = [
  {k:'touch',  n:'① 内容触达',   d:'首页 / 探索曝光'},
  {k:'seed',   n:'② 种草收藏',   d:'笔记收藏 · 路线收藏'},
  {k:'route',  n:'③ 路线决策',   d:'路线详情 · 加入行程'},
  {k:'guide',  n:'④ 路线导览',   d:'点位讲解 · 语音播放'},
  {k:'act',    n:'⑤ 活动参与',   d:'活动详情 · 报名'},
  {k:'buy',    n:'⑥ 商品购买',   d:'加购 · 下单'},
  {k:'keep',   n:'⑦ 个人沉淀',   d:'订单 · 行程 · 收藏'}
];
function mark(k){ if (!S.funnel[k]) { S.funnel[k] = 1; } renderFunnel(); }
function renderFunnel(){
  $('funnel').innerHTML = FUNNEL_STEPS.map(s => {
    const on = !!S.funnel[s.k];
    return '<div class="fn ' + (on ? 'done' : '') + '"><span class="dot">' + (on ? '✓' : '') + '</span>'
         + '<span class="nm">' + s.n + '<br><span style="font-weight:500;font-size:10px;opacity:.8">' + s.d + '</span></span>'
         + '<span class="cn">' + (on ? '已达成' : '—') + '</span></div>';
  }).join('');
}

function toast(msg, ms){
  const t = $('toast');
  t.textContent = msg;
  t.classList.add('on');
  clearTimeout(t._tm);
  t._tm = setTimeout(() => t.classList.remove('on'), ms || 1500);
}

function syncPanel(){
  $('s-trip').textContent = S.trips.length;
  $('s-fav').textContent  = S.favNotes.length + S.favRoutes.length + S.favGoods.length;
  $('s-cart').textContent = S.cart.reduce((a,b) => a + b.qty, 0);
  $('s-ord').textContent  = S.orders.length;
  $('s-like').textContent = S.likes.length;
  $('s-pt').textContent   = S.points;
}

/* ============================================================
   3. 导航
   ============================================================ */
const PAGE_TITLE = {
  home:'', explore:'', mall:'', mine:'',
  routes:'推荐路线', route:'路线详情', poi:'点位详情', map:'地图导览',
  note:'笔记详情', theme:'文化专题', topics:'热门话题',
  venues:'文化场馆', activities:'活动预约', service:'餐饮住宿',
  mall2:'文创商城', product:'商品详情', cart:'购物车', checkout:'确认订单',
  orders:'我的订单', activity:'活动详情', trips:'我的行程', favorites:'我的收藏',
  search:'搜索', ai:'AI 行程助手', guide:'语音导览'
};
const TAB_PAGES = ['home','explore','mall','mine'];
const TAB_DEF = [
  {k:'home',    n:'首页', icon:'<path d="M3 10.4 12 3.2l9 7.2V20a1 1 0 0 1-1 1h-4.6v-6.4H8.6V21H4a1 1 0 0 1-1-1z"/>'},
  {k:'explore', n:'探索', icon:'<circle cx="12" cy="12" r="8.6"/><path d="m15.4 8.6-2.1 4.9-4.9 2.1 2.1-4.9z"/>'},
  {k:'mall',    n:'商城', icon:'<path d="M5.6 8h12.8l-1.2 12.2a1 1 0 0 1-1 .8H6.8a1 1 0 0 1-1-.8z"/><path d="M9.2 8.4V6.2a2.8 2.8 0 0 1 5.6 0v2.2"/>'},
  {k:'mine',    n:'我的', icon:'<circle cx="12" cy="8" r="3.6"/><path d="M4.8 20.2c0-3.9 3.2-6.2 7.2-6.2s7.2 2.3 7.2 6.2"/>'}
];

function go(p, id){
  const prev = cur().p;
  if (TAB_PAGES.includes(p)) { STACK = [{p:p}]; }
  else { STACK.push({p:p, id:id}); }
  if (p === 'ai' && prev !== 'ai') { TMP.aiDone = false; TMP.aiRunning = false; }
  track(PAGE_TITLE[p] || p, '页面浏览 PV', id ? ('资源 ' + id) : '');
  render();
}
function back(){
  if (STACK.length > 1) { STACK.pop(); render(); }
}
function tab(k){ go(k); }

function cur(){ return STACK[STACK.length - 1]; }

/* ============================================================
   4. 页面渲染器
   ============================================================ */
function renderHome(){
  const b = BANNERS.map((x, i) =>
    '<div class="slide ' + (i === 0 ? 'on' : '') + '" data-slide="' + i + '" style="background:linear-gradient(150deg,' + COVERS[x.ci || (i*3) % 10][0] + ',' + COVERS[x.ci || (i*3) % 10][1] + ')">'
    + '<span class="go" data-act="go" data-page="' + x.go.p + '" data-id="' + (x.go.id || '') + '">去看看 ›</span>'
    + '<h3>' + x.t + '</h3><p>' + x.d + '</p></div>').join('');

  return '<div class="pg">'
  + '<div class="homehead">'
  +   '<div class="row1">'
  +     '<div class="city" data-act="toast" data-msg="演示版：已锁定「邯郸」">邯郸 <span style="font-size:9px">▼</span></div>'
  +     '<div class="searchbar" data-act="go" data-page="search"><span>🔍</span><span>搜路线 / 点位 / 好物</span></div>'
  +     '<div class="bell" data-act="toast" data-msg="您有 1 条预约提醒"><span>🔔</span><span style="position:absolute;top:4px;right:4px;width:7px;height:7px;border-radius:50%;background:#FFD166;box-shadow:0 0 0 2px #8E3B2C"></span></div>'
  +   '</div>'
  +   '<div class="weatherbar"><span>⛅</span><span>今日邯郸 · 晴 <b>22℃</b> · 适合城市漫步</span><span style="margin-left:auto;opacity:.85">已为你推荐 3 条路线</span></div>'
  +   '<div class="hero-wrap"><div class="bannerbox" id="bannerbox">' + b + '<div class="dots" id="dots">' + BANNERS.map((x,i)=>'<i class="'+(i===0?'on':'')+'"></i>').join('') + '</div></div></div>'
  + '</div>'

  + '<div class="kingkong">' + ENTRIES.map(e =>
      '<div class="kk" data-act="entry" data-i="' + ENTRIES.indexOf(e) + '">'
      + '<span class="ib" style="background:' + e.bg + ';color:' + e.fg + '">' + e.ic + (e.hot ? '<span class="hot">' + e.hot + '</span>' : '') + '</span>'
      + '<span>' + e.t + '</span></div>').join('') + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>本周精选路线<small>编辑手选</small></h2><span class="more" data-act="go" data-page="routes">全部 ›</span></div>'
  +   '<div style="display:flex;flex-direction:column;gap:9px">'
  +     ROUTES.slice(0,2).map(r =>
        '<div class="routecard" data-act="go" data-page="route" data-id="' + r.id + '">'
        + cov(r.ci, 104, r.lb)
        + '<div class="info"><h4>' + r.t + '</h4><div class="sub">' + r.sub + '</div>'
        + '<div class="metas"><span class="pill">' + r.days + '</span><span class="pill">' + r.km + '</span>'
        + '<span class="pill g">★ ' + r.score + '</span></div>'
        + '<div style="font-size:10.5px;color:var(--ink-3);margin-top:6px">' + r.heat + '</div></div></div>').join('')
  +   '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>热门话题</h2></div>'
  +   '<div class="chiprow">' + TOPICS.map(t => '<span class="chip" data-act="toast" data-msg="话题 ' + t + ' · 演示版">' + t + '</span>').join('') + '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>文化专题<small>结构化内容库</small></h2><span class="more" data-act="go" data-page="topics">更多 ›</span></div>'
  +   THEMES.map(t =>
        '<div class="themecard" data-act="go" data-page="theme" data-id="' + t.id + '">'
        + cov(t.ci, 72, '', '') + '<div style="flex:1;min-width:0"><h4>' + t.t + '</h4><p>' + t.d + '</p>'
        + '<span class="pill">' + t.n + ' 篇内容</span></div><span style="color:#C6C0B4">›</span></div>').join('')
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>旅行者笔记</h2><span class="more" data-act="go" data-page="explore">去探索 ›</span></div>'
  +   '<div class="notegrid">' + NOTES.slice(0,4).map(noteCard).join('') + '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>非遗好物</h2><span class="more" data-act="go" data-page="mall">进商城 ›</span></div>'
  +   '<div class="hscroll">' + PRODUCTS.filter(p=>p.cat==='goods').slice(0,5).map(p =>
        '<div class="pcard" data-act="go" data-page="product" data-id="' + p.id + '">' + cov(p.ci, 112, '')
        + '<div class="b"><h5>' + p.t + '</h5><span class="price"><small>¥</small>' + p.price + '</span>'
        + '<div class="s">' + p.sell + '</div></div></div>').join('') + '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>近期活动</h2><span class="more" data-act="go" data-page="activities">全部 ›</span></div>'
  +   ACTIVITIES.slice(0,2).map(a =>
        '<div class="themecard" data-act="go" data-page="activity" data-id="' + a.id + '">'
        + cov(a.ci, 72, '') + '<div style="flex:1;min-width:0"><h4>' + a.t + '</h4>'
        + '<p>' + a.date + ' · ' + a.place + '</p>'
        + '<span class="price"><small>¥</small>' + a.price + '</span> <span class="pill a" style="margin-left:4px">剩 ' + a.left + ' 位</span></div></div>').join('')
  + '</div>'

  + '<div style="height:14px"></div>'
  + '<div style="text-align:center;font-size:11px;color:var(--ink-3);padding-bottom:8px">— 邯道 · 一步一典故，一街三千年 —</div>'
  + '<button class="ai-fab" data-act="go" data-page="ai"><span class="sp">✦</span>AI 行程规划</button>'
  + '</div>';
}

function renderExplore(){
  const tabs = ['推荐','话题','攻略','专题'];
  let body = '';
  if (TMP.expTab === 'rec' || TMP.expTab === 'guide') {
    body = '<div class="sec"><div class="notegrid">' + NOTES.map(noteCard).join('') + '</div></div>';
  } else if (TMP.expTab === 'topic') {
    body = '<div class="sec"><div class="chiprow">' + TOPICS.map(t => '<span class="chip' + (TMP.exploreChip===t?' on':'') + '" data-act="exploreChip" data-v="' + t + '">' + t + '</span>').join('') + '</div>'
      + '<div style="margin-top:12px" class="notegrid">' + NOTES.filter(n => n.topic === TMP.exploreChip).concat(NOTES.filter(n => n.topic !== TMP.exploreChip)).map(noteCard).join('') + '</div></div>';
  } else {
    body = '<div class="sec">' + THEMES.map(t =>
        '<div class="themecard" data-act="go" data-page="theme" data-id="' + t.id + '">' + cov(t.ci, 72, '')
        + '<div style="flex:1;min-width:0"><h4>' + t.t + '</h4><p>' + t.d + '</p><span class="pill">' + t.n + ' 篇内容</span></div><span style="color:#C6C0B4">›</span></div>').join('')
      + '<div style="margin-top:12px" class="notegrid">' + NOTES.slice(0,4).map(noteCard).join('') + '</div></div>';
  }
  return '<div class="pg">'
  + '<div class="exhead">'
  +   '<div style="display:flex;align-items:center;gap:9px"><div class="searchbar" style="background:var(--surface-2);border:1px solid var(--line)" data-act="go" data-page="search"><span>🔍</span><span>搜索笔记 / 话题 / 攻略</span></div></div>'
  +   '<div class="extabs">' + tabs.map((t,i) => '<span class="extab ' + ((['rec','topic','guide','theme'][i]===TMP.expTab)?'on':'') + '" data-act="expTab" data-v="' + ['rec','topic','guide','theme'][i] + '">' + t + '</span>').join('') + '</div>'
  + '</div>'
  + body
  + '</div>';
}

function noteCard(n){
  const p = n.poi ? P(n.poi) : null;
  return '<div class="notecard" data-act="go" data-page="note" data-id="' + n.id + '">'
  + cov(n.ci, n.h, '')
  + '<div class="body"><h5>' + n.t + '</h5>'
  + '<div class="foot"><span class="avatar ' + n.av + '">' + n.au.slice(0,1) + '</span><span class="nm">' + n.au + '</span>'
  + '<span>♥ ' + (n.like + (S.likes.includes(n.id)?1:0)) + '</span></div>'
  + (p ? '<div style="font-size:10px;color:var(--primary);margin-top:5px">📍 ' + p.n.split('（')[0].split(' · ')[0] + '</div>' : '')
  + '</div></div>';
}

function renderMall(){
  const t = TMP.mallTab;
  const goods = PRODUCTS.filter(p => p.cat === (t === 'act' ? 'act' : 'goods'));
  const cats = [['goods','文创商品'],['act','非遗体验'],['food','地方特产'],['all','全部']];
  const cartN = S.cart.reduce((a,b)=>a+b.qty,0);
  let list;
  if (t === 'act') {
    list = goods.map(a => '<div class="themecard" data-act="go" data-page="activity" data-id="' + a.id + '">'
      + cov(a.ci, 76, '') + '<div style="flex:1;min-width:0"><h4>' + a.t + '</h4>'
      + '<p>' + a.date + '<br>' + a.place + '</p>'
      + '<span class="price"><small>¥</small>' + a.price + '</span> <span class="pill a" style="margin-left:4px">剩 ' + a.left + ' 位</span>'
      + '<div style="font-size:10px;color:var(--ink-3);margin-top:5px">' + a.sell + ' · ★ ' + a.rate + '</div></div></div>').join('');
  } else {
    list = '<div class="goods">' + goods.map(p =>
        '<div class="gcell" data-act="go" data-page="product" data-id="' + p.id + '">' + cov(p.ci, 142, '')
        + '<div class="b"><h5>' + p.t + '</h5><div class="row"><span class="price"><small>¥</small>' + p.price + '</span>'
        + (p.old ? '<span class="pill a">券后</span>' : '') + '</div>'
        + '<div class="s"><span>' + p.sell + '</span><span>★ ' + p.rate + '</span></div></div></div>').join('') + '</div>';
  }
  return '<div class="pg">'
  + '<div class="mallhead">'
  +   '<div style="display:flex;align-items:center;gap:9px">'
  +   '<div class="searchbar" style="background:var(--surface-2);border:1px solid var(--line)" data-act="go" data-page="search"><span>🔍</span><span>搜索文创 / 体验 / 特产</span></div>'
  +   '<div style="width:32px;height:32px;display:grid;place-items:center;position:relative;cursor:pointer" data-act="go" data-page="cart"><span style="font-size:19px">🛒</span>'
  +   (cartN ? '<span class="badge" style="left:auto;right:-2px;top:-2px">' + cartN + '</span>' : '') + '</div></div>'
  +   '<div class="chiprow" style="margin-top:11px">' + cats.map(x => '<span class="chip pri ' + (t===x[0]?'on':'') + '" data-act="mallTab" data-v="' + x[0] + '">' + x[1] + '</span>').join('') + '</div>'
  + '</div>'
  + '<div class="sec" style="padding-top:12px">' + list + '</div>'
  + '<div style="text-align:center;font-size:11px;color:var(--ink-3);padding:14px 0 4px">非遗好物均由认证传承人 / 工作室供货</div>'
  + '</div>';
}

function renderMine(){
  const cartN = S.cart.reduce((a,b)=>a+b.qty,0);
  return '<div class="pg" style="padding-bottom:0">'
  + '<div class="minehead"><div class="mrow">'
  +   '<div class="avatar">' + USER.nick.slice(-2) + '</div>'
  +   '<div style="flex:1"><h3>' + USER.nick + '</h3><span class="lv">✦ ' + USER.level + ' · ' + USER.city + '</span></div>'
  +   '<span style="font-size:11px;opacity:.85;cursor:pointer" data-act="toast" data-msg="演示版：设置页暂未开放">设置 ›</span>'
  + '</div>'
  + '<div class="mstat">'
  +   '<div data-act="go" data-page="favorites"><b>' + S.favNotes.length + '</b><span>收藏笔记</span></div>'
  +   '<div data-act="go" data-page="trips"><b>' + S.trips.length + '</b><span>我的行程</span></div>'
  +   '<div data-act="go" data-page="orders"><b>' + S.orders.length + '</b><span>订单</span></div>'
  +   '<div data-act="toast" data-msg="已打卡 ' + S.visited.length + ' 个点位"><b>' + S.visited.length + '</b><span>足迹</span></div>'
  + '</div></div>'

  + '<div class="mcard">'
  +   '<div data-act="orders" data-v="unpaid"><b>' + S.orders.filter(o=>o.st==='unpaid').length + '</b><span>待付款</span></div>'
  +   '<div data-act="orders" data-v="used"><b>0</b><span>待使用</span></div>'
  +   '<div data-act="orders" data-v="sent"><b>' + S.orders.filter(o=>o.st==='sent').length + '</b><span>待收货</span>' + (S.orders.filter(o=>o.st==='sent').length?'<span class="badge2">'+S.orders.filter(o=>o.st==='sent').length+'</span>':'') + '</div>'
  +   '<div data-act="orders" data-v="all"><b>' + S.orders.length + '</b><span>全部订单</span></div>'
  + '</div>'

  + '<div class="sec" style="padding-top:14px">'
  +   '<div class="sec-h"><h2>我的工具</h2></div>'
  +   '<div class="tools">'
  +     '<div class="t" data-act="go" data-page="trips"><span class="ib">🗺</span><span>我的行程</span></div>'
  +     '<div class="t" data-act="go" data-page="favorites"><span class="ib">⭐</span><span>我的收藏</span></div>'
  +     '<div class="t" data-act="go" data-page="cart"><span class="ib">🛒</span><span>购物车' + (cartN?'('+cartN+')':'') + '</span></div>'
  +     '<div class="t" data-act="go" data-page="ai"><span class="ib">✦</span><span>AI 规划</span></div>'
  +     '<div class="t" data-act="toast" data-msg="演示版：优惠券 3 张可用"><span class="ib">🎟</span><span>优惠券</span></div>'
  +     '<div class="t" data-act="toast" data-msg="当前积分 ' + S.points + '"><span class="ib">💎</span><span>我的积分</span></div>'
  +     '<div class="t" data-act="go" data-page="venues"><span class="ib">🏛</span><span>文化场馆</span></div>'
  +     '<div class="t" data-act="go" data-page="service"><span class="ib">🍜</span><span>餐饮住宿</span></div>'
  +   '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>内容与订单</h2></div>'
  +   '<div class="listbox">'
  +     '<div class="li" data-act="go" data-page="orders"><span class="ic">📦</span><span class="tx">我的订单</span><span class="rt">' + S.orders.length + ' 笔</span><span class="arw">›</span></div>'
  +     '<div class="li" data-act="go" data-page="favorites"><span class="ic">❤</span><span class="tx">收藏与足迹</span><span class="rt">' + (S.favNotes.length+S.favRoutes.length+S.favGoods.length) + ' 项</span><span class="arw">›</span></div>'
  +     '<div class="li" data-act="toast" data-msg="演示版：暂无待评价"><span class="ic">✍</span><span class="tx">我的评价</span><span class="arw">›</span></div>'
  +     '<div class="li" data-act="toast" data-msg="感谢反馈，已记录"><span class="ic">💬</span><span class="tx">意见反馈</span><span class="arw">›</span></div>'
  +   '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>关于</h2></div>'
  +   '<div class="listbox">'
  +     '<div class="li" data-act="toast" data-msg="邯道 · 串城街智慧文旅小程序 v1.0 Demo"><span class="ic">ℹ</span><span class="tx">关于邯道</span><span class="rt">v1.0</span><span class="arw">›</span></div>'
  +     '<div class="li" data-act="toast" data-msg="本 Demo 全部数据为 Mock 数据"><span class="ic">🔒</span><span class="tx">隐私与数据说明</span><span class="arw">›</span></div>'
  +   '</div>'
  + '</div>'
  + '<div style="text-align:center;font-size:10.5px;color:var(--ink-3);padding:16px 0 20px">邯道 · Vibe Coding Demo · Mock 数据</div>'
  + '</div>';
}

/* ---------- 路线列表 ---------- */
function renderRoutes(){
  const chips = ['全部','历史建筑','城市漫步','邯郸美食','历史','古城','非遗'];
  const map = {'历史建筑':['历史建筑'],'城市漫步':['城市漫步'],'邯郸美食':['邯郸美食'],'历史':['历史'],'古城':['古城'],'非遗':['非遗']};
  const list = TMP.routeChip === '全部' ? ROUTES : ROUTES.filter(r => (map[TMP.routeChip]||[]).some(t => r.tags.includes(t)));
  return '<div class="pg">'
  + '<div class="sec" style="padding-top:12px"><div class="chiprow">' + chips.map(x =>
      '<span class="chip pri ' + (TMP.routeChip===x?'on':'') + '" data-act="routeChip" data-v="' + x + '">' + x + '</span>').join('') + '</div></div>'
  + '<div class="sec" style="padding-top:14px;display:flex;flex-direction:column;gap:10px">'
  + (list.length ? list.map(r =>
      '<div class="routecard" data-act="go" data-page="route" data-id="' + r.id + '">'
      + cov(r.ci, 104, r.lb)
      + '<div class="info"><h4>' + r.t + '</h4><div class="sub">' + r.sub + '</div>'
      + '<div class="metas"><span class="pill">' + r.days + '</span><span class="pill">' + r.km + '</span><span class="pill n">' + r.spots + ' 个点位</span></div>'
      + '<div style="font-size:10.5px;color:var(--ink-3);margin-top:6px">' + r.heat + ' · ★ ' + r.score + '</div></div></div>').join('')
     : '<div class="emptystate"><div class="em">🗺</div><p>该分类下暂无路线</p><button class="ofbtn pri" data-act="routeChip" data-v="全部">看我全部路线</button></div>')
  + '</div></div>';
}

/* ---------- 路线详情 ---------- */
function renderRouteDetail(id){
  const r = R(id) || ROUTES[0];
  const inTrip = S.trips.includes(r.id);
  const favR = S.favRoutes.includes(r.id);
  return '<div class="pg" style="padding-bottom:0">'
  + '<div class="heroimg">' + cov(r.ci, 224, r.lb) + '<div class="shade"></div>'
  +   '<div class="txt"><h1>' + r.t + '</h1><p>' + r.sub + '</p>'
  +   '<div style="display:flex;gap:6px;margin-top:9px">' + r.tags.map(t => '<span class="pill" style="background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.3)">' + t + '</span>').join('') + '</div></div></div>'

  + '<div class="databar">'
  +   '<div><b>' + r.days + '</b><span>建议时长</span></div>'
  +   '<div><b>' + r.km + '</b><span>步行距离</span></div>'
  +   '<div><b>' + r.spots + '</b><span>沿途点位</span></div>'
  +   '<div><b>' + r.score + '</b><span>综合评分</span></div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>路线简介</h2></div>'
  +   '<div style="background:#fff;border-radius:14px;padding:13px;font-size:12.5px;line-height:1.75;color:var(--ink-2);box-shadow:var(--shadow-1)">' + r.intro + '</div>'
  +   '<div style="display:flex;gap:8px;margin-top:10px">'
  +     '<div style="flex:1;background:var(--primary-soft);border-radius:12px;padding:10px 11px"><div style="font-size:10px;color:var(--primary);font-weight:800;margin-bottom:4px">最佳季节</div><div style="font-size:11.5px;color:var(--ink-2)">' + r.best + '</div></div>'
  +     '<div style="flex:1;background:var(--gold-soft);border-radius:12px;padding:10px 11px"><div style="font-size:10px;color:var(--gold);font-weight:800;margin-bottom:4px">实用提示</div><div style="font-size:11.5px;color:var(--ink-2)">' + r.tip + '</div></div>'
  +   '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>行程点位<small>' + r.pois.length + ' 站 · 可点击查看讲解</small></h2>'
  +   '<span class="more" data-act="go" data-page="map" data-id="' + r.id + '">地图 ›</span></div>'
  +   '<div class="tl">' + r.pois.map((pid, i) => {
        const p = P(pid); if (!p) return '';
        return '<div class="tlitem" data-act="go" data-page="poi" data-id="' + p.id + '">'
        + '<span class="num">' + (i+1) + '</span>' + cov(p.ci, 66, '')
        + '<div class="c"><h4>' + p.n.split('（')[0] + '</h4>'
        + '<p>⏱ 建议停留 ' + p.stay + ' · ★ ' + p.score + '</p>'
        + '<div style="display:flex;gap:5px;flex-wrap:wrap">' + p.view.slice(0,3).map(v => '<span class="pill n">' + v + '</span>').join('') + '</div>'
        + '</div><span style="color:#C6C0B4;align-self:center">›</span></div>';
      }).join('') + '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div style="background:linear-gradient(135deg,#8E3B2C,#A9503C);border-radius:16px;padding:15px;color:#fff;box-shadow:0 12px 26px rgba(15,107,92,.24)">'
  +   '<div style="font-size:13.5px;font-weight:800;margin-bottom:5px">✦ 让 AI 按你的时间重排这条路线</div>'
  +   '<div style="font-size:11.5px;opacity:.88;line-height:1.6;margin-bottom:11px">告诉它你有几小时、想吃什么、带不带孩子，30 秒生成可执行的日程。</div>'
  +   '<button class="ofbtn" style="background:rgba(255,255,255,.95);border-color:transparent;color:#8E3B2C;margin-left:0;font-weight:800" data-act="go" data-page="ai">立即生成 ›</button>'
  +   '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>沿途餐饮住宿<small>已按步行距离排序</small></h2></div>'
  +   SERVICES.slice(0,3).map(s => '<div class="li listbox" style="margin-bottom:8px;border-radius:13px;box-shadow:var(--shadow-1)" data-act="go" data-page="service">'
      + '<span class="ic" style="background:' + COVERS[s.ci][0] + '22">' + s.ic + '</span><span class="tx">' + s.t + '<br><span style="font-size:10.5px;color:var(--ink-3);font-weight:500">' + s.d + '</span></span><span class="arw">›</span></div>').join('')
  + '</div>'

  + '<div class="sec" style="padding-bottom:14px">'
  +   '<div class="sec-h"><h2>旅行者怎么说<small>来自社区笔记</small></h2></div>'
  +   '<div class="notegrid">' + NOTES.filter(n => n.route === r.id).map(noteCard).join('') + '</div>'
  + '</div>'

  + '<div class="actionbar">'
  +   '<button class="abtn ' + (favR?'on':'') + '" data-act="favRoute" data-id="' + r.id + '"><span class="ico">' + (favR?'★':'☆') + '</span>' + (favR?'已收藏':'收藏') + '</button>'
  +   '<button class="abtn" data-act="share" data-t="' + r.t + '"><span class="ico">↗</span>分享</button>'
  +   '<button class="cta ' + (inTrip?'ghost':'') + '" data-act="trip" data-id="' + r.id + '">' + (inTrip ? '✓ 已在行程中' : '加入我的行程') + '</button>'
  + '</div>'
  + '</div>';
}

/* ---------- 点位详情 ---------- */
function renderPoiDetail(id){
  const p = P(id) || POIS[0];
  const favP = S.favRoutes.includes('poi:' + p.id);
  const relNotes = NOTES.filter(n => n.poi === p.id);
  const relActs = ACTIVITIES.filter(a => a.ci === p.ci).slice(0,2);
  const relGoods = PRODUCTS.filter(g => g.cat === 'goods').slice(0,4);
  return '<div class="pg" style="padding-bottom:0">'
  + '<div class="heroimg" style="height:210px">' + cov(p.ci, 210, p.lb) + '<div class="shade"></div>'
  +   '<div class="txt"><h1>' + p.n + '</h1><p>📍 ' + p.addr + '</p>'
  +   '<div style="display:flex;align-items:center;gap:10px;margin-top:8px;font-size:11.5px">'
  +   '<span>★ <b>' + p.score + '</b></span><span>' + p.rev.toLocaleString() + ' 条评价</span>'
  +   '<span class="pill" style="background:rgba(255,255,255,.2);color:#fff;border:1px solid rgba(255,255,255,.3)">' + p.cat + '</span></div></div></div>'

  + '<div class="sec" style="padding-top:12px">'
  +   '<div class="audio">'
  +     '<div class="play" data-act="audio" data-id="' + p.id + '">' + (TMP.playing && TMP.audioId === p.id ? '❚❚' : '▶') + '</div>'
  +     '<div class="mid"><b>' + p.audio.txt + '</b>'
  +     '<div class="bar"><i id="abar" style="width:' + (TMP.playing && TMP.audioId === p.id ? TMP.audioPct : 0) + '%"></i></div></div>'
  +     '<div class="tm" id="atm">' + (TMP.playing && TMP.audioId === p.id ? '播放中' : p.audio.len) + '</div>'
  +     '<div class="mv" data-act="toast" data-msg="演示版：语速 / 字幕设置">⋮</div>'
  +   '</div>'
  +   '<div style="display:flex;gap:8px;margin-top:10px;font-size:11px;color:var(--ink-3)">'
  +   '<span>开放时间 ' + p.open.replace('（','').replace('）',' · ') + '</span></div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>点位讲解</h2></div>'
  +   '<div style="background:#fff;border-radius:14px;padding:13px;font-size:12.5px;line-height:1.8;color:var(--ink-2);box-shadow:var(--shadow-1)">' + p.desc + '</div>'
  + '</div>'

  + '<div class="sec">'
  +   '<div class="sec-h"><h2>看点清单</h2></div>'
  +   '<div style="display:flex;flex-wrap:wrap;gap:7px">' + p.view.map(v =>
      '<span style="font-size:11.5px;font-weight:600;padding:7px 12px;border-radius:10px;background:#fff;border:1px solid var(--line);color:var(--ink-2)">◎ ' + v + '</span>').join('') + '</div>'
  +   '<div style="margin-top:10px;background:var(--gold-soft);border-radius:12px;padding:11px 12px;font-size:11.5px;color:#7A5A15;line-height:1.65">💡 <b>实用提示</b>　' + p.tips + '</div>'
  + '</div>'

  + (relNotes.length ? '<div class="sec"><div class="sec-h"><h2>旅行者笔记<small>提到这个点位</small></h2></div>'
      + '<div class="notegrid">' + relNotes.map(noteCard).join('') + '</div></div>' : '')

  + (relActs.length ? '<div class="sec"><div class="sec-h"><h2>附近非遗体验</h2></div>'
      + relActs.map(a => '<div class="themecard" data-act="go" data-page="activity" data-id="' + a.id + '">'
      + cov(a.ci, 72, '') + '<div style="flex:1;min-width:0"><h4>' + a.t + '</h4><p>' + a.date + ' · ' + a.place + '</p>'
      + '<span class="price"><small>¥</small>' + a.price + '</span></div></div>').join('') + '</div>' : '')

  + '<div class="sec"><div class="sec-h"><h2>把这份文化带回家</h2><span class="more" data-act="go" data-page="mall">进商城 ›</span></div>'
  + '<div class="hscroll">' + relGoods.map(g => '<div class="pcard" data-act="go" data-page="product" data-id="' + g.id + '">' + cov(g.ci, 112, '')
      + '<div class="b"><h5>' + g.t + '</h5><span class="price"><small>¥</small>' + g.price + '</span><div class="s">' + g.sell + '</div></div></div>').join('') + '</div></div>'

  + '<div class="sec" style="padding-top:12px">'
  +   '<div class="listbox"><div class="li" data-act="go" data-page="map" data-id="' + (p.r||'r1') + '"><span class="ic">🗺</span><span class="tx">在地图中查看</span><span class="rt">距下一点位 0.8km</span><span class="arw">›</span></div>'
  +   '<div class="li" data-act="done" data-id="' + p.id + '"><span class="ic">✓</span><span class="tx">标记为已游览</span><span class="rt">' + (S.visited.includes(p.id) ? '已打卡' : '未打卡') + '</span><span class="arw">›</span></div></div>'
  + '</div>'

  + '<div class="actionbar">'
  +   '<button class="abtn ' + (favP?'on':'') + '" data-act="favPoi" data-id="' + p.id + '"><span class="ico">' + (favP?'★':'☆') + '</span>收藏</button>'
  +   '<button class="abtn" data-act="share" data-t="' + p.n + '"><span class="ico">↗</span>分享</button>'
  +   '<button class="cta ghost" data-act="trip" data-id="' + p.r + '">加入路线</button>'
  +   '<button class="cta" data-act="audio" data-id="' + p.id + '">' + (TMP.playing && TMP.audioId === p.id ? '暂停讲解' : '播放讲解') + '</button>'
  + '</div>'
  + '</div>';
}
/* ---------- 笔记详情 ---------- */
function renderNoteDetail(id){
  const n = N(id) || NOTES[0];
  const liked = S.likes.includes(n.id);
  const faved = S.favNotes.includes(n.id);
  const p = n.poi ? P(n.poi) : null;
  const r = n.route ? R(n.route) : null;
  return '<div class="pg" style="padding-bottom:0">'
  + cov(n.ci, n.h + 60, '')
  + '<div style="background:#fff;border-radius:18px 18px 0 0;margin-top:-18px;position:relative;padding:15px 14px 0">'
  +   '<div style="display:flex;align-items:center;gap:9px;padding-bottom:13px;border-bottom:1px solid var(--line)">'
  +     '<div class="avatar ' + n.av + '">' + n.au.slice(0,1) + '</div>'
  +     '<div style="flex:1"><div style="font-size:13.5px;font-weight:800">' + n.au + '</div>'
  +     '<div style="font-size:10.5px;color:var(--ink-3)">' + n.tags.join(' · ') + ' · 2 天前</div></div>'
  +     '<button class="ofbtn" style="margin:0;border-color:var(--primary);color:var(--primary)" data-act="toast" data-msg="已关注 ' + n.au + '">+ 关注</button>'
  +   '</div>'
  +   '<h1 style="font-size:19px;font-weight:800;line-height:1.4;margin:14px 0 10px">' + n.t + '</h1>'
  +   '<div style="font-size:13px;line-height:1.9;color:var(--ink-2);white-space:pre-line">' + n.body + '</div>'
  +   '<div style="margin-top:12px"><span class="pill">' + n.topic + '</span></div>'
  + '</div>'

  + (p ? '<div class="sec"><div class="sec-h"><h2>文中提到</h2></div>'
      + '<div class="themecard" data-act="go" data-page="poi" data-id="' + p.id + '">' + cov(p.ci, 68, '')
      + '<div style="flex:1;min-width:0"><div style="font-size:10px;color:var(--primary);font-weight:800;margin-bottom:4px">📍 关联点位</div>'
      + '<h4>' + p.n + '</h4><p>' + p.cat + ' · ★ ' + p.score + ' · 建议停留 ' + p.stay + '</p></div><span style="color:#C6C0B4">›</span></div>'
      + (r ? '<div class="themecard" style="margin-top:8px" data-act="go" data-page="route" data-id="' + r.id + '">' + cov(r.ci, 68, '')
          + '<div style="flex:1;min-width:0"><div style="font-size:10px;color:var(--accent);font-weight:800;margin-bottom:4px">🗺 属于路线</div>'
          + '<h4>' + r.t + '</h4><p>' + r.sub + '</p></div><span style="color:#C6C0B4">›</span></div>' : '')
      + '</div>' : '')

  + '<div class="sec"><div class="sec-h"><h2>把笔记变成行程</h2></div>'
  +   '<div style="background:linear-gradient(135deg,#8E3B2C,#A9503C);border-radius:16px;padding:14px;color:#fff;box-shadow:0 12px 26px rgba(15,107,92,.22)">'
  +   '<div style="font-size:13px;font-weight:800;margin-bottom:5px">✦ 基于这篇笔记生成 1 日路线</div>'
  +   '<div style="font-size:11.5px;opacity:.88;line-height:1.6;margin-bottom:11px">AI 会自动补全交通方式、停留时长与周边餐饮，生成后可一键存入我的行程。</div>'
  +   '<button class="ofbtn" style="background:rgba(255,255,255,.95);border-color:transparent;color:#8E3B2C;margin-left:0;font-weight:800" data-act="go" data-page="ai">生成路线 ›</button></div>'
  + '</div>'

  + '<div class="sec"><div class="sec-h"><h2>评论 <small>' + n.cmt + '</small></h2></div>'
  +   '<div class="listbox">'
  +   '<div class="li" style="align-items:flex-start"><span class="avatar c" style="margin-top:2px">旅</span><div style="flex:1"><div style="font-size:12.5px;font-weight:700">旅行的阿May</div><div style="font-size:12px;color:var(--ink-2);line-height:1.65;margin-top:3px">看完这篇我就订了周末的票，谢谢分享！</div><div style="font-size:10px;color:var(--ink-3);margin-top:5px">1 天前 · ♥ 24</div></div></div>'
  +   '<div class="li" style="align-items:flex-start"><span class="avatar d" style="margin-top:2px">老</span><div style="flex:1"><div style="font-size:12.5px;font-weight:700">老周不加班</div><div style="font-size:12px;color:var(--ink-2);line-height:1.65;margin-top:3px">补充一点：周末下午人真的多，建议上午去。</div><div style="font-size:10px;color:var(--ink-3);margin-top:5px">2 天前 · ♥ 11</div></div></div>'
  +   '</div></div>'

  + '<div class="actionbar">'
  +   '<div style="flex:1;height:38px;background:var(--surface-2);border-radius:99px;display:flex;align-items:center;padding:0 14px;font-size:12px;color:var(--ink-3)" data-act="toast" data-msg="演示版：评论输入框">说点什么…</div>'
  +   '<button class="abtn ' + (liked?'on':'') + '" data-act="like" data-id="' + n.id + '"><span class="ico">' + (liked?'❤':'♡') + '</span>' + (n.like + (liked?1:0)) + '</button>'
  +   '<button class="abtn ' + (faved?'on':'') + '" data-act="favNote" data-id="' + n.id + '"><span class="ico">' + (faved?'★':'☆') + '</span>' + (faved?'已收藏':'收藏') + '</button>'
  +   '<button class="abtn" data-act="share" data-t="' + n.t + '"><span class="ico">↗</span>分享</button>'
  + '</div></div>';
}

/* ---------- 文化专题 / 热门话题 ---------- */
function renderTheme(id){
  const th = THEMES.find(x => x.id === id) || THEMES[0];
  const list = NOTES.filter(n => n.tags.some(t => th.t.includes(t) || t.includes(th.t.slice(0,2))));
  const show = list.length ? list : NOTES;
  return '<div class="pg">'
  + cov(th.ci, 168, th.lb)
  + '<div class="sec" style="padding-top:14px">'
  +   '<h1 style="font-size:20px;font-weight:800;margin-bottom:8px">' + th.t + '</h1>'
  +   '<p style="font-size:12.5px;line-height:1.75;color:var(--ink-2);margin-bottom:12px">' + th.d + '。本专题由编辑部与本地文化机构共同整理，内容结构化归档，可持续更新。</p>'
  +   '<div style="display:flex;gap:8px">'
  +     '<div style="flex:1;background:#fff;border-radius:12px;padding:11px;box-shadow:var(--shadow-1);text-align:center"><b style="display:block;font-size:17px;font-weight:800">' + th.n + '</b><span style="font-size:10.5px;color:var(--ink-3)">篇结构化内容</span></div>'
  +     '<div style="flex:1;background:#fff;border-radius:12px;padding:11px;box-shadow:var(--shadow-1);text-align:center"><b style="display:block;font-size:17px;font-weight:800">' + show.length + '</b><span style="font-size:10.5px;color:var(--ink-3)">条相关笔记</span></div>'
  +     '<div style="flex:1;background:#fff;border-radius:12px;padding:11px;box-shadow:var(--shadow-1);text-align:center"><b style="display:block;font-size:17px;font-weight:800">' + ROUTES.filter(r => r.ci === th.ci).length + '</b><span style="font-size:10.5px;color:var(--ink-3)">条关联路线</span></div>'
  +   '</div>'
  + '</div>'
  + '<div class="sec"><div class="sec-h"><h2>精选内容</h2></div><div class="notegrid">' + show.map(noteCard).join('') + '</div></div>'
  + '</div>';
}
function renderTopics(){
  return '<div class="pg"><div class="sec" style="padding-top:14px">'
  + '<div class="sec-h"><h2>文化专题</h2></div>'
  + THEMES.map(t => '<div class="themecard" data-act="go" data-page="theme" data-id="' + t.id + '">' + cov(t.ci, 72, '')
      + '<div style="flex:1;min-width:0"><h4>' + t.t + '</h4><p>' + t.d + '</p><span class="pill">' + t.n + ' 篇内容</span></div><span style="color:#C6C0B4">›</span></div>').join('')
  + '<div class="sec-h" style="margin-top:16px"><h2>热门话题</h2></div>'
  + '<div style="display:grid;grid-template-columns:1fr 1fr;gap:9px">'
  + TOPICS.map((t,i) => '<div data-act="toast" data-msg="话题 ' + t + ' · 演示版" style="background:#fff;border-radius:13px;padding:13px;box-shadow:var(--shadow-1);cursor:pointer">'
      + '<div style="font-size:13.5px;font-weight:800;margin-bottom:5px">' + t + '</div>'
      + '<div style="font-size:10.5px;color:var(--ink-3)">' + (1280 - i * 137) + ' 篇笔记 · ' + (12 - i) + ' 位达人</div></div>').join('')
  + '</div></div></div>';
}

/* ---------- 文化场馆 / 活动 / 住宿 ---------- */
function renderVenues(){
  return '<div class="pg"><div class="sec" style="padding-top:14px">'
  + '<div class="sec-h"><h2>邯郸文化场馆</h2><small style="font-size:11px;color:var(--ink-3)">共 ' + VENUES.length + ' 家</small></div>'
  + '<div class="chiprow" style="margin-bottom:12px">' + ['全部','博物馆','美术馆','纪念馆','图书馆'].map((x,i) => '<span class="chip pri ' + (i===0?'on':'') + '">' + x + '</span>').join('') + '</div>'
  + VENUES.map(v => '<div class="themecard" data-act="go" data-page="poi" data-id="' + v.poi + '">' + cov(v.ci, 74, '')
      + '<div style="flex:1;min-width:0"><div style="display:flex;align-items:center;gap:6px;margin-bottom:4px"><span class="pill g">' + v.lb + '</span><span class="pill n">' + v.tag + '</span></div>'
      + '<h4>' + v.n + '</h4><p>' + v.open + '</p>'
      + '<div style="font-size:12px" class="price">' + v.free + '</div></div><span style="color:#C6C0B4">›</span></div>').join('')
  + '</div></div>';
}
function renderActivities(){
  return '<div class="pg"><div class="sec" style="padding-top:14px">'
  + '<div class="sec-h"><h2>非遗体验 · 活动预约</h2></div>'
  + '<div class="chiprow" style="margin-bottom:12px">' + ['全部','磁州窑','傩戏','皮影','剪纸','夜游'].map((x,i) => '<span class="chip pri ' + (i===0?'on':'') + '">' + x + '</span>').join('') + '</div>'
  + ACTIVITIES.map(a => '<div class="themecard" data-act="go" data-page="activity" data-id="' + a.id + '">' + cov(a.ci, 76, '')
      + '<div style="flex:1;min-width:0"><div style="display:flex;gap:5px;margin-bottom:5px"><span class="pill">' + a.lb + '</span><span class="pill a">剩 ' + a.left + ' 位</span></div>'
      + '<h4>' + a.t + '</h4><p>' + a.date + '<br>' + a.place + '</p>'
      + '<span class="price"><small>¥</small>' + a.price + '</span>' + (a.old ? ' <del style="color:var(--ink-3);font-size:11px">¥' + a.old + '</del>' : '')
      + '<div style="font-size:10px;color:var(--ink-3);margin-top:5px">' + a.sell + ' · ★ ' + a.rate + '</div></div></div>').join('')
  + '</div></div>';
}
function renderService(){
  return '<div class="pg"><div class="sec" style="padding-top:14px">'
  + '<div class="sec-h"><h2>餐饮 · 住宿 · 交通</h2></div>'
  + SERVICES.map(s => '<div class="themecard" data-act="toast" data-msg="演示版：' + s.t + '">'
      + '<div style="width:74px;height:74px;border-radius:14px;flex:0 0 74px;display:grid;place-items:center;font-size:28px;background:' + COVERS[s.ci][0] + '1F">' + s.ic + '</div>'
      + '<div style="flex:1;min-width:0"><h4>' + s.t + '</h4><p>' + s.d + '</p><span class="pill">支持地图导览</span></div><span style="color:#C6C0B4">›</span></div>').join('')
  + '<div style="margin-top:14px;background:var(--primary-soft);border-radius:14px;padding:13px;font-size:11.5px;line-height:1.7;color:var(--primary)">'
  + '<b>为什么把餐饮住宿放进路线里？</b><br>文旅消费中，餐饮与住宿是客单价最高的两个环节。把它们与路线点位绑定，可以让"路线决策"直接变成"可预订的消费决策"。</div>'
  + '</div></div>';
}

/* ---------- 商品详情 ---------- */
function renderProductDetail(id){
  const g = G(id) || PRODUCTS[0];
  const isAct = g.cat === 'act';
  const faved = S.favGoods.includes(g.id);
  const specIdx = TMP['spec_' + g.id] || 0;
  return '<div class="pg" style="padding-bottom:0">'
  + cov(g.ci, 300, g.lb)
  + '<div style="background:#fff;padding:15px 14px 0;margin-top:-16px;border-radius:18px 18px 0 0;position:relative">'
  +   '<div style="display:flex;align-items:flex-end;gap:8px">'
  +     '<span class="price" style="font-size:26px"><small>¥</small>' + g.price + '</span>'
  +     (g.old ? '<del style="color:var(--ink-3);font-size:12.5px;padding-bottom:4px">¥' + g.old + '</del>' : '')
  +     '<span class="pill a" style="margin-bottom:6px">' + (g.old ? '限时券后' : g.lb) + '</span></div>'
  +   '<h1 style="font-size:16.5px;font-weight:800;line-height:1.45;margin:10px 0 8px">' + g.t + '</h1>'
  +   '<div style="font-size:11px;color:var(--ink-3);display:flex;gap:12px">'
  +   '<span>' + g.sell + '</span><span>★ ' + g.rate + '</span><span>' + g.shop + '</span></div>'
  + '</div>'

  + '<div style="background:#fff;margin:10px 14px 0;border-radius:14px;padding:13px;box-shadow:var(--shadow-1)">'
  +   '<div style="font-size:11px;color:var(--ink-3);font-weight:700;margin-bottom:9px">' + (isAct ? '选择场次' : '选择规格') + '</div>'
  +   '<div style="display:flex;flex-wrap:wrap;gap:8px">' + g.spec.map((s,i) =>
      '<span data-act="spec" data-id="' + g.id + '" data-i="' + i + '" style="font-size:11.5px;font-weight:600;padding:7px 13px;border-radius:10px;cursor:pointer;' + (i===specIdx ? 'background:var(--primary-soft);color:var(--primary);border:1.5px solid #9CCFC3' : 'background:var(--surface-2);color:var(--ink-2);border:1.5px solid transparent') + '">' + s + '</span>').join('') + '</div>'
  +   (isAct ? '<div style="margin-top:11px;font-size:11.5px;color:var(--ink-2);line-height:1.75">'
      + '📍 ' + g.place + '<br>👥 ' + g.quota + '<br>🔥 剩余名额 <b style="color:#2E6B5E">' + g.left + '</b> 位</div>' : '')
  + '</div>'

  + '<div class="sec" style="padding-top:10px">'
  +   '<div class="listbox" style="border-radius:13px">'
  +     '<div class="li"><span class="ic">✓</span><span class="tx" style="font-weight:500;font-size:12px">正品保障 · 认证工作室直供</span></div>'
  +     '<div class="li"><span class="ic">🚚</span><span class="tx" style="font-weight:500;font-size:12px">48 小时内发货 · 顺丰包邮</span></div>'
  +     '<div class="li"><span class="ic">↩</span><span class="tx" style="font-weight:500;font-size:12px">7 天无理由退换（体验类除外）</span></div>'
  +   '</div>'
  + '</div>'

  + '<div class="sec"><div class="sec-h"><h2>非遗背后的故事</h2></div>'
  +   '<div style="background:#fff;border-radius:14px;padding:13px;font-size:12.5px;line-height:1.8;color:var(--ink-2);box-shadow:var(--shadow-1)">' + g.story + '</div></div>'

  + '<div class="sec"><div class="sec-h"><h2>你可能还喜欢</h2></div>'
  +   '<div class="hscroll">' + PRODUCTS.filter(x => x.id !== g.id).slice(0,5).map(x =>
      '<div class="pcard" data-act="go" data-page="product" data-id="' + x.id + '">' + cov(x.ci, 112, '')
      + '<div class="b"><h5>' + x.t + '</h5><span class="price"><small>¥</small>' + x.price + '</span><div class="s">' + x.sell + '</div></div></div>').join('') + '</div></div>'
  + '<div style="height:14px"></div>'

  + '<div class="actionbar">'
  +   '<button class="abtn" data-act="toast" data-msg="演示版：在线客服"><span class="ico">💬</span>客服</button>'
  +   '<button class="abtn ' + (faved?'on':'') + '" data-act="favGood" data-id="' + g.id + '"><span class="ico">' + (faved?'★':'☆') + '</span>' + (faved?'已收藏':'收藏') + '</button>'
  +   (isAct
      ? '<button class="cta alt" data-act="orderAct" data-id="' + g.id + '">立即报名</button>'
      : '<button class="cta ghost" data-act="addCart" data-id="' + g.id + '">加入购物车</button><button class="cta" data-act="buyNow" data-id="' + g.id + '">立即购买</button>')
  + '</div></div>';
}

/* ---------- 购物车 ---------- */
function renderCart(){
  if (!S.cart.length) {
    return '<div class="pg"><div class="emptystate"><div class="em">🛒</div><p>购物车还是空的<br>去商城看看非遗好物吧</p>'
    + '<button class="ofbtn pri" data-act="go" data-page="mall">去逛商城</button></div></div>';
  }
  const all = TMP.cartAll;
  const total = S.cart.filter(i => all || i.sel).reduce((a,b) => a + G(b.id).price * b.qty, 0);
  return '<div class="pg" style="padding-bottom:0"><div class="sec" style="padding-top:12px">'
  + S.cart.map(it => {
      const g = G(it.id); if (!g) return '';
      return '<div class="citem">'
      + '<div data-act="cartSel" data-id="' + g.id + '" style="display:flex;align-items:center"><span style="width:19px;height:19px;border-radius:50%;display:grid;place-items:center;font-size:11px;color:#fff;background:' + ((all || it.sel) ? 'var(--primary)' : '#DED8CD') + '">✓</span></div>'
      + cov(g.ci, 74, '')
      + '<div class="c"><h5>' + g.t + '</h5><span class="sp">' + (g.spec[0] || '默认规格') + '</span>'
      + '<div style="display:flex;align-items:center;justify-content:space-between;margin-top:8px">'
      + '<span class="price"><small>¥</small>' + g.price + '</span>'
      + '<span class="stepper"><button data-act="cartMinus" data-id="' + g.id + '">−</button><span>' + it.qty + '</span><button data-act="cartPlus" data-id="' + g.id + '">+</button></span>'
      + '</div></div></div>';
    }).join('')
  + '</div><div style="height:14px"></div>'
  + '<div class="actionbar">'
  +   '<button class="abtn" data-act="cartAll"><span class="ico" style="font-size:15px">' + (all?'◉':'○') + '</span>全选</button>'
  +   '<div style="flex:1;font-size:12px;color:var(--ink-3);padding-left:4px">已选 ' + (all ? S.cart.reduce((a,b)=>a+b.qty,0) : S.cart.filter(i=>i.sel).reduce((a,b)=>a+b.qty,0)) + ' 件<br><span class="price" style="font-size:16px"><small>¥</small>' + total + '</span></div>'
  +   '<button class="cta alt" style="flex:0 0 118px" data-act="checkout">去结算</button>'
  + '</div></div>';
}

/* ---------- 确认订单 ---------- */
function renderCheckout(){
  const items = TMP.orderType === 'act'
    ? [{g: G(TMP.curProduct), qty: 1}]
    : S.cart.filter(i => i.sel || TMP.cartAll).map(i => ({g: G(i.id), qty: i.qty}));
  const total = items.reduce((a,b) => a + b.g.price * b.qty, 0);
  return '<div class="pg" style="padding-bottom:0">'
  + '<div class="sec" style="padding-top:12px">'
  +   '<div style="background:#fff;border-radius:14px;padding:13px;box-shadow:var(--shadow-1);display:flex;align-items:center;gap:10px">'
  +   '<span style="font-size:19px">📍</span><div style="flex:1"><div style="font-size:13px;font-weight:800">王睿笛　138****5829</div>'
  +   '<div style="font-size:11.5px;color:var(--ink-3);margin-top:3px">邯郸市丛台区串城街 12 号 · 老城民宿</div></div>'
  +   '<span style="color:#C6C0B4">›</span></div>'
  + '</div>'
  + '<div class="sec"><div style="background:#fff;border-radius:14px;padding:12px;box-shadow:var(--shadow-1)">'
  +   '<div style="font-size:11px;color:var(--ink-3);font-weight:700;margin-bottom:9px">' + (TMP.orderType === 'act' ? '报名信息' : '商品清单') + '</div>'
  + items.map(it => '<div style="display:flex;gap:10px;margin-bottom:10px">' + cov(it.g.ci, 60, '')
      + '<div style="flex:1;min-width:0"><div style="font-size:12.5px;font-weight:700;line-height:1.4">' + it.g.t + '</div>'
      + '<div style="font-size:10.5px;color:var(--ink-3);margin-top:4px">' + (TMP.orderType === 'act' ? (it.g.date + ' · ' + it.g.place) : '默认规格') + '</div></div>'
      + '<div style="text-align:right"><div class="price" style="font-size:13px">¥' + it.g.price + '</div><div style="font-size:10.5px;color:var(--ink-3)">×' + it.qty + '</div></div></div>').join('')
  + '</div></div>'
  + '<div class="sec"><div class="listbox" style="border-radius:14px">'
  +   '<div class="li"><span class="tx" style="font-weight:600">配送方式</span><span class="rt">' + (TMP.orderType === 'act' ? '到店核销 · 出示二维码' : '顺丰包邮') + '</span></div>'
  +   '<div class="li"><span class="tx" style="font-weight:600">优惠券</span><span class="rt" style="color:#2E6B5E">-¥20 新客立减</span></div>'
  +   '<div class="li"><span class="tx" style="font-weight:600">积分抵扣</span><span class="rt" style="color:#2E6B5E">-¥3（使用 300 积分）</span></div>'
  +   '<div class="li"><span class="tx" style="font-weight:600">备注</span><span class="rt">不开发票 ›</span></div>'
  + '</div></div>'
  + '<div class="sec"><div style="background:#fff;border-radius:14px;padding:13px;box-shadow:var(--shadow-1);font-size:12px;color:var(--ink-2);display:flex;flex-direction:column;gap:8px">'
  + '<div style="display:flex;justify-content:space-between"><span>商品金额</span><span>¥' + total + '</span></div>'
  + '<div style="display:flex;justify-content:space-between"><span>优惠</span><span style="color:#2E6B5E">-¥23</span></div>'
  + '<div style="display:flex;justify-content:space-between;padding-top:8px;border-top:1px solid var(--line)"><span style="font-weight:800;color:var(--ink)">应付金额</span><span class="price" style="font-size:17px"><small>¥</small>' + Math.max(0, total - 23) + '</span></div>'
  + '</div></div><div style="height:14px"></div>'
  + '<div class="actionbar">'
  +   '<div style="flex:1;font-size:11.5px;color:var(--ink-3);padding-left:6px">应付<br><span class="price" style="font-size:19px"><small>¥</small>' + Math.max(0, total - 23) + '</span></div>'
  +   '<button class="cta alt" style="flex:0 0 150px" data-act="placeOrder">提交订单</button>'
  + '</div></div>';
}

/* ---------- 订单列表 ---------- */
function renderOrders(){
  const st = TMP.orderFilter || 'all';
  const map = {all:'全部', unpaid:'待付款', used:'待使用', sent:'待收货', done:'已完成'};
  const list = st === 'all' ? S.orders : S.orders.filter(o => o.st === st);
  return '<div class="pg">'
  + '<div class="chiprow" style="padding:12px 14px 0">' + Object.keys(map).map(k =>
      '<span class="chip pri ' + (st===k?'on':'') + '" data-act="orderFilter" data-v="' + k + '">' + map[k] + '</span>').join('') + '</div>'
  + '<div class="sec" style="padding-top:12px">'
  + (list.length ? list.map(o => {
      const label = {unpaid:'待付款', used:'待使用', sent:'待收货', done:'已完成'}[o.st];
      return '<div class="ordcard">'
      + '<div class="oh"><span class="no">' + o.no + '</span><span class="pill ' + (o.st==='done'?'n':(o.st==='unpaid'?'a':'')) + '">' + label + '</span></div>'
      + o.items.slice(0,2).map(it => {
          const g = G(it.gid) || PRODUCTS[0];
          return '<div class="body" style="margin-bottom:9px">' + cov(g.ci, 64, '')
          + '<div style="flex:1;min-width:0"><div style="font-size:13px;font-weight:700;line-height:1.42">' + g.t + '</div>'
          + '<div style="font-size:10.5px;color:var(--ink-3);margin-top:5px">' + (g.cat === 'act' ? (g.date + ' · ' + g.place) : '默认规格') + '</div>'
          + '<div style="font-size:10.5px;color:var(--ink-3);margin-top:3px">' + o.time + '</div></div>'
          + '<div style="text-align:right"><div class="price" style="font-size:14px">¥' + g.price + '</div>'
          + '<div style="font-size:10.5px;color:var(--ink-3)">×' + it.qty + '</div></div></div>';
        }).join('')
      + (o.items.length > 2 ? '<div style="font-size:11px;color:var(--ink-3);padding-bottom:8px">等共 ' + o.items.length + ' 种商品 / ' + o.qty + ' 件</div>' : '')
      + '<div class="of"><span class="tt">共 ' + o.qty + ' 件 · 实付 <span class="price" style="font-size:13.5px">¥' + Math.max(0, o.amount) + '</span></span><span>'
      + (o.st === 'unpaid' ? '<button class="ofbtn" data-act="toast" data-msg="演示版：订单已取消">取消订单</button><button class="ofbtn pri" data-act="toast" data-msg="演示版：唤起微信支付">去支付</button>' : '')
      + (o.st === 'sent' ? '<button class="ofbtn">查看物流</button><button class="ofbtn pri" data-act="toast" data-msg="演示版：已确认收货">确认收货</button>' : '')
      + (o.st === 'used' ? '<button class="ofbtn pri" data-act="toast" data-msg="核销码 8 8 2 9 · 演示版">出示核销码</button>' : '')
      + (o.st === 'done' ? '<button class="ofbtn" data-act="toast" data-msg="演示版：去评价">去评价</button><button class="ofbtn pri" data-act="toast" data-msg="已再次加入购物车">再次购买</button>' : '')
      + '</span></div></div>';
    }).join('')
    : '<div class="emptystate"><div class="em">📦</div><p>暂无' + (st==='all'?'':map[st]) + '订单</p><button class="ofbtn pri" data-act="go" data-page="mall">去商城逛逛</button></div>')
  + '</div></div>';
}

/* ---------- 活动详情 ---------- */
function renderActivityDetail(id){
  const a = G(id) || ACTIVITIES[0];
  const faved = S.favGoods.includes(a.id);
  return '<div class="pg" style="padding-bottom:0">'
  + cov(a.ci, 250, a.lb)
  + '<div style="background:#fff;padding:15px 14px;margin-top:-16px;border-radius:18px 18px 0 0;position:relative">'
  +   '<h1 style="font-size:18px;font-weight:800;line-height:1.42;margin-bottom:10px">' + a.t + '</h1>'
  +   '<div style="display:flex;align-items:flex-end;gap:8px;margin-bottom:12px">'
  +   '<span class="price" style="font-size:25px"><small>¥</small>' + a.price + '</span>'
  +   (a.old ? '<del style="font-size:12.5px;color:var(--ink-3);padding-bottom:4px">¥' + a.old + '</del>' : '')
  +   '<span class="pill a" style="margin-bottom:5px">剩 ' + a.left + ' 位</span></div>'
  +   '<div style="display:grid;grid-template-columns:1fr 1fr;gap:9px;font-size:11.5px;color:var(--ink-2)">'
  +     '<div style="background:var(--surface-2);border-radius:11px;padding:10px"><div style="font-size:10px;color:var(--ink-3);margin-bottom:3px">活动时间</div>' + a.date + '</div>'
  +     '<div style="background:var(--surface-2);border-radius:11px;padding:10px"><div style="font-size:10px;color:var(--ink-3);margin-bottom:3px">活动地点</div>' + a.place + '</div>'
  +     '<div style="background:var(--surface-2);border-radius:11px;padding:10px"><div style="font-size:10px;color:var(--ink-3);margin-bottom:3px">人数规模</div>' + a.quota + '</div>'
  +     '<div style="background:var(--surface-2);border-radius:11px;padding:10px"><div style="font-size:10px;color:var(--ink-3);margin-bottom:3px">主办方</div>' + a.shop + '</div>'
  +   '</div>'
  + '</div>'
  + '<div class="sec" style="padding-top:12px"><div class="sec-h"><h2>体验内容</h2></div>'
  +   '<div style="background:#fff;border-radius:14px;padding:13px;font-size:12.5px;line-height:1.8;color:var(--ink-2);box-shadow:var(--shadow-1)">' + a.story + '</div>'
  +   '<div style="margin-top:10px;background:var(--primary-soft);border-radius:12px;padding:12px;font-size:11.5px;line-height:1.7;color:var(--primary)">'
  +   '<b>报名须知</b><br>· 报名成功后凭订单核销码入场<br>· 活动开始前 24 小时可免费取消<br>· 建议提前 15 分钟到场签到</div></div>'
  + '<div class="sec"><div class="sec-h"><h2>选择场次</h2></div>'
  +   '<div style="display:flex;flex-direction:column;gap:9px">' + a.spec.map((s,i) =>
      '<div data-act="spec" data-id="' + a.id + '" data-i="' + i + '" style="background:#fff;border-radius:13px;padding:13px;box-shadow:var(--shadow-1);cursor:pointer;display:flex;align-items:center;justify-content:space-between;' + (i===0?'border:1.5px solid var(--primary)':'border:1.5px solid transparent') + '">'
      + '<div><div style="font-size:13px;font-weight:700">' + s + '</div><div style="font-size:10.5px;color:var(--ink-3);margin-top:3px">' + a.place + '</div></div>'
      + '<span class="price" style="font-size:14px">¥' + a.price + '</span></div>').join('') + '</div></div>'
  + '<div class="sec"><div class="sec-h"><h2>关联点位</h2></div>'
  +   '<div class="listbox"><div class="li" data-act="go" data-page="route" data-id="r1"><span class="ic">🗺</span><span class="tx">加入「串城街主轴 · 三千年一街」</span><span class="arw">›</span></div></div></div>'
  + '<div style="height:14px"></div>'
  + '<div class="actionbar">'
  +   '<button class="abtn ' + (faved?'on':'') + '" data-act="favGood" data-id="' + a.id + '"><span class="ico">' + (faved?'★':'☆') + '</span>收藏</button>'
  +   '<button class="abtn" data-act="share" data-t="' + a.t + '"><span class="ico">↗</span>分享</button>'
  +   '<button class="cta alt" data-act="orderAct" data-id="' + a.id + '">立即报名 · ¥' + a.price + '</button>'
  + '</div></div>';
}

/* ---------- 个人沉淀 ---------- */
function renderTrips(){
  if (!S.trips.length) return '<div class="pg"><div class="emptystate"><div class="em">🗺</div><p>还没有行程<br>把喜欢的路线加进来，行程会自动生成</p><button class="ofbtn pri" data-act="go" data-page="routes">去看路线</button></div></div>';
  return '<div class="pg"><div class="sec" style="padding-top:14px">'
  + '<div class="sec-h"><h2>我的行程<small>' + S.trips.length + ' 条</small></h2></div>'
  + S.trips.map(id => {
      const r = R(id); if (!r) return '';
      return '<div style="background:#fff;border-radius:16px;padding:12px;box-shadow:var(--shadow-1);margin-bottom:11px">'
      + '<div style="display:flex;gap:11px">' + cov(r.ci, 72, '')
      + '<div style="flex:1;min-width:0"><h4 style="font-size:14.5px;font-weight:800;margin-bottom:5px">' + r.t + '</h4>'
      + '<div style="font-size:11px;color:var(--ink-3);margin-bottom:7px">' + r.sub + '</div>'
      + '<div style="display:flex;gap:5px"><span class="pill">' + r.km + '</span><span class="pill n">' + r.spots + ' 点位</span></div></div></div>'
      + '<div style="margin-top:11px;padding-top:11px;border-top:1px solid #F2EFEA">'
      + r.pois.map((pid,i) => { const p = P(pid); if (!p) return '';
          return '<div data-act="go" data-page="poi" data-id="' + p.id + '" style="display:flex;align-items:center;gap:8px;padding:6px 0;cursor:pointer">'
          + '<span style="width:18px;height:18px;border-radius:50%;background:' + (S.visited.includes(p.id) ? 'var(--primary)' : '#DED8CD') + ';color:#fff;font-size:9.5px;font-weight:800;display:grid;place-items:center">' + (i+1) + '</span>'
          + '<span style="flex:1;font-size:12.5px;color:var(--ink-2)">' + p.n.split('（')[0] + '</span>'
          + '<span style="font-size:10.5px;color:var(--ink-3)">' + (S.visited.includes(p.id) ? '已打卡' : '未打卡') + '</span></div>'; }).join('')
      + '</div>'
      + '<div style="display:flex;gap:8px;margin-top:10px">'
      + '<button class="ofbtn" style="flex:1;margin:0;text-align:center" data-act="go" data-page="route" data-id="' + r.id + '">查看路线</button>'
      + '<button class="ofbtn pri" style="flex:1;margin:0;text-align:center" data-act="untrip" data-id="' + r.id + '">移除行程</button></div>'
      + '</div>';
    }).join('')
  + '</div></div>';
}
function renderFavorites(){
  const tabs = [['note','笔记 (' + S.favNotes.length + ')'],['route','路线 (' + S.favRoutes.filter(x=>!x.startsWith('poi:')).length + ')'],['poi','点位 (' + S.favRoutes.filter(x=>x.startsWith('poi:')).length + ')'],['good','好物 (' + S.favGoods.length + ')']];
  const t = TMP.favTab || 'note';
  let body = '';
  if (t === 'note') body = S.favNotes.length ? '<div class="notegrid">' + S.favNotes.map(id => N(id)).filter(Boolean).map(noteCard).join('') + '</div>' : empty('还没有收藏笔记');
  if (t === 'route') { const l = S.favRoutes.filter(x => !x.startsWith('poi:')).map(id => R(id)).filter(Boolean);
    body = l.length ? l.map(r => '<div class="routecard" style="margin-bottom:9px" data-act="go" data-page="route" data-id="' + r.id + '">' + cov(r.ci,104,r.lb)
      + '<div class="info"><h4>' + r.t + '</h4><div class="sub">' + r.sub + '</div><div class="metas"><span class="pill">' + r.km + '</span><span class="pill g">★ ' + r.score + '</span></div></div></div>').join('') : empty('还没有收藏路线'); }
  if (t === 'poi') { const l = S.favRoutes.filter(x => x.startsWith('poi:')).map(x => P(x.slice(4))).filter(Boolean);
    body = l.length ? l.map(p => '<div class="themecard" data-act="go" data-page="poi" data-id="' + p.id + '">' + cov(p.ci,70,'')
      + '<div style="flex:1;min-width:0"><h4>' + p.n + '</h4><p>' + p.cat + ' · ★ ' + p.score + '</p></div><span style="color:#C6C0B4">›</span></div>').join('') : empty('还没有收藏点位'); }
  if (t === 'good') { const l = S.favGoods.filter(id => !id.startsWith('poi:')).map(id => G(id)).filter(Boolean);
    body = l.length ? '<div class="goods">' + l.map(g => '<div class="gcell" data-act="go" data-page="product" data-id="' + g.id + '">' + cov(g.ci,142,'')
      + '<div class="b"><h5>' + g.t + '</h5><span class="price"><small>¥</small>' + g.price + '</span><div class="s"><span>' + g.sell + '</span></div></div></div>').join('') + '</div>' : empty('还没有收藏好物'); }
  return '<div class="pg"><div class="chiprow" style="padding:12px 14px 0">' + tabs.map(x =>
      '<span class="chip pri ' + (t===x[0]?'on':'') + '" data-act="favTab" data-v="' + x[0] + '">' + x[1] + '</span>').join('') + '</div>'
  + '<div class="sec" style="padding-top:12px">' + body + '</div></div>';
}
function empty(msg){ return '<div class="emptystate"><div class="em">☆</div><p>' + msg + '</p><button class="ofbtn pri" data-act="go" data-page="explore">去发现内容</button></div>'; }

/* ---------- 搜索 ---------- */
function renderSearch(){
  return '<div class="pg"><div class="sec" style="padding-top:12px">'
  + '<div class="listbox" style="margin-bottom:14px"><div class="li" data-act="toast" data-msg="演示版：输入关键词搜索" style="cursor:text"><span class="ic">🔍</span><span class="tx" style="color:var(--ink-3);font-weight:500">搜路线 / 点位 / 笔记 / 好物</span></div></div>'
  + '<div class="sec-h"><h2 style="font-size:14px">热门搜索</h2></div>'
  + '<div style="display:flex;flex-wrap:wrap;gap:7px">' + ['学步桥','回车巷','丛台','磁州窑','驴肉汤','傩戏面具','太极拳','串城街','成语典故'].map(t =>
      '<span class="chip" data-act="toast" data-msg="搜索「' + t + '」· 演示版">' + t + '</span>').join('') + '</div>'
  + '<div class="sec-h" style="margin-top:18px"><h2 style="font-size:14px">猜你想去</h2></div>'
  + ROUTES.slice(0,3).map(r => '<div class="routecard" style="margin-bottom:9px" data-act="go" data-page="route" data-id="' + r.id + '">' + cov(r.ci,96,r.lb)
      + '<div class="info"><h4>' + r.t + '</h4><div class="sub">' + r.sub + '</div><div class="metas"><span class="pill">' + r.km + '</span><span class="pill g">★ ' + r.score + '</span></div></div></div>').join('')
  + '</div></div>';
}

/* ---------- 地图导览 ---------- */
function renderMap(id){
  const r = R(id) || ROUTES[0];
  const pts = [{x:22,y:30},{x:44,y:52},{x:66,y:38},{x:80,y:66},{x:34,y:76}];
  return '<div class="pg" style="padding-bottom:0">'
  + '<div class="mapbox">'
  + '<svg viewBox="0 0 390 300" preserveAspectRatio="none">'
  + '<rect width="390" height="300" fill="#E9EEE9"/>'
  + '<path d="M-20 210 Q 90 190 190 205 T 420 180" stroke="#BFD4D8" stroke-width="26" fill="none"/>'
  + '<path d="M-20 210 Q 90 190 190 205 T 420 180" stroke="#A9C6CC" stroke-width="2" fill="none" stroke-dasharray="7 7"/>'
  + '<g stroke="#D4DCD4" stroke-width="8" fill="none" stroke-linecap="round">'
  + '<path d="M30 -10 L70 310"/><path d="M150 -10 L180 310"/><path d="M270 -10 L250 310"/><path d="M-10 90 L400 60"/><path d="M-10 150 L400 130"/>'
  + '</g>'
  + '<g fill="#DCE4DC"><rect x="90" y="100" width="46" height="34" rx="4"/><rect x="196" y="76" width="40" height="42" rx="4"/><rect x="292" y="150" width="52" height="38" rx="4"/><rect x="20" y="230" width="60" height="40" rx="4"/><rect x="230" y="232" width="70" height="34" rx="4"/></g>'
  + '<path d="M86 90 L172 156 L262 114 L312 198" stroke="#8E3B2C" stroke-width="3.5" fill="none" stroke-linecap="round" stroke-dasharray="1 8"/>'
  + '</svg>'
  + r.pois.map((pid,i) => { const p = P(pid); const pt = pts[i] || pts[0];
      return '<div class="pin ' + (i===0?'on':'') + '" style="left:' + pt.x + '%;top:' + pt.y + '%" data-act="go" data-page="poi" data-id="' + p.id + '"><span class="pd"><b>' + (i+1) + '</b></span></div>'; }).join('')
  + '</div>'
  + '<div class="sec" style="padding-top:12px">'
  +   '<div class="sec-h"><h2>' + r.t + '</h2></div>'
  +   '<div style="background:var(--primary-soft);border-radius:12px;padding:11px 12px;font-size:11.5px;color:var(--primary);line-height:1.65;margin-bottom:12px">'
  +   '全程 <b>' + r.km + '</b> · 建议 ' + r.days + ' · 步行 ' + r.walk + '。点击地图上的编号可查看点位讲解。</div>'
  +   '<div class="tl">' + r.pois.map((pid,i) => { const p = P(pid);
        return '<div class="tlitem" data-act="go" data-page="poi" data-id="' + p.id + '"><span class="num">' + (i+1) + '</span>' + cov(p.ci,60,'')
        + '<div class="c"><h4>' + p.n.split('（')[0] + '</h4><p>' + p.addr + '</p></div><span style="color:#C6C0B4;align-self:center">›</span></div>'; }).join('') + '</div>'
  + '</div></div>';
}

/* ---------- AI 行程助手 ---------- */
function renderAi(){
  const done = TMP.aiDone;
  return '<div class="pg" style="background:linear-gradient(180deg,#F7EDE8,#F2EDE6 260px)">'
  + '<div class="chat">'
  +   '<div class="msg"><div class="avatar">✦</div><div class="bub">你好，我是邯道的行程助手。<br><br>告诉我你的 <b>时间、兴趣、同行人</b>，我来帮你排一条能真正走完的路线。</div></div>'
  +   '<div class="msg me"><div class="avatar">王</div><div class="bub">我明天下午有 4 个小时，在老城区，想看点跟成语有关的地方，带一个 8 岁小孩。</div></div>'
  +   (done
      ? '<div class="msg"><div class="avatar">✦</div><div class="bub">明白了。4 小时、老城区、成语 + 亲子，我按"少走路、多看细节"的原则排了一条，全程步行约 2.4 km：</div></div>'
        + '<div class="plan">'
        +   '<div class="hd"><b>串城街半日 · 成语与手艺（亲子版）</b><p>14:00 - 18:00 · 步行 2.4 km · 3 个点位</p></div>'
        +   '<div class="day"><b>14:00　回车巷</b>'
        +     '<div class="stop"><em>14:00</em><span>巷口石碑起步，讲“将相和”那一步</span></div>'
        +     '<div class="stop"><em>14:40</em><span>串城街非遗工坊看磁州窑绘制（小朋友停留最久）</span></div></div>'
        +   '<div class="day"><b>15:40　秦始皇出生地纪念馆</b>'
        +     '<div class="stop"><em>15:40</em><span>步行 0.9 km，讲“奇货可居”的来龙去脉</span></div>'
        +     '<div class="stop"><em>16:20</em><span>荀子文化园（院落可坐，适合休息）</span></div></div>'
        +   '<div class="day"><b>17:20　学步桥</b>'
        +     '<div class="stop"><em>17:20</em><span>沿沁河步道走到桥下，看石拱砌法</span></div>'
        +     '<div class="stop"><em>17:50</em><span>桥头吃焖子 / 驴肉汤收尾</span></div></div>'
        +   '<div style="padding:12px 13px;background:var(--surface-2);font-size:11.5px;color:var(--ink-2);line-height:1.7">'
        +     '<b>已为你考虑：</b><br>· 全程为平缓街巷，适合推车与儿童<br>· 每个点位停留不超过 50 分钟，符合 8 岁儿童注意力<br>· 16:20 安排了院落作为休息缓冲<br>· 丛台登台台阶陡且窄，本次未排入，如需登台建议单独安排</div>'
        + '</div>'
        + '<div style="display:flex;gap:8px;margin-top:10px">'
        +   '<button class="cta" data-act="aiAdopt">存入我的行程</button>'
        +   '<button class="cta ghost" style="flex:0 0 92px" data-act="aiReset">重新生成</button></div>'
        + '<div class="msg me" style="margin-top:6px"><div class="avatar">王</div><div class="bub">可以，顺便帮我看看有没有能带走的手作体验？</div></div>'
        + '<div class="msg"><div class="avatar">✦</div><div class="bub">有的。串城街非遗工坊的 <b>磁州窑绘制体验（90 分钟 / ¥158）</b>正好卡在 14:40，完成后作品烧制 7 天内寄到家。<br><br>要不要我把它一起排进行程？</div></div>'
        + '<div style="display:flex;gap:8px;margin-top:4px"><button class="cta alt" data-act="go" data-page="activity" data-id="g7">查看这个体验</button></div>'
      : '<div class="msg"><div class="avatar">✦</div><div class="bub"><span class="typing"><i></i><i></i><i></i></span></div></div>')
  + '</div>'
  + '<div style="height:8px"></div>'
  + (done ? '' : '<div style="padding:0 14px 14px"><div style="background:#fff;border-radius:14px;padding:11px 12px;font-size:12px;color:var(--ink-3);box-shadow:var(--shadow-1)">正在为你规划…</div></div>')
  + '</div>';
}

/* ============================================================
   5. 渲染主循环
   ============================================================ */
const RENDERERS = {
  home:renderHome, explore:renderExplore, mall:renderMall, mine:renderMine,
  routes:renderRoutes, route:() => renderRouteDetail(cur().id), poi:() => renderPoiDetail(cur().id),
  note:() => renderNoteDetail(cur().id), theme:() => renderTheme(cur().id), topics:renderTopics,
  venues:renderVenues, activities:renderActivities, service:renderService,
  product:() => renderProductDetail(cur().id), cart:renderCart, checkout:renderCheckout,
  orders:renderOrders, activity:() => renderActivityDetail(cur().id),
  trips:renderTrips, favorites:renderFavorites, search:renderSearch,
  ai:renderAi, map:() => renderMap(cur().id)
};

function render(keepScroll){
  const c = cur();
  const isTab = TAB_PAGES.includes(c.p);
  const sc = $('screen');
  const oldTop = sc.scrollTop;

  $('navbar').className = 'navbar' + (isTab ? ' hide' : '');
  if (!isTab) {
    $('navbar').innerHTML = '<div class="nav-back" data-act="back"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 5-7 7 7 7"/></svg></div>'
      + '<div class="nav-title">' + (PAGE_TITLE[c.p] || '') + '</div>'
      + '<div class="nav-right" data-act="go" data-page="' + (c.p === 'mine' ? 'home' : 'mine') + '">'
      + '<svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9"><circle cx="5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="19" cy="12" r="1.6"/></svg></div>';
  }

  const cartN = S.cart.reduce((a,b) => a + b.qty, 0);
  $('tabbar').className = 'tabbar' + (isTab ? '' : ' hide');
  $('homebar').className = 'homebar' + (isTab ? '' : ' hide');
  $('tabbar').innerHTML = TAB_DEF.map(t =>
    '<div class="tab ' + (c.p === t.k ? 'on' : '') + '" data-act="tab" data-v="' + t.k + '">'
    + '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">' + t.icon + '</svg>'
    + '<span>' + t.n + '</span>'
    + (t.k === 'mall' && cartN ? '<span class="badge">' + cartN + '</span>' : '') + '</div>').join('');

  sc.innerHTML = (RENDERERS[c.p] || renderHome)();
  sc.scrollTop = keepScroll ? oldTop : 0;
  if (!keepScroll) sc.style.scrollBehavior = 'auto', sc.scrollTop = 0, setTimeout(() => sc.style.scrollBehavior = 'smooth', 30);

  $('navmap').innerHTML = NAV_GROUPS.map(g =>
    '<div class="navgroup"><p>' + g.g + '</p>' + g.items.map(i =>
      '<div class="navlink ' + ((c.p === i.p && (!i.id || cur().id === i.id)) ? 'on' : '') + '" data-act="navjump" data-page="' + i.p + '" data-id="' + (i.id || '') + '">'
      + '<span>' + i.n + '</span><code>' + i.f + '</code></div>').join('') + '</div>').join('');

  syncPanel();
  if (isTab) mark('touch');
  if (['trips','favorites','orders'].includes(c.p)) mark('keep');
  if (c.p === 'route') mark('route');
  if (c.p === 'poi' || c.p === 'map') mark('guide');
  if (c.p === 'activity') mark('act');
  if (c.p === 'explore' || c.p === 'note' || c.p === 'theme') mark('touch');
  startBanner();
}

const NAV_GROUPS = [
  {g:'主 TAB', items:[{n:'首页', p:'home', f:'pages/home'},{n:'探索（社区）', p:'explore', f:'pages/explore'},{n:'商城', p:'mall', f:'pages/mall'},{n:'我的', p:'mine', f:'pages/mine'}]},
  {g:'内容 → 路线链路', items:[{n:'推荐路线', p:'routes', f:'pages/routes'},{n:'路线详情', p:'route', id:'r1', f:'pages/route'},{n:'点位详情', p:'poi', id:'p1', f:'pages/poi'},{n:'地图导览', p:'map', id:'r1', f:'pages/map'}]},
  {g:'社区内容链路', items:[{n:'文化专题', p:'theme', id:'th1', f:'pages/theme'},{n:'笔记详情', p:'note', id:'n1', f:'pages/note'},{n:'话题聚合', p:'topics', f:'pages/topics'}]},
  {g:'交易转化链路', items:[{n:'商品详情', p:'product', id:'g1', f:'pages/product'},{n:'活动详情', p:'activity', id:'g7', f:'pages/activity'},{n:'购物车', p:'cart', f:'pages/cart'},{n:'确认订单', p:'checkout', f:'pages/checkout'},{n:'我的订单', p:'orders', f:'pages/orders'}]},
  {g:'服务与个人沉淀', items:[{n:'文化场馆', p:'venues', f:'pages/venues'},{n:'餐饮住宿', p:'service', f:'pages/service'},{n:'我的行程', p:'trips', f:'pages/trips'},{n:'我的收藏', p:'favorites', f:'pages/favorites'},{n:'AI 行程助手', p:'ai', f:'pages/ai'}]}
];

/* ---------- Banner 轮播 ---------- */
let bannerTimer = null, bannerIdx = 0;
function startBanner(){
  clearInterval(bannerTimer);
  bannerIdx = 0;
  const box = $('bannerbox');
  if (!box) return;
  bannerTimer = setInterval(() => {
    const slides = document.querySelectorAll('#bannerbox .slide');
    const dots = document.querySelectorAll('#dots i');
    if (!slides.length) return clearInterval(bannerTimer);
    bannerIdx = (bannerIdx + 1) % slides.length;
    slides.forEach((s,i) => s.classList.toggle('on', i === bannerIdx));
    dots.forEach((d,i) => d.classList.toggle('on', i === bannerIdx));
  }, 3600);
}

/* ============================================================
   6. 业务动作
   ============================================================ */
function toggleFav(arr, id, label){
  const i = arr.indexOf(id);
  const on = i < 0;
  const kind = arr === S.favNotes ? 'note' : (arr === S.favGoods ? 'good' : 'route');
  if (i >= 0) { arr.splice(i,1); toast('已取消' + label); track('收藏', '取消收藏', id); }
  else { arr.push(id); toast('已' + label); track('收藏', '添加收藏', id); mark('seed'); }
  fire('/favorites', { kind: kind, targetId: id, on: on });
}
function addToTrip(id){
  const r = R(id); if (!r) return;
  if (S.trips.includes(id)) { toast('已在你的行程中'); return; }
  S.trips.push(id);
  fire('/trips', { routeId: id, on: true });
  toast('已加入我的行程 · 共 ' + r.pois.length + ' 个点位');
  track('我的行程', '加入行程', r.t);
  mark('seed'); mark('route');
}
function addCart(id){
  const g = G(id); if (!g) return;
  const it = S.cart.find(x => x.id === id);
  if (it) it.qty++; else S.cart.push({id:id, qty:1, sel:true});
  TMP.cartAll = true;
  toast('已加入购物车 · ' + g.t.slice(0,10) + '…');
  track('购物车', '加入购物车', g.t);
  mark('buy');
  render(true);
}
function buyNow(id){
  TMP.orderType = 'goods'; TMP.curProduct = id; TMP.cartAll = true;
  const it = S.cart.find(x => x.id === id);
  if (!it) S.cart.push({id:id, qty:1, sel:true});
  track('商品详情', '立即购买', G(id).t);
  mark('buy');
  go('checkout');
}
function orderActivity(id){
  TMP.orderType = 'act'; TMP.curProduct = id;
  toast('已选择该场次');
  track('活动详情', '选择场次并报名', G(id).t);
  mark('act');
  setTimeout(() => go('checkout'), 320);
}
function placeOrder(){
  const lines = TMP.orderType === 'act'
    ? [{id:TMP.curProduct, qty:1}]
    : S.cart.filter(i => TMP.cartAll || i.sel).map(i => ({id:i.id, qty:i.qty}));
  if (!lines.length) { toast('请先选择商品'); return; }
  const now = new Date();
  const pad = n => String(n).padStart(2,'0');
  const no = 'HD' + now.getFullYear() + pad(now.getMonth()+1) + pad(now.getDate()) + String(Math.floor(Math.random()*9000+1000));
  const isAct = lines.every(l => (G(l.id) || {}).cat === 'act');
  S.orders.unshift({
    no: no,
    items: lines.map(l => ({gid:l.id, qty:l.qty})),
    qty: lines.reduce((a,b) => a + b.qty, 0),
    amount: lines.reduce((a,b) => a + G(b.id).price * b.qty, 0) - 23,
    st: isAct ? 'used' : 'sent',
    time: now.getFullYear() + '-' + pad(now.getMonth()+1) + '-' + pad(now.getDate()) + ' ' + pad(now.getHours()) + ':' + pad(now.getMinutes())
  });
  const _ord = S.orders[0];
  fire('/orders', { no: _ord.no, items: _ord.items, qty: _ord.qty, amount: _ord.amount, st: _ord.st, time: _ord.time, points: S.points });
  if (TMP.orderType === 'act') { TMP.orderType = null; }
  else { S.cart = S.cart.filter(i => !(TMP.cartAll || i.sel)); }
  S.points = Math.max(0, S.points - 300);
  mark('buy'); mark('keep');
  track('确认订单', '提交订单成功', no + ' · ' + lines.length + ' 个商品 · ' + (isAct ? '到店核销' : '待发货'));
  toast('下单成功！已生成订单 ' + no, 1800);
  setTimeout(() => { STACK = [{p:'orders'}]; render(); }, 700);
}
function playAudio(id){
  const p = P(id);
  if (TMP.playing && TMP.audioId === id) {
    clearInterval(TMP.audioTimer); TMP.playing = false;
    toast('已暂停讲解'); track('点位详情', '暂停语音讲解', p.n); render(true); return;
  }
  clearInterval(TMP.audioTimer);
  TMP.playing = true; TMP.audioId = id; TMP.audioPct = 0;
  track('点位详情', '播放语音讲解', p.n);
  mark('guide');
  if (!S.visited.includes(id)) { S.visited.push(id); fire('/visits', { poiId: id, on: true }); }
  render(true);
  TMP.audioTimer = setInterval(() => {
    TMP.audioPct += 3.2;
    const bar = $('abar'), tm = $('atm');
    if (bar) bar.style.width = Math.min(100, TMP.audioPct) + '%';
    if (tm) tm.textContent = TMP.audioPct >= 100 ? '已播完' : '播放中';
    if (TMP.audioPct >= 100) { clearInterval(TMP.audioTimer); TMP.playing = false; toast('讲解播放完成 · 已标记打卡'); render(true); }
  }, 260);
}
function shareIt(t){
  track('分享', '分享内容', t);
  mark('seed');
  toast('已唤起分享面板（演示）\n「' + (t || '').slice(0, 16) + '」');
}
function resetAll(){
  S = JSON.parse(JSON.stringify(INIT));
  STACK = [{p:'home'}];
  TMP = { cartSel:[], orderType:null, curActivity:null, curProduct:null, audioTimer:null, audioPct:0, playing:false, mallTab:'goods', expTab:'rec', exploreChip:'推荐', routeChip:'全部', cartAll:true, aiDone:false };
  clearInterval(TMP.audioTimer);
  $('log').innerHTML = '';
  autoRunning = false;
  track('系统', 'Demo 已重置');
  render();
  toast('Demo 已重置');
}

/* ============================================================
   7. 事件委托
   ============================================================ */
document.addEventListener('click', e => {
  const el = e.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act;
  const id = el.dataset.id;

  switch (act) {
    case 'tab': if (!autoRunning) tab(el.dataset.v); break;
    case 'back': if (!autoRunning) back(); break;
    case 'go': go(el.dataset.page, id); break;
    case 'navjump': go(el.dataset.page, id); break;
    case 'entry': {
      const en = ENTRIES[+el.dataset.i];
      track('首页', '点击金刚区', en.t);
      if (en.go.tab) TMP.mallTab = en.go.tab;
      go(en.go.p, en.go.id);
      break;
    }
    case 'toast': toast(el.dataset.msg || '演示版功能'); break;
    case 'share': shareIt(el.dataset.t); break;
    case 'spec': TMP['spec_' + id] = +el.dataset.i; track('商品详情', '切换规格/场次', el.innerHTML); render(true); break;

    case 'favNote': toggleFav(S.favNotes, id, '收藏笔记'); render(true); break;
    case 'favRoute': toggleFav(S.favRoutes, id, '收藏路线'); render(true); break;
    case 'favPoi': toggleFav(S.favRoutes, 'poi:' + id, '收藏点位'); render(true); break;
    case 'favGood': toggleFav(S.favGoods, id, '收藏'); render(true); break;

    case 'like': {
      const i = S.likes.indexOf(id);
      if (i >= 0) { S.likes.splice(i,1); toast('已取消点赞'); }
      else { S.likes.push(id); toast('已点赞'); mark('seed'); }
      track('笔记详情', i >= 0 ? '取消点赞' : '点赞', N(id) ? N(id).t : id);
      render(true); break;
    }
    case 'trip': addToTrip(id); render(true); break;
    case 'untrip': S.trips = S.trips.filter(x => x !== id); fire('/trips', { routeId: id, on: false }); toast('已移出行程'); render(); break;
    case 'done': {
      const i = S.visited.indexOf(id);
      if (i >= 0) S.visited.splice(i,1); else S.visited.push(id);
      fire('/visits', { poiId: id, on: i < 0 });
      track('点位详情', i >= 0 ? '取消打卡' : '打卡点位', P(id) ? P(id).n : id);
      render(true); break;
    }
    case 'audio': playAudio(id); break;
    case 'addCart': addCart(id); break;
    case 'buyNow': buyNow(id); break;
    case 'orderAct': orderActivity(id); break;

    case 'cartPlus': { const it = S.cart.find(x => x.id === id); it.qty++; render(true); break; }
    case 'cartMinus': { const it = S.cart.find(x => x.id === id); if (it.qty > 1) it.qty--; else S.cart = S.cart.filter(x => x.id !== id); render(true); break; }
    case 'cartSel': { const it = S.cart.find(x => x.id === id); if (TMP.cartAll) { TMP.cartAll = false; S.cart.forEach(x => x.sel = x.id === id); } else { it.sel = !it.sel; if (S.cart.every(x => x.sel)) TMP.cartAll = true; } render(true); break; }
    case 'cartAll': TMP.cartAll = !TMP.cartAll; S.cart.forEach(x => x.sel = TMP.cartAll); render(true); break;
    case 'checkout': {
      if (!TMP.cartAll && !S.cart.some(i => i.sel)) { toast('请先选择要结算的商品'); break; }
      TMP.orderType = 'goods';
      track('购物车', '进入结算', '共 ' + (TMP.cartAll ? S.cart.reduce((a,b)=>a+b.qty,0) : S.cart.filter(i=>i.sel).reduce((a,b)=>a+b.qty,0)) + ' 件');
      go('checkout'); break;
    }
    case 'placeOrder': placeOrder(); break;
    case 'orderFilter': TMP.orderFilter = el.dataset.v; track('我的订单', '切换订单状态', el.innerHTML); render(); break;
    case 'favTab': TMP.favTab = el.dataset.v; render(); break;
    case 'mallTab': TMP.mallTab = el.dataset.v; track('商城', '切换分类', el.innerHTML); render(); break;
    case 'expTab': TMP.expTab = el.dataset.v; track('探索', '切换 Tab', el.innerHTML); render(); break;
    case 'exploreChip': TMP.exploreChip = el.dataset.v; render(); break;
    case 'routeChip': TMP.routeChip = el.dataset.v; track('路线列表', '筛选路线', el.dataset.v); render(); break;
    case 'orders': TMP.orderFilter = el.dataset.v || 'all'; go('orders'); break;

    case 'aiAdopt': {
      if (!S.trips.includes('r1')) { S.trips.push('r1'); fire('/trips', { routeId: 'r1', on: true }); }
      S.points += 10;
      fire('/points', { delta: 10 });
      toast('AI 行程已存入「我的行程」', 1700);
      track('AI 助手', '采纳 AI 行程', '串城街半日 · 成语版');
      mark('keep');
      setTimeout(() => go('trips'), 800); break;
    }
    case 'aiReset': TMP.aiDone = false; render(); setTimeout(() => runAi(), 400); break;

    case 'autodemo': runAutoDemo(); break;
    case 'reset': resetAll(); break;
  }
});

/* AI 打字 → 生成 */
function runAi(){
  TMP.aiDone = false;
  render();
  setTimeout(() => { TMP.aiDone = true; render(true); toast('AI 已生成 3 段行程安排'); }, 1600);
}
document.addEventListener('click', e => {
  const el = e.target.closest('[data-page="ai"]');
  if (el && !TMP.aiDone && !TMP.aiRunning) {
    TMP.aiRunning = true;
    track('AI 助手', '发起行程规划', '老城区 · 4 小时 · 亲子');
    setTimeout(() => { TMP.aiRunning = false; runAi(); }, 260);
  }
});

/* ============================================================
   8. 一键演示主链路
   ============================================================ */
const sleep = ms => new Promise(r => setTimeout(r, ms));
const AUTO_STEPS = [
  {n:'① 内容触达 · 首页', f:async () => { STACK = [{p:'home'}]; render(); }},
  {n:'② 金刚区 · 推荐路线', f:async () => { ENTRIES.forEach(e => {}); track('首页','点击金刚区','推荐路线'); go('routes'); }},
  {n:'③ 路线决策 · 查看详情', f:async () => { track('路线列表','点击路线','串城街主轴 · 三千年一街'); go('route','r1'); }},
  {n:'④ 种草 · 收藏路线', f:async () => { toggleFav(S.favRoutes,'r1','收藏路线'); render(true); }},
  {n:'⑤ 路线导览 · 加入行程', f:async () => { addToTrip('r1'); render(true); }},
  {n:'⑥ 点位讲解 · 打开点位', f:async () => { go('poi','p1'); }},
  {n:'⑦ 播放语音导览', f:async () => { playAudio('p1'); }},
  {n:'⑧ 内容种草 · 查看笔记', f:async () => { go('note','n3'); }},
  {n:'⑨ 点赞 + 收藏笔记', f:async () => { if (!S.likes.includes('n3')) S.likes.push('n3'); toggleFav(S.favNotes,'n3','收藏笔记'); render(true); }},
  {n:'⑩ 消费转化 · 进入商城', f:async () => { STACK = [{p:'mall'}]; render(); }},
  {n:'⑪ 查看非遗好物', f:async () => { go('product','g1'); }},
  {n:'⑫ 加入购物车', f:async () => { addCart('g1'); }},
  {n:'⑬ 活动参与 · 查看体验', f:async () => { go('activity','g7'); }},
  {n:'⑭ 报名非遗体验', f:async () => { orderActivity('g7'); }},
  {n:'⑮ 提交订单', f:async () => { await sleep(500); placeOrder(); }},
  {n:'⑯ 个人沉淀 · 订单列表', f:async () => { STACK = [{p:'orders'}]; render(); }},
  {n:'⑰ 个人沉淀 · 我的行程', f:async () => { go('trips'); }},
  {n:'⑱ 回到个人中心', f:async () => { STACK = [{p:'mine'}]; render(); }},
  {n:'⑲ AI 行程助手', f:async () => { go('ai'); await sleep(300); runAi(); }},
  {n:'✓ 主链路演示完成', f:async () => { toast('全链路演示完成：内容 → 路线 → 活动 → 商品 → 沉淀', 2400); }}
];
async function runAutoDemo(){
  if (autoRunning) return;
  autoRunning = true;
  resetAll();
  await sleep(400);
  track('演示', '开始一键演示', '共 ' + AUTO_STEPS.length + ' 步');
  for (const s of AUTO_STEPS) {
    await s.f();
    await sleep(s.n.indexOf('✓') === 0 ? 1500 : 1900);
  }
  autoRunning = false;
}

/* ============================================================
   9. 启动
   ============================================================ */
(async function bootstrap() {
  try {
    const d = await api('/bootstrap');
    if (d && d.content) {
      BANNERS = d.content.banners; ENTRIES = d.content.entries; THEMES = d.content.themes;
      ROUTES = d.content.routes; POIS = d.content.pois; NOTES = d.content.notes;
      TOPICS = d.content.topics; PRODUCTS = d.content.products;
      ACTIVITIES = d.content.activities; VENUES = d.content.venues; SERVICES = d.content.services;
      if (d.content.user) USER = d.content.user;
    }
    if (d && d.profile) {
      const p = d.profile;
      S.favNotes = p.favNotes || []; S.favRoutes = p.favRoutes || []; S.favGoods = p.favGoods || [];
      S.trips = p.trips || []; S.visited = p.visited || []; S.orders = p.orders || [];
      if (typeof p.points === 'number') S.points = p.points;
    }
  } catch (e) {
    console.warn('[hd] 后端不可用，已回退到内置种子数据', e);
  }
  renderFunnel();
  render();
  track('系统', '页面初始化完成', '数据 ' + (ROUTES.length + POIS.length + NOTES.length + PRODUCTS.length) + ' 条');
  setTimeout(() => toast('提示：点击左侧「一键演示主链路」可自动走完整个业务闭环', 2600), 700);
})();