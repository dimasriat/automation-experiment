import config from "./config";
import { printSomething } from "./helper";

function main() {
  const TEXT = "foo";
  console.log(printSomething(TEXT));
  console.log(printSomething(config.SECRET_MESSAGE));
}

main();
