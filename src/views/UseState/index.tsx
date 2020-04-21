import React, { useState } from 'react'

const Counter: React.FC = props => {
  const [count, setCount] = useState<number>(0)

  return (
    <div>
      <p>Count: { count }</p>
      <button onClick={() => setCount(count + 1)}>加</button>
      <button onClick={() => setCount(count - 1)}>减</button>
    </div>
  )
}

interface ArticleInterface {
  title: string;
  content: string;
}

const Article: React.FC = props => {
  const [article, setArticle] = useState<ArticleInterface>({ title: '', content: '' })

  return (
    <div>
      <p>Title: { article.title }</p>
      <section>{ article.content }</section>

      <button onClick={() => setArticle({
        title: '下一篇',
        content: '下一篇的内容' + Math.random()
      })}>
        下一篇
      </button>
    </div>
  )
}

const Result: React.FC = () => {
  return (
    <>
      <Counter />
      <Article />
    </>
  )
}

export default Result
