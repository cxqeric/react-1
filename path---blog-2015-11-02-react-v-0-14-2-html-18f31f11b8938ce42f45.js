webpackJsonp([0xc298264b6a1e],{701:function(e,t){e.exports={data:{markdownRemark:{html:'<p>We have a quick update following the release of 0.14.1 last week. It turns out we broke a couple things in the development build of React when using Internet Explorer. Luckily it was only the development build, so your production applications were unaffected. This release is mostly to address those issues. There is one notable change if consuming React from npm. For the <code>react-dom</code> package, we moved <code>react</code> from a regular dependency to a peer dependency. This will impact very few people as these two are typically installed together at the top level, but it will fix some issues with dependencies of installed components also using <code>react</code> as a peer dependency.</p>\n<p>The release is now available for download:</p>\n<ul>\n<li><strong>React</strong><br>\nDev build with warnings: <a href="https://fb.me/react-0.14.2.js">https://fb.me/react-0.14.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-0.14.2.min.js">https://fb.me/react-0.14.2.min.js</a>  </li>\n<li><strong>React with Add-Ons</strong><br>\nDev build with warnings: <a href="https://fb.me/react-with-addons-0.14.2.js">https://fb.me/react-with-addons-0.14.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-with-addons-0.14.2.min.js">https://fb.me/react-with-addons-0.14.2.min.js</a>  </li>\n<li><strong>React DOM</strong> (include React in the page before React DOM)<br>\nDev build with warnings: <a href="https://fb.me/react-dom-0.14.2.js">https://fb.me/react-dom-0.14.2.js</a><br>\nMinified build for production: <a href="https://fb.me/react-dom-0.14.2.min.js">https://fb.me/react-dom-0.14.2.min.js</a>  </li>\n</ul>\n<p>We’ve also published version <code>0.14.2</code> of the <code>react</code>, <code>react-dom</code>, and addons packages on npm and the <code>react</code> package on bower.</p>\n<hr>\n<h2 id="changelog"><a href="#changelog" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Changelog</h2>\n<h3 id="react-dom"><a href="#react-dom" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React DOM</h3>\n<ul>\n<li>Fixed bug with development build preventing events from firing in some versions of Internet Explorer &#x26; Edge</li>\n<li>Fixed bug with development build when using es5-sham in older versions of Internet Explorer</li>\n<li>Added support for <code>integrity</code> attribute</li>\n<li>Fixed bug resulting in <code>children</code> prop being coerced to a string for custom elements, which was not the desired behavior.</li>\n<li>Moved <code>react</code> from <code>dependencies</code> to <code>peerDependencies</code> to match expectations and align with <code>react-addons-*</code> packages</li>\n</ul>',excerpt:"We have a quick update following the release of 0.14.1 last week. It turns out we broke a couple things in the development build of React when using Internet Explorer. Luckily it was only the development build, so your production applications were unaffected. This release is mostly to address those issues. There is one notable change if consuming React from npm. For the  react-dom  package, we moved  react  from a regular dependency to a peer dependency. This will impact very few people as these…",frontmatter:{title:"React v0.14.2",next:null,prev:null,author:[{frontmatter:{name:"Paul O’Shannessy",url:"https://twitter.com/zpao"}}]},fields:{date:"November 02, 2015",path:"blog/2015-11-02-react-v0.14.2.md",slug:"/blog/2015/11/02/react-v0.14.2.html"}},allMarkdownRemark:{edges:[{node:{frontmatter:{title:"Behind the Scenes: Improving the Repository Infrastructure"},fields:{slug:"/blog/2017/12/15/improving-the-repository-infrastructure.html"}}},{node:{frontmatter:{title:"Introducing the React RFC Process"},fields:{slug:"/blog/2017/12/07/introducing-the-react-rfc-process.html"}}},{node:{frontmatter:{title:"React v16.2.0: Improved Support for Fragments"},fields:{slug:"/blog/2017/11/28/react-v16.2.0-fragment-support.html"}}},{node:{frontmatter:{title:"React v16.0"},fields:{slug:"/blog/2017/09/26/react-v16.0.html"}}},{node:{frontmatter:{title:"React v15.6.2"},fields:{slug:"/blog/2017/09/25/react-v15.6.2.html"}}},{node:{frontmatter:{title:"DOM Attributes in React 16"},fields:{slug:"/blog/2017/09/08/dom-attributes-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handle in React 16"},fields:{slug:"/blog/2017/07/26/error-handle-in-react-16.html"}}},{node:{frontmatter:{title:"Error Handling in React 16"},fields:{slug:"/blog/2017/07/26/error-handling-in-react-16.html"}}},{node:{frontmatter:{title:"React v15.6.0"},fields:{slug:"/blog/2017/06/13/react-v15.6.0.html"}}},{node:{frontmatter:{title:"What's New in Create React App"},fields:{slug:"/blog/2017/05/18/whats-new-in-create-react-app.html"}}}]}},pathContext:{slug:"/blog/2015/11/02/react-v0.14.2.html"}}}});
//# sourceMappingURL=path---blog-2015-11-02-react-v-0-14-2-html-18f31f11b8938ce42f45.js.map