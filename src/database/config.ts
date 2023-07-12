import mongoose from "mongoose"

export const inicialize = () => {
    mongoose.connection.on("Error", function(error){
        console.log("erro na conexão", error)
    })
    .once("open", function(){
        console.log("Conexão feita com banco de dados")
    })

    mongoose.connect(process.env.DATABASE_URL as string)
}