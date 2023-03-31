const { contextBridge, ipcRenderer } = require('electron')
const fs = require('fs');
const js_beautify = require('js-beautify').html;
const ffi = require('ffi-napi')
const { Buffer } = require('buffer')


contextBridge.exposeInMainWorld('myAPI', {
  js_beautify_format: (xmlString, indent_size, wrap_line_length, preserve_newlines, indent_inner_html, html) => js_beautify(xmlString, indent_size, wrap_line_length, preserve_newlines, indent_inner_html, html),
  ReadXmlFile: (filename, option) => fs.readFileSync(filename, option),
  LoadLibrary: (libpath, libfunc) => ffi.Library(libpath, libfunc),
  DeepCopyChars: (strchars) => Buffer.from(strchars),
  GetCurPath: () => process.cwd()
});

