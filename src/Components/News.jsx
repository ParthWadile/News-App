import { useState, useEffect } from "react"
import Newsitem from "./Newsitem"

const News = ({catagory}) => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=${catagory}&apiKey=${import.meta.env.VITE_API_KEY}`

    fetch(url)
      .then(res => res.json())
      .then(data => setArticles(data.articles))
  }, [catagory])

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      <div className="row g-4">
        {articles.map((news, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-4 col-lg-3"
          >
            <Newsitem
              title={news.title}
              description={news.description}
              url={news.url}
              src={news.urlToImage}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default News
