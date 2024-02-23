module.exports = {
  types: [
    {
      value: 'feat',
      name: 'feat:     新功能',
    },
    {
      value: 'fix',
      name: 'fix:      修復bug',
    },
    {
      value: 'init',
      name: 'init:     初始化',
    },
    {
      value: 'docs',
      name: 'docs:     文檔變更',
    },
    {
      value: 'style',
      name: 'style:    代碼的樣式美化',
    },
    {
      value: 'refactor',
      name: 'refactor: 重構',
    },
    {
      value: 'perf',
      name: 'perf:     性能優化',
    },
    {
      value: 'test',
      name: 'test:     測試',
    },
    {
      value: 'revert',
      name: 'revert:   回退',
    },
    {
      value: 'build',
      name: 'build:    打包',
    },
    {
      value: 'chore',
      name: 'chore:    構建/工程依賴/工具',
    },
    {
      value: 'ci',
      name: 'ci:       CI 相關變更',
    },
  ],
  scopes: [
    ['components', '組件相關'],
    ['hooks', 'hook 相關'],
    ['utils', 'utils 相關'],
    ['styles', '樣式相關'],
    ['deps', '項目依賴'],
    ['auth', '對 auth 修改'],
    ['other', '其他修改'],
    // 如果選擇 custom，後面會讓你再輸入一個自定義的 scope。也可以不設置此項，把後面的 allowCustomScopes 設置為 true
    ['custom', '以上都不是？請輸入自定義'],
  ].map(([value, description]) => {
    return {
      value,
      name: `${value.padEnd(30)} (${description})`,
    }
  }),
  messages: {
    type: '請選擇提交類型(必填)',
    customScope: '請輸入文件修改範圍(可選)',
    subject: '請簡要描述提交(必填)',
    body: '請輸入詳細描述(可選)',
    breaking: '列出任何BREAKING CHANGES(可選)',
    footer: '請輸入要關閉的issue(可選)',
    confirmCommit: '確定提交此說明嗎？',
  },
  allowCustomScopes: true,
  allowBreakingChanges: ['feat', 'fix'],
  subjectLimit: 72,
}
