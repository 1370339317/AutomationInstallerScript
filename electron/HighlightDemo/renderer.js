require.config({ paths: { 
  'vs': './node_modules/monaco-editor/min/vs'
}});

require(['vs/editor/editor.main'], function() {
  // Your code here
  const text = `<TestXml>
  <TestElem>myelem</TestElem>
  </TestXml>`;

  const format_xml = window.myAPI.js_beautify_format(text, 2, 40, false, true, true);

  // Hover on each property to see its docs!
  monaco.editor.create(document.getElementById("container"), {
    value: format_xml,
    language: "xml",
    automaticLayout: true,
  });
});
