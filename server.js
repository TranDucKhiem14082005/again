const app = require("./src/app");
const appConstants = require("./src/constants/app.constants");

const port = appConstants.PROT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})