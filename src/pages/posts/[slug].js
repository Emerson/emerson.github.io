import React from "react"
import matter from "gray-matter"
import ReactMarkdown from "react-markdown"
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter"
import {hopscotch} from "react-syntax-highlighter/dist/cjs/styles/prism"
import gfm from "remark-gfm"

let markdownComponents = {
  code({node, inline, className, children, ...props}) {
    const match = /language-(\w+)/.exec(className || "")
    return !inline && match ? (
      <SyntaxHighlighter style={hopscotch} language={match[1]} PreTag="div" children={String(children).replace(/\n$/, "")} {...props} />
    ) : (
      <code className={className} children={children} {...props} />
    )
  }
}

function PostTemplate(props) {
  let { title, date, content } = props
  return (
    <section className="article markdown-body">
      <a className="article__back-link" href="/">👈 &nbsp;Back</a>
      <h1>{title}</h1>
      <date className="article__date">Published: {date}</date>
      <ReactMarkdown components={markdownComponents} remarkPlugins={[[gfm]]}>
        {content}
      </ReactMarkdown>
    </section>
  )
}

PostTemplate.getInitialProps = async (context) => {
  let { slug } = context.query
  let content = await import(`../../content/${slug}.md`)
  let post = matter(content.default)
  return {
    slug,
    title: post.data.title,
    date: post.data.date,
    content: post.content
  }
}

export default PostTemplate