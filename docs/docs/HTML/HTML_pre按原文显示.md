---
title: HTML_pre按原文显示
---
文本将保留所有空格、换行符和其他空白符，并且使用固定宽度的字体来显示文本

```html
<pre>
This is preformatted text.
It will be displayed in a fixed-width font,
and will preserve all whitespace and line breaks.
</pre>
```

`<pre>` 标签中的文本会被浏览器自动解析为纯文本

如果需要在文本中包含 HTML 标签，则需要进行转义，例如使用 `&lt;` 代替 `<`，使用 `&gt;` 代替 `>` 

```html
<pre>
This is a &lt;b&gt;bold&lt;/b&gt; text.
It will be displayed with the &lt;b&gt; tags shown as plain text.
</pre>
```

```
This is a <b>bold</b> text.
It will be displayed with the <b> tags shown as plain text.
```
