import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Handler(req, res) {
    const client = await connectDB
    const db = client.db("forum")
    if(req.method === 'POST'){
        console.log(req.body)
        // DB에 저장하기!
        var timeInMs = Date.now();

        let content = req.body.content
        let title = req.body.title

        if(content == ''){
            return res.status(400).json('내용을 입력해주세요!')
        }
        if(title == ''){
            return res.status(400).json('제목을 입력해주세요!')
        }

        let data = {"_id" : new ObjectId(timeInMs), 'title' : title, 'content' : content}

        // DB 예외처리! ( try, catch 문 사용! )
        // db에 직접 저장은 위험하기에 user -> server -> db 순으로 개발하기!

        try {
            db.collection("post").insertOne(data)
        }
        catch(err){
            console.log(err)
            return res.status(500).json(err)
        }


        return (
            // 이 코드 실행 후 페이지 이동!
            res.status(200).redirect("/list")
            // location.href = "/list"
        )
        // return res.status(200)
    }
    else{
        res.status(400).json('잘못된 요청이에요!')
    }
}