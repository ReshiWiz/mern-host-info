// import mongoose from "mongoose";

// const connect_DB = async (username, password) => {
//   // mongoose.set("strictQuery", false);

//   const URL = `mongodb+srv://${username}:${password}@user-data.tvee6sd.mongodb.net/USER-DATA-BASE?retryWrites=true&w=majority`;
//   // console.log(URL);
//   try {
//     await mongoose.connect(
//       URL,
//       {
//         useUnifiedTopology: true,
//         useNewUrlParser: true,
//         strictQuery : false
//         // strictQuery : false
//         // useCreateIndex: true,
//       },
//       console.log("running local port ")
//     );
//   } catch (error) {
//     console.log("some thing went wrong,error");
//   }
// };

// export default connect_DB;
import mongoose from "mongoose";
const connection_DB = async (user_name, user_password) => {
  const URL = `mongodb+srv://${user_name}:${user_password}@user-info-db.yf3us9e.mongodb.net/USER-INFO-DB?retryWrites=true&w=majority`;
  try {
    // mongoose.set("strictQuery", false);
    mongoose.set("strictQuery", false);

    await mongoose.connect(URL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("database connected successfully");
  } catch (error) {
    console.log("error while connection to Database", error);
  }
};
export default connection_DB;



