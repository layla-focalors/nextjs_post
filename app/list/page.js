import { connectDB } from "@/util/database";

export default async function List() {
const client = await connectDB
const db = client.db("forum")

  // post의 모든 데이터를 가져와 array 변환!
// 코드 처리를 대기하기 위해서 promise 리턴하는 async와 await 사용!

// 첫 자료가 [ 라면 ! array 배열자료!
// 자료가! { 라면 ! object 객체자료!

// 오브젝트 자료형
let data = { name : 'noa! is cute', age : 20 }
// console.log(data.name)
let result = await db.collection("post").find().toArray()
//   console.log(result[0]._id)
    return (
      <div className="list-bg">
        {
            result.map((v, i) => {
                return (
                    <div className="list-item">
                        <h4>{result[i].title}</h4>
                        <p>{result[i].content}</p>
                    </div>
                )
            })
            // 생략하고 싶다면! {()} 끝 생략 가능!
        }
      </div>
    )
}