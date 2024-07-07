import{u as E}from"./chunks/useUpdateModelValue.BZgTnBmQ.js";import{d as h,o as p,c as k,k as o,s as u,I as l,w as g,a3 as c,j as r,t as m}from"./chunks/framework.DWMirOT2.js";import{E as b}from"./chunks/ExampleLayout.C2Drzn0e.js";const y=["disabled"],x={name:"ECheckbox"},f=h({...x,props:{disabled:{type:Boolean}},setup(i,{emit:s}){const e=i,a=s;return(t,n)=>(p(),k("input",{type:"checkbox",onChange:n[0]||(n[0]=d=>o(E)(d,a)),disabled:e.disabled},null,40,y))}}),C=c(`<h1 id="echeckbox" tabindex="-1">ECheckbox <a class="header-anchor" href="#echeckbox" aria-label="Permalink to &quot;ECheckbox&quot;">​</a></h1><p>The <code>ECheckbox</code> component replaces the standard html input type checkbox and encapsulates well-defined logic that can be reused throughout the app.</p><h2 id="basic-usage" tabindex="-1">Basic Usage <a class="header-anchor" href="#basic-usage" aria-label="Permalink to &quot;Basic Usage&quot;">​</a></h2><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setup</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { ref } from &quot;vue&quot;;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { ECheckbox } from &quot;easy-kit-component&quot;;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const check = ref();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ECheckbox</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> v-model</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">check</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">template</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div>`,4),_=r("br",null,null,-1),F=c(`<h2 id="api-reference" tabindex="-1">API Reference <a class="header-anchor" href="#api-reference" aria-label="Permalink to &quot;API Reference&quot;">​</a></h2><ul><li><strong>Props</strong></li></ul><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">interface</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Checkbox</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  disabled</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> boolean</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div>`,3),P=JSON.parse('{"title":"ECheckbox","description":"","frontmatter":{"prev":{"text":"EButton","link":"/guide/components/ebutton.md"},"next":{"text":"EColorPicker","link":"/guide/components/ecolorpicker.md"}},"headers":[],"relativePath":"guide/components/echeckbox.md","filePath":"guide/components/echeckbox.md"}'),v={name:"guide/components/echeckbox.md"},D=h({...v,setup(i){const s=u(!1);return(e,a)=>(p(),k("div",null,[C,l(b,null,{default:g(()=>[l(o(f),{id:"checkbox",modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=t=>s.value=t)},null,8,["modelValue"]),_,r("h6",null,"Check : "+m(s.value),1)]),_:1}),F]))}});export{P as __pageData,D as default};