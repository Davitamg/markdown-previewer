(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{12:function(e,n,t){},13:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(2),i=t.n(o),s=(t(12),t(3)),l=t(4),c=t(6),d=t(5),u=(t(13),"# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)"),h=t(14),m=function(e){Object(c.a)(t,e);var n=Object(d.a)(t);function t(){var e;Object(s.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=n.call.apply(n,[this].concat(r))).state={markdown:u},e.handleChange=function(e){this.setState({markdown:e})},e}return Object(l.a)(t,[{key:"render",value:function(){var e=this,n=this.state.markdown;return r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"container"},r.a.createElement("textarea",{className:"editor",id:"editor",placeholder:"Enter Markdown",value:n,onChange:function(n){return e.handleChange(n.target.value)},multiline:!0,rows:2,rowsMax:5})),r.a.createElement("div",{previewContainer:!0},r.a.createElement("div",{className:"markdownPreview",id:"preview",dangerouslySetInnerHTML:{__html:h(n)}})))}}]),t}(r.a.Component);i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root"))},7:function(e,n,t){e.exports=t(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.48d1874e.chunk.js.map