const app = require("./src/app/app");
const appConstants = require("./src/app/constants/app.constants");

const port = appConstants.PROT;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})