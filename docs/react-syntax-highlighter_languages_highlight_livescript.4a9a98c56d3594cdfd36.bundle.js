(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1468:function(e,n){e.exports=function(e){var n={keyword:"in if for while finally new do return else break catch instanceof throw try this switch continue typeof delete debugger case default function var with then unless until loop of by when and or is isnt not it that otherwise from to til fallthrough super case default function var void const let enum export import native __hasProp __extends __slice __bind __indexOf",literal:"true false null undefined yes no on off it that void",built_in:"npm require console print module global window document"},s="[A-Za-z$_](?:-[0-9A-Za-z$_]|[0-9A-Za-z$_])*",i=e.inherit(e.TITLE_MODE,{begin:s}),a={className:"subst",begin:/#\{/,end:/}/,keywords:n},t={className:"subst",begin:/#[A-Za-z$_]/,end:/(?:\-[0-9A-Za-z$_]|[0-9A-Za-z$_])*/,keywords:n},o=[e.BINARY_NUMBER_MODE,{className:"number",begin:"(\\b0[xX][a-fA-F0-9_]+)|(\\b\\d(\\d|_\\d)*(\\.(\\d(\\d|_\\d)*)?)?(_*[eE]([-+]\\d(_\\d|\\d)*)?)?[_a-z]*)",relevance:0,starts:{end:"(\\s*/)?",relevance:0}},{className:"string",variants:[{begin:/'''/,end:/'''/,contains:[e.BACKSLASH_ESCAPE]},{begin:/'/,end:/'/,contains:[e.BACKSLASH_ESCAPE]},{begin:/"""/,end:/"""/,contains:[e.BACKSLASH_ESCAPE,a,t]},{begin:/"/,end:/"/,contains:[e.BACKSLASH_ESCAPE,a,t]},{begin:/\\/,end:/(\s|$)/,excludeEnd:!0}]},{className:"regexp",variants:[{begin:"//",end:"//[gim]*",contains:[a,e.HASH_COMMENT_MODE]},{begin:/\/(?![ *])(\\\/|.)*?\/[gim]*(?=\W|$)/}]},{begin:"@"+s},{begin:"``",end:"``",excludeBegin:!0,excludeEnd:!0,subLanguage:"javascript"}];a.contains=o;var d={className:"params",begin:"\\(",returnBegin:!0,contains:[{begin:/\(/,end:/\)/,keywords:n,contains:["self"].concat(o)}]};return{aliases:["ls"],keywords:n,illegal:/\/\*/,contains:o.concat([e.COMMENT("\\/\\*","\\*\\/"),e.HASH_COMMENT_MODE,{className:"function",contains:[i,d],returnBegin:!0,variants:[{begin:"("+s+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B\\->\\*?",end:"\\->\\*?"},{begin:"("+s+"\\s*(?:=|:=)\\s*)?!?(\\(.*\\))?\\s*\\B[-~]{1,2}>\\*?",end:"[-~]{1,2}>\\*?"},{begin:"("+s+"\\s*(?:=|:=)\\s*)?(\\(.*\\))?\\s*\\B!?[-~]{1,2}>\\*?",end:"!?[-~]{1,2}>\\*?"}]},{className:"class",beginKeywords:"class",end:"$",illegal:/[:="\[\]]/,contains:[{beginKeywords:"extends",endsWithParent:!0,illegal:/[:="\[\]]/,contains:[i]},i]},{begin:s+":",end:":",returnBegin:!0,returnEnd:!0,relevance:0}])}}}}]);