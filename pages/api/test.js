import { connectDB } from "@/util/database";

export default async function Handler(req, res) {
    console.log(123)
    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection("post").find().toArray()
    // else if(req.method === 'GET'){
    //     // 서버에 있는 정보를 보내야 함!
    //     return (
    //         // 서버에 요청하면 응답을 꼭 해 줘야 해요!
    //         // 안 그러면.. 무한 로딩!
    
    //         // 오류가 없으면 200!
    //         // 서버에 오류가 있으면 500!
    //         // 유저 잘못은 400!
    
    //         res.status(200).json('노아서버에요!')
    //     )
    //     // 마지막 : 글 쓰기 기능 구현!
    // }
    return res.status(200).json(result)
}