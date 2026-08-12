import{u as b,r as o,j as e}from"./index-SGxueSHt.js";const p=({id:d,title:r,subtitle:l,children:x,className:m="",fullHeight:f=!1})=>{const{theme:t}=b(),i=o.useRef(null),[n,u]=o.useState(!1);return o.useEffect(()=>{const a=i.current,s=new IntersectionObserver(([c])=>{c.isIntersecting&&(u(!0),s.unobserve(c.target))},{threshold:.08});return a&&s.observe(a),()=>{a&&s.unobserve(a)}},[]),e.jsx("section",{id:d,ref:i,className:`
        py-16 md:py-24
        ${f?"min-h-screen flex flex-col justify-center":""}
        ${m}
      `,children:e.jsxs("div",{className:"container mx-auto px-4",children:[(r||l)&&e.jsxs("div",{className:`
              mb-14 md:mb-20 text-center
              transition-all duration-1000 ease-out transform
              ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
            `,children:[r&&e.jsxs("div",{className:"flex flex-col items-center gap-4",children:[e.jsxs("div",{className:`
                  inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest border
                  ${t==="dark"?"bg-teal-500/10 text-teal-400 border-teal-500/20":"bg-teal-500/10 text-teal-700 border-teal-500/20"}
                `,children:[e.jsx("span",{className:`w-1.5 h-1.5 rounded-full ${t==="dark"?"bg-teal-400":"bg-teal-600"}`}),r]}),e.jsx("h2",{className:`
                    text-4xl md:text-5xl font-extrabold leading-tight
                    ${t==="dark"?"text-white":"text-gray-900"}
                  `,children:(()=>{const a=r.split(" "),s=a.pop();return e.jsxs(e.Fragment,{children:[a.join(" "),a.length>0?" ":"",e.jsxs("span",{className:`
                          relative inline-block bg-gradient-to-r bg-clip-text text-transparent
                          ${t==="dark"?"from-teal-400 via-cyan-400 to-blue-400":"from-teal-600 via-cyan-600 to-blue-600"}
                        `,children:[s,e.jsx("span",{className:`
                              absolute bottom-0 left-0 h-1 rounded-full w-full origin-left
                              bg-gradient-to-r
                              ${t==="dark"?"from-teal-400 to-cyan-400":"from-teal-600 to-cyan-600"}
                              ${n?"scale-x-100":"scale-x-0"}
                              transition-transform duration-1000 ease-out delay-500
                            `})]})]})})()}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:`h-px w-12 ${t==="dark"?"bg-teal-500/40":"bg-teal-500/30"}`}),e.jsx("div",{className:`w-2 h-2 rounded-full ${t==="dark"?"bg-teal-400":"bg-teal-600"}`}),e.jsx("div",{className:`h-px w-12 ${t==="dark"?"bg-teal-500/40":"bg-teal-500/30"}`})]})]}),l&&e.jsx("p",{className:`
                  mt-4 text-lg max-w-2xl mx-auto
                  ${t==="dark"?"text-gray-400":"text-gray-600"}
                `,children:l})]}),e.jsx("div",{className:`
            transition-all duration-1000 ease-out transform delay-300
            ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
          `,children:x})]})})};export{p as S};
