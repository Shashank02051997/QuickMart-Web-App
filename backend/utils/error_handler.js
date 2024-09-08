// Function to handle errors
function handleError(err, res) {
  console.log("Error ===>", err);
  res
    .status(500)
    .json({ code: 500, status: false, message: "Internal Server Error" });
}

export default handleError;
