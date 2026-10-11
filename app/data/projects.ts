export interface Project {
  id: string;
  name: string;
  nameEn: string;
  description: string;
  releaseDate: string;
  githubUrl: string;
  category: string;
  tags: string[];
  status: 'completed' | 'in-progress' | 'planned';
  docUrl?: string;
  features: string[];
  techStack: string[];
}

export const projects: Project[] = [
  {
    id: 'ai-debate',
    name: 'AI-Debate',
    nameEn: 'AI-Debate',
    description: '基于AI模型的辩论平台，支持角色定制、实时评分和多种辩论格式',
    releaseDate: '2025年3月',
    githubUrl: 'https://github.com/jingyi0605/Ai-Debate',
    category: 'AI机器学习',
    tags: ['AI', '辩论', 'NLP'],
    status: 'completed',
    features: [
      '支持多种辩论格式（一对一、团队赛等）',
      '实时AI评分和点评',
      '自定义角色和立场',
      '辩论历史记录和回放',
      '数据分析和学习建议'
    ],
    techStack: ['Next.js', 'OpenAI API', 'TailwindCSS', 'MongoDB', 'WebSocket']
  },
  {
    id: 'deep-stress-model',
    name: 'DeepStressModel',
    nameEn: 'DeepStressModel',
    description: 'AI模型压力测试工具，评估模型性能和稳定性',
    releaseDate: '2025年3月',
    githubUrl: 'https://github.com/jingyi0605/DeepStressModel',
    category: 'AI机器学习',
    tags: ['AI', '压力测试', '性能评估'],
    status: 'completed',
    features: [
      '多维度性能评估',
      '自动化压力测试',
      '实时监控和报警',
      '性能报告生成',
      '异常分析和建议'
    ],
    techStack: ['Python', 'PyTorch', 'FastAPI', 'Redis', 'Grafana']
  },
  {
    id: 'astrbot-plugin-merge-wemsg',
    name: 'astrbot_plugin_Merge_WeMSG',
    nameEn: 'astrbot_plugin_Merge_WeMSG',
    description: '适用于AstrBot的微信聊天消息合并插件',
    releaseDate: '2025年4月',
    githubUrl: 'https://github.com/jingyi0605/astrbot_plugin_Merge_WeMSG',
    category: '工具/插件',
    tags: ['微信', '消息合并', 'AstrBot'],
    status: 'completed',
    features: [
      '智能消息合并',
      '自定义合并规则',
      '多格式导出支持',
      '历史记录管理',
      '插件配置界面'
    ],
    techStack: ['Python', 'AstrBot SDK', 'SQLite', 'Vue.js']
  },
  {
    id: 'wxauto-mgt',
    name: 'WXAUTO-MGT',
    nameEn: 'WXAUTO-MGT',
    description: '微信自动化管理系统，提供微信机器人管理和监控功能',
    releaseDate: '2025年5月',
    githubUrl: 'https://github.com/jingyi0605/WXAUTO-MGT',
    category: '自动化管理',
    tags: ['微信', '自动化', '机器人管理'],
    status: 'completed',
    docUrl: '/wxauto-mgt/index.html',
    features: [
      '多账号管理',
      '消息规则配置',
      '自动化任务调度',
      '实时监控和报警',
      '数据统计分析'
    ],
    techStack: ['Node.js', 'Express', 'React', 'MongoDB', 'Redis']
  },
  {
    id: 'wxauto-http-api',
    name: 'WXAUTO-HTTP-API',
    nameEn: 'WXAUTO-HTTP-API',
    description: '微信自动化HTTP API接口，支持远程调用微信功能',
    releaseDate: '2025年5月',
    githubUrl: 'https://github.com/jingyi0605/WXAUTO-HTTP-API',
    category: 'API/接口',
    tags: ['微信', 'HTTP API', '远程调用'],
    status: 'completed',
    features: [
      'RESTful API设计',
      '完整的接口文档',
      '权限认证机制',
      '请求限流保护',
      '开发者SDK'
    ],
    techStack: ['Node.js', 'Express', 'TypeScript', 'Swagger', 'JWT']
  },
  {
    id: 'zhiweijz',
    name: '只为记账',
    nameEn: 'ZhiWeiJZ',
    description: '简洁高效的个人记账应用，支持多账户管理和数据分析',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/jingyi0605/zhiweijz',
    category: '生活工具',
    tags: ['记账', '财务管理', '数据分析'],
    status: 'completed',
    features: [
      '多账户管理',
      '智能分类统计',
      '预算设置提醒',
      '数据可视化',
      '导入导出功能'
    ],
    techStack: ['Flutter', 'SQLite', 'Provider', 'Charts']
  },
  {
    id: 'wxauto4zhiweijz',
    name: '只为记账-微信助手',
    nameEn: 'ZhiWeiJZ-WeChatBot',
    description: '只为记账应用的微信机器人助手，支持语音记账和智能分类',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/jingyi0605/wxauto4zhiweijz',
    category: '生活工具',
    tags: ['微信机器人', '语音记账', '智能分类'],
    status: 'completed',
    features: [
      '语音记账识别',
      '智能分类推荐',
      '快捷记账指令',
      '账单同步提醒',
      '语音播报统计'
    ],
    techStack: ['Python', 'FastAPI', 'NLP', 'SQLAlchemy']
  },
  {
    id: 'zhiweijz-import-records',
    name: '智能导入工具',
    nameEn: 'ZhiWeiJZ-ImportTool',
    description: '只为记账的智能数据导入工具，支持多种格式转换和智能识别',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/jingyi0605/zhiweijz_import_records',
    category: '工具/数据处理',
    tags: ['数据导入', '格式转换', '智能识别'],
    status: 'completed',
    features: [
      '多格式支持',
      '智能字段匹配',
      '数据清洗转换',
      '批量导入处理',
      '错误检查修正'
    ],
    techStack: ['Python', 'Pandas', 'PyQt', 'SQLite']
  },
  {
    id: 'codingns',
    name: 'CodingNS',
    nameEn: 'CodingNS',
    description: '跨桌面、移动端和 Web 的 AI 编程工作台，支持会话同步、文件、Git 与终端协同',
    releaseDate: '2026年3月',
    githubUrl: 'https://github.com/jingyi0605/CodingNS',
    category: 'AI开发工具',
    tags: ['AI编程', '跨平台', '会话同步', '终端'],
    status: 'completed',
    features: [
      '跨客户端续接 Claude Code、Codex、OpenCode 等会话',
      '统一管理文件、Git、终端和开发进程',
      '支持桌面、移动端和 Web 访问',
      '多 Host 切换与远程访问',
      '工作区助手与浏览器桥接能力'
    ],
    techStack: ['TypeScript', 'React', 'Fastify', 'WebSocket', 'SQLite/libSQL', 'Tauri 2', 'node-pty']
  },
  {
    id: 'codingns4dsh',
    name: 'Codingns4DSH',
    nameEn: 'Codingns4DSH',
    description: '将多种编程 Agent、持久终端、工作区调试和远程访问接入 DSH 原生界面',
    releaseDate: '2026年9月',
    githubUrl: 'https://github.com/jingyi0605/Codingns4DSH',
    category: 'AI开发工具',
    tags: ['DSH', 'Agent', '终端', '远程访问'],
    status: 'completed',
    features: [
      '在 DSH 中运行和管理多种编程 Agent',
      '持久终端与工作区调试',
      '项目管理和会话协作',
      '支持远程访问工作台',
      '提供 npm 插件包和跨平台安装说明'
    ],
    techStack: ['TypeScript', 'Node.js', 'DeepSeek Harness', '终端集成', 'WebSocket']
  },
  {
    id: 'familyclaw',
    name: 'FamilyClaw',
    nameEn: 'FamilyClaw',
    description: '以家庭成员为中心的家庭 AI 操作系统，连接设备、记忆、对话和自动化能力',
    releaseDate: '2026年3月',
    githubUrl: 'https://github.com/jingyi0605/FamilyClaw',
    category: 'AI与家庭自动化',
    tags: ['家庭AI', '智能家居', '自动化', '多端'],
    status: 'completed',
    features: [
      '家庭成员、关系和权限管理',
      '设备接入、状态和自动化控制',
      '家庭对话、记忆和问答',
      '多 AI Provider 与通道插件扩展',
      '支持 Web、iOS、Android 和 HarmonyOS'
    ],
    techStack: ['Python', 'FastAPI', 'React', 'TypeScript', 'SQLite/PostgreSQL', 'Docker']
  },
  {
    id: 'calpaper',
    name: '算账稿纸',
    nameEn: 'calPaper',
    description: '像稿纸一样逐行计算的离线 PWA，支持财务模式、自动保存和人民币大写转换',
    releaseDate: '2026年10月',
    githubUrl: 'https://github.com/jingyi0605/calPaper',
    category: '生活工具',
    tags: ['计算器', 'PWA', '离线应用', '财务'],
    status: 'completed',
    features: [
      '逐行实时求值和表达式计算',
      '财务模式按分四舍五入',
      '一键复制人民币大写金额',
      '明暗主题和移动端布局',
      '完全离线并支持安装到桌面或主屏'
    ],
    techStack: ['JavaScript', 'PWA', 'Service Worker', 'IndexedDB', 'Web APIs']
  },
  {
    id: 'quick-fshare',
    name: 'Quick FShare',
    nameEn: 'Quick FShare',
    description: '支持本地文件系统、SMB 和 NFS 的私有文件分享系统',
    releaseDate: '2025年6月',
    githubUrl: 'https://github.com/jingyi0605/quick_fshare',
    category: '文件工具',
    tags: ['文件分享', 'Docker', 'SMB', 'NFS'],
    status: 'completed',
    features: [
      '本地文件、SMB 和 NFS 多协议访问',
      'JWT 认证、密码保护和访问控制',
      '图片、视频和 PDF 缩略图预览',
      '响应式界面和中英文支持',
      '备份恢复、日志和系统监控'
    ],
    techStack: ['React', 'Ant Design', 'Node.js', 'Docker', 'JWT', 'SMB/NFS']
  },
  {
    id: 'x-file',
    name: 'X-File',
    nameEn: 'X-File',
    description: '从 CodingNS 拆出的文档库独立桌面应用，提供文档服务、托盘和更新能力',
    releaseDate: '2026年6月',
    githubUrl: 'https://github.com/jingyi0605/X-File',
    category: '桌面应用',
    tags: ['文档库', 'Tauri', '桌面应用', 'Fastify'],
    status: 'completed',
    features: [
      '文档库前端和 Fastify 后端',
      'Tauri 2 桌面壳和系统托盘',
      '本地 HTTP 服务启停和健康检查',
      'CodingNS 集成状态接口',
      'GitHub Releases 双通道更新骨架'
    ],
    techStack: ['TypeScript', 'React', 'Fastify', 'Tauri 2', 'Rust', 'Node.js']
  },
  {
    id: 'pdf-page-reverser',
    name: '倒页',
    nameEn: 'PDF Page Reverser',
    description: '在浏览器本地反转 PDF 页面顺序，支持拖拽、粘贴、双面打印和下载',
    releaseDate: '2026年9月',
    githubUrl: 'https://github.com/jingyi0605/pdf-page-reverser',
    category: '工具/数据处理',
    tags: ['PDF', '隐私保护', '浏览器工具', '打印'],
    status: 'completed',
    features: [
      '拖拽、文件选择和剪贴板粘贴 PDF',
      '浏览器本地读取和反转页面顺序',
      '双面打印时自动补空白页',
      '限制文件大小并校验 PDF 格式',
      '不上传原文件，结果直接下载'
    ],
    techStack: ['JavaScript', 'pdf-lib', 'ES Modules', 'Web APIs', 'Vercel']
  },
  {
    id: 'gpt-image-gen',
    name: 'GI ImageFlow',
    nameEn: 'GPT ImageFlow',
    description: '面向 GPT Image 兼容接口的静态图片生成与编辑工作台',
    releaseDate: '2026年8月',
    githubUrl: 'https://github.com/jingyi0605/gpt_image_gen',
    category: 'AI工具',
    tags: ['AI绘图', '图片编辑', 'OpenAI兼容', '静态部署'],
    status: 'completed',
    features: [
      '支持图片生成、编辑和异步任务队列',
      '兼容 OpenAI 图片接口格式',
      '支持 Sub2API 嵌入和自动发现图片 Key',
      '本地 IndexedDB 画廊和继续编辑',
      'Vercel 等静态平台直接部署'
    ],
    techStack: ['JavaScript', 'HTML', 'CSS', 'OpenAI兼容 API', 'IndexedDB', 'Vercel']
  }
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category)
}

export const getCompletedProjects = (): Project[] => {
  return projects.filter(project => project.status === 'completed')
}

export const getProjectStats = () => {
  const total = 100
  const completed = projects.filter(p => p.status === 'completed').length
  const inProgress = projects.filter(p => p.status === 'in-progress').length
  const planned = projects.filter(p => p.status === 'planned').length
  
  return {
    total,
    completed,
    inProgress,
    planned,
    completionRate: (completed / total * 100).toFixed(1)
  }
} 
