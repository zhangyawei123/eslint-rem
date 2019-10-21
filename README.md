# demo01

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

### 配置vscode eslint方法，保存时自动修复
+ 创建版本时候并不需要选择标准版的，可以自己在package.json里面配置
+ vscode 下载插件ESlint  Vetur

+ vs code 设置 
```
  {
  "editor.fontSize": 14,
  "eslint.run": "onSave",
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "vue-html",
    {
      "language": "vue",
      "autoFix": true
    }
  ],
  "emmet.triggerExpansionOnTab": true,
  "editor.tabSize": 2,
  "editor.detectIndentation": false,
  "explorer.confirmDragAndDrop": false,
  "explorer.confirmDelete": false,
  "window.zoomLevel": 1,
  "javascript.updateImportsOnFileMove.enabled": "always",
  "git.enableSmartCommit": true,
  "git.autofetch": true,
  "workbench.startupEditor": "newUntitledFile",
  "gitlens.advanced.messages": {
    "suppressCommitHasNoPreviousCommitWarning": true
  },
}
```
