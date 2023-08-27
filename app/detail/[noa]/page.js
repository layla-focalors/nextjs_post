// 다이나믹 라우팅!
// detail/{key}에 아무거나 입력해도 page.js 보여주기!
// 비슷한 폴더명이 많이 필요하면 사용하기!

import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Page(props) {
    const client = await connectDB
    const db = client.db("forum")
    // new도 붙여야 해요!
    let result = await db.collection("post").findOne({ _id : new ObjectId(props.params.noa) })
    // 유저가 접속한 파라미터에 입력한 값 제공!
    // console.log(result)
    return (
        <div>
            <h4>상세페이지!</h4>
            <div>{result.title}</div>
            <div>{result.content}</div>
        </div>
    
    )
}