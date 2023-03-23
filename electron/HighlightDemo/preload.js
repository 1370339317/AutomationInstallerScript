const { contextBridge } = require('electron')
const js_beautify = require('js-beautify').html;

contextBridge.exposeInMainWorld('myAPI', {
  js_beautify_format: (xmlString, indent_size, wrap_line_length, preserve_newlines, indent_inner_html, html) => js_beautify(xmlString, indent_size, wrap_line_length, preserve_newlines, indent_inner_html, html)
});

