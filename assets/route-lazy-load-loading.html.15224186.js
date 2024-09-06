import{r as e,o,c,a as s,b as p,F as l,d as t,e as n}from"./app.a140cb59.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=t(`<h1 id="vue\u8DEF\u7531\u61D2\u52A0\u8F7Dloading" tabindex="-1"><a class="header-anchor" href="#vue\u8DEF\u7531\u61D2\u52A0\u8F7Dloading" aria-hidden="true">#</a> Vue\u8DEF\u7531\u61D2\u52A0\u8F7Dloading</h1><p>VueRouter\u5E76\u4E0D\u652F\u6301\u8FD9\u79CD\u5199\u6CD5</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>projectMeta<span class="token punctuation">.</span><span class="token constant">ROUTER_BASE</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
			<span class="token function-variable function">component</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
				<span class="token literal-property property">component</span><span class="token operator">:</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
				<span class="token literal-property property">loading</span><span class="token operator">:</span>Skeleton
			<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,3),k=n("\u5728VueRouter\u7684github\u4E2D\u627E\u5230\u4E86\u8FD9\u6761"),b={href:"https://github.com/vuejs/vue-router/issues/2830",target:"_blank",rel:"noopener noreferrer"},m=n("issue"),d=n(",\u6839\u636E\u91CC\u8FB9\u63D0\u4F9B\u7684\u65B9\u6848 "),y={href:"https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/router/routes.js",target:"_blank",rel:"noopener noreferrer"},g=n("https://github.com/chrisvfritz/vue-enterprise-boilerplate/blob/master/src/router/routes.js"),h=n("\uFF0C\u9488\u5BF9\u81EA\u5DF1\u7684\u4E1A\u52A1\u505A\u4E86\u4E00\u4E9B\u6539\u9020"),f=t(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token keyword">export</span>  <span class="token keyword">const</span>  <span class="token function-variable function">lazyLoadView</span><span class="token operator">=</span><span class="token punctuation">(</span><span class="token parameter">loadComponent</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span><span class="token punctuation">{</span>
	<span class="token comment">//\u5728\u52A0\u8F7D\u4E2D\u6216\u8005\u52A0\u8F7D\u9519\u8BEF\u65F6\u53EF\u4EE5\u6709\u56DE\u9000\u52A8\u753B\uFF0C\u4F46\u662F\u52A0\u8F7D\u6210\u529F\u540E\u66FF\u6362\u6210\u9875\u9762\u7EC4\u4EF6\u7684\u8FC7\u7A0B\u4E2D\u4E0D\u9700\u8981\u52A8\u753B</span>
	<span class="token keyword">const</span> props<span class="token operator">=</span>Vue<span class="token punctuation">.</span><span class="token function">observable</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">loading</span><span class="token operator">:</span><span class="token boolean">true</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">const</span> <span class="token function-variable function">AsyncComponent</span>  <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">{</span>
		<span class="token literal-property property">component</span><span class="token operator">:</span> <span class="token function">loadComponent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token parameter">c</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
			props<span class="token punctuation">.</span>loading<span class="token operator">=</span><span class="token boolean">false</span><span class="token punctuation">;</span>
			<span class="token keyword">await</span> Vue<span class="token punctuation">.</span><span class="token function">nextTick</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token keyword">return</span> c<span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
		<span class="token literal-property property">loading</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>Skeleton<span class="token punctuation">,</span><span class="token punctuation">{</span>
					<span class="token operator">...</span>data<span class="token punctuation">,</span>
					<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
						<span class="token literal-property property">loading</span><span class="token operator">:</span>props<span class="token punctuation">.</span>loading<span class="token punctuation">,</span>
						<span class="token operator">...</span>data<span class="token punctuation">.</span>props
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">delay</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span>
		<span class="token literal-property property">error</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
			<span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
				<span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>Skeleton<span class="token punctuation">,</span><span class="token punctuation">{</span>
					<span class="token operator">...</span>data<span class="token punctuation">,</span>
					<span class="token literal-property property">props</span><span class="token operator">:</span><span class="token punctuation">{</span>
						<span class="token literal-property property">error</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span>
						<span class="token operator">...</span>data<span class="token punctuation">.</span>props
					<span class="token punctuation">}</span><span class="token punctuation">,</span>
				<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
			<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
		<span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">30000</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token keyword">return</span> <span class="token punctuation">{</span>
		<span class="token literal-property property">functional</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
		<span class="token function">render</span> <span class="token punctuation">(</span><span class="token parameter">h<span class="token punctuation">,</span><span class="token punctuation">{</span>data<span class="token punctuation">}</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
			<span class="token keyword">return</span> <span class="token function">h</span><span class="token punctuation">(</span>AsyncComponent<span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">}</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> instance <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Router</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
	<span class="token literal-property property">base</span><span class="token operator">:</span> process<span class="token punctuation">.</span>env<span class="token punctuation">.</span>projectMeta<span class="token punctuation">.</span><span class="token constant">ROUTER_BASE</span><span class="token punctuation">,</span>
	<span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">&#39;history&#39;</span><span class="token punctuation">,</span>
	<span class="token literal-property property">routes</span><span class="token operator">:</span> <span class="token punctuation">[</span>
		<span class="token punctuation">{</span>
			<span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">&#39;/&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;post&#39;</span><span class="token punctuation">,</span>
			<span class="token literal-property property">component</span><span class="token operator">:</span><span class="token function">lazyLoadView</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@/views/post&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token punctuation">]</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br></div></div>`,1);function _(v,w){const a=e("ExternalLinkIcon");return o(),c(l,null,[i,s("p",null,[k,s("a",b,[m,p(a)]),d,s("a",y,[g,p(a)]),h]),f],64)}var V=r(u,[["render",_]]);export{V as default};
