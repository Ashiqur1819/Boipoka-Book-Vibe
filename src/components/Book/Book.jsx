import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const { bookId, bookName, author, image, tags,category, rating } = book;

  return (
    <div className="card shadow-xl p-6 border">
      <figure className="bg-gray-200 py-8 rounded-2xl">
        <img src={image} className="h-44 w-32 object-cover " alt={bookName} />
      </figure>
      <div className="card-body p-0 mt-4">
        <div className="flex items-center gap-4">
          {tags.map((tag, index) => (
            <div key={index}>
              <button className="btn btn-sm bg-green-50 text-green-600">
                {tag}
              </button>
            </div>
          ))}
        </div>
        <h2 className="card-title text-2xl font-semibold">{bookName}</h2>
        <p>Written by: {author}</p>
        <div className="border-t-2 border-dashed"></div>
        <div className="card-actions justify-between">
          <div className="">{category}</div>
          <div className="">Rating: {rating}★</div>
        </div>
        <br />
        <Link to={`/books/${bookId}`}>
          <button className="btn btn-success text-white w-full text-lg">
            More Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Book;
