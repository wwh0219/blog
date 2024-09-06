import{r as e,o as t,c as o,a as n,b as c,F as l,d as s,e as a}from"./app.a140cb59.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=s(`<h1 id="\u4F7F\u7528npm-link\u8C03\u8BD5\u672C\u5730npm\u5305\u65F6\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528npm-link\u8C03\u8BD5\u672C\u5730npm\u5305\u65F6\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u4F7F\u7528npm link\u8C03\u8BD5\u672C\u5730npm\u5305\u65F6\u9519\u8BEF\u5904\u7406</h1><h2 id="\u4F7F\u7528webpack\u6253\u5305\u5E93\u65F6-\u4F7F\u7528npm-link\u5728\u672C\u5730\u7684\u9879\u76EE\u4E2D\u8FDB\u884C\u8054\u8C03-\u53D1\u73B0\u9879\u76EE\u4E2D\u51FA\u73B0\u5982\u4E0B\u62A5\u9519" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528webpack\u6253\u5305\u5E93\u65F6-\u4F7F\u7528npm-link\u5728\u672C\u5730\u7684\u9879\u76EE\u4E2D\u8FDB\u884C\u8054\u8C03-\u53D1\u73B0\u9879\u76EE\u4E2D\u51FA\u73B0\u5982\u4E0B\u62A5\u9519" aria-hidden="true">#</a> \u4F7F\u7528webpack\u6253\u5305\u5E93\u65F6\uFF0C\u4F7F\u7528npm link\u5728\u672C\u5730\u7684\u9879\u76EE\u4E2D\u8FDB\u884C\u8054\u8C03\uFF0C\u53D1\u73B0\u9879\u76EE\u4E2D\u51FA\u73B0\u5982\u4E0B\u62A5\u9519</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  Uncaught TypeError: Cannot assign to read only property &#39;exports&#39; of object &#39;#&lt;Object&gt;&#39;
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div>`,3),k=a("\u67E5\u4E86\u5F88\u591A\u8D44\u6599\uFF0C\u90FD\u662F\u8BF4 commonjs \u6A21\u5757\u548Ces\u6A21\u5757\u6DF7\u7528\u9020\u6210\u7684\uFF0C\u4F46\u662Fwebpack\u6784\u5EFA\u51FA\u6765\u7684\u7EC4\u4EF6\u5E93\u672C\u6765\u5C31\u90FD\u662Fcommonjs\u89C4\u8303\u7684\uFF0C\u4E3A\u4EC0\u4E48\u7B2C\u4E09\u65B9\u5E93\u5374\u4E0D\u4F1A\u62A5\u9519\u5462\uFF1F \u7ECF\u8FC7\u641C\u7D22\u53D1\u73B0\u4E86\u8FD9\u7BC7\u5E16\u5B50 "),m={href:"https://forum.vuejs.org/t/vue-cli-library-build-error-cannot-assign-to-read-only-property-exports-of-object-object/55492",target:"_blank",rel:"noopener noreferrer"},d=a("https://forum.vuejs.org/t/vue-cli-library-build-error-cannot-assign-to-read-only-property-exports-of-object-object/55492"),b=s(`<p>\u7ECF\u8FC7\u6D4B\u8BD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// vue.config.js</span>
  config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.m?jsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">clear</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;exlude-&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>\u5728loader\u7684exclude\u914D\u7F6E\u4E2D\u6253\u5370\u6240\u6709\u7684\u6A21\u5757\u8DEF\u5F84\uFF0C\u53D1\u73B0\u5728resolve.symlinks=true\u65F6,webpakc\u5C06\u8DEF\u5F84\u89E3\u6790\u4E3A\u78C1\u76D8\u4E0A\u7EC4\u4EF6\u5E93\u6E90\u7801\u6240\u5728\u7684\u9879\u76EE\u8DEF\u5F84\uFF0C\u4F8B\u5982d:/components,\u8BBE\u4E3Afalse\u4E4B\u540E\uFF0C\u5C06\u7EC4\u4EF6\u5E93\u89E3\u6790\u4E3A\u9879\u76EE\u4E0B\u7684node_modules\u6587\u4EF6\u4F8B\u5982\uFF1Ad:/project-test/node_modules/compoents</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token comment">// vue.config.js</span>

  config<span class="token punctuation">.</span>module<span class="token punctuation">.</span><span class="token function">rule</span><span class="token punctuation">(</span><span class="token string">&#39;js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">test</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">\\.m?jsx?$</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span>exclude<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">name</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;exlude-&#39;</span><span class="token punctuation">,</span>name<span class="token punctuation">)</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>name<span class="token punctuation">.</span><span class="token function">indexOf</span><span class="token punctuation">(</span><span class="token string">&#39;\\\\path\\\\to\\\\my\\\\components\\\\&#39;</span><span class="token punctuation">)</span><span class="token operator">!==</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
          console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">&#39;this is MyConponents&#39;</span><span class="token punctuation">)</span>
          <span class="token keyword">return</span> <span class="token boolean">true</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u5728\u914D\u7F6E\u4E2D\u52A0\u5165\u4EE5\u4E0A\u4EE3\u7801\uFF0C\u7CBE\u786E\u5339\u914D\u7EC4\u4EF6\u5E93\u540Eexclude,\u542F\u52A8\u9879\u76EE\u540E\u4E0D\u518D\u62A5\u9519\uFF0C\u62A5\u4E0A\u9762\u63D0\u5230\u7684\u9519\u8BEF\uFF0C\u63A8\u6D4B\u662F\u7531\u4E8E\u8DEF\u5F84\u95EE\u9898\uFF0C\u7EC4\u4EF6\u5728\u5E93\u7ECF\u8FC7webpack\u6253\u5305\u540E\u7684\u4EE3\u7801\u518D\u6B21\u5728\u9879\u76EE\u4EE3\u7801\u4E2D\u88ABwebpack babel\u5904\u7406\u6240\u5BFC\u81F4\u7684</p><h2 id="\u5F53\u8C03\u8BD5\u7684\u7EC4\u4EF6\u5E93\u4E0E\u4E1A\u52A1\u4EE3\u7801\u4F9D\u8D56\u540C\u4E00\u4E2A\u7B2C\u4E09\u65B9\u5E93\u65F6\u7684\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u5F53\u8C03\u8BD5\u7684\u7EC4\u4EF6\u5E93\u4E0E\u4E1A\u52A1\u4EE3\u7801\u4F9D\u8D56\u540C\u4E00\u4E2A\u7B2C\u4E09\u65B9\u5E93\u65F6\u7684\u95EE\u9898" aria-hidden="true">#</a> \u5F53\u8C03\u8BD5\u7684\u7EC4\u4EF6\u5E93\u4E0E\u4E1A\u52A1\u4EE3\u7801\u4F9D\u8D56\u540C\u4E00\u4E2A\u7B2C\u4E09\u65B9\u5E93\u65F6\u7684\u95EE\u9898</h2><p>\u4F8B\u5982\u5F53\u4E24\u8005\u540C\u65F6\u4F9D\u8D56vue\u65F6\uFF0C\u7EC4\u4EF6\u5E93\u7684node_modules\u76EE\u5F55\u4E0B\u4E5F\u4F1A\u6709vue\u5E93\u7684\u6587\u4EF6\u5B58\u5728\uFF0C\u8FD9\u4E2A\u65F6\u5019\u5373\u4F7F\u4E24\u8005\u4F9D\u8D56\u7684\u7248\u672C\u4E00\u6837\uFF0C\u4E24\u4E2A\u5206\u522B\u5F15\u7528\u7684\u90FD\u662F\u5404\u81EA\u76EE\u5F55\u4E0B\u7684vue\u6784\u9020\u51FD\u6570\uFF0C\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u95EE\u9898</p><p>\u4F8B\u5982</p><ol><li>\u6BD4\u5982\u5728\u7EC4\u4EF6\u5E93\u4E2D\u5F80vue\u539F\u578B\u94FE\u4E0A\u589E\u52A0\u4E00\u4E9B\u989D\u5916\u65B9\u6CD5\u65F6\uFF0C\u7531\u4E8E\u5F15\u7528\u4E0D\u540C\uFF0C\u8FD9\u4E9B\u64CD\u4F5C\u5E76\u4E0D\u4F1A\u5728\u4E0A\u5C42\u7684\u4E1A\u52A1\u4EE3\u7801\u4E2D\u751F\u6548</li><li>Vue.use\u6CE8\u518C\u7684\u7EC4\u4EF6\u4E0D\u751F\u6548</li></ol><p>\u56E0\u4E3A\u4E24\u8005\u5F15\u7528\u7684\u662F\u4E0D\u540C\u7684Vue\u6784\u9020\u51FD\u6570\uFF0C\u89E3\u51B3\u65B9\u6848\uFF1A</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//vue.config.js</span>
<span class="token keyword">const</span> devAlias<span class="token operator">=</span>Object<span class="token punctuation">.</span><span class="token function">keys</span><span class="token punctuation">(</span>packageJson<span class="token punctuation">.</span>dependencies<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">reduce</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result<span class="token punctuation">,</span>lib</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  result<span class="token punctuation">[</span>lib<span class="token punctuation">]</span><span class="token operator">=</span>path<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span><span class="token string">&#39;./node_modules&#39;</span><span class="token punctuation">,</span>lib<span class="token punctuation">)</span>
  <span class="token keyword">return</span> result
<span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
module<span class="token punctuation">.</span>exports<span class="token operator">=</span><span class="token punctuation">{</span>
    <span class="token literal-property property">configureWebpack</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token literal-property property">symlinks</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
      <span class="token literal-property property">alias</span><span class="token operator">:</span>devAlias <span class="token comment">//\u5728\u8FD9\u91CC\u5C06\u4E1A\u52A1\u4EE3\u7801\u548C\u7EC4\u4EF6\u5E93\u4E0B\u76F8\u540C\u7684\u4F9D\u8D56\u5F15\u7528\u5168\u90E8\u90FD\u663E\u5F0F\u6307\u5411\u9879\u76EE\u4EE3\u7801\u4E0B\u7684node_modules\u6A21\u5757</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,11);function g(f,v){const p=e("ExternalLinkIcon");return t(),o(l,null,[i,n("p",null,[k,n("a",m,[d,c(p)])]),b],64)}var _=u(r,[["render",g]]);export{_ as default};