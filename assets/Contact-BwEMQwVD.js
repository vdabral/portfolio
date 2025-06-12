import{c as m,u as k,r as d,j as e,m as l,B as v,e as N}from"./index-rzgmUWRa.js";import{S as w}from"./Section-iLHTzgUK.js";/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $=m("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S=m("Phone",[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M=m("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]),P=()=>{const{theme:t}=k(),[i,c]=d.useState({name:"",email:"",subject:"",message:""}),[r,x]=d.useState({}),[u,b]=d.useState(!1),[g,h]=d.useState("idle"),p=[{icon:N,title:"Email",content:"vdabral21007@gmail.com",link:"mailto:vdabral21007@gmail.com"},{icon:S,title:"Phone",content:"+91 7017370629",link:"tel:+917017370629"},{icon:$,title:"Location",content:"Dehradun, India",link:"https://maps.google.com/?q=Dehradun,+India"}],o=a=>{const{name:s,value:j}=a.target;c(n=>({...n,[s]:j})),r[s]&&x(n=>({...n,[s]:void 0}))},y=()=>{const a={};let s=!0;return i.name.trim()||(a.name="Name is required",s=!1),i.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(i.email)||(a.email="Please enter a valid email address",s=!1):(a.email="Email is required",s=!1),i.subject.trim()||(a.subject="Subject is required",s=!1),i.message.trim()?i.message.trim().length<10&&(a.message="Message is too short (minimum 10 characters)",s=!1):(a.message="Message is required",s=!1),x(a),s},f=a=>{a.preventDefault(),y()&&(b(!0),setTimeout(()=>{b(!1),h("success"),c({name:"",email:"",subject:"",message:""}),setTimeout(()=>{h("idle")},5e3)},1500))};return e.jsx(w,{id:"contact",title:"Contact Me",subtitle:"Let's get in touch",className:t==="dark"?"bg-slate-900":"bg-gray-50",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[e.jsx(l.div,{initial:{opacity:0,x:-50},animate:{opacity:1,x:0},transition:{duration:.6},children:e.jsxs(l.div,{className:`
              p-6 md:p-8 rounded-lg mb-8
              ${t==="dark"?"bg-slate-800/50 backdrop-blur-sm border border-slate-700/50":"bg-white shadow-md"}
            `,whileHover:{scale:1.02},transition:{duration:.2},children:[e.jsx("h3",{className:`
                text-xl font-bold mb-6
                ${t==="dark"?"text-white":"text-gray-900"}
              `,children:"Send Me a Message"}),g==="success"&&e.jsx(l.div,{className:`
                  p-4 mb-6 rounded-md
                  ${t==="dark"?"bg-green-800/30 text-green-400":"bg-green-100 text-green-700"}
                `,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:"Your message has been sent successfully! I'll get back to you soon."}),g==="error"&&e.jsx(l.div,{className:`
                  p-4 mb-6 rounded-md
                  ${t==="dark"?"bg-red-800/30 text-red-400":"bg-red-100 text-red-700"}
                `,initial:{opacity:0,y:-20},animate:{opacity:1,y:0},children:"There was an error sending your message. Please try again later."}),e.jsxs("form",{onSubmit:f,children:[e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"name",className:`
                      block text-sm font-medium mb-2
                      ${t==="dark"?"text-gray-300":"text-gray-700"}
                    `,children:"Your Name"}),e.jsx("input",{type:"text",id:"name",name:"name",value:i.name,onChange:o,className:`
                      w-full px-4 py-2 rounded-md border 
                      ${t==="dark"?"bg-slate-700/50 border-slate-600 text-white focus:border-teal-500":"bg-white border-gray-300 text-gray-900 focus:border-teal-500"}
                      ${r.name?"border-red-500":""}
                      transition-colors duration-200 focus:outline-none
                    `,placeholder:"John Doe"}),r.name&&e.jsx("p",{className:"mt-1 text-sm text-red-500",children:r.name})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"email",className:`
                      block text-sm font-medium mb-2
                      ${t==="dark"?"text-gray-300":"text-gray-700"}
                    `,children:"Your Email"}),e.jsx("input",{type:"email",id:"email",name:"email",value:i.email,onChange:o,className:`
                      w-full px-4 py-2 rounded-md border 
                      ${t==="dark"?"bg-slate-700/50 border-slate-600 text-white focus:border-teal-500":"bg-white border-gray-300 text-gray-900 focus:border-teal-500"}
                      ${r.email?"border-red-500":""}
                      transition-colors duration-200 focus:outline-none
                    `,placeholder:"john.doe@example.com"}),r.email&&e.jsx("p",{className:"mt-1 text-sm text-red-500",children:r.email})]})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"subject",className:`
                    block text-sm font-medium mb-2
                    ${t==="dark"?"text-gray-300":"text-gray-700"}
                  `,children:"Subject"}),e.jsx("input",{type:"text",id:"subject",name:"subject",value:i.subject,onChange:o,className:`
                    w-full px-4 py-2 rounded-md border 
                    ${t==="dark"?"bg-slate-700/50 border-slate-600 text-white focus:border-teal-500":"bg-white border-gray-300 text-gray-900 focus:border-teal-500"}
                    ${r.subject?"border-red-500":""}
                    transition-colors duration-200 focus:outline-none
                  `,placeholder:"Project Inquiry"}),r.subject&&e.jsx("p",{className:"mt-1 text-sm text-red-500",children:r.subject})]}),e.jsxs("div",{className:"mb-6",children:[e.jsx("label",{htmlFor:"message",className:`
                    block text-sm font-medium mb-2
                    ${t==="dark"?"text-gray-300":"text-gray-700"}
                  `,children:"Message"}),e.jsx("textarea",{id:"message",name:"message",value:i.message,onChange:o,rows:5,className:`
                    w-full px-4 py-2 rounded-md border 
                    ${t==="dark"?"bg-slate-700/50 border-slate-600 text-white focus:border-teal-500":"bg-white border-gray-300 text-gray-900 focus:border-teal-500"}
                    ${r.message?"border-red-500":""}
                    transition-colors duration-200 focus:outline-none
                  `,placeholder:"Your message here..."}),r.message&&e.jsx("p",{className:"mt-1 text-sm text-red-500",children:r.message})]}),e.jsx(v,{type:"submit",icon:e.jsx(M,{size:18}),className:"w-full",disabled:u,children:u?"Sending...":"Send Message"})]})]})}),e.jsxs(l.div,{className:"flex flex-col",initial:{opacity:0,x:50},animate:{opacity:1,x:0},transition:{duration:.6,delay:.2},children:[e.jsxs(l.div,{className:`
              p-6 md:p-8 rounded-lg mb-8
              ${t==="dark"?"bg-slate-800/50 backdrop-blur-sm border border-slate-700/50":"bg-white shadow-md"}
            `,whileHover:{scale:1.02},transition:{duration:.2},children:[e.jsx("h3",{className:`
                text-xl font-bold mb-6
                ${t==="dark"?"text-white":"text-gray-900"}
              `,children:"Contact Information"}),e.jsx("div",{className:"space-y-6",children:p.map((a,s)=>e.jsxs(l.a,{href:a.link,target:"_blank",rel:"noopener noreferrer",className:"flex items-start group",initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.3,delay:s*.1},whileHover:{x:5},children:[e.jsx("div",{className:`
                      p-3 rounded-full mr-4
                      ${t==="dark"?"bg-slate-700 text-teal-400 group-hover:bg-teal-500 group-hover:text-slate-900":"bg-teal-100 text-teal-600 group-hover:bg-teal-600 group-hover:text-white"}
                      transition-colors duration-300
                    `,children:e.jsx(a.icon,{size:20})}),e.jsxs("div",{children:[e.jsx("h4",{className:`
                        text-base font-medium
                        ${t==="dark"?"text-gray-300":"text-gray-700"}
                      `,children:a.title}),e.jsx("p",{className:`
                        mt-1 group-hover:underline
                        ${t==="dark"?"text-white":"text-gray-900"}
                      `,children:a.content})]})]},s))})]}),e.jsxs(l.div,{className:`
              p-6 md:p-8 rounded-lg flex-1
              ${t==="dark"?"bg-slate-800/50 backdrop-blur-sm border border-slate-700/50":"bg-white shadow-md"}
            `,whileHover:{scale:1.02},transition:{duration:.2},children:[e.jsx("h3",{className:`
                text-xl font-bold mb-6
                ${t==="dark"?"text-white":"text-gray-900"}
              `,children:"Availability"}),e.jsx("p",{className:`
                mb-4
                ${t==="dark"?"text-gray-300":"text-gray-700"}
              `,children:"I'm currently available for freelance work and new opportunities."}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{children:[e.jsx("h4",{className:`
                    text-base font-medium mb-2
                    ${t==="dark"?"text-gray-300":"text-gray-700"}
                  `,children:"Working Hours"}),e.jsx("p",{className:`
                    ${t==="dark"?"text-white":"text-gray-900"}
                  `,children:"Monday - Friday: 9:00 AM - 6:00 PM"})]}),e.jsxs("div",{children:[e.jsx("h4",{className:`
                    text-base font-medium mb-2
                    ${t==="dark"?"text-gray-300":"text-gray-700"}
                  `,children:"Response Time"}),e.jsx("p",{className:`
                    ${t==="dark"?"text-white":"text-gray-900"}
                  `,children:"Usually within 24 hours"})]})]})]})]})]})})};export{P as default};
