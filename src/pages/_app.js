import "../node_modules/github-markdown-css/github-markdown.css"
import "../style.css"

export default function App({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  )
}