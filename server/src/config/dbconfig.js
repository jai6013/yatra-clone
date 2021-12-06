const mongoose = require('mongoose')
module.exports = () => mongoose.connect("mongodb+srv://yatra-clone:yatraclone123@yatra-clone.xrxnv.mongodb.net/yatra?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify:false,
}
);
