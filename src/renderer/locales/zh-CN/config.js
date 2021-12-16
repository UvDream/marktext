export default {
  category: {
    preferences: '偏好设置',
    general: '常规',
    generalChild: {
      desc: '自动保存文档更改',
      delayTime: '自动保存延迟时间',
      openFileInNewWindow: '新窗口打开文档',
      OpenFoldersInNewWindow: '在新窗口中打开文件夹',
      hideScrollbars: '隐藏滚动条',
      wrapTextInTableContents: '在目录中换行',
      sortFieldForFilesInOpenFolders: '打开文件夹中文件的排序字段',
      languageForUserInterface: '用户界面语言',
      actionOnStartup: '启动时的操作',
      openTheDefaultDirectory: '打开默认目录',
      selectFolder: '选择文件夹',
      openABlankPage: '打开空白页',
      defaultDirectoryToOpen: '默认打开目录'
    },
    editor: '编辑器',
    editorChild: {
      fontSizeInTextEditor: '文本编辑器字体大小',
      lineHeightInTextEditor: '文本编辑器行高',
      fontForTextEditor: '文本编辑器字体',
      fontSizeInCodeBlocks: '代码块字体大小',
      fontForCodeBlocks: '代码块字体',
      showLineNumbersInCodeBlocks: '代码块显示行号',
      removeLeadingAndTrailingEmptyLinesInCodeBlocks: '代码块删除首尾空行',
      automaticallyCloseBracketsWhenWriting: '当写入时自动关闭括号',
      automaticallyCompleteMarkdownSyntax: '自动完成 Markdown 语法',
      automaticallyCloseQuotationMarks: '自动关闭引号',
      lineSeparatorType: '行分隔符类型',
      defaultEncoding: '默认编码',
      automaticallyDetectFileEncoding: '自动检测文件编码',
      handlingOfTrailingNewlineCharacters: '处理尾部换行符',
      textDirection: '文本方向',
      hideHintForSelectingTypeOfNewParagraph: '选择新段落类型时隐藏提示',
      hidePopupWhenCursorIsOverLink: '光标移动到链接上时隐藏弹出窗口',
      whetherToAutomaticallyCheckAnyRelatedTasks: '是否自动检查任何相关任务',
      others: '文本编辑器的最大宽度。 主题默认为空，否则为带有单位后缀的数字（`ch`：字符，`px`：像素，`%`：百分比）'
    },
    markdown: 'Markdown',
    markdownChild: {
      preferLooseListItems: '优先使用空行分隔列表项目',
      preferredMarkerForBulletLists: '项目符号列表的首选标记',
      preferredMarkerForOrderedLists: '有序列表的首选标记',
      preferredHeadingStyle: '标题样式',
      preferredTabWidth: 'Tab 宽度',
      preferredListIndentation: '列表缩进',
      formatForFrontMatter: '格式化前言',
      usePandocStyleSuperscriptAndSubscript: '使用 Pandoc 样式的上标和下标',
      usePandocStyleFootnotesRequiresRestart: '使用 Pandoc 样式的脚注（需要重新启动）',
      enableHtmlRendering: '启用 HTML 渲染',
      enableGitLabCompatibilityMode: '启用 GitLab 兼容模式',
      sequenceDiagramTheme: '序列图主题',
      markdownExtensions: 'Markdown 扩展',
      compatibility: '兼容性',
      diagramTheme: '图表主题'
    },
    spelling: '拼写检查',
    spellingChild: {
      enableSpellChecker: '启用拼写检查器(实验性)',
      useHunspellInsteadOfSystemSpellChecker: '在macOS和Windows 10上使用Hunspell而不是系统拼写检查器(需要重新启动)',
      hideMarksForSpellingErrors: '隐藏拼写错误的标记',
      automaticallyDetectDocumentLanguage: '自动检测文档语言(需要显示拼写错误的标记)',
      defaultLanguageForSpellChecker: '默认拼写检查器语言'
    },
    theme: '主题',
    themeChild: {
      subjectFollowSystem: '根据系统设置自动调整应用程序主题',
      openTheThemesFolder: '打开主题文件夹',
      importCustomThemes: '导入自定义主题',
      openFolder: '打开文件夹',
      importTheme: '导入主题'
    },
    image: '图片',
    imageUploader: '图片上传'
  }
}
