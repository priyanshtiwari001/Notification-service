const dotenv = require('dotenv');

dotenv.config();


module.exports = {
    PORT: process.env.PORT,
    EMAIL:process.env.EMAIL,
    GMAIL_PASS:process.env.GMAIL_PASS
}
