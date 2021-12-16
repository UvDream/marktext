/*
 * @Author: wangzhongjie
 * @Date: 2021-12-16 17:09:35
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-12-16 21:55:35
 * @Description: config i18
 * @Email: UvDream@163.com
 */
export default {
  category: {
    preferences: 'Preferences',
    general: 'General',
    generalChild: {
      desc: 'Automatically save document changes',
      delayTime: 'Delay following document edit before automatically saving (milliseconds)',
      openFileInNewWindow: 'Open files in new window',
      OpenFoldersInNewWindow: 'Open folders in new window',
      hideScrollbars: 'Hide scrollbars',
      wrapTextInTableContents: 'Wrap text in table of contents',
      sortFieldForFilesInOpenFolders: 'Sort field for files in open folders',
      languageForUserInterface: 'Language for user interface',
      actionOnStartup: 'Action on startup',
      openTheDefaultDirectory: 'Open the default directory',
      selectFolder: 'Select Folder',
      openABlankPage: 'Open a blank page',
      defaultDirectoryToOpen: 'Open the default directory'
    },
    editor: 'Editor',
    editorChild: {
      fontSizeInTextEditor: 'Font size in text editor',
      lineHeightInTextEditor: 'Line height in text editor',
      fontForTextEditor: 'Font for text editor',
      fontSizeInCodeBlocks: 'Font size in code blocks',
      fontForCodeBlocks: 'Font for code blocks',
      showLineNumbersInCodeBlocks: 'Show line numbers in code blocks',
      removeLeadingAndTrailingEmptyLinesInCodeBlocks: 'Remove leading and trailing empty lines in code blocks',
      automaticallyCloseBracketsWhenWriting: 'Automatically close brackets when writing',
      automaticallyCompleteMarkdownSyntax: 'Automatically complete markdown syntax',
      automaticallyCloseQuotationMarks: 'Automatically close quotation marks',
      lineSeparatorType: 'Line separator type',
      defaultEncoding: 'Default encoding',
      automaticallyDetectFileEncoding: 'Automatically detect file encoding',
      handlingOfTrailingNewlineCharacters: 'Handling of trailing newline characters',
      textDirection: 'Text direction',
      hideHintForSelectingTypeOfNewParagraph: 'Hide hint for selecting type of new paragraph',
      hidePopupWhenCursorIsOverLink: 'Hide popup when cursor is over link',
      whetherToAutomaticallyCheckAnyRelatedTasks: 'Whether to automatically check any related tasks',
      others: 'Maximum width of text editor. Empty for theme default, otherwise number with unit suffix (`ch`: characters, `px`: pixels, `%`: percentage)'
    },
    markdown: 'Markdown',
    markdownChild: {
      preferLooseListItems: 'Prefer loose list items',
      preferredMarkerForBulletLists: 'Preferred marker for bullet lists',
      preferredMarkerForOrderedLists: 'Preferred marker for ordered lists',
      preferredHeadingStyle: 'Preferred heading style',
      preferredTabWidth: 'Preferred tab width',
      preferredListIndentation: 'Preferred list indentation',
      formatForFrontMatter: 'Format for front matter',
      usePandocStyleSuperscriptAndSubscript: 'Use Pandoc-style superscript and subscript',
      usePandocStyleFootnotesRequiresRestart: 'Use Pandoc-style footnotes (requires restart)',
      enableHtmlRendering: 'Enable HTML rendering',
      enableGitLabCompatibilityMode: 'Enable GitLab compatibility mode',
      sequenceDiagramTheme: 'Sequence diagram theme',
      markdownExtensions: 'Markdown extensions',
      compatibility: 'Compatibility',
      diagramTheme: 'Sequence diagram theme'
    },
    spelling: 'Spelling',
    spellingChild: {
      enableSpellChecker: 'Enable spell checker (experimental)',
      useHunspellInsteadOfSystemSpellChecker: 'Use Hunspell instead of system spell checker on macOS and Windows 10 (requires restart)',
      hideMarksForSpellingErrors: 'Hide marks for spelling errors',
      automaticallyDetectDocumentLanguage: 'Automatically detect document language (requires showing marks for spelling errors)',
      defaultLanguageForSpellChecker: 'Default language for spell checker'
    },
    theme: 'Theme',
    themeChild: {
      subjectFollowSystem: 'Automatically adjust application theme according to system settings',
      openTheThemesFolder: 'Open the themes folder',
      importCustomThemes: 'Import custom themes',
      openFolder: 'Open Folder',
      importTheme: 'Import Theme'
    },
    image: 'Image',
    imageUploader: 'Image Uploader'
  }
}
