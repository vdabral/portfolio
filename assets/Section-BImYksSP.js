import{u as f,r as o,j as e}from"./index-DqBf8aW0.js";const h=({id:c,title:a,subtitle:r,children:x,className:m="",fullHeight:u=!1})=>{const{theme:s}=f(),t=o.useRef(null),[n,d]=o.useState(!1);return o.useEffect(()=>{const l=new IntersectionObserver(([i])=>{i.isIntersecting&&(d(!0),l.unobserve(i.target))},{threshold:.1});return t.current&&l.observe(t.current),()=>{t.current&&l.unobserve(t.current)}},[]),e.jsx("section",{id:c,ref:t,className:`
        py-16 md:py-24 
        ${u?"min-h-screen flex flex-col justify-center":""}
        ${m}
      `,children:e.jsxs("div",{className:"container mx-auto px-4",children:[(a||r)&&e.jsxs("div",{className:`
              mb-12 md:mb-16 text-center
              transition-all duration-1000 ease-out transform
              ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
            `,children:[a&&e.jsx("h2",{className:`
                  text-3xl md:text-4xl font-bold mb-4 
                  ${s==="dark"?"text-white":"text-gray-900"}
                `,children:e.jsxs("span",{className:`relative inline-block ${s==="dark"?"text-white":"text-gray-900"}`,children:[a,e.jsx("span",{className:`
                      absolute bottom-0 left-0 w-full h-1 transform origin-left
                      ${s==="dark"?"bg-teal-400":"bg-teal-600"}
                      ${n?"scale-x-100":"scale-x-0"}
                      transition-transform duration-1000 ease-out delay-300
                    `})]})}),r&&e.jsx("p",{className:`
                  text-lg max-w-2xl mx-auto
                  ${s==="dark"?"text-gray-400":"text-gray-600"}
                `,children:r})]}),e.jsx("div",{className:`
            transition-all duration-1000 ease-out transform delay-300
            ${n?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}
          `,children:x})]})})};export{h as S};
