const mongoose = require("mongoose");

// import
require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        .then(() => { console.log("DB Connect successfully") })
        .catch((error) => {
            console.log("DB Facing Connection Issues");
            console.log(error);

            // This line mening is 
            // return 0;
            // stop the code with error
            // Abnormal termination
        // process.exit(1); 
            process.exitWithFailure();
        })
}

module.exports = connectWithDb;