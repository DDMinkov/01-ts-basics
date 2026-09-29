type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  console.log(`Current status: ${status}`);
}

logStatus("loading");
logStatus("success");
logStatus("error");
// logStatus("done"); // itll error out!! intended!!