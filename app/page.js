import { connectDB } from "@/util/database";

// ! 코드 안에서 await 쓰려면 async 붙여야함!
// DB 입출력은 서버 컴포넌트에서만 실행! - 보안 때문에!
export default async function Home(){
  const client = await connectDB
  const db = client.db("forum")

  // post의 모든 데이터를 가져와 array 변환!
  let result = await db.collection("post").find().toArray()
  // console.log(result)
  return(
    // 글 목록 조회기능 구현하기!
    <div>안녕!</div>
  )
}
