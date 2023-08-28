import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
    const client = await connectDB
    const db = client.db("forum")
    // db.collection("post").updateOne()
    
    let newtitle = req.body.title
    let newcontent = req.body.content
    let dataID = req.body._id

    let data = {"_id" : new ObjectId(dataID), 'title' : newtitle, 'content' : newcontent}
    console.log(data)
    // let data = {"_id" : new ObjectId(timeInMs), 'title' : title, 'content' : content}

    if(newcontent == ''){
        return res.status(400).json('내용을 입력해주세요!')
    }
    if(newtitle == ''){
        return res.status(400).json('제목을 입력해주세요!')
    }

    try{
        await db.collection("post").updateOne({_id : new ObjectId(dataID)}, {$set : {title : newtitle, content : newcontent}})
    }
    catch(err){
        return res.status(400).json("오류입니다!")
    }
    return res.status(200).redirect("/list")

    //     // DB 예외처리! ( try, catch 문 사용! )
    //     // db에 직접 저장은 위험하기에 user -> server -> db 순으로 개발하기!

    //     try {
    //         db.collection("post").insertOne(data)
    //     }
    //     catch(err){
    //         console.log(err)
    //         return res.status(500).json(err)
    //     }

    // console.log(newtitle)
    // console.log(newcontent)
    // console.log(dataID)
}