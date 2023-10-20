import moment from "moment";

export function printSomething(msg: string) {
  const timestamp = moment().format("YYYY-MM-DD HH:mm:ss");
  return `✦ ${timestamp} ${msg}`;
}
