/*

 @name    : 锅巴汉化 - Web汉化插件
 @author  : 麦子、JAR、小蓝、好阳光的小锅巴
 @version : V0.6.1 - 2019-07-09
 @website : http://www.g8hh.com
 @idle games : http://www.gityx.com
 @QQ Group : 627141737

*/

//1.汉化杂项
var cnItems = {
    _OTHER_: [],

    //未分类：
    'Save': '保存',
    'Export': '导出',
    'Import': '导入',
    'Settings': '设置',
    'Achievements': '成就',
    'Statistics': '统计',
    'Changelog': '更新日志',
    'Hotkeys': '快捷键',
    'ALL': '全部',
    'Default': '默认',
    'AUTO': '自动',
    'default': '默认',
    "points": "点数",
    "Reset for +": "重置得到 + ",
    "Currently": "当前",
    "Effect": "效果",
    "Cost": "成本",
    "Goal:": "目标:",
    "Reward": "奖励",
    "Start": "开始",
    "Exit Early": "提前退出",
    "Finish": "完成",
    "Milestone Gotten!": "获得里程碑！",
    "Milestones": "里程碑",
    "Completed": "已完成",
    "Achievement Gotten!": "成就达成！",
    "Wow, you really did it.": "哇，你真的做到了。",
    "x multiplier": "x 乘数",
    "You've been playing for": "你已经玩了",
    "You have made sushi beans": "你制作了寿司豆",
    "You've filled the entire universe with nothing but sushi beans.": "你用寿司豆填满了整个宇宙。",
    "Your current goal is": "你当前的目标是",
    "Your game is less active and more idle from now on.": "从现在开始，您的游戏不会那么活跃，更放置。",
    "\"What even are sushi beans?\" -everyone": "\"寿司豆到底是什么？\" - 所有人",
    "+1 sushi beans per second": "+1 寿司豆每秒",
    "+1 sushi beans per second per second": "+1 寿司豆每秒每秒",
    "10 prestige autoclickers": "10 个声望自动点击器",
    "10 sushi bean autoclickers": "10 个寿司豆自动点击器",
    "Cost:": "成本：",
    "Hard reset": "硬重置",
    "I'm ready": "我准备好了",
    "hours,": "小时，",
    "Heavenly Dice": "天堂骰子",
    "INTO THE SUSHIVERSE": "进入休眠期",
    "Options": "选项",
    "prestiges each collapse": "声望每个坍缩",
    "Save game": "保存游戏",
    "sb": "寿司豆",
    "seconds.": "秒。",
    "secs": "秒",
    "Sushi beans:": "寿司豆：",
    "Stats": "统计",
    "times": "次",
    "time(s) per second": "次每秒",
    "time(s) per 10 seconds": "次每10秒",
    "Singularities:": "奇点：",
    "Random background colour": "随机背景色",
    "Recieve a heavenly dice": "获得一个天堂骰子",
    "Reset": "重置",
    "Prestige for": "声望获得",
    "prestige points": "声望点数",
    "prestige points, giving you a": "声望点数，给你一个",
    "Roll dice": "扔骰子",
    "Singularity": "奇点",
    "Start with": "初始有",
    "Infinity": "无限",
    "Sushiverse": "寿司宇宙",
    "Thank you for playing this dumb game I made for a tournament (and for my friends!).": "感谢您玩我为一个比赛制作的这款愚蠢的游戏（以及我的朋友！）。",
    "The result of the dice will multiply your power.": "骰子的结果将成倍增加你的力量。",
    "The sushiverse can't sustain rational concepts like \"life\". In order to ascend beyond your home universe and expand your sushi bean empire, \n        you'll have to give up your humanity and become an emotionless sushi factory.": "寿司宇宙 无法维持像“生命”这样的理性概念。 为了超越你的家庭宇宙并扩大你的寿司豆帝国，\n 你将不得不放弃你的人性并成为一个没有感情的寿司工厂。",
    "There's nothing to do but press the button to COLLAPSE your sushi beans into a sushi singularity.": "除了按下按钮将寿司豆坍缩成寿司奇点外，别无他法。",
    "This is it. You've made so many sushi beans that they're now producing more of themselves.": "就是这个。 你做了这么多寿司豆，他们现在自己会生产更多。",
    "This is the beginning of the end.": "这是结束的开始。",
    "to (multiplier)^": "到 (乘数)^",
    "Total singularities:": "总奇点：",
    "Turn on/off sushi autoclickers": "切换 开/关 寿司 自动购买者",
    "Turn on/off sushi bean autoclickers": "切换 开/关 寿司豆 自动购买者",
    "Turn on/off prestige autoclickers": "切换 开/关 声望 自动购买者",
    "Turn on/off collapse autoclickers": "切换 开/关 坍缩 自动购买者",
    "Uh-oh spaghetti-o's, you've reached": "哦，意大利面条，你已经达到了",
    "Shouldn't take\n          too long.": "不应花费\n 太长时间。",
    "Make sushi beans": "制作寿司豆",
    "minutes, and": "分钟，和",
    "Omniverse": "全宇宙",
    "to get infinity (10^308) sushi beans": "获得无限 (10^308) 个寿司豆",
    "Upgrade your heavenly dice": "升级你的天堂骰子",
    "You are auto-prestiging": "你正在 自动声望",
    "You are auto-collapsing": "你正在 自动坍缩",
    "You are auto-making sushi beans": "你正在 自动制作寿司豆",
    "You are earning": "你得到了",
    "You can roll again in": "你不能再次扔骰子在",
    "You filled the entire omniverse with nothing but sushi beans. You hit true infinity™. I'd say that takes true dedication": "你用寿司豆填满了整个宇宙。 你达到了真正的无限™。 我会说这需要真正的奉献精神",
    "You took": "你用了",
    "You've managed to bring with you:": "你已经成功地带来了：",
    "Your multiplier power is": "你的乘数力量是",
    "Your power doubles each second": "你的力量每秒翻倍",
    "Gain a small prestige point boost": "获得一点点声望提升",
    "Gain the P hotkey for prestiging": "获得声望的快捷键 P",
    "Get a \"Make sushi beans\" autoclicker": "获取“制作寿司豆”自动点击器",
    "Get a \"Prestige\" autoclicker": "获取“声望”自动点击器",
    "Get a \"Collapse\" autoclicker": "获取“坍缩”自动点击器",
    "Gun (for safety)": "枪（安全起见）",
    "Hold on, wait a second!": "稍等，等一下！",
    "Also, thank you to the people on discord for giving me feedback. You lot are fantastic.": "另外，感谢不和谐的人给我反馈。 你们太棒了。",
    "And for the last time, I really don't know what sushi beans are.": "最后一次，我真的不知道什么是寿司豆。",
    "Ascend again, and enter the omniverse": "再次飞升，进入全宇宙",
    "Ascend beyond your home universe and enter the full sushiverse, \n        surpassing infinity and allowing for over 10^308 sushi beans": "超越你的家庭宇宙，进入完整的 sushiverse，\n 超越无限并允许超过 10^308 个寿司豆",
    "Begin sushi bean tetration": "开始寿司豆四舍五入",
    "Boring beige background": "无聊的米色背景",
    "Do you really want to do that just for more sushi beans? Please, think about this!": "你真的想这样做只是为了更多的寿司豆吗？ 请考虑一下！",
    "I don't want to die": "我不想死",
    "I just want to thank you for supporting me by coming along on this journey with me.": "我只想感谢您与我一起踏上这段旅程，支持我。",
    "If you prestige now, your multiplier will become": "如果您现在享有声望，您的乘数将变为",
    "If you want to start again, you can press the button below. Who knows, try speedrunning the game!": "如果您想重新开始，可以按下面的按钮。 谁知道呢，试试速通游戏吧！",
    "Increase self-replication speed": "提高自我复制速度",
    "Increase total multiplier from (multiplier)^": "从（乘数）增加总乘数^",
    "Infinity sushi beans": "无限寿司豆",
    "It's sushi all the way down": "一直都是寿司",
    "Lose all singularities and singularity upgrades, but get a 100x singularity multiplier": "失去所有奇点和奇点升级，但获得 100 倍的奇点乘数",
    "Multiply tetration power by 10": "将四次幂乘以 10",
    "sbps": "寿司豆每秒",
    "sbpsps": "寿司豆每秒每秒",
    "Sushi Beans v2.4.1 - The final update": "寿司豆增量 v2.4.1 - 最终更新",
    "to reach infinity (10^308) sushi beans": "达到无限大 (10^308) 个寿司豆",
    "You filled the entire omniverse with nothing but sushi beans. You hit true infinity™. I'd say that takes true dedication": "你用寿司豆填满了整个宇宙。 你达到了真正的无限™。 我会说这需要真正的奉献精神",
    "to gain a 'collapse' autoclicker": "获得“坍缩”自动点击器",
    "You filled the entire omniverse with nothing but sushi beans. You hit true infinity™. I'd say that takes true dedication.": "你用寿司豆填满了整个宇宙。 你达到了真正的无限™。 我会说这需要真正的奉献精神。",
    "Hold on! Prestiging now won't increase your multiplier. Try saving up some sushi beans!": "等等！ 现在声望不会增加您的乘数。 尝试节省一些寿司豆！",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    // 图标代码，不能汉化
    "Jacorb's Games": "Jacorb's Games",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "By Jacorb90": "By Jacorb90",
    "content_copy": "content_copy",
    "library_books": "library_books",
    "discord": "discord",
    "drag_handle": "drag_handle",
    "edit": "edit",
    "forum": "forum",
    "content_paste": "content_paste",
    "delete": "delete",
    "info": "info",
    "settings": "settings",

    //树游戏
    'Loading...': '加载中...',
    'ALWAYS': '一直',
    'HARD RESET': '硬重置',
    'Export to clipboard': '导出到剪切板',
    'INCOMPLETE': '不完整',
    'HIDDEN': '隐藏',
    'AUTOMATION': '自动',
    'NEVER': '从不',
    'ON': '打开',
    'OFF': '关闭',
    'SHOWN': '显示',
    'Play Again': '再次游戏',
    'Keep Going': '继续',
    'The Modding Tree Discord': '模型树Discord',
    'You have': '你有',
    'It took you {{formatTime(player.timePlayed)}} to beat the game.': '花费了 {{formatTime(player.timePlayed)}} 时间去通关游戏.',
    'Congratulations! You have reached the end and beaten this game, but for now...': '恭喜你！ 您已经结束并通关了本游戏，但就目前而言...',
    'Main Prestige Tree server': '主声望树服务器',
    'Reach {{formatWhole(ENDGAME)}} to beat the game!': '达到 {{formatWhole(ENDGAME)}} 去通关游戏!',
    "Loading... (If this takes too long it means there was a serious error!": "正在加载...（如果这花费的时间太长，则表示存在严重错误！",
    'Loading... (If this takes too long it means there was a serious error!)←': '正在加载...（如果时间太长，则表示存在严重错误！）←',
    'Main\n\t\t\t\tPrestige Tree server': '主\n\t\t\t\t声望树服务器',
    'The Modding Tree\n\t\t\t\t\t\t\tDiscord': '模型树\n\t\t\t\t\t\t\tDiscord',
    'Please check the Discord to see if there are new content updates!': '请检查 Discord 以查看是否有新的内容更新！',
    'aqua': '水色',
    'AUTOMATION, INCOMPLETE': '自动化，不完整',
    'LAST, AUTO, INCOMPLETE': '最后，自动，不完整',
    'NONE': '无',
    'P: Reset for': 'P: 重置获得',
    'Git游戏': 'Git游戏',
    'QQ群号': 'QQ群号',
    'x': 'x',
    'QQ群号:': 'QQ群号:',
    '* 启用后台游戏': '* 启用后台游戏',
    '更多同类游戏:': '更多同类游戏:',
    '': '',
    '': '',
    '': '',

}


//需处理的前缀
var cnPrefix = {
    "\n": "\n",
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "",
    " ": "",
    //树游戏
    "\t\t\t": "\t\t\t",
    "\n\n\t\t": "\n\n\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "Show Milestones: ": "显示里程碑：",
    "Autosave: ": "自动保存: ",
    "Offline Prod: ": "离线生产: ",
    "Completed Challenges: ": "完成的挑战: ",
    "High-Quality Tree: ": "高质量树贴图: ",
    "Offline Time: ": "离线时间: ",
    "Theme: ": "主题: ",
    "Anti-Epilepsy Mode: ": "抗癫痫模式：",
    "In-line Exponent: ": "直列指数：",
    "Single-Tab Mode: ": "单标签模式：",
    "Time Played: ": "已玩时长：",
    "Shift-Click to Toggle Tooltips: ": "Shift-单击以切换工具提示：",
    "Requires:": "需要：",
    "Sushi beans: ": "寿司豆：",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需处理的后缀
var cnPostfix = {
    "                   ": "",
    "                  ": "",
    "                 ": "",
    "                ": "",
    "               ": "",
    "              ": "",
    "             ": "",
    "            ": "",
    "           ": "",
    "          ": "",
    "         ": "",
    "        ": "",
    "       ": "",
    "      ": "",
    "     ": "",
    "    ": "",
    "   ": "",
    "  ": "  ",
    " ": " ",
    "\n": "\n",
    "\n\t\t\t": "\n\t\t\t",
    "\t\t\n\t\t": "\t\t\n\t\t",
    "\t\t\t\t": "\t\t\t\t",
    "\n\t\t": "\n\t\t",
    "\t": "\t",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
    "": "",
}

//需排除的，正则匹配
var cnExcludeWhole = [
    /^(\d+)$/,
    /^\s*$/, //纯空格
    /^([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)\-([\d\.]+)\-([\d\.]+)$/,
    /^([\d\.]+)e(\d+)$/,
    /^([\d\.]+)$/,
    /^\(([\d\.]+)\)$/,
    /^([\d\.]+)\%$/,
    /^([\d\.]+)\/([\d\.]+)$/,
    /^\(([\d\.]+)\/([\d\.]+)\)$/,
    /^成本(.+)$/,
    /^\(([\d\.]+)\%\)$/,
    /^([\d\.]+):([\d\.]+):([\d\.]+)$/,
    /^([\d\.]+)K$/,
    /^([\d\.]+)M$/,
    /^([\d\.]+)B$/,
    /^([\d\.]+) K$/,
    /^([\d\.]+) M$/,
    /^([\d\.]+) B$/,
    /^([\d\.]+)s$/,
    /^([\d\.]+)x$/,
    /^x([\d\.]+)$/,
    /^([\d\.,]+)$/,
    /^\+([\d\.,]+)$/,
    /^\-([\d\.,]+)$/,
    /^([\d\.,]+)x$/,
    /^x([\d\.,]+)$/,
    /^([\d\.,]+) \/ ([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)$/,
    /^e([\d\.]+)e([\d\.,]+)$/,
    /^x([\d\.]+)e([\d\.,]+)$/,
    /^([\d\.]+)e([\d\.,]+)x$/,
    /^[\u4E00-\u9FA5]+$/
];
var cnExcludePostfix = [
]

//正则替换，带数字的固定格式句子
//纯数字：(\d+)
//逗号：([\d\.,]+)
//小数点：([\d\.]+)
//原样输出的字段：(.+)
//换行加空格：\n(.+)
var cnRegReplace = new Map([
    [/^([\d\.]+) hours ([\d\.]+) minutes ([\d\.]+) seconds$/, '$1 小时 $2 分钟 $3 秒'],
    [/^You are gaining (.+) elves per second$/, '你每秒获得 $1 精灵'],
    [/^You have (.+) points$/, '你有 $1 点数'],
    [/^Next at (.+) points$/, '下一个在 $1 点数'],
	[/^([\d\.]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+)\/sec$/, '$1\/秒'],
	[/^([\d\.,]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+) OOMs\/sec$/, '$1 OOMs\/秒'],
	[/^([\d\.]+)e([\d\.,]+)\/sec$/, '$1e$2\/秒'],
    [/^requires ([\d\.]+) more research points$/, '需要$1个研究点'],
    [/^([\d\.]+)e([\d\.,]+) points$/, '$1e$2 点数'],
    [/^([\d\.]+) elves$/, '$1 精灵'],
    [/^([\d\.]+)d ([\d\.]+)h ([\d\.]+)m$/, '$1天 $2小时 $3分'],
    [/^([\d\.]+)e([\d\.,]+) elves$/, '$1e$2 精灵'],
    [/^ \(ee([\d\.,]+)\)sb$/, '（ee$1寿司豆）'],
    [/^([\d\.,]+) elves$/, '$1 精灵'],
    [/^\*(.+) to electricity gain$/, '\*$1 到电力增益'],
    [/^Cost: (.+)$/, '成本：$1'],
    [/^Cost: (.+) points$/, '成本：$1 点数'],
    [/^Req: (.+) elves$/, '要求：$1 精灵'],
    [/^Req: (.+) \/ (.+) elves$/, '要求：$1 \/ $2 精灵'],
    [/^Usages: (\d+)\/$/, '用途：$1\/'],
    [/^workers: (\d+)\/$/, '工人：$1\/'],

]);