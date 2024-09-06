import{d as n}from"./app.a140cb59.js";import{_ as s}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=n(`<h1 id="\u54CD\u5E94\u5F0F\u539F\u7406\u5206\u6790" tabindex="-1"><a class="header-anchor" href="#\u54CD\u5E94\u5F0F\u539F\u7406\u5206\u6790" aria-hidden="true">#</a> \u54CD\u5E94\u5F0F\u539F\u7406\u5206\u6790</h1><h2 id="\u521D\u59CB\u5316" tabindex="-1"><a class="header-anchor" href="#\u521D\u59CB\u5316" aria-hidden="true">#</a> \u521D\u59CB\u5316</h2><p>\u9996\u5148\u4ECEVue\u5B9E\u4F8B\u7684\u521D\u59CB\u5316\u5F00\u59CB</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src\\core\\instance\\index.js</span>
<span class="token keyword">function</span> <span class="token function">Vue</span> <span class="token punctuation">(</span><span class="token parameter">options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span>
    <span class="token operator">!</span><span class="token punctuation">(</span><span class="token keyword">this</span> <span class="token keyword">instanceof</span> <span class="token class-name">Vue</span><span class="token punctuation">)</span>
  <span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token string">&#39;Vue is a constructor and should be called with the \`new\` keyword&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\u521D\u59CB\u5316Vue\u5B9E\u4F8B\u6267\u884C\u7684\u662F<strong>Vue.prototype._init</strong>\u65B9\u6CD5<br> \u8FD9\u4E2A\u65B9\u6CD5\u7684\u5B9E\u73B0\u5728<strong>src\\core\\instance\\init.js</strong><br> \u5C06<strong>options.data</strong>\u8F6C\u53D8\u4E3A\u54CD\u5E94\u5F0F\u7684\u90E8\u5206\u662F\u8C03\u7528\u4E86<strong>src\\core\\instance\\state.js</strong>\u4E2D\u7684<strong>initState</strong>\u51FD\u6570 ,\u5904\u7406<strong>options.data</strong>\u7684\u662F<strong>initData</strong>\u51FD\u6570\uFF0C\u5728<strong>initData</strong>\u4E2D\uFF0C\u6700\u540E\u4E00\u884C</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function">observe</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* asRootData */</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728\u8FD9\u91CC\u8C03\u7528<strong>observe</strong>\u51FD\u6570\u5C06data\u8F6C\u6362\u4E3A\u54CD\u5E94\u5F0F\u5BF9\u8C61</p><p><strong>observe</strong>\u4E2D\u5173\u952E\u662F\u8FD9\u4E00\u53E5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>ob <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Observer</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><p>\u5728<strong>Observer</strong>\u7684\u5B9E\u4F8B\u5316\u8FC7\u7A0B\u4E2D\uFF0C\u4F1A\u8C03\u7528<strong>walk</strong>\u65B9\u6CD5,\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u4F1A\u8C03\u7528<strong>defineReactive</strong>\u51FD\u6570\uFF0C\u5C06data\u7684\u6BCF\u4E2A\u5B57\u6BB5\u91CD\u5199\u4E3A<strong>reactiveGetter</strong>\u548C<strong>reactiveSetter</strong> \u4E0B\u9762\u5148\u6765\u5206\u6790<strong>reactiveGetter</strong></p><h2 id="reactivegetter" tabindex="-1"><a class="header-anchor" href="#reactivegetter" aria-hidden="true">#</a> reactiveGetter</h2><p>reactiveGetter\u4F1A\u5728\u8BFB\u53D6data\u7684\u5BF9\u5E94\u5B57\u6BB5\u65F6\u6267\u884C\uFF0C\u9996\u6B21\u8BFB\u53D6\u662F\u5728\u5B9E\u4F8B\u6302\u8F7D\u5230dom\u4E0A\u65F6\uFF0C\u4E5F\u5C31\u662F\u6267\u884Cvm.$mount\u65F6\u3002<br> \u56DE\u5230<strong>Vue.prototype._init</strong>\u65B9\u6CD5\u4E2D\uFF0C\u53EF\u4EE5\u770B\u5230\u5728<strong>Vue.prototype._init</strong>\u7684\u6700\u540E\u4E00\u884C\u6267\u884C\u4E86\u8FD9\u6BB5\u4EE3\u7801</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span><span class="token function">$mount</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span>$options<span class="token punctuation">.</span>el<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p><strong>$mounte</strong>\u65B9\u6CD5\u5B9A\u4E49\u4E8E<strong>src\\platforms\\web\\runtime\\index.js</strong>\u4E2D,\u4E3B\u8981\u662F\u6267\u884C\u4E86<strong>mountComponent</strong>\u65B9\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// mountComponent\u4EE3\u7801\u7247\u6BB5</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>process<span class="token punctuation">.</span>env<span class="token punctuation">.</span><span class="token constant">NODE_ENV</span> <span class="token operator">!==</span> <span class="token string">&#39;production&#39;</span> <span class="token operator">&amp;&amp;</span> config<span class="token punctuation">.</span>performance <span class="token operator">&amp;&amp;</span> mark<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">//...</span>
  <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token function-variable function">updateComponent</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      vm<span class="token punctuation">.</span><span class="token function">_update</span><span class="token punctuation">(</span>vm<span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> hydrating<span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">new</span> <span class="token class-name">Watcher</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> updateComponent<span class="token punctuation">,</span> noop<span class="token punctuation">,</span> <span class="token punctuation">{</span>
<span class="token function">before</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>vm<span class="token punctuation">.</span>_isMounted <span class="token operator">&amp;&amp;</span> <span class="token operator">!</span>vm<span class="token punctuation">.</span>_isDestroyed<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">callHook</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> <span class="token string">&#39;beforeUpdate&#39;</span><span class="token punctuation">)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">true</span> <span class="token comment">/* isRenderWatcher */</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\u4EE5\u4E0A\u4EE3\u7801\u7247\u6BB5\u7684<strong>updateComponent</strong>\u65B9\u6CD5\u4E2D\u4F1A\u6267\u884Crender\u51FD\u6570\uFF0C\u5728\u8FD9\u5176\u4E2D\u8BFB\u53D6\u4E86data\u4E0A\u7684\u5B57\u6BB5\uFF0C\u5C06<strong>updateComponent</strong>\u4F5C\u4E3A\u53C2\u6570\u4F20\u5165<strong>new Watcher</strong>\u4E2D\u5B9E\u4F8B\u5316\u4E00\u4E2AWatcher\uFF0C\u5B9E\u4F8B\u5316\u65F6\u4F1A\u8C03\u7528<strong>Watcher.prototype.get</strong>\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4EE3\u7801\u7247\u6BB5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src\\core\\observer\\watcher.js</span>
<span class="token function">get</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">pushTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token keyword">let</span> value
<span class="token keyword">const</span> vm <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>vm
<span class="token keyword">try</span> <span class="token punctuation">{</span>
  value <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> vm<span class="token punctuation">)</span> 
<span class="token punctuation">}</span>
<span class="token comment">//...</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>pushTarget</strong>\u51FD\u6570</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// src\\core\\observer\\dep.js</span>
<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">pushTarget</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">target</span><span class="token operator">:</span> <span class="token operator">?</span>Watcher</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  targetStack<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>target<span class="token punctuation">)</span>
  Dep<span class="token punctuation">.</span>target <span class="token operator">=</span> target
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>get</strong>\u65B9\u6CD5\u4E2D\u7684<strong>this.getter.call(vm, vm)<strong>\u5C31\u662F</strong>updateComponent</strong>,\u4E0A\u6587\u8BF4\u5230\u8C03\u7528\u8FD9\u4E2A\u65B9\u6CD5\u4F1A\u8BFB\u53D6data\u4E0B\u7684\u503C\uFF0C\u4E5F\u5C31\u662F\u5728\u8FD9\u91CC\u9996\u6B21\u6267\u884C\u4E86\u5404\u4E2A\u5B57\u6BB5\u7684<strong>reactiveGetter</strong></p><p>\u4E0B\u9762\u6765\u770B\u4E0B<strong>reactiveGetter</strong>\u7684\u5B9E\u73B0</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// reactiveGetter\u4EE3\u7801\u7247\u6BB5</span>
Object<span class="token punctuation">.</span><span class="token function">defineProperty</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> key<span class="token punctuation">,</span> <span class="token punctuation">{</span>
  <span class="token literal-property property">enumerable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token literal-property property">configurable</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveGetter</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>childOb<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        childOb<span class="token punctuation">.</span>dep<span class="token punctuation">.</span><span class="token function">depend</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>Array<span class="token punctuation">.</span><span class="token function">isArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          <span class="token function">dependArray</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> value
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5206\u6790\u4E0A\u6587\u7684\u4EE3\u7801\uFF0C\u9996\u6B21\u6267\u884C<strong>reactiveGetter</strong>\u4E4B\u524D\u8C03\u7528\u4E86<strong>pushTarget</strong>\u5C06<strong>Dep.target</strong>\u8BBE\u4E3A\u4E86\u5F53\u524D\u5B9E\u4F8B\u7684\u6E32\u67D3Watcher\uFF0C\u6B64\u65F6\u6267\u884C<strong>dep.depend()</strong>\uFF0C\u5982\u4E0B</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">// Dep#depend</span>
<span class="token function">depend</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>Dep<span class="token punctuation">.</span>target<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      Dep<span class="token punctuation">.</span>target<span class="token punctuation">.</span><span class="token function">addDep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment">// Watcher#addDep</span>
<span class="token function">addDep</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">dep</span><span class="token operator">:</span> Dep</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> id <span class="token operator">=</span> dep<span class="token punctuation">.</span>id
  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDepIds<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span>
    <span class="token keyword">this</span><span class="token punctuation">.</span>newDeps<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>dep<span class="token punctuation">)</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>depIds<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      dep<span class="token punctuation">.</span><span class="token function">addSub</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u5C06\u8FD9\u4E2A\u5B57\u6BB5\u7684dep\u5B9E\u4F8B\u4E0E\u6E32\u67D3Watcher\u7ED1\u5B9A\u5728\u4E00\u8D77\uFF0C\u5728\u540E\u7EED\u7684<strong>reactiveSetter</strong>\u5C06\u4F1A\u4F7F\u7528\u8FD9\u4E24\u8005\u8FDB\u884Cdom\u7684\u66F4\u65B0</p><h2 id="reactivesetter" tabindex="-1"><a class="header-anchor" href="#reactivesetter" aria-hidden="true">#</a> reactiveSetter</h2><p>reactiveSetter\u4EE3\u7801\u7247\u6BB5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token function">reactiveSetter</span> <span class="token punctuation">(</span><span class="token parameter">newVal</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">const</span> value <span class="token operator">=</span> getter <span class="token operator">?</span> <span class="token function">getter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">)</span> <span class="token operator">:</span> val
      <span class="token comment">//...</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>setter<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">setter</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span>obj<span class="token punctuation">,</span> newVal<span class="token punctuation">)</span>
      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        val <span class="token operator">=</span> newVal
      <span class="token punctuation">}</span>
      childOb <span class="token operator">=</span> <span class="token operator">!</span>shallow <span class="token operator">&amp;&amp;</span> <span class="token function">observe</span><span class="token punctuation">(</span>newVal<span class="token punctuation">)</span>
      dep<span class="token punctuation">.</span><span class="token function">notify</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\u5728\u8FD9\u91CC\u4E00\u822C\u60C5\u51B5\u4E0B\u5C31\u662F\u5C06\u95ED\u5305\u4E2D\u7684val\u53D8\u91CF\u91CD\u65B0\u8D4B\u503C\uFF0C\u8BA9\u4E0B\u6B21getters\u53EF\u4EE5\u8BFB\u53D6\u5230\u65B0\u7684\u503C,\u7136\u540E\u8C03\u7528**dep.notify()**\u8FDB\u884Cdom\u66F4\u65B0<br><strong>notify</strong>\u4EE3\u7801\u7247\u6BB5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">notify</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// stabilize the subscriber list first</span>
    <span class="token keyword">const</span> subs <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>subs<span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">//..</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> l <span class="token operator">=</span> subs<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i <span class="token operator">&lt;</span> l<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      subs<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>\u8FD9\u91CC\u7684<strong>subs</strong>\u662F\u5728\u6267\u884C<strong>Watcher#addDep</strong>\u65B9\u6CD5\u65F6\u7ED1\u5B9A\u5230Dep\u5B9E\u4F8B\u4E0A\u7684\uFF0C\u4E5F\u5C31\u662F\u6267\u884C\u6267\u884C<strong>wahcher.update()</strong></p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>  <span class="token function">update</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">/* istanbul ignore else */</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>lazy<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span>dirty <span class="token operator">=</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sync<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
      <span class="token function">queueWatcher</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>\u4E00\u822C\u662F\u6267\u884C<strong>queueWatcher(this)</strong>\uFF0C\u5206\u6790\u4EE3\u7801\u53EF\u77E5\u653E\u5165\u961F\u5217\u7684\u4EE3\u7801 \u5C06\u4F1A\u5728\u4E3B\u7EBF\u7A0B\u6267\u884C\u5B8C\u4E4B\u540E\u9010\u4E2A\u6267\u884C<strong>watcher.run</strong>\u8FDB\u884Cdom\u7684\u66F4\u65B0\uFF0C\u8FD9\u4E5F\u5C31\u662FVue\u5F02\u6B65\u66F4\u65B0\u7684\u673A\u5236</p>`,33);function t(e,o){return p}var u=s(a,[["render",t]]);export{u as default};