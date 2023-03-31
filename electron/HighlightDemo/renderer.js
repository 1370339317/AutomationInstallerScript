import { LoadSchema } from './LoadSchema.js';


require.config({ paths: { 
  'vs': './node_modules/monaco-editor/min/vs'
}});

require(['vs/editor/editor.main'], function() {
  
  // 加载默认策略
  const loadproc = new LoadSchema('');
  const str_config = window.myAPI.ReadXmlFile(window.myAPI.GetCurPath() + '\\resources\\schema.xml', {encoding:'utf8', flag:'r'});
  loadproc.ParseXml(str_config);
  

  monaco.editor.defineTheme('myCustomTheme', {
    base: 'vs',
    inherit: true,
    rules: [
      { token: 'attribute.name', foreground: 'FF9900' },
      { token: 'attribute.value', foreground: 'FFFF00' },
    ],
    colors: {
      "editor.foreground": "#000000",
      "editor.background": "#EDF9FA",
      "editorCursor.foreground": "#8B0000",
      "editor.lineHighlightBackground": "#0000FF20",
      "editorLineNumber.foreground": "#008800",
      "editor.selectionBackground": "#88000030",
      "editor.inactiveSelectionBackground": "#88000015",
    }
  });
  
  monaco.languages.registerCompletionItemProvider('xml', {
      triggerCharacters: ['.', '<'],
      provideCompletionItems: function(model, position, context, token) {
        // 获取字符串，可是好像拿不到触发的字符，因此可能得用范围取字符串解析
        var wordBefore = model.getValueInRange(
          new monaco.Range(position.lineNumber, 1, position.lineNumber, position.column - 1));
        if (context.triggerCharacter === '.' || wordBefore[wordBefore.length - 1] === '.') {
          return {suggestions: loadproc.GetSuggestion(wordBefore)};
        } else if(context.triggerCharacter === '<') {
          return {suggestions: [{
              label: '</>',
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: '${1}/',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
            },{
              label: '<></>',
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: '${1}></${1}',
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
            }]};
        }
        return {suggestions: loadproc.GetSuggestion()};
      }
  });


  // Your code here
  const text = `<TestXml id="myid">
  <TestElem>myelem</TestElem>
  </TestXml>`;

  const format_xml = window.myAPI.js_beautify_format(text, 2, 40, false, true, true);

  // Hover on each property to see its docs!
  const msg_editor = monaco.editor.create(document.getElementById("container"), {
    value: '',
    language: "xml",
    theme: "myCustomTheme",
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden'
    },
    minimap: {
      enabled: false
    }
  }); 

  // msg_editor.updateOptions({
  //   editorSuggestWidgetOptions: {
  //     colors: {
  //       foreground: '#000000', // Text color
  //       background: '#ffffff', // Background color
  //       highlight: '#ff0000', // Highlight color
  //       selectedBackground: '#00ff00' // Selected background color
  //     }
  //   }
  // });

  monaco.editor.create(document.getElementById("readcontainer"), {
    value: format_xml,
    language: "xml",
    scrollbar: {
      vertical: 'hidden',
      horizontal: 'hidden'
    },
    minimap: {
      enabled: false
    },
    readOnly: true
  });

  // 按键响应
  msg_editor.onKeyDown((event) => {
    if (event.keyCode === monaco.KeyCode.F9) {
      var msg = '<message> \
                    <header> \
                        <id/> \
                        <from></from> \
                        <to></to> \
                        <type></type> \
                    </header> \
                    <body> \
                    </body> \
                </message>'
      var distext = window.myAPI.js_beautify_format(msg, 2, 40, false, true, true);
      msg_editor.setValue(distext);
    }
  });

  // 测试按钮
  const test_btn = document.getElementById("myButton");
  test_btn.addEventListener("click", () => {
    const str_config = window.myAPI.ReadXmlFile('schema.xml', {encoding:'utf8', flag:'r'});
    loadproc.ParseXml(str_config);
    const test_class = loadproc.GetClass();
    const test = loadproc.GetClass();
  });
});


