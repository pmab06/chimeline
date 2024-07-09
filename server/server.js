const express = require("express");
const app = express();

app.get("/api", (req,res)=>{
	res.json({"users":["NavyBluue_","navy240sx","stNavy"]})
})

app.listen(5000, () => {console.log("Hi! Server started on port 5000")})