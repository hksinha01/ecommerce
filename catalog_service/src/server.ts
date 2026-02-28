import expressApp from "./expressApp.js"
const PORT = process.env.PORT || 8080;

export const StartServer = async() => {

  expressApp.listen(PORT, ()=>{
    console.log("App is Listenting to ", PORT)
  })

  process.on("uncaughtException", async(err) => {
    console.log(err);
    process.exit(1)
  })
}

StartServer().then(()=>{
  console.log("Server is up")
})