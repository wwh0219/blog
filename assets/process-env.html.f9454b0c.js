import{d as n}from"./app.a140cb59.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},e=n(`<h1 id="process-env\u53D8\u91CF\u58F0\u660E\u5408\u5E76" tabindex="-1"><a class="header-anchor" href="#process-env\u53D8\u91CF\u58F0\u660E\u5408\u5E76" aria-hidden="true">#</a> p<wbr>rocess.env\u53D8\u91CF\u58F0\u660E\u5408\u5E76</h1><p>\u58F0\u660E\u901A\u8FC7webpack.DefinePlugin\u5199\u5165\u7684\u53D8\u91CF</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token comment">/// &lt;reference path=&quot;../node_modules/@types/webpack-env/index.d.ts&quot; /&gt;</span>

<span class="token keyword">declare</span> global <span class="token punctuation">{</span>
  <span class="token keyword">namespace</span> NodeJS <span class="token punctuation">{</span> <span class="token comment">//\u5728\u8FD9\u91CC\u58F0\u660E\u6240\u9700\u7684\u73AF\u5883\u53D8\u91CF\u7C7B\u578B\uFF0C\u4E0E *@types/webpack-env/index.d.ts* \u4E0B\u7684\u58F0\u660E\u5408\u5E76</span>
    <span class="token keyword">interface</span> <span class="token class-name">Process</span> <span class="token punctuation">{</span>
      env<span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token constant">NODE_ENV</span><span class="token operator">:</span> <span class="token string">&#39;production&#39;</span><span class="token operator">|</span><span class="token string">&#39;debug&#39;</span><span class="token operator">|</span><span class="token string">&#39;development&#39;</span>
        <span class="token constant">APP_ID</span><span class="token operator">:</span><span class="token builtin">string</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,3);function p(t,c){return e}var l=s(a,[["render",p]]);export{l as default};
