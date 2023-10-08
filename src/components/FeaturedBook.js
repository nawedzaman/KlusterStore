const FeaturedBook = () => {
  const featuredBook = {
    coverImage:
      "https://ik.imagekit.io/qzwxtlokd/Lordoftherings.jpg?updatedAt=1696663471605",
    title: "The Lord of the Rings",
    author: "J.R.R. Tolkien",
    description:
      "An epic high fantasy trilogy written by English philologist and University of Oxford professor J. R. R. Tolkien. The story began as a sequel to Tolkien's 1937 fantasy novel The Hobbit, but eventually developed into a much larger work. Written in stages between 1937 and 1949, with much of it being written during World War II, it was originally published in three volumes in 1954 and 1955. It has since been reprinted numerous times and translated into at least 38 languages, becoming one of the best-selling novels ever written.",
  };

  return (
    <div className="featured-book">
      <h3>Featured</h3>
      <hr />
      <div className="featured-book-image">
        <img src={featuredBook.coverImage} alt={featuredBook.title} />
      </div>
      <div className="featured-book-info">
        <h3>{featuredBook.title}</h3>
        <h4>{featuredBook.author}</h4>
        <p>{featuredBook.description}</p>
      </div>
    </div>
  );
};
export default FeaturedBook;
