import Book from "./model.book";

/* get logged in user data */
export const getBooks = async(req, res) => {
  try{
    const books=await Book.find();
    res.status(200).send(books)
  }catch(err){
    console.log(err);
    res
      .status(500)
      .send({ message: "Something went wrong. Please contact support." });
  }
  };

  /* get logged in user data */
export const setBooks = async(req, res) => {
  try{
    req.body
    const books=await Book.insertMany(req.body);
    res.status(200).send(books)
  }catch(err){
    console.log(err);
    res
      .status(500)
      .send({ message: "Something went wrong. Please contact support." });
  }
  };



// /* update logged in user data */
// export const updateUser=(req,res)=>{}

// /* delete logged in user data */
// export const deleteUser=(req,res)=>{}

