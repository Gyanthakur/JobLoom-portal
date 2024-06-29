// const { default: mongoose } = require("mongoose");

// const connectToDb = async () => {
// 	const connectionURL = "mongodb+srv://gyan:jobportal@cluster0.exqx0pw.mongodb.net/";

// 	(await mongoose.connect(connectionURL))
// 		.then(() => console.log("Database connected successfully!"))
// 		.catch((error) => console.log("error"));
// };


// export default connectToDb;




const { default: mongoose } = require("mongoose");

const connectToDB = async () => {
  const connectionURL = process.env.MONGODB_URL;

  mongoose
    .connect(connectionURL)
    .then(() => console.log("jon board database connection is successfull"))
    .catch((error) => console.log(error));
};

export default connectToDB;