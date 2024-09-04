"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[273],{1195:function(e,t,a){a.d(t,{k:function(){return d}});var i=a(5893),r=a(9262),n=a(917),o=a(6010),s=a(4674);let l=(0,r.ZP)("div")(e=>{let{theme:t,align:a}=e;return(0,n.iv)`
	display: grid;
	grid-template-columns: 1fr;
	gap: 0.5rem;
	align-items: center;

	&.is-center {
		justify-content: center;
	}

	&.is-end {
		justify-content: end;
	}

	&.is-start {
		justify-content: start;
	}

	${t.breakpoints.up("sm")} {
		display: flex;
		flex-wrap: nowrap;
	}
`}),d=e=>{let{actions:t,max:a=2,className:r="",children:n,align:d="start",size:c="medium",color:h="tertiary"}=e;return(0,i.jsxs)(l,{className:(0,o.Z)(r,"ActionStack-root",`is-${d}`),children:[n,t?.slice(0,a).map((e,t)=>{let{label:a,...r}=e;return i.jsx(s.z,{size:c,color:h,...r,children:a},t)})]})}},6175:function(e,t,a){a.d(t,{g:function(){return d}});var i=a(5893),r=a(9262),n=a(8794),o=a(6010),s=a(402);let l=(0,r.ZP)("div",(0,s._e)("hasNoDefaultMargin","color","isRounded","isClipped","isFloating","hasNoHorizontalPadding"))(e=>{let{theme:t,color:a,hasNoDefaultMargin:i,hasNoHorizontalPadding:r,isClipped:o,isRounded:s=!1,isFloating:l}=e,d=a??"default",c="default"===d?"transparent":`var(--color-brand-${d}-lighter)`;return(0,n.iv)`
		--section-padding-block: var(--section-mobile-padding-block);
		--section-padding-inline: var(--section-mobile-padding-inline);
		--section-margin-inline: 0rem;
		--section-border-radius: none;

		${t.breakpoints.up("md")} {
			--section-padding-block: var(--section-tablet-padding-block);
			--section-padding-inline: ${r?"unset":"var(--section-tablet-padding-inline)"};
			--section-margin-inline: var(--section-tablet-margin-inline);
			--section-border-radius: 0.5rem;
		}

		${t.breakpoints.up("xl")} {
			--section-padding-block: var(--section-desktop-padding-block);
			--section-padding-inline: ${r?"unset":"var(--section-tablet-padding-inline)"};
		}

		background-color: transparent;
		border-top: solid 1px ${c};
		border-right: unset;
		border-bottom: solid 1px ${c};
		border-left: unset;
		position: relative;

		padding-block: var(--section-padding-block);
		padding-inline: var(--section-padding-inline);
		margin-inline: ${i?"unset":"var(--section-margin-inline)"};
		border-radius: ${s?"var(--section-border-radius)":"none"};

		overflow: ${o?"hidden":"unset"};

		${t.breakpoints.up("md")} {
			border-top: solid 1px ${c};
			border-right: solid 1px ${c};
			border-bottom: solid 1px ${c};
			border-left: solid 1px ${c};
			box-shadow: ${l?"var(--elevation-4)":"none"};
		}

		${t.breakpoints.up("xl")} {
			border-radius: ${s?"var(--section-border-radius)":"none"};
		}
	`}),d=e=>{let{className:t,children:a,...r}=e;return(0,i.jsx)(l,{...r,className:(0,o.Z)("Block-root",t),children:a})}},5526:function(e,t,a){a.d(t,{o:function(){return o}});var i=a(5893),r=a(6829);let n=r.Z.span`
	position: absolute;
	display: flex;
	flex-direction: row;
	gap: 0.06em;
	left: 0.07em;
	bottom: -0.09em;

	div {
		width: 0.25em;
		height: 0.25em;
		border-radius: 50%;

		&:nth-of-type(1) {
			background: var(--color-brand-cyan-main);
		}

		&:nth-of-type(2) {
			background: var(--color-brand-magenta-main);
		}

		&:nth-of-type(3) {
			background: var(--color-brand-yellow-main);
		}

		&:nth-of-type(4) {
			background: var(--color-brand-key-main);
		}
	}
`,o=()=>(0,i.jsxs)(n,{children:[(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{}),(0,i.jsx)("div",{})]})},4886:function(e,t,a){a.d(t,{W:function(){return l}});var i=a(5893),r=a(9262),n=a(8794),o=a(402),s=a(6010);let l=(0,r.ZP)(e=>{let{className:t="",children:a,ref:r,...n}=e;return(0,i.jsx)("div",{ref:r,className:(0,s.Z)("Container-root",t),...n,children:a})},(0,o._e)("ref","size"))(e=>{let{theme:t,size:a="medium"}=e,i={small:`${t.breakpoints.values.md}`,medium:`${t.breakpoints.values.lg}`,large:`${t.breakpoints.values.xl}`}[a??"medium"];return(0,n.iv)`
		width: 100%;
		margin-inline: auto;
		max-width: ${i}px;
	`})},6726:function(e,t,a){a.d(t,{H:function(){return eW}});var i=a(5893),r=a(4969),n=a(3637),o=a(9262),s=a(1163),l=a(7294);let d=()=>{let e=(0,s.useRouter)(),t={Home:"/",Services:"/services","About Us":"/about",Estimate:"/estimate"};return Object.keys(t).map(a=>({label:a,href:`${e.basePath}${t[a]}`,selected:e.pathname===t[a]}))};var c=()=>{let[e,t]=(0,l.useState)(0);return(0,l.useEffect)(()=>{let e=()=>{t(window.pageYOffset)};return window.addEventListener("scroll",e),e(),()=>{window.removeEventListener("scroll",e)}},[]),e},h=a(1195),m=a(2641),p=a(9057),u=a(8078),g=a(402);let f=(0,o.ZP)(u.Z,(0,g._e)("endIcon","startIcon","size"))`
	cursor: pointer;
	display: inline-flex;
	align-items: center;
	justify-content: center;

	border-radius: 0.25rem;
	height: 2.5rem;
	aspect-ratio: 1;
`,b=(0,l.forwardRef)((e,t)=>{let{children:a,Icon:r,...n}=e;return(0,i.jsx)(f,{...n,ref:t,role:"button",children:a||(r?(0,i.jsx)(r,{}):null)})});b.displayName="IconButtonBase";let y=(0,o.ZP)(b)`
	border-radius: 9999px;
	background-color: var(--color-brand-key-lightest);
	height: 2rem;

	&:hover {
		background-color: var(--color-brand-key-lighter);
	}
`,v=(0,o.ZP)("div")(e=>{let{hasBorder:t}=e;return`
	padding: ${P};

	display: grid;
	grid-template-columns: 1fr auto;
	gap: 1rem;
	align-items: center;
	flex: none;

	${t?"border-bottom: solid 1px var(--color-brand-key-lighter);":""}
`}),x=(0,o.ZP)("div")(e=>{let{theme:t}=e;return`
	width: 100vw;
	height: 100%;
	display: flex;
	flex-direction: column;

	${t.breakpoints.up("sm")} {
		max-width: 25rem;
	}
`});var w=a(6829);let k=w.Z.ul`
	font-size: 2.5rem;

	list-style: none;
	display: grid;
	grid-template-columns: 1fr;
	place-items: start;
	place-content: start;
	gap: 1.25rem;

	margin: unset;
	padding: 2rem 1rem;
	flex: 1;
	border-top: solid 1px var(--color-brand-key-lighter);

	background-color: var(--color-brand-key-lightest);

	&:nth-last-of-type(1) {
		background-color: var(--color-white);
		flex: none;
		font-size: 2rem;
	}
`,j=w.Z.li`
	display: block;
`,Z=w.Z.a`
	display: flex;
	font-size: inherit;
	font-weight: 700;
	line-height: 1;

	opacity: 0.5;
	text-decoration: unset;
	color: var(--color-brand-key-main);

	&[aria-current='page'] {
		opacity: 1;
		text-decoration: underline;
		text-underline-offset: 0.125em;

		&:nth-of-type(1) {
			text-decoration-color: var(--color-brand-cyan-main);
		}
		&:nth-of-type(2) {
			text-decoration-color: var(--color-brand-magenta-main);
		}
		&:nth-of-type(3) {
			text-decoration-color: var(--color-brand-yellow-main);
		}
	}
`,I=e=>{let{navigationItems:t,actions:a,onCloseButtonClick:r}=e,n=(0,s.useRouter)();return console.log({actions:a}),(0,i.jsxs)(x,{children:[(0,i.jsxs)(v,{children:[(0,i.jsx)(p.X,{level:4,children:"Menu"}),(0,i.jsx)(y,{onClick:r,children:(0,i.jsx)(m.Z,{fontSize:"small"})})]}),(0,i.jsx)(k,{children:t?.map((e,t)=>{let{label:a,href:r}=e;return i.jsx(j,{children:i.jsx(Z,{href:r,"aria-current":n.pathname===r?"page":"false",children:a})},t)})}),(0,i.jsx)(k,{children:a?.map((e,t)=>i.jsx(j,{children:i.jsx(Z,{href:e.href,children:e.label})},t))})]})},$=(0,o.ZP)(b)`
	grid-area: mobile-menu;

	&:hover {
		background-color: var(--color-brand-key-lighter);
	}
`;var C=a(1452),S=a(8468),z=a(8489);let P="1rem",T=e=>{let{items:t,actions:a,open:r}=e,[n,o]=(0,S.Z)({controlled:r,default:!1,name:"DrawerMenu Open State"}),s=()=>{o(!1)};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)($,{size:"small",className:"MenuTrigger-root",onClick:()=>{o(!0)},children:n?(0,i.jsx)(m.Z,{}):(0,i.jsx)(C.Z,{})}),(0,i.jsx)(z.ZP,{anchor:"left",open:n,onClose:s,children:(0,i.jsx)(I,{navigationItems:t,actions:a,onCloseButtonClick:s})})]})},N=w.Z.div`
	flex-grow: 1;
`,A=()=>(0,i.jsx)(N,{});var E=a(5272);let q="text",M="large",U=(0,o.ZP)("a")`
	text-decoration: unset;
	cursor: pointer;

	display: var(--input-display);
	align-items: var(--input-align-items);

	font-weight: var(--button-font-weight);
	font-size: var(--input-font-size-${M});
	letter-spacing: var(--button-letter-spacing);

	background-color: var(--button-background-color-${q});
	box-shadow: var(--button-shadow-${q});
	color: var(--button-text-color-${q});
	border: var(--button-border-${q});
	border-radius: var(--button-bezel-${M});

	padding-inline: var(--input-spacing-padding-inline-${M});
	line-height: var(--input-height-${M});
	height: var(--input-height-${M});
	white-space: nowrap;

	& svg {
		height: var(--input-group-action-size-${M});
		width: var(--input-group-action-size-${M});
	}

	&:hover,
	&[aria-current='true'] {
		text-decoration: var(--button-text-decoration-${q});
		text-underline-offset: var(--button-text-offset-${q});
		text-decoration-thickness: var(--button-text-thickness-${q});

		&:nth-of-type(1n) {
			text-decoration-color: var(--sequence-color-0-main);
		}
		&:nth-of-type(2n) {
			text-decoration-color: var(--sequence-color-1-main);
		}
		&:nth-of-type(3n) {
			text-decoration-color: var(--sequence-color-2-main);
		}
		&:nth-of-type(4n) {
			text-decoration-color: var(--sequence-color-3-main);
		}
	}
`,B=e=>{let{label:t,children:a,selected:r,icon:n,hasSubmenu:o,...s}=e;return(0,i.jsxs)(U,{"aria-current":r,...s,children:[n,a??t,o&&(0,i.jsx)(E.Z,{})]})};var D=a(1202),G=a(2985),_=a(8878);let H=e=>{let{FlyoutComponent:t,children:a,items:r}=e,[n,o]=(0,l.useState)(void 0),s=!!n,d=()=>{o(void 0)},c={open:s,anchorEl:n,onClose:d,anchorOrigin:{vertical:"bottom",horizontal:"left"},disableScrollLock:!0,disablePortal:!0,transitionDuration:200};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(B,{hasSubmenu:!0,selected:s,"aria-controls":s?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":s?"true":void 0,onClick:e=>{o(e.currentTarget)},children:a}),t?(0,i.jsx)(D.ZP,{...c,children:(0,i.jsx)(t,{})}):(0,i.jsx)(G.Z,{...c,MenuListProps:{"aria-labelledby":"basic-button",sx:{minWidth:"10rem"}},children:r?.map((e,t)=>i.jsx(_.Z,{onClick:()=>{d()},children:e.label},t))})]})};var J=a(917);let F=(0,o.ZP)("nav")(e=>{let{theme:t}=e;return(0,J.iv)`
		gap: 0;
		display: none;

		${t.breakpoints.up("md")} {
			display: flex;
		}
	`}),O=e=>{let{items:t,children:a}=e;return(0,i.jsxs)(F,{className:"NavItems-root",children:[t?.map((e,t)=>{let{label:a,subItems:r,...n}=e;return r?i.jsx(H,{items:r,...n,children:a},t):i.jsx(B,{...n,children:a},t)}),a]})};var L=a(4886);let W=(0,o.ZP)("header",(0,g._e)("isBranded","isScrolled"))(e=>{let{theme:t,isScrolled:a}=e;return(0,J.iv)`
		position: sticky;
		top: 0;
		transition: all 300ms;
		border-bottom-style: solid;
		border-bottom-width: 1px;
		background-color: ${a?"white":"transparent"};
		border-bottom-color: ${a?"var(--color-brand-key-lightest)":"transparent"};
		z-index: 999;

		display: flex;
		align-items: center;
		padding-block: 0.5rem;
		padding-inline: var(--section-mobile-padding-inline) 0.5rem;
		height: var(--header-bar-height-mobile);

		${t.breakpoints.up("md")} {
			padding-inline: var(--section-tablet-padding-inline);
			height: var(--header-bar-height-desktop);
		}

		${t.breakpoints.up("xl")} {
			padding-inline: var(--section-widescreen-padding-inline);
		}
	`}),R=e=>{let{children:t,...a}=e;return(0,i.jsx)(W,{...a,children:(0,i.jsx)(L.W,{children:t})})},Q=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,J.iv)`
		display: flex;
		align-items: center;
		gap: 1rem;

		font-size: 1rem;

		.NavItems-root {
			display: none;
		}

		.ActionStack-root {
			display: none;
		}

		.MenuTrigger-root {
			display: inline-flex;
		}

		${t.breakpoints.up("sm")} {
			border-bottom-color: transparent;

			.ActionStack-root {
				display: flex;
			}
		}

		${t.breakpoints.up("md")} {
			.NavItems-root {
				display: flex;
			}

			.MenuTrigger-root {
				display: none;
			}
		}

		font-size: 1.25rem;
	`});var X=a(9259);let Y=e=>{let{actions:t,className:a}=e,r=d(),n=c(),o=(0,l.useMemo)(()=>n>4,[n]);return(0,i.jsx)(R,{className:a,isScrolled:o,children:(0,i.jsxs)(Q,{children:[(0,i.jsx)(X.Z,{}),(0,i.jsx)(O,{items:r}),(0,i.jsx)(A,{}),(0,i.jsx)(h.k,{actions:t}),(0,i.jsx)(T,{items:r,actions:t})]})})};var K=a(9195),V=a(9838),ee=a(6105),et=a(3382),ea=a(4693),ei=a(3367),er=a(4246),en=a(6175),eo=a(1594),es=a(6176);let el=w.Z.div`
	border-radius: var(--shape-rounding-medium);
	border: var(--input-border-composite);
	overflow: hidden;
	aspect-ratio: 1.5/1;

	iframe {
		border: none;
	}
`,ed=()=>(0,i.jsx)(el,{children:(0,i.jsx)("iframe",{title:"google-embed",src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.643569104135!2d-118.27879712514893!3d34.027358973166265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7e7881aa24d%3A0x44058a082ba5069e!2sFashion%20Greek%20USC!5e0!3m2!1sen!2sus!4v1681753959240!5m2!1sen!2sus",width:"100%",height:"100%",referrerPolicy:"no-referrer-when-downgrade"})}),ec="As a leading printing-service company, we are dedicated to providing high-quality printing solutions to our clients. With a team of experienced professionals and state-of-the-art printing equipment, we deliver exceptional results that meet and exceed our clients' expectations.",eh="\uD83D\uDCAC Get a Quote",em="✉️ Contact Us",ep="We're here to help! If you have any questions or inquiries about our printing services, feel free to get in touch with us. You can contact us through the following channels:",eu=[{label:"Phone",displayName:"+1 (323) 379-3728",href:"tel:323-379-3728"},{label:"Email",displayName:"graphixcollab@gmail.com",href:"mailto:graphixcollab@gmail.com"},{label:"Address",displayName:"2626 S Figueroa St A, Los Angeles, CA 90007",href:"https://goo.gl/maps/g3bKdJBYSRZvvmpaA"}],eg=["\xa9Copyright 2015-2020, FashionGreek, USC.","Made with ❤️ by Crealgo, LLC. All rights reserved."],ef=(0,o.ZP)("footer")`
	margin-top: 4rem;
`,eb=(0,o.ZP)("div")`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: 3rem;
`,ey=(0,o.ZP)("div")(e=>{let{theme:t}=e;return(0,J.iv)`
	display: grid;
	row-gap: 3rem;
	column-gap: 1.5rem;
	grid-template-columns: 1fr;

	${t.breakpoints.up("md")} {
		grid-template-columns: 1fr 1.5fr;
	}
`}),ev=(0,o.ZP)(en.g)(e=>{let{theme:t}=e;return(0,J.iv)`
	background-color: var(--color-brand-key-lightest);
	padding-block: 2rem !important;

	.Container-root {
		display: grid;
		gap: 0.5rem;
		grid-template-columns: 1fr;
		align-items: center;

		.leftContent {
			display: grid;
			grid-template-columns: 1fr;
			gap: 0.25rem;
			justify-items: center;
		}

		${t.breakpoints.up("md")} {
			grid-template-columns: minmax(auto, 1fr) auto;
			flex-direction: row;
			gap: 1.5rem;
		}
	}
`}),ex=()=>(0,i.jsxs)(ea.Z,{gap:"0.25rem",direction:"row",children:[(0,i.jsx)(ei.Z,{size:"small",children:(0,i.jsx)(V.Z,{fontSize:"small"})}),(0,i.jsx)(ei.Z,{size:"small",children:(0,i.jsx)(et.Z,{fontSize:"small"})}),(0,i.jsx)(ei.Z,{size:"small",children:(0,i.jsx)(ee.Z,{fontSize:"small"})})]}),ew=(0,o.ZP)("div")`
	display: grid;
	grid-template-columns: 1fr;
	align-content: start;
	gap: 0.25rem;
`,ek=(0,o.ZP)("ul")`
	display: grid;
	padding-block: 0.75rem;
	gap: 0.75rem;
	padding: unset;
	list-style: none;

	& *:first-of-type {
		font-weight: bold;
	}
`,ej=(0,o.ZP)(en.g)`
	background-color: var(--color-gray-100);
`,eZ=()=>(0,i.jsxs)(ef,{children:[(0,i.jsx)(ej,{hasNoDefaultMargin:!0,color:"grey",children:(0,i.jsx)(L.W,{children:(0,i.jsxs)(ey,{children:[(0,i.jsxs)(eb,{children:[(0,i.jsxs)(ew,{children:[(0,i.jsx)(er.Z,{gutterBottom:!0,variant:"h3",children:(0,i.jsx)(X.Z,{})}),(0,i.jsx)(es.x,{size:"medium",children:ec})]}),(0,i.jsxs)(ew,{children:[(0,i.jsx)(er.Z,{variant:"h5",children:eh}),(0,i.jsx)(es.x,{size:"medium",children:ec}),(0,i.jsx)("br",{}),(0,i.jsx)(h.k,{actions:[{label:"Get a Quote",href:"/estimate",endIcon:(0,i.jsx)(K.Z,{})}]})]}),(0,i.jsxs)(ew,{children:[(0,i.jsx)(er.Z,{variant:"h5",children:"\uD83D\uDD17 Quick Links"}),(0,i.jsxs)(ek,{children:[(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/contact-us",children:"Contact Us"})}),(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/estimate",children:"Get an Estimate"})}),(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/terms/privacy-policy",children:"Privacy Policy"})}),(0,i.jsx)("li",{children:(0,i.jsx)(eo.r,{href:"/terms/terms-and-conditions",children:"Terms and Conditions"})})]})]})]}),(0,i.jsxs)(eb,{children:[(0,i.jsxs)(ew,{children:[(0,i.jsx)(er.Z,{gutterBottom:!0,variant:"h5",children:"\uD83D\uDCCD Stop by our office"}),(0,i.jsx)(ed,{})]}),(0,i.jsxs)(ew,{children:[(0,i.jsx)(er.Z,{gutterBottom:!0,variant:"h5",children:em}),(0,i.jsx)(es.x,{size:"medium",children:ep}),(0,i.jsx)(ek,{children:eu.map((e,t)=>(0,i.jsxs)("li",{children:[(0,i.jsx)(es.x,{children:e.label}),(0,i.jsx)(eo.r,{href:e.href,children:e.displayName})]},t))})]})]})]})})}),(0,i.jsx)(ev,{hasNoDefaultMargin:!0,children:(0,i.jsxs)(L.W,{children:[(0,i.jsx)("div",{className:"leftContent",children:eg.map((e,t)=>(0,i.jsx)(er.Z,{variant:"caption",children:e},t))}),(0,i.jsx)("div",{className:"rightContent",children:(0,i.jsx)(ex,{})})]})})]});var eI=a(1320),e$=a(6028),eC=JSON.parse('[{"id":"bd45b0d1-9611-4f66-8b43-9cc24bf1d46f","name":"LaToya J.","image":"https://s3-media0.fl.yelpcdn.com/photo/cIsVun9UkWDRD4SuUeX8UA/60s.jpg","text":"My husband and I had our business merch printed with our logo here, and we were so pleased with the product! It was a quick turnaround, and everything came out even better than we had expected. The cost was also much less than a previous place we had used- and we received better service. We highly recommend and can\'t wait to continue doing business with them in the future."},{"id":"af0481fb-5ccf-4e6f-a246-8d077f385fe2","name":"Emily B.","image":"https://s3-media0.fl.yelpcdn.com/photo/X5I9hU1ORSRKaIH9kq9ezQ/60s.jpg","text":"James was so kind and helped me place my sash order in less than an hour! So happy with the service"},{"id":"f6707824-bc1d-4aee-9876-e25939884422","name":"Josh B.","image":"https://s3-media0.fl.yelpcdn.com/photo/tm7QdkAN6arVpRxXLIc52g/60s.jpg","text":"Fast and friendly service! Reached out to this place to get a custom flag made and was very pleased with the overall experience. I emailed them on a Monday morning to submit my design and get a quote, my flag was ready for pickup by Thursday morning. Only 3 days, so fast! Overall, I\'m super happy I came here to get my flag made given the quality of the finished product, professional service, quick turnaround, and price I paid.Parking: Street parking available right outside the store."},{"id":"18bd058d-6358-4102-9371-a2c8d23be707","name":"Elite 24","image":"https://s3-media0.fl.yelpcdn.com/photo/0ewo6zcB2Ajep3eCIZPBIw/60s.jpg","text":"A top-notch establishment that has all your graduation sash needs! I went in needing to get my sash custom embroidered ASAP and James was so sweet and helpful! I was able to describe to him my vision and he brought it to life with only several, quick emails! I was so impressed by not only the efficiency of this place but also the quality and care they provide to their customers. BONUS - the grand total was also wayyy cheaper than the USC bookstore and other places in the surrounding area! My piggy bank is happy, I am happy, and could not thank James and the team at Fashion Greek more!"},{"id":"70233586-1650-4a52-8b66-c157669cd548","name":"Bisola O.","image":"https://s3-media0.fl.yelpcdn.com/photo/wH7-Tx14h0SVdIprAuThvg/60s.jpg","text":"This is my 5 star review.Been going here for a while.Got some quality embroidery done here and have been Uber happy since.Catwoman bro.Catwoman."},{"id":"089e707f-270d-4fd3-ba36-6cc280087dd5","name":"Michael P.","image":"https://s3-media0.fl.yelpcdn.com/photo/Jz7gC2zYLGq5_aZX3TBVAg/60s.jpg","text":"Mark and James are fantastic  I have been regularly getting my designs done on prints stickers and apparel for over a year! Fantastic work, service, and communication. Love this place it will have my business 4L"},{"id":"a999d93d-32de-4c91-b9d4-2fec5a47a414","name":"Elite 24","image":"https://s3-media0.fl.yelpcdn.com/photo/p-E61gssDUsSoSU061Xedw/60s.jpg","text":"High quality clothing and good customer service. You can literally print whatever you want on anything. Also, you can get a fresh haircut from Hector and some food. And there\'s always great music playing. Fashion Greek is definitely the #1 place to go if you want customized clothing even if you\'re not in a frat/sorority. Items that can be printed on include hats, fanny packs, converse, backpacks, socks and more."},{"id":"ee652659-33ab-43ec-99f8-50014afe4130","name":"Le F.","image":"https://s3-media0.fl.yelpcdn.com/photo/PnbvijOdqAAzkCtTHaueZw/60s.jpg","text":"Most helpful staff.  Very accommodating to what I needed.  Nice owner with a lot of history."},{"id":"f5b983bc-0770-4235-9624-4d76075021ce","name":"Joanne B.","image":"https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2.yji-19e0a8ff85b15f4bbd79.png","text":"After trying to design my daughter\'s graduation stole/sash, I sought professional assistance instead. Schedule your zoom or in-person appt via the link found in the COVID-19 section in their Yelp or from their website. The reminders are fantastic. James is the designer for my daughter\'s graduation stole/sash. His professional expertise and quick editing skills had me at ease and proud of the upcoming result. Tips before your appt:- \\"Class of 202- \\" and \\"USC\\" with shield is standard- Bring a list of desired titles, affiliations, honors, college(s), degree(s), logos, seals, quotes, full name of graduate, etc. Easier to delete or edit down, than forgetting a detail.- Talk with your designer on balancing each side on how it looks overall. We placed the USC seal to balance a side. - Turnaround time is 3-4 weeks. There is a rush fee if needed faster."},{"id":"66c9f76f-1eb8-4e6b-a410-43735f11ef12","name":"Odette A.","image":"https://s3-media0.fl.yelpcdn.com/photo/DmkARPWWsSj89z45Oe5KbQ/60s.jpg","text":"Tien was really helpful and made light work of a rush job. Fashion Greek USC did their thing!  #USC #BQNupes #Sp2K"},{"id":"55cd1b31-9c0f-4d8e-8b6f-c6694f414037","name":"Bryan J.","image":null,"text":"James was great - I ordered my son\'s graduation sash over the phone - he sent me a proof immediately and also pictures of the color and fabric samples- I couldn\'t be more pleased with his service! I highly recommend!"},{"id":"07a808ed-effd-4393-8b99-6eadb1669a27","name":"Maylee W.","image":null,"text":""},{"id":"12f14ee1-5da2-4fb2-8270-6d8698f8c053","name":"Elite 24","image":null,"text":""},{"id":"fbb86fc3-e5de-413e-90d5-9a1ba35f8d85","name":"Tori H.","image":"https://s3-media0.fl.yelpcdn.com/photo/93Y-ZnEOI_uPxsb-Xoy-wg/60s.jpg","text":"Great services, I had my sash embroidered. They were very professional and timely; answered all of my emails within a few hours!"},{"id":"e36e995f-3f1e-4eb4-b8c7-dfad75ccfe3a","name":"Elite 24","image":"https://s3-media0.fl.yelpcdn.com/photo/lavaNSgGyQzEHX7fwLt9lw/60s.jpg","text":"5/5 service! Just make sure to make an appointment as it gets busier. I went in for a scheduled appointment and James helped me out with designing my sash. He spent the time to swap out different fonts/layouts and the design ended up looking better than what I had in mind. Super friendly, helpful, and efficient. I would highly recommend for anyone looking for someone to help them out with their grad sashes!"},{"id":"2ed6a4ea-0fd9-48a9-badb-607477feab16","name":"Sharon H.","image":"https://s3-media0.fl.yelpcdn.com/photo/jWpVgL_gEu-ZmPdobsSbQw/60s.jpg","text":"Graduation is approaching and (much like many others on here) I wanted to get a customised sash. This place came highly recommended by one of my friends so I sent them a quotation and they got back to me pretty quickly, including a quick bit of advice. I decided to book an appointment to discuss the customisation of my sash and the designer James was SO helpful and patient with me when I felt a bit indecisive. He will offer his expert opinion if asked but will ultimately defer to the person\'s decision, and I really appreciated the little nudges I got regarding certain design choices I\'d made because the overall design looked even better after his edits. I\'d highly recommend Fashion Greek USC for anyone who\'s looking to customise their sash, and I\'m definitely recommending this store to all my friends! I can\'t wait to get my sash for graduation!(also they have much nicer color options for sashes instead of just the bright red sash from the USC Bookstore which clashes badly with my skin. I really liked the dark satin option that they have!)A big plus is that you won\'t have to pay the entire amount of your sash upfront; you can pay a 50% deposit and pay the remaining 50% upon collection. This was a wonderful option!"},{"id":"054927de-7dee-4b11-a431-6d83c754faf7","name":"Clarissa E.","image":"https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2.yji-19e0a8ff85b15f4bbd79.png","text":"I came in to get some BGN GEAR for my fraternity. It was kind of last minute. I definitely got a lot of help from Daisy and Kim they were able to set up a design for me. Two of the bro\'s helped me originally. Everyone here is really nice. It\'s nice to know that they\'re still doing great business! My older sister used to come here for her letters too! Definitely the OG WHEN IT COMES TO GREEK THANKS"},{"id":"64973fb1-0298-406a-9474-ae4065f6b7fc","name":"Robert H.","image":"https://s3-media0.fl.yelpcdn.com/photo/A0DV87iwJMCbmMZB6XgfFw/60s.jpg","text":"Fashion Greek is our hero! Thank you, James, for the outstanding customer service. Just days before USC graduation, we needed something embroidered on a custom made sash. Other embroidery shops stopped production and extras, but when we spoke with James, he gave us his personal guarantee it would be done right and on time. We were a bit nervous to leave the sash-anything can happen. He told us by Thursday we would have it. Hours later, yes hours, we received a text that it was done! The stitching is perfect! Thank you for the speedy turnaround and fantastic customer service, Fashion Greek and James!!"},{"id":"1d32ab1c-ad1f-4792-a93e-12c25dc34b3f","name":"Marla S.","image":"https://s3-media0.fl.yelpcdn.com/photo/DkEM5TogjvKyt22vyom8TQ/60s.jpg","text":"I recently needed to get my name embroidered on my graduation sash, only problem was I only had a couple days to do it! Thanks to Fashion Greek USC, I was able to get my sash customized in just 2-5 days and for a very reasonable price! Other places I called were charging double if not more than what I paid here. With that said,  I highly recommend this place for its services and quick turn around time! Thank you!"},{"id":"90ab0fd6-ba6e-4ca3-a21e-52fd33ff0ce6","name":"Pugslee L.","image":"https://s3-media0.fl.yelpcdn.com/photo/DiEB-385u49qedm27uI2uQ/60s.jpg","text":"Quality embroidery and quick service. I came in with 3 scrub tops to be embroidered and the lady immediately drafted a mock up of what it would look like on her computer right in from of me. It was impressive. It\'s $15 for 4 inches of space and I got two lines with different colors in each line. They were profession al and efficient. I got a text when they were ready to be picked up. They ask when you need it by and they def will have it by that day. Just a FYI - The shop shares space with Hector the Barber."},{"id":"f074644b-bd25-44bd-b052-008598aaaa5e","name":"Sabrina F.","image":"https://s3-media0.fl.yelpcdn.com/assets/public/default_user_avatar_64x64_v2.yji-19e0a8ff85b15f4bbd79.png","text":"I was looking for some amazing USC Merch, and was assisted by James who was able to help find exactly what I was looking for. He took the time to walk me through the store and was diligent in providing me truly exception customer service. I found my go to place and person to find my USC Gear!Thanks James and staff!"},{"id":"42d0adc9-a9fa-441d-b01a-d707e144d0d5","name":"Christopher N.","image":"https://s3-media0.fl.yelpcdn.com/photo/mlBYa5Jd5pzSGrbPEst0yQ/60s.jpg","text":"After looking everywhere for a custom sweatshirt, I went to two different places and both stroke out but then I found Fashion Greek USC and decided to give them a try.  The third time was definitely the CHARM because not only did they deliver in the EXACT design I was looking for with a high quality printed sweatshirt but also with super fast shipping and amazing service!!  I would highly recommend them to anyone looking for any type of custom printed items!   They are absolutely the best!"},{"id":"9f8d76a1-0a3a-4b80-b952-7c40f30c109a","name":"S H.","image":"https://s3-media0.fl.yelpcdn.com/photo/3pPuPedZEuv1Y47AskUCYg/60s.jpg","text":"This place rocks! They have awesome customer service and reply to you very quickly. I\'ve done embroidery and DTG here and they\'ve all came out superb. It\'s a bit out of the way for me, but it\'s worth the drive. I recommend friends and family to go here to get custom items done. Thank you David and Mark, for making my project from beginning to end as easy as possible!"},{"id":"0f4131e4-d915-40e4-a7e5-8187ccc82623","name":"Wing C.","image":null,"text":""},{"id":"51537eca-34c3-421b-85b9-b2186110525b","name":"Elite 24","image":null,"text":""}]'),eS=a(7451),ez=a(9382);let eP=w.Z.div`
	overflow: hidden;
`,eT=w.Z.div`
	display: flex;
	height: 100%;
`,eN=w.Z.div`
	flex: 0 0 100%;
	min-width: 0;
`;var eA=a(6375);let eE=w.Z.article`
	padding: var(--testimonial-container-padding);
	background-color: var(--testimonial-container-background-color);
	border-radius: var(--testimonial-container-border-radius);
	max-width: var(--testimonial-container-max-width);
	box-shadow: var(--testimonial-container-shadow);
	border: var(--input-border-composite);

	display: grid;
	grid-template-rows: 1fr;
	gap: 1rem;
`,eq=w.Z.q`
	text-overflow: ellipsis;
	overflow: hidden;

	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;
	white-space: normal;

	font-size: 18px;
	line-height: 1.5;
`,eM=w.Z.div`
	display: grid;
	grid-template-rows: 1fr;
	gap: 0.25rem;
`,eU=w.Z.div`
	display: grid;
	grid-template-columns: 3.5rem 1fr;
	column-gap: 1rem;
	align-items: center;

	.image {
		width: 100%;
		aspect-ratio: 1/1;
		height: var(--testimonial-image-height);
		border-radius: var(--shape-rounding-large);
	}
`,eB=e=>(0,i.jsxs)(eE,{children:[(0,i.jsx)(eq,{children:e.text}),(0,i.jsxs)(eU,{children:[(0,i.jsx)("img",{className:"image",src:e.image??"",alt:`${e.name} Profile Picture`}),(0,i.jsxs)(eM,{children:[(0,i.jsx)("strong",{children:e.name}),(0,i.jsx)("img",{src:"assets/yelp/yelp-star-5-min@200w.webp",width:"90px",alt:""})]})]})]});var eD=a(5186);let eG=(0,o.ZP)("div")`
	display: grid;
	align-content: center;
	justify-items: center;
	gap: 2rem;

	.Heading-root {
		text-align: center;
	}
`,e_=(0,o.ZP)(en.g)`
	position: relative;
	z-index: 1;
	overflow: hidden;

	display: grid;
	align-content: center;
	justify-items: center;

	gap: 4rem;

	padding-block: 3rem !important;
	background-image: ${(0,eD.T)("yellow")};
`,eH=(0,o.ZP)(e=>{let{onSlideChange:t,className:a,children:r}=e,[n,o]=(0,ez.Z)({loop:!0,containScroll:"keepSnaps"},[(0,eS.Z)()]);return(0,l.useEffect)(()=>{o?.on("slidesChanged",()=>{t?.()})},[o,t]),(0,i.jsx)(eP,{ref:n,className:a,children:(0,i.jsx)(eT,{children:r})})})`
	max-width: 40rem;
	width: 100%;
`,eJ=(0,o.ZP)(eN)`
	padding-inline: 0.5rem;
	display: flex;
	align-items: center;
	justify-content: center;
`,eF=(0,o.ZP)(h.k)`
	& > * {
		justify-content: center;
	}
`,eO=()=>(0,i.jsx)(L.W,{children:(0,i.jsxs)(e_,{isClipped:!0,isFloating:!0,isRounded:!0,color:"grey",children:[(0,i.jsxs)(eG,{children:[(0,i.jsxs)(p.X,{isCentered:!0,level:2,children:["We've helped ",(0,i.jsx)(eA.v,{color:"magenta",children:"161"})," happy customers!"]}),(0,i.jsx)(eH,{children:eC.slice(0,10).map(e=>(0,i.jsx)(eJ,{children:(0,i.jsx)(eB,{...e})},e.id))})]}),(0,i.jsx)(eF,{actions:[{label:"Read more reviews",href:"https://www.yelp.com/biz/fashion-greek-usc-los-angeles",size:"large",color:"secondary",endIcon:(0,i.jsx)(eI.Z,{})},{label:"Leave a review",href:"https://www.yelp.com/writeareview/biz/-e4TSbHSikunICO8i8wr4Q?return_url=%2Fbiz%2F-e4TSbHSikunICO8i8wr4Q&review_origin=biz-details-war-button",size:"large",color:"text",endIcon:(0,i.jsx)(e$.Z,{})}]})]})}),eL=(0,o.ZP)("main")`
	display: grid;
	grid-template-columns: minmax(0, 1fr);
	margin-top: calc(-1 * var(--header-bar-height-mobile));

	${e=>{let{theme:t}=e;return t.breakpoints.up("md")}} {
		margin-top: calc(-1 * var(--header-bar-height-desktop));
	}
`,eW=e=>{let{children:t,...a}=e,o=(0,s.useRouter)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(Y,{actions:[{color:"text",href:`${o.basePath}/contact-us`,label:"Contact Us",endIcon:(0,i.jsx)(n.Z,{})},{color:"primary",href:`${o.basePath}/book-appointment`,label:"Book a time",endIcon:(0,i.jsx)(r.Z,{})}]}),(0,i.jsxs)(eL,{id:"main-content",children:[t,a.showYelp&&(0,i.jsx)(eO,{})]}),(0,i.jsx)(eZ,{})]})}},9057:function(e,t,a){a.d(t,{X:function(){return l}});var i=a(5893),r=a(917),n=a(6829),o=a(6010);let s=n.Z.span(e=>(0,r.iv)`
	--type-heading-font-size: var(--type-heading-font-size-small-${e.level});

	@media screen and (min-width: 425px) {
		--type-heading-font-size: var(--type-heading-font-size-medium-${e.level});
	}

	@media screen and (min-width: 768px) {
		--type-heading-font-size: var(--type-heading-font-size-large-${e.level});
	}

	margin: unset;
	font-family: var(--type-heading-font-family);
	font-weight: var(--type-heading-font-weight);
	line-height: var(--type-heading-font-leading);
	color: var(--color-text-primary);
	font-size: var(--type-heading-font-size);

	&.is-centered {
		text-align: center;
	}

	&.is-contrast {
		color: var(--color-text-contrast);
	}

	&.is-spaced {
		margin-block: var(--type-heading-font-margin-top) var(--type-heading-font-margin-bottom);
	}

	/* &.is-level-1 { */
	/* } */
`),l=e=>{let t=e.level??6,a=`h${t}`;return(0,i.jsx)(s,{as:a,level:t,className:(0,o.Z)(e.className,`is-level-${t}`,{"is-spaced":e.hasMargin,"is-centered":e.isCentered,"is-contrast":e.isContrast}),children:e.children})}},222:function(e,t,a){a.d(t,{E:function(){return l}});var i=a(5893),r=a(9262),n=a(917),o=a(6010),s=a(402);let l=(0,r.ZP)(e=>{let{className:t,onLoad:a,onError:r,caption:n,...s}=e;return(0,i.jsxs)("figure",{className:(0,o.Z)("Image-root",t),children:[(0,i.jsx)("img",{className:"Image-element",onLoad:e=>{console.log("loaded"),a?.(e)},onError:e=>{console.log("loaded"),r?.(e)},...s}),n&&(0,i.jsx)("figcaption",{className:"Image-caption",children:n})]})},(0,s._e)("imageTranslate"))(e=>{let{shape:t="auto",fill:a="cover",height:i,width:r}=e;return(0,n.iv)`
		margin: unset;
		padding: unset;
		border: unset;
		outline: unset;

		height: ${i??"auto"};
		width: ${r??"100%"};

		.Image-element {
			outline: unset;
			height: 100%;
			width: 100%;

			display: flex;
			object-fit: ${a??"cover"};
			border-radius: 0.25rem;
			aspect-ratio: ${({square:"1 / 1",portrait:"3 / 4",landscape:"4 / 3",auto:"auto"})[t??"square"]};
		}
	`})},1594:function(e,t,a){a.d(t,{r:function(){return o}});var i=a(6829),r=a(1664),n=a.n(r);let o=(0,i.Z)(n())`
	font-size: inherit;
	line-height: inherit;
	cursor: pointer;
	color: var(--color-brand-magenta-main);

	&:hover {
		text-decoration: underline;
	}
`},9259:function(e,t,a){var i=a(5893),r=a(6829),n=a(5526);let o=(0,r.Z)("a")`
	text-decoration: none;
	display: inline-grid;

	color: var(--color-brand-key-main);
	font-family: var(--type-heading-font-family);
	display: inline-flex;
	font-weight: 700;
	font-size: 1em;
	line-height: inherit;
	position: relative;

	&:hover {
		color: var(--color-brand-key-light);
	}

	&:active {
		color: var(--color-brand-key-main);
	}
`;t.Z=()=>(0,i.jsxs)(o,{href:"/",role:"img",title:"Graphix Collab, LLC",children:[(0,i.jsx)("span",{className:"Graphix",children:"Graphix"}),(0,i.jsx)("span",{className:"Logo-collab",children:"Collab"}),(0,i.jsx)(n.o,{})]})},6375:function(e,t,a){a.d(t,{v:function(){return l}});var i=a(5893),r=a(917),n=a(6829),o=a(5526);let s=(0,n.Z)("mark")(e=>{let{text:t,brand:a,color:i="cyan"}=e,n=(0,r.iv)`
			background: unset;
			/* display: inline-flex; */
		`;return a?(0,r.iv)`
				${n}
				position: relative;
			`:t?(0,r.iv)`
				${n}
				color: var(--color-brand-${i}-main);
			`:(0,r.iv)`
			${n}
			background: var(--color-brand-${i}-lightest);
		`}),l=e=>{let{children:t,...a}=e;return(0,i.jsxs)(s,{...a,children:[t,a.brand?(0,i.jsx)(o.o,{}):null]})}},6176:function(e,t,a){a.d(t,{x:function(){return l}});var i=a(5893),r=a(917),n=a(6829),o=a(402);let s=(0,n.Z)("p",(0,o._e)("color"))(e=>{let{size:t="medium",color:a="primary"}=e;return(0,r.iv)`
	margin: unset;
	color: var(--color-text-${a});
	font-family: var(--type-body-font-family);
	font-weight: var(--type-body-font-weight);
	line-height: 175%;
	font-size: var(--type-body-font-size-${t});
`}),l=e=>{let{children:t,...a}=e;return(0,i.jsx)(s,{...a,children:t})}},5186:function(e,t,a){a.d(t,{T:function(){return n}});let i={cyan:["hsla(195, 93%, 64%, %%alpha%%)","hsla(41, 100%, 84%,  %%alpha%%)"],magenta:["hsla(341, 100%, 83%,  %%alpha%%)","hsla(41, 100%, 84%,  %%alpha%%)"],yellow:["hsla(41, 100%, 84%,  %%alpha%%)","hsla(341, 100%, 83%,  %%alpha%%)"],key:["hsla(22, 24%, 91%,  %%alpha%%)","hsla(195, 93%, 64%, %%alpha%%)"]},r=e=>{let t=e[0].replace("%%alpha%%","1"),a=e[1].replace("%%alpha%%","1");return`"data:image/svg+xml,<svg id='patternId' width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'><defs><pattern id='a' patternUnits='userSpaceOnUse' width='70' height='8' patternTransform='scale(3) rotate(135)'><rect x='0' y='0' width='100%' height='100%' fill='${t}'/><path d='M-.02 22c8.373 0 11.938-4.695 16.32-9.662C20.785 7.258 25.728 2 35 2c9.272 0 14.215 5.258 18.7 10.338C58.082 17.305 61.647 22 70.02 22M-.02 14.002C8.353 14 11.918 9.306 16.3 4.339 20.785-.742 25.728-6 35-6 44.272-6 49.215-.742 53.7 4.339c4.382 4.967 7.947 9.661 16.32 9.664M70 6.004c-8.373-.001-11.918-4.698-16.3-9.665C49.215-8.742 44.272-14 35-14c-9.272 0-14.215 5.258-18.7 10.339C11.918 1.306 8.353 6-.02 6.002'  stroke-width='2' stroke='${a}' fill='none'/></pattern></defs><rect width='800%' height='800%' transform='translate(0,0)' fill='url(%23a)'/></svg>"`},n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0.675",a=i[e],n=a[0].replace("%%alpha%%",t),o=a[1].replace("%%alpha%%",t),s=`radial-gradient(circle at 0% 0%, ${n}, ${o})`,l=r(i[e]);return`${s}, url(${l})`}}}]);