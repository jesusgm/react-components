(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{962:function(e,t,a){"use strict";a.r(t);a(12),a(7),a(6),a(4),a(8),a(5);var n=a(9),r=a(1),o=a(63),c=a(945),i=a(22);a(996);function s(e){return Object(n.c)("td",{className:"table-cell "+(e.head?"header-cell":"")},e.children)}var l=s;s&&s===Object(s)&&Object.isExtensible(s)&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"Cell",filename:"src/components/table/components/cell/index.jsx"}});a(959);function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={page:0,pageSize:t.pagination&&t.pagination.pageSize||10},a.renderHeader=a.renderHeader.bind(p(a)),a.renderBody=a.renderBody.bind(p(a)),a.renderFooter=a.renderFooter.bind(p(a)),a.nextPage=a.nextPage.bind(p(a)),a.prevPage=a.prevPage.bind(p(a)),a.pageSizeChange=a.pageSizeChange.bind(p(a)),a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=r.prototype;return o.nextPage=function(){var e=this.props.rows,t=this.state,a=t.page,n=t.pageSize;a+1<Math.ceil(e.length/n)&&this.setState({page:this.state.page+1})},o.prevPage=function(){this.state.page>0&&this.setState({page:this.state.page-1})},o.pageSizeChange=function(e){this.setState({page:0,pageSize:parseInt(e.target.value,10)})},o.renderHeader=function(){var e=this.props.headers;return e?Object(n.c)("thead",{className:"table-header table-row"},Object(n.c)("tr",null,e.map((function(e,t){return Object(n.c)(l,{key:t,head:!0,className:"table-header table-cell"},e)})))):null},o.renderBody=function(){var e=this.props,t=e.rows,a=e.pagination,r=this.state,o=r.page,c=r.pageSize,i=a?t.slice(o*c,o*c+c):t;return Object(n.c)("tbody",{className:"table-boddy"},i.map((function(e,t){return Object(n.c)("tr",{key:t,className:"table-row "+(t%2==0?"pair":"odd")},Object.values(e).map((function(e,a){return Object(n.c)(l,{key:""+t+a,className:"table-cell"},e)})))})))},o.renderFooter=function(){var e=this,t=this.props,a=t.rows,r=t.pagination,o=this.state,c=o.page,i=o.pageSize,s=Math.ceil(a.length/i);return r?Object(n.c)("tfoot",{className:"table-footer"},Object(n.c)("tr",null,Object(n.c)("td",{colSpan:"0"},Object(n.c)("span",{className:"pageSize"},Object(n.c)("select",{onChange:this.pageSizeChange},Object(n.c)("option",{value:5},"5"),Object(n.c)("option",{value:10},"10"),Object(n.c)("option",{value:20},"20"))),Object(n.c)("span",{className:"pagination"},"Page ",c+1," of ",s),Object(n.c)("span",{className:"pagination-change"},Object(n.c)("span",{className:0===c?"disabled":"",onClick:function(){return e.prevPage()}},"<"),Object(n.c)("span",{className:c+1>=s?"disabled":"",onClick:function(){return e.nextPage()}},">"))))):null},o.render=function(){return Object(n.c)("table",{className:"table"},this.renderHeader(),this.renderBody(),this.renderFooter())},r}(r.Component),d=b;function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}void 0!==b&&b&&b===Object(b)&&Object.isExtensible(b)&&Object.defineProperty(b,"__filemeta",{configurable:!0,value:{name:"Table",filename:"src/components/table/index.jsx"}}),a.d(t,"_frontmatter",(function(){return g})),a.d(t,"default",(function(){return h}));var g={};void 0!==g&&g&&g===Object(g)&&Object.isExtensible(g)&&Object.defineProperty(g,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/components/table/table.mdx"}});var f={_frontmatter:g},m=c.a;function h(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(o.b)(m,u({},f,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"table"},"Table"),Object(o.b)("h2",{id:"props"},"Props"),Object(o.b)(i.d,{of:d,mdxType:"Props"}),Object(o.b)("h2",{id:"basic-usage"},"Basic usage"),Object(o.b)(i.c,{__position:1,__code:"<Table\n  headers={['Id', 'Name']}\n  rows={[\n    { id: 1, name: 'uno' },\n    { id: 2, name: 'dos' },\n    { id: 3, name: 'tres' },\n  ]}\n  pagination={{ pageSize: 5 }}\n/>",__scope:{props:a,DefaultLayout:c.a,Playground:i.c,Props:i.d,Table:d},mdxType:"Playground"},Object(o.b)(d,{headers:["Id","Name"],rows:[{id:1,name:"uno"},{id:2,name:"dos"},{id:3,name:"tres"}],pagination:{pageSize:5},mdxType:"Table"})))}h&&h===Object(h)&&Object.isExtensible(h)&&Object.defineProperty(h,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/components/table/table.mdx"}}),h.isMDXComponent=!0},996:function(e,t,a){var n=a(15),r=a(337)(!1);n(n.S,"Object",{values:function(e){return r(e)}})}}]);
//# sourceMappingURL=component---src-components-table-table-mdx-d2e5767142c61e5cfa7a.js.map