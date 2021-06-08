(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{109:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return d})),a.d(t,"metadata",(function(){return O})),a.d(t,"rightToc",(function(){return j})),a.d(t,"default",(function(){return f}));var n=a(2),r=a(6),l=a(0),c=a.n(l),i=a(121),o=a(126),p=a(410),b=a(412),s=a(123);var m=()=>{const[e,t]=Object(l.useState)(.5);return c.a.createElement(o.a,{renderControl:()=>c.a.createElement(c.a.Fragment,null,c.a.createElement(p.a.Item,{label:"opacity"},c.a.createElement(b.a,{min:0,max:1,step:.1,value:e,onChange:e=>t(e),style:{width:"150px"}})))},c.a.createElement(s.F,{tileUrl:"https://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&size=1&scl=1&style=8&ltype=11",opacity:e}))},u=a(124),d={title:"TileLayer"},O={unversionedId:"references/layers/tile/tile-layer",id:"references/layers/tile/tile-layer",isDocsHomePage:!1,title:"TileLayer",description:"\u7ee7\u627f\u81ea BaseTileLayer",source:"@site/docs/references/layers/tile/tile-layer.md",slug:"/references/layers/tile/tile-layer",permalink:"/amap-react/docs/references/layers/tile/tile-layer",version:"current",sidebar:"docs",previous:{title:"\u5b98\u65b9\u56fe\u5c42",permalink:"/amap-react/docs/references/layers/tile/official"},next:{title:"FlexibleLayer",permalink:"/amap-react/docs/references/layers/tile/flexible-layer"}},j=[{value:"Props",id:"props",children:[]},{value:"Events",id:"events",children:[]},{value:"Example",id:"example",children:[]}],y={rightToc:j};function f(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},y,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"\u7ee7\u627f\u81ea ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"./base-tile-layer"}),"BaseTileLayer")),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{}),'<TileLayer tileUrl="..." />\n')),Object(i.b)(m,{mdxType:"ExampleTileLayer"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#example"}),"Source Code")),Object(i.b)("h2",{id:"props"},"Props"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5c5e\u6027\u540d"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u7c7b\u578b"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5907\u6ce8"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"...\u7ee7\u627f\u7684\u5c5e\u6027")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h2",{id:"events"},"Events"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u4e8b\u4ef6\u540d"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"\u5907\u6ce8"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)(u.a,{mdxType:"CodeBlock"},"import React, { useState } from 'react';\nimport DemoView from '../DemoView';\nimport { Form, Slider } from 'antd';\nimport { TileLayer } from '@amap/amap-react';\n\nconst TILE_URL =\n  'https://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&size=1&scl=1&style=8&ltype=11';\n\nconst ExampleTileLayer = () => {\n  const [opacity, setOpacity] = useState(0.5);\n\n  const renderControl = () => {\n    return (\n      <>\n        <Form.Item label=\"opacity\">\n          <Slider\n            min={0}\n            max={1}\n            step={0.1}\n            value={opacity}\n            onChange={(v) => setOpacity(v)}\n            style={{ width: '150px' }}\n          />\n        </Form.Item>\n      </>\n    );\n  };\n\n  return (\n    <DemoView renderControl={renderControl}>\n      <TileLayer tileUrl={TILE_URL} opacity={opacity} />\n    </DemoView>\n  );\n};\n\nexport default ExampleTileLayer;\n"))}f.isMDXComponent=!0},124:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(0),r=a.n(n),l=a(136),c=a(415);function i(e){const[t,a]=Object(n.useState)(!1);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{marginBottom:4}},r.a.createElement("span",null,"\u67e5\u770b\u6e90\u4ee3\u7801\uff1a"),r.a.createElement(c.a,{checked:t,onChange:e=>a(e)})),t&&r.a.createElement(l.a,null,e.children))}},126:function(e,t,a){"use strict";var n=a(2),r=a(0),l=a.n(r),c=a(410),i=a(134),o=a(123),p=(a(47),l.a.forwardRef((function(e,t){var a=e.hideControl,p=e.renderControl,b=void 0===p?function(){return null}:p,s=Object(r.useRef)(void 0);Object(r.useImperativeHandle)(t,(function(){return s.current}),[s.current]);var m=Object(r.useState)(14),u=m[0],d=m[1],O=Object(r.useState)([116.473778,39.990661]),j=O[0],y=O[1],f=Object(r.useCallback)((function(t){t.setFitView(null,!0),e.onMapComplete&&e.onMapComplete(t)}),[]),h=Object(r.useCallback)((function(t,a){e.onMapClick&&e.onMapClick(t,a)}),[]),v=Object.assign({viewMode:"3D",mapStyle:"amap://styles/whitesmoke",isHotspot:!1,showIndoorMap:!1,center:j,zoom:u,onZoomChange:Object(r.useCallback)((function(e){return d(e.getZoom())}),[]),onMapMove:Object(r.useCallback)((function(e){var t=e.getCenter();y([t.getLng(),t.getLat()])}),[])},e.mapOptions),g=Object.assign({width:"100%",height:"400px"},e.mapStyle),x=b();return l.a.createElement(i.a,null,(function(){return l.a.createElement("div",{className:"demo-view",style:{width:"100%"}},!a&&l.a.createElement(c.a,{className:"control",layout:"inline",size:"small",style:{padding:"10px 0px",position:"relative"}},x),l.a.createElement("div",{className:"map",style:g},l.a.createElement(o.a,Object(n.a)({ref:s},v,{onComplete:f,onClick:h}),e.children)))}))})));t.a=p}}]);