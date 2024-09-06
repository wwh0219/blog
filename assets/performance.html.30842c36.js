import{r as t,o as e,c as o,a as n,b as p,F as c,e as s,d as r}from"./app.a140cb59.js";import{_ as l}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"\u52A0\u8F7D\u6027\u80FD\u76D1\u63A7\u6307\u6807",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u52A0\u8F7D\u6027\u80FD\u76D1\u63A7\u6307\u6807","aria-hidden":"true"},"#"),s(" \u52A0\u8F7D\u6027\u80FD\u76D1\u63A7\u6307\u6807")],-1),k=n("p",null,"\u53C2\u8003\u8D44\u6599\uFF1A",-1),m={href:"https://www.w3.org/TR/navigation-timing-2/#processing-model",target:"_blank",rel:"noopener noreferrer"},b=s("performance api\u65F6\u95F4\u7EBF"),d={href:"https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp",target:"_blank",rel:"noopener noreferrer"},f=s("\u5173\u952E\u6E32\u67D3\u8DEF\u5F84"),h={href:"https://web.dev/i18n/zh/vitals/",target:"_blank",rel:"noopener noreferrer"},_=s("LCP\u3001FID\u3001CLS\u6307\u6807\u76F8\u5173"),g=r(`<div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token comment">//\u83B7\u53D6\u6027\u80FD\u6570\u636E</span>
<span class="token keyword">const</span> perf<span class="token operator">=</span>performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">&#39;navigation&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token comment">//\u6574\u4F53\u767D\u5C4F\u65F6\u95F4</span>
<span class="token keyword">const</span> blankScreen<span class="token operator">=</span>perf<span class="token punctuation">.</span>domContentLoadedEventEnd<span class="token operator">-</span>perf<span class="token punctuation">.</span>fetchStart
<span class="token comment">//dns\u89E3\u6790</span>
<span class="token keyword">const</span> dns<span class="token operator">=</span>perf<span class="token punctuation">.</span>domainLookupEnd<span class="token operator">-</span>perf<span class="token punctuation">.</span>domainLookupStart
<span class="token comment">//tcp</span>
<span class="token keyword">const</span> tcp<span class="token operator">=</span>perf<span class="token punctuation">.</span>connectEnd<span class="token operator">-</span>perf<span class="token punctuation">.</span>connectStart
<span class="token comment">//ssl</span>
<span class="token keyword">const</span> ssl<span class="token operator">=</span>perf<span class="token punctuation">.</span>requestStart<span class="token operator">-</span>perf<span class="token punctuation">.</span>secureConnectionStart
<span class="token comment">//\u9996\u5B57\u8282\u54CD\u5E94\u65F6\u95F4\uFF0C\u5728tcp\u8FDE\u63A5\u5EFA\u7ACB\u5B8C\u6210\u540E\u53D1\u51FAhttp\u8BF7\u6C42\u5230http\u54CD\u5E94\u7684\u65F6\u95F4</span>
<span class="token keyword">const</span> ttfb<span class="token operator">=</span>perf<span class="token punctuation">.</span>responseStart<span class="token operator">-</span>perf<span class="token punctuation">.</span>requestStart
<span class="token comment">//html\u4F20\u8F93\u65F6\u95F4</span>
<span class="token keyword">const</span> htmlDownload<span class="token operator">=</span>perf<span class="token punctuation">.</span>responseEnd<span class="token operator">-</span>perf<span class="token punctuation">.</span>responseStart
<span class="token comment">//html\u89E3\u6790,\u5305\u542Bhtml\u7ED3\u6784\u89E3\u6790\u53CA\u8D44\u6E90\u52A0\u8F7D\u65F6\u95F4</span>
<span class="token keyword">const</span> htmlParse<span class="token operator">=</span>perf<span class="token punctuation">.</span>domInteractive<span class="token operator">-</span>perf<span class="token punctuation">.</span>responseEnd

<span class="token keyword">const</span> resources<span class="token operator">=</span>performance<span class="token punctuation">.</span><span class="token function">getEntriesByType</span><span class="token punctuation">(</span><span class="token string">&#39;resource&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token parameter">i</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
  <span class="token keyword">return</span> i<span class="token punctuation">.</span>initiatorType<span class="token operator">===</span><span class="token string">&#39;css&#39;</span><span class="token operator">||</span>i<span class="token punctuation">.</span>initiatorType<span class="token operator">===</span><span class="token string">&#39;script&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">const</span> firstResourceStartTime<span class="token operator">=</span>resources<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span>b</span><span class="token punctuation">)</span><span class="token operator">=&gt;</span>a<span class="token punctuation">.</span>fetchStart<span class="token operator">-</span>b<span class="token punctuation">.</span>fetchStart<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fetchStart
<span class="token comment">//css\u3001js\u8D44\u6E90\u52A0\u8F7D\u65F6\u95F4</span>
<span class="token keyword">const</span> resourceLoadTime<span class="token operator">=</span>perf<span class="token punctuation">.</span>domContentLoadedEventEnd<span class="token operator">-</span>firstResourceStartTime
console<span class="token punctuation">.</span><span class="token function">table</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  blankScreen<span class="token punctuation">,</span>
  dns<span class="token punctuation">,</span>
  tcp<span class="token punctuation">,</span>
  ssl<span class="token punctuation">,</span>
  ttfb<span class="token punctuation">,</span>
  htmlDownload<span class="token punctuation">,</span>
  htmlParse<span class="token punctuation">,</span>
  resourceLoadTime
<span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div>`,1);function w(y,S){const a=t("ExternalLinkIcon");return e(),o(c,null,[i,k,n("p",null,[n("a",m,[b,p(a)])]),n("p",null,[n("a",d,[f,p(a)])]),n("p",null,[n("a",h,[_,p(a)])]),g],64)}var L=l(u,[["render",w]]);export{L as default};