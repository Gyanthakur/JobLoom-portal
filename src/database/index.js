const { default: mongoose } = require("mongoose");

const connectToDb = async () => {
	const connectionURL = "mongodb+srv://gyan:jobportal@cluster0.exqx0pw.mongodb.net/";

	(await mongoose.connect(connectionURL))
		.then(() => console.log("Database connected successfully!"))
		.catch((error) => console.log("error"));
};


export default connectToDb;