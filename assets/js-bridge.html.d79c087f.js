import{d as n}from"./app.a140cb59.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="web\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u901A\u4FE1" tabindex="-1"><a class="header-anchor" href="#web\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u901A\u4FE1" aria-hidden="true">#</a> web\u7AEF\u4E0E\u5BA2\u6237\u7AEF\u901A\u4FE1</h1><h2 id="\u80CC\u666F" tabindex="-1"><a class="header-anchor" href="#\u80CC\u666F" aria-hidden="true">#</a> \u80CC\u666F</h2><p>\u5728hybrid app\u6A21\u5F0F\u4E0B\uFF0Cweb\u7AEF\u9700\u8981\u9891\u7E41\u7684\u4E0E\u5BA2\u6237\u7AEF\u8FDB\u884C\u901A\u4FE1\uFF0C\u5982\u4F7F\u7528\u5BA2\u6237\u7AEF\u7684\u5206\u4EAB\u529F\u80FD\u3001\u83B7\u53D6\u5BA2\u6237\u7AEF\u4E0B\u53D1\u7684\u7528\u6237\u57FA\u7840\u6570\u636E\u7B49\u7B49\uFF0C\u4E0B\u9762\u5C31\u6765\u7B80\u5355\u8BF4\u4E0B\u5982\u4F55\u5B9E\u73B0</p><h3 id="\u5BA2\u6237\u7AEF" tabindex="-1"><a class="header-anchor" href="#\u5BA2\u6237\u7AEF" aria-hidden="true">#</a> \u5BA2\u6237\u7AEF</h3><p>ios\u3001Android\u4F7F\u7528webview\u8BBF\u95EE\u524D\u7AEF\u9875\u9762\u540E\u53EF\u4EE5\u901A\u8FC7\u5411webview\u4E2D\u6CE8\u5165\u5BF9\u8C61\u3001\u76F4\u63A5\u6267\u884Cjs\u4EE3\u7801\u5B57\u7B26\u4E32\u6765\u4E0Eweb\u7AEF\u8FDB\u884C\u901A\u4FE1</p><ul><li>\u6CE8\u5165\u5168\u5C40\u5BF9\u8C61</li></ul><p>\u4EE5Android\u4E3A\u4F8B\uFF0C\u4F7F\u7528webview\u7684<strong>addJavascriptInterface</strong>\u65B9\u6CD5\u53EF\u4EE5\u5F80\u5BA2\u6237\u7AEF\u6CE8\u5165\u4E00\u4E2A\u5BF9\u8C61\u6765\u4F9Bweb\u7AEF\u8C03\u7528\uFF0Cweb\u7AEF\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u5E76\u4F20\u5165\u5BF9\u5E94\u7684\u4E1A\u52A1\u53C2\u6570\u4E4B\u540E\u5BA2\u6237\u7AEF\u5219\u53EF\u4EE5\u62FF\u5230\u5BF9\u5E94\u7684\u5B57\u7B26\u4E32\u53C2\u6570\u5E8F\u5217\u5316\u4E3Ajson\u5BF9\u8C61\u505A\u540E\u7EED\u7684\u5904\u7406\u3002</p><ul><li>\u6267\u884Cjs\u5B57\u7B26\u4E32</li></ul><p>\u4EE5Android\u4E3A\u4F8B\uFF0C\u4F7F\u7528webview\u7684<strong>evaluateJavascript</strong>\u65B9\u6CD5\u5E76\u4F20\u5165\u4EE3\u7801\u5B57\u7B26\u4E32\u5219\u53EF\u4EE5\u5728webview\u7684js\u5168\u5C40\u4E0A\u4E0B\u6587\u4E2D\u6267\u884C\u4EE3\u7801\uFF0C\u7C7B\u4F3Cjs\u7684<strong>eval</strong>\u65B9\u6CD5</p><h3 id="web\u7AEF" tabindex="-1"><a class="header-anchor" href="#web\u7AEF" aria-hidden="true">#</a> web\u7AEF</h3><p>\u4E86\u89E3\u4E86\u4E0A\u6587\u4E2D\u63CF\u8FF0\u7684\u5BA2\u6237\u7AEF\u7684\u5DE5\u4F5C\u6D41\u7A0B\uFF0C\u5728web\u7AEF\u4E2D\u53EF\u4EE5\u4EE5\u4E0B\u5F62\u5F0F\u6765\u8C03\u7528\u5BA2\u6237\u7AEF\u7684\u80FD\u529B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// JsBridge\u4E3A\u5BA2\u6237\u7AEF\u6CE8\u5165\u7684\u5168\u5C40\u5BF9\u8C61</span>
JsBridge<span class="token punctuation">.</span><span class="token function">methodA</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
JsBridge<span class="token punctuation">.</span><span class="token function">methodB</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u4F7F\u7528\u4EE5\u4E0B\u5F62\u5F0F\u6765\u54CD\u5E94\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u5728web\u7AEF\u7F16\u5199\u4EE5\u4E0B\u5168\u5C40\u65B9\u6CD5</span>
<span class="token comment">//\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528evaluateJavascript(&quot;JSBRIDGE_CALLBACK_A(&#39;asdasd&#39;)&quot;)</span>
<span class="token comment">//\u5219\u53EF\u4EE5\u4F7F\u5BA2\u6237\u7AEF\u8C03\u7528\u5230web\u7AEF\u7684\u65B9\u6CD5</span>
<span class="token comment">//\u4E00\u822C\u8C03\u7528\u4E86JsBridge\u65B9\u6CD5\u540E\u5728\u8FD9\u91CC\u63A5\u6536\u56DE\u8C03</span>
Window<span class="token punctuation">.</span><span class="token function-variable function">JSBRIDGE_CALLBACK_A</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
Window<span class="token punctuation">.</span><span class="token function-variable function">JSBRIDGE_CALLBACK_A</span><span class="token operator">=</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token comment">//...</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u53EF\u4EE5\u76F4\u89C2\u7684\u770B\u51FA\u4E00\u4E9B\u95EE\u9898</p><ul><li>\u4EE3\u7801\u88AB\u5F3A\u5236\u5206\u5272\u3002\u4F7F\u7528JsBridge\u8C03\u7528\u5BA2\u6237\u7AEFapi\u540E\u5FC5\u987B\u5728\u53E6\u5916\u4E00\u4E2A\u65B9\u6CD5\u4E2D\u8FDB\u884C\u540E\u7EED\u5904\u7406\uFF0C\u8FD9\u4F7F\u5F97\u8C03\u7528\u8FD9\u90E8\u5206api\u7684\u4EE3\u7801\u7F16\u5199\u5168\u90E8\u90FD\u9700\u8981\u4EE5\u8FD9\u4E2A\u5F62\u5F0F\u8FDB\u884C\uFF0C\u5BF9\u4E8E\u5728\u65E7\u4EE3\u7801\u4E2D\u8C03\u7528\u9700\u8981\u9762\u4E34\u66F4\u591A\u7684\u4EE3\u7801\u6539\u9020</li><li>\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u6C61\u67D3\u3002\u63D0\u4F9B\u7ED9\u5BA2\u6237\u7AEF\u7684\u56DE\u8C03\u9700\u8981\u5168\u90E8\u66B4\u9732\u5728\u5168\u5C40\u73AF\u5883\u4E2D\uFF0C\u5982\u679C\u5BF9\u6BCF\u4E2A\u9700\u6C42\u90FD\u4F7F\u7528\u4E00\u4E2A\u56DE\u8C03\u53EF\u60F3\u800C\u77E5\u5BF9\u5168\u5C40\u547D\u540D\u7A7A\u95F4\u7684\u6C61\u67D3\u5341\u5206\u4E25\u91CD</li><li>\u4E0D\u5229\u4E8E\u8C03\u8BD5\u3002\u5BF9\u4E8E\u5904\u4E8E\u5F00\u53D1\u9636\u6BB5\u7684\u9879\u76EE\uFF0C\u5F53web\u7AEF\u9700\u8981\u8C03\u7528\u5BA2\u6237\u7AEF\u7684\u67D0\u4E2Aapi\u800C\u5BA2\u6237\u7AEF\u53C8\u672A\u51C6\u5907\u5C31\u7EEA\u65F6\u4F1A\u51FA\u73B0\u62A5\u9519\u5BFC\u81F4\u5F00\u53D1\u8FDB\u5EA6\u53D7\u963B</li></ul><p>\u4E0B\u9762\u6765\u8BB2\u4E0B\u6211\u5728\u65E5\u5E38\u5F00\u53D1\u4E2D\u4F7F\u7528\u7684\u4E00\u5957\u65B9\u6848</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token class-name">CallbackInvokerMap</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    resolve<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
    reject<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">;</span>
    timer<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">CustomEventHandlerMap</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">MockData</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Params<span class="token operator">&gt;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token keyword">interface</span> <span class="token class-name">Params<span class="token operator">&lt;</span><span class="token constant">T</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token operator">&gt;</span></span> <span class="token punctuation">{</span>
  id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  payload<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">;</span>
  success<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">interface</span> <span class="token class-name">Options</span> <span class="token punctuation">{</span>
  timeout<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> customEventHandlerMap<span class="token operator">:</span> CustomEventHandlerMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> callbackInvokerMap<span class="token operator">:</span> CallbackInvokerMap <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">let</span> mockData<span class="token operator">:</span> MockData<span class="token punctuation">;</span>

<span class="token keyword">let</span> initialRequestId <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token function-variable function">genRequestId</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> initialRequestId<span class="token operator">++</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> <span class="token constant">IN_WEBVIEW</span> <span class="token operator">=</span> <span class="token keyword">typeof</span> window<span class="token punctuation">.</span>JsBridge <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u5411\u5BA2\u6237\u7AEF\u53D1\u8D77\u8BF7\u6C42\uFF0C\u5BA2\u6237\u7AEF\u7684\u54CD\u5E94\u4EE5promise\u7684\u5F62\u5F0F\u8FD4\u56DE
 */</span>
<span class="token keyword">const</span> request <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">R</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token constant">T</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> Partial<span class="token operator">&lt;</span>Options<span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  options <span class="token operator">=</span> <span class="token punctuation">{</span>
    timeout<span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span>
    <span class="token operator">...</span>options<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> requestId <span class="token operator">=</span> <span class="token function">genRequestId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> promise <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token constant">R</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">,</span> reject<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> item <span class="token operator">=</span> <span class="token punctuation">{</span>
      resolve<span class="token punctuation">,</span>
      reject<span class="token punctuation">,</span>
      timer<span class="token operator">:</span> <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        item<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span> options<span class="token operator">?.</span>timeout<span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token punctuation">}</span><span class="token punctuation">;</span>
    callbackInvokerMap<span class="token punctuation">[</span>requestId<span class="token punctuation">]</span> <span class="token operator">=</span> item<span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> params<span class="token operator">:</span> Params<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token punctuation">{</span>
    id<span class="token operator">:</span> requestId<span class="token punctuation">,</span>
    name<span class="token punctuation">,</span>
    payload<span class="token operator">:</span> data<span class="token punctuation">,</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
  JsBridge<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token constant">IN_WEBVIEW</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>mockData<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u63A5\u53E3</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>requestId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u8FD4\u56DEmock\u6570\u636E</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token function">callbackHandler</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
        id<span class="token operator">:</span> requestId<span class="token punctuation">,</span>
        name<span class="token punctuation">,</span>
        payload<span class="token operator">:</span> mockData<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u5BA2\u6237\u7AEF\u63A5\u53E3</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>requestId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">\u8C03\u7528\u5F02\u5E38</span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">return</span> <span class="token builtin">Promise</span><span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">return</span> promise<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u81EA\u5B9A\u4E49\u4E8B\u4EF6\u76D1\u542C\uFF0C\u5355\u65B9\u9762\u76D1\u542C\u5BA2\u6237\u7AEF\u7684\u8BF7\u6C42\u65F6\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5
 */</span>
<span class="token keyword">const</span> customEvent <span class="token operator">=</span> <span class="token punctuation">{</span>
  <span class="token function">on</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> callback<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>callback<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token function">off</span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> callback<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span> <span class="token operator">=</span> customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
        <span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> fn <span class="token operator">!==</span> callback
      <span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token generic-function"><span class="token function">invoke</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> Params<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      customEventHandlerMap<span class="token punctuation">[</span>name<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>fn<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
        <span class="token function">fn</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u7528\u4E8E\u63A5\u6536\u5BA2\u6237\u7AEF\u8FD4\u56DE\u7684\u54CD\u5E94\u5E76\u6539\u53D8\u5BF9\u5E94id\u8BF7\u6C42\u7684promise\u72B6\u6001
 */</span>
<span class="token keyword">const</span> callbackHandler <span class="token operator">=</span> <span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">(</span>data<span class="token operator">:</span> Params<span class="token operator">&lt;</span><span class="token constant">T</span><span class="token operator">&gt;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  customEvent<span class="token punctuation">.</span><span class="token function">invoke</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>name<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">const</span> invoker <span class="token operator">=</span> callbackInvokerMap<span class="token punctuation">[</span>data<span class="token punctuation">.</span>id<span class="token punctuation">]</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>invoker<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>data<span class="token punctuation">.</span>success<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      invoker<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      invoker<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>payload<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token function">clearInvoker</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u8BF7\u6C42\u5B8C\u6210\u540E\u4F7F\u7528\u8FD9\u4E2A\u65B9\u6CD5\u6E05\u7A7A\u5BF9\u5E94\u7684\u56DE\u8C03\u7F13\u5B58
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">clearInvoker</span> <span class="token operator">=</span> <span class="token punctuation">(</span>id<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token function">clearTimeout</span><span class="token punctuation">(</span>callbackInvokerMap<span class="token punctuation">[</span>id<span class="token punctuation">]</span><span class="token punctuation">.</span>timer<span class="token punctuation">)</span><span class="token punctuation">;</span>
  Reflect<span class="token punctuation">.</span><span class="token function">deleteProperty</span><span class="token punctuation">(</span>callbackInvokerMap<span class="token punctuation">,</span> id<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u5199\u5165mock\u6570\u636E\uFF0C\u7528\u4E8Eweb\u7AEF\u8C03\u8BD5\u65F6\u4F7F\u7528
 */</span>
<span class="token keyword">const</span> <span class="token function-variable function">regiseterMockData</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> MockData<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  mockData <span class="token operator">=</span> data<span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token doc-comment comment">/**
 * \u5168\u5C40\u6CE8\u518C\u63D0\u4F9B\u7ED9\u5BA2\u6237\u7AEF\u6267\u884C\u7684\u51FD\u6570\u53D8\u91CF
 */</span>
<span class="token keyword">const</span> bootstrap <span class="token operator">=</span> <span class="token punctuation">(</span>namespace<span class="token operator">:</span><span class="token builtin">string</span><span class="token operator">=</span><span class="token string">&#39;XXX_JS_BRIDGE_CALLBACK_HANDLER&#39;</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  window<span class="token punctuation">[</span>namespace<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span>data<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> parsedData<span class="token operator">:</span> Params<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span> <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">callbackHandler</span><span class="token punctuation">(</span>parsedData<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token keyword">export</span> <span class="token punctuation">{</span> regiseterMockData<span class="token punctuation">,</span> bootstrap<span class="token punctuation">,</span> customEvent<span class="token punctuation">,</span> request<span class="token punctuation">,</span> <span class="token constant">IN_WEBVIEW</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u4E3A\u7B80\u7565\u7248\u7684jsbridge\u8C03\u7528\u65B9\u6848\uFF0C\u6CE8\u610F\u6B64\u65B9\u6848\u9700\u8981\u4E0E\u5BA2\u6237\u7AEF\u5F00\u53D1\u4EBA\u5458\u534F\u5546\u53C2\u6570\u7684\u6570\u636E\u7ED3\u6784</p><ul><li>\u4EE5\u4E0A\u9762\u4EE3\u7801\u4E3A\u4F8B\uFF0C\u5BA2\u6237\u7AEF\u5728webview\u4E2D\u6CE8\u5165<strong>JsBridge</strong>\u5BF9\u8C61\u4F9B\u524D\u7AEF\u8C03\u7528\uFF0C\u8BE5\u5BF9\u8C61\u4EC5\u66B4\u9732\u4E86\u4E00\u4E2Arequest\u65B9\u6CD5\uFF0C\u5BA2\u6237\u7AEF\u9700\u8981\u6839\u636E\u8BE5\u65B9\u6CD5name\u53C2\u6570\u7684\u4E0D\u540C\u6765\u505A\u4E0D\u540C\u4E1A\u52A1\u903B\u8F91\u7684\u5904\u7406\u3002</li><li>web\u7AEF\u4EC5\u63D0\u4F9B\u4E86\u4E00\u4E2A\u5168\u5C40\u65B9\u6CD5\u4F9B\u5BA2\u6237\u7AEF\u8C03\u7528\uFF0C\u89C1<strong>bootstrap</strong>\u65B9\u6CD5\uFF0C\u9700\u8981\u5BA2\u6237\u7AEF\u5728\u54CD\u5E94\u65F6\u5C06\u524D\u7AEF\u8BF7\u6C42\u65F6\u63D0\u4F9B\u7684name\u3001id\u8FD4\u56DE\u7ED9\u524D\u7AEF</li></ul><p>\u7B80\u5355\u5206\u6790\u4E0B\u4E0A\u9762\u7684\u4EE3\u7801\u8FD0\u884C\u6D41\u7A0B</p><ul><li>\u524D\u7AEF\u8C03\u7528request\u65B9\u6CD5\u6765\u4F7F\u7528\u5BA2\u6237\u7AEF\u63D0\u4F9B\u7684api\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u8C03\u7528\u4E86JsBridge\u5BF9\u8C61\u7684request\u65B9\u6CD5</li><li>\u5C06name\u4E0E\u4E1A\u52A1\u53C2\u6570\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u505A\u5BF9\u5E94\u5904\u7406\uFF1B\u540C\u65F6\u524D\u7AEF\u4E3A\u6BCF\u4E2A\u8BF7\u6C42new\u4E00\u4E2APromise\u5BF9\u8C61\uFF0C\u5C06Promise\u5BF9\u8C61\u7684resolve\u3001reject\u6309id\u5199\u5165\u4E00\u4E2A\u5BF9\u8C61\u4E2D</li><li>\u5BA2\u6237\u7AEF\u5185\u90E8\u5904\u7406\u5B8C\u6210\u540E\u6267\u884C\u524D\u7AEF\u63D0\u4F9B\u7684\u5168\u5C40\u65B9\u6CD5\uFF0C\u8BE5\u65B9\u6CD5\u62FF\u5230\u53D1\u8D77\u8BF7\u6C42\u65F6\u5BF9\u5E94\u7684id\u540E\u627E\u5230\u5BF9\u5E94\u7684promise\u5904\u7406\u65B9\u6CD5\uFF0C\u6839\u636E\u6210\u529F\u4E0E\u5426\u6765\u6267\u884Cresolve\u3001reject</li><li>\u5230\u6B64\u4E00\u4E2A\u6B63\u5E38\u7684\u8BF7\u6C42\u6D41\u7A0B\u7ED3\u675F</li><li>\u5F53\u5BA2\u6237\u7AEF\u8D85\u65F6\u672A\u54CD\u5E94\uFF0C\u5219\u524D\u7AEF\u624B\u52A8\u8C03\u7528promise reject\u6765\u629B\u51FA\u5F02\u5E38</li></ul>`,22);function t(o,e){return p}var u=s(a,[["render",t]]);export{u as default};
