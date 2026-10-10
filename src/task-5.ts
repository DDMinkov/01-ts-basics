type Status = "loading" | "success" | "error";

function logStatus(status: Status): void {
  switch (status) {
    case "loading":
      console.log("Loading...");
      break;
    case "success":
      console.log("Data loaded successfully!");
      break;
    case "error":
      console.log("An error occurred!");
      break;
  }
}

logStatus("loading");
logStatus("success");
logStatus("error");
// logStatus("done"); // itll error out!! intended!!