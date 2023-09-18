import express, { Request, Response } from "express";

const managers = [
  { name: "Anton", age: 22 },
  { name: "Anna", age: 22 },
  { name: "Vadym", age: 22 },
];

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get('/',(req, res)=>{
//     res.send({
//         message:'hello'
//     })
// })
app.get("/managers", (req: Request, res: Response) => {
  res.status(200).json(managers);
});

const PORT = 5001;
app.listen(PORT, () => {
  console.log(`Server has started on PORT ${PORT}`);
});
