import { connectDB } from "@/util/database";
import { EditorButton } from "@/app/list/editorbutton"
import Link from "next/link";
import { Links } from '@/app/list/detailLINK'
 
import { Listitem } from "@/app/list/Listitem"

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
        <Listitem res={result}></Listitem>
      </div>
    )
}