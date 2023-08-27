import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
    const client = await connectDB
    const db = client.db("forum")

    let userID = req.body.id
    let userPW = req.body.pw

    let uuuid = await db.collection("user").find({}, {id : 1}).toArray()

    for(var i = 0; i < uuuid.length; i++){
        if(uuuid[i].id == userID){
            return res.status(400).json('이미 존재하는 아이디입니다!')
        }
    }
    console.log(uuuid)
    if(userID == ''){
        return res.status(400).json('아이디를 입력해주세요!')
    }

    if(userPW == ''){
        return res.status(400).json('비밀번호를 입력해주세요!')
    }

    let data = {"_id" : new ObjectId(),'id' : userID, 'pw' : userPW}

    try {
        db.collection("user").insertOne(data)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }

    return res.status(200).redirect("/list")
}