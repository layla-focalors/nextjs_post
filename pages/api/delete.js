import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
    const client = await connectDB
    const db = client.db("forum")
    let data = req.body
    console.log("server receive" + data)

    await db.collection("post").deleteOne({_id : new ObjectId(data)})
    // await db.collection("post").updateOne({_id : new ObjectId(dataID)}, {$set : {title : newtitle, content : newcontent}})
    
    res.status(200).json("성공!")
}