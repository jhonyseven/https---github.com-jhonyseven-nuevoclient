(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{sFYk:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return f}));var o=n("q1tI"),l=n.n(o),a=n("v83y");n("t0eU");function r(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function i(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t}var s=function(e){function t(t){var n;return(n=e.call(this,t)||this).state={editorState:a.EditorState.createEmpty()},n.focus=function(){return n.refs.editor.focus()},n.onChange=function(e){return n.setState({editorState:e})},n.handleKeyCommand=n._handleKeyCommand.bind(r(n)),n.mapKeyToEditorCommand=n._mapKeyToEditorCommand.bind(r(n)),n.toggleBlockType=n._toggleBlockType.bind(r(n)),n.toggleInlineStyle=n._toggleInlineStyle.bind(r(n)),n}i(t,e);var n=t.prototype;return n._handleKeyCommand=function(e,t){var n=a.RichUtils.handleKeyCommand(t,e);return!!n&&(this.onChange(n),!0)},n._mapKeyToEditorCommand=function(e){if(9!==e.keyCode)return Object(a.getDefaultKeyBinding)(e);var t=a.RichUtils.onTab(e,this.state.editorState,4);t!==this.state.editorState&&this.onChange(t)},n._toggleBlockType=function(e){this.onChange(a.RichUtils.toggleBlockType(this.state.editorState,e))},n._toggleInlineStyle=function(e){this.onChange(a.RichUtils.toggleInlineStyle(this.state.editorState,e))},n.render=function(){var e=this.state.editorState,t="RichEditor-editor",n=e.getCurrentContent();return n.hasText()||"unstyled"!==n.getBlockMap().first().getType()&&(t+=" RichEditor-hidePlaceholder"),l.a.createElement("div",{className:"RichEditor-root"},l.a.createElement(y,{editorState:e,onToggle:this.toggleBlockType}),l.a.createElement(m,{editorState:e,onToggle:this.toggleInlineStyle}),l.a.createElement("div",{className:t,onClick:this.focus},l.a.createElement(a.Editor,{blockStyleFn:d,customStyleMap:c,editorState:e,handleKeyCommand:this.handleKeyCommand,keyBindingFn:this.mapKeyToEditorCommand,onChange:this.onChange,placeholder:"Escribir",ref:"editor",spellCheck:!0})))},t}(l.a.Component),c={CODE:{backgroundColor:"rgba(0, 0, 0, 0.05)",fontFamily:'"Inconsolata", "Menlo", "Consolas", monospace',fontSize:16,padding:2}};function d(e){switch(e.getType()){case"blockquote":return"RichEditor-blockquote";default:return null}}var u=function(e){function t(){var t;return(t=e.call(this)||this).onToggle=function(e){e.preventDefault(),t.props.onToggle(t.props.style)},t}return i(t,e),t.prototype.render=function(){var e="RichEditor-styleButton";return this.props.active&&(e+=" RichEditor-activeButton"),l.a.createElement("span",{className:e,onMouseDown:this.onToggle},this.props.label)},t}(l.a.Component),h=[{label:"H1",style:"header-one"},{label:"H2",style:"header-two"},{label:"H3",style:"header-three"},{label:"H4",style:"header-four"},{label:"H5",style:"header-five"},{label:"H6",style:"header-six"},{label:"Blockquote",style:"blockquote"},{label:"UL",style:"unordered-list-item"},{label:"OL",style:"ordered-list-item"}],y=function(e){var t=e.editorState,n=t.getSelection(),o=t.getCurrentContent().getBlockForKey(n.getStartKey()).getType();return l.a.createElement("div",{className:"RichEditor-controls"},h.map((function(t){return l.a.createElement(u,{key:t.label,active:t.style===o,label:t.label,onToggle:e.onToggle,style:t.style})})))},g=[{label:"Bold",style:"BOLD"},{label:"Italic",style:"ITALIC"},{label:"Underline",style:"UNDERLINE"},{label:"Monospace",style:"CODE"}],m=function(e){var t=e.editorState.getCurrentInlineStyle();return l.a.createElement("div",{className:"RichEditor-controls"},g.map((function(n){return l.a.createElement(u,{key:n.label,active:t.has(n.style),label:n.label,onToggle:e.onToggle,style:n.style})})))},p=s;function f(){return l.a.createElement("div",null,l.a.createElement(p,null))}},t0eU:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-dashboard-js-e863b9e6d819988b3f80.js.map