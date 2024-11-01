import { useLoaderData, useParams } from "react-router-dom";


const BookDetails = () => {

    const {bookId} = useParams()
    const data = useLoaderData()

    const book = data.find(book => book.bookId === +bookId)
    const {image} = book

    return (
      <div className="my-12 flex items-center gap-24">
        <div className="bg-gray-200 p-12">
          <img src={image} className="h-96" alt="" />
        </div>
        <div className="flex items-center gap-6">
          <button className="btn btn-accent">Mark As Read</button>
          <button className="btn btn-outline btn-accent">Add To Wishlist</button>
        </div>
      </div>
    );
};

export default BookDetails;