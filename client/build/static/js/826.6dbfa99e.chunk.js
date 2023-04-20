"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[826],{7047:function(n,t,e){e.d(t,{Z:function(){return A}});var r=e(168),i=e(3366),o=e(7462),a=e(2791),s=e(8182),c=e(2554),u=e(4419);function l(n){return String(n).match(/[\d.\-+]*\s*(.*)/)[1]||""}function d(n){return parseFloat(n)}var h=e(2065),v=e(6934),f=e(1402),m=e(5878),p=e(1217);function g(n){return(0,p.Z)("MuiSkeleton",n)}(0,m.Z)("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);var b,k,w,Z,y,S,C,R,x=e(184),M=["animation","className","component","height","style","variant","width"],N=(0,c.F4)(y||(y=b||(b=(0,r.Z)(["\n  0% {\n    opacity: 1;\n  }\n\n  50% {\n    opacity: 0.4;\n  }\n\n  100% {\n    opacity: 1;\n  }\n"])))),P=(0,c.F4)(S||(S=k||(k=(0,r.Z)(["\n  0% {\n    transform: translateX(-100%);\n  }\n\n  50% {\n    /* +0.5s of delay between each loop */\n    transform: translateX(100%);\n  }\n\n  100% {\n    transform: translateX(100%);\n  }\n"])))),j=(0,v.ZP)("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:function(n,t){var e=n.ownerState;return[t.root,t[e.variant],!1!==e.animation&&t[e.animation],e.hasChildren&&t.withChildren,e.hasChildren&&!e.width&&t.fitContent,e.hasChildren&&!e.height&&t.heightAuto]}})((function(n){var t=n.theme,e=n.ownerState,r=l(t.shape.borderRadius)||"px",i=d(t.shape.borderRadius);return(0,o.Z)({display:"block",backgroundColor:t.vars?t.vars.palette.Skeleton.bg:(0,h.Fq)(t.palette.text.primary,"light"===t.palette.mode?.11:.13),height:"1.2em"},"text"===e.variant&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:"".concat(i).concat(r,"/").concat(Math.round(i/.6*10)/10).concat(r),"&:empty:before":{content:'"\\00a0"'}},"circular"===e.variant&&{borderRadius:"50%"},"rounded"===e.variant&&{borderRadius:(t.vars||t).shape.borderRadius},e.hasChildren&&{"& > *":{visibility:"hidden"}},e.hasChildren&&!e.width&&{maxWidth:"fit-content"},e.hasChildren&&!e.height&&{height:"auto"})}),(function(n){return"pulse"===n.ownerState.animation&&(0,c.iv)(C||(C=w||(w=(0,r.Z)(["\n      animation: "," 1.5s ease-in-out 0.5s infinite;\n    "]))),N)}),(function(n){var t=n.ownerState,e=n.theme;return"wave"===t.animation&&(0,c.iv)(R||(R=Z||(Z=(0,r.Z)(["\n      position: relative;\n      overflow: hidden;\n\n      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */\n      -webkit-mask-image: -webkit-radial-gradient(white, black);\n\n      &::after {\n        animation: "," 1.6s linear 0.5s infinite;\n        background: linear-gradient(\n          90deg,\n          transparent,\n          ",",\n          transparent\n        );\n        content: '';\n        position: absolute;\n        transform: translateX(-100%); /* Avoid flash during server-side hydration */\n        bottom: 0;\n        left: 0;\n        right: 0;\n        top: 0;\n      }\n    "]))),P,(e.vars||e).palette.action.hover)})),A=a.forwardRef((function(n,t){var e=(0,f.Z)({props:n,name:"MuiSkeleton"}),r=e.animation,a=void 0===r?"pulse":r,c=e.className,l=e.component,d=void 0===l?"span":l,h=e.height,v=e.style,m=e.variant,p=void 0===m?"text":m,b=e.width,k=(0,i.Z)(e,M),w=(0,o.Z)({},e,{animation:a,component:d,variant:p,hasChildren:Boolean(k.children)}),Z=function(n){var t=n.classes,e=n.variant,r=n.animation,i=n.hasChildren,o=n.width,a=n.height,s={root:["root",e,r,i&&"withChildren",i&&!o&&"fitContent",i&&!a&&"heightAuto"]};return(0,u.Z)(s,g,t)}(w);return(0,x.jsx)(j,(0,o.Z)({as:d,ref:t,className:(0,s.Z)(Z.root,c),ownerState:w},k,{style:(0,o.Z)({width:b,height:h},v)}))}))},1582:function(n,t,e){e.d(t,{Z:function(){return M}});var r=e(4942),i=e(3366),o=e(7462),a=e(2791),s=e(8182),c=e(2466),u=e(4419),l=e(1217),d=(0,e(4046).ZP)(),h=e(8691),v=e(8519),f=e(5080),m=e(1184),p=e(5682),g=e(184),b=["component","direction","spacing","divider","children","className"],k=(0,f.Z)(),w=d("div",{name:"MuiStack",slot:"Root",overridesResolver:function(n,t){return t.root}});function Z(n){return(0,h.Z)({props:n,name:"MuiStack",defaultTheme:k})}function y(n,t){var e=a.Children.toArray(n).filter(Boolean);return e.reduce((function(n,r,i){return n.push(r),i<e.length-1&&n.push(a.cloneElement(t,{key:"separator-".concat(i)})),n}),[])}var S=function(n){var t=n.ownerState,e=n.theme,i=(0,o.Z)({display:"flex",flexDirection:"column"},(0,m.k9)({theme:e},(0,m.P$)({values:t.direction,breakpoints:e.breakpoints.values}),(function(n){return{flexDirection:n}})));if(t.spacing){var a=(0,p.hB)(e),s=Object.keys(e.breakpoints.values).reduce((function(n,e){return("object"===typeof t.spacing&&null!=t.spacing[e]||"object"===typeof t.direction&&null!=t.direction[e])&&(n[e]=!0),n}),{}),u=(0,m.P$)({values:t.direction,base:s}),l=(0,m.P$)({values:t.spacing,base:s});"object"===typeof u&&Object.keys(u).forEach((function(n,t,e){if(!u[n]){var r=t>0?u[e[t-1]]:"column";u[n]=r}}));i=(0,c.Z)(i,(0,m.k9)({theme:e},l,(function(n,e){return{"& > :not(style) + :not(style)":(0,r.Z)({margin:0},"margin".concat((i=e?u[e]:t.direction,{row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"}[i])),(0,p.NA)(a,n))};var i})))}return i=(0,m.dt)(e.breakpoints,i)};var C=e(6934),R=e(1402),x=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.createStyledComponent,e=void 0===t?w:t,r=n.useThemeProps,c=void 0===r?Z:r,d=n.componentName,h=void 0===d?"MuiStack":d,f=e(S),m=a.forwardRef((function(n,t){var e=c(n),r=(0,v.Z)(e),a=r.component,d=void 0===a?"div":a,m=r.direction,p=void 0===m?"column":m,k=r.spacing,w=void 0===k?0:k,Z=r.divider,S=r.children,C=r.className,R=(0,i.Z)(r,b),x={direction:p,spacing:w},M=(0,u.Z)({root:["root"]},(function(n){return(0,l.Z)(h,n)}),{});return(0,g.jsx)(f,(0,o.Z)({as:d,ownerState:x,ref:t,className:(0,s.Z)(M.root,C)},R,{children:Z?y(S,Z):S}))}));return m}({createStyledComponent:(0,C.ZP)("div",{name:"MuiStack",slot:"Root",overridesResolver:function(n,t){return t.root}}),useThemeProps:function(n){return(0,R.Z)({props:n,name:"MuiStack"})}}),M=x}}]);
//# sourceMappingURL=826.6dbfa99e.chunk.js.map