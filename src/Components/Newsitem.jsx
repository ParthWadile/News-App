import image from "../assets/news.jpg"

const Newsitem = ({ title, description, url, src }) => {
  return (
    <div className="card bg-dark text-light h-100 shadow-sm">
      <img
        src={src || image}
        onError={(e) => {
          e.target.onerror = null   // prevents infinite loop
          e.target.src = image
        }}
        className="card-img-top"
        style={{ height: "200px", objectFit: "cover" }}
        alt="news"
      />

      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>

        <p className="card-text">
          {description
            ? description.slice(0, 100) + "..."
            : "No description available"}
        </p>

        <a href={url} target="_blank" className="btn btn-primary mt-auto">
          Read More
        </a>
      </div>
    </div>
  )
}

export default Newsitem
