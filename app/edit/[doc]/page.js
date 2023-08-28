import { connectDB } from "@/util/database";
import { ObjectId } from "mongodb";

export default async function Edit(props){
    const client = await connectDB
    const db = client.db("forum")
    let result = await db.collection("post").findOne({ _id : new ObjectId(props.params.doc) })
    console.log(props.params.doc)
    // let data = {"_id" : new ObjectId(props.params.noa), 'title' : result.title, 'content' : result.content}
    console.log(result)
    console.log(result.title)
    console.log(result._id)
    return (
        <div>
            <form action="/api/edit" method="POST">
                <h4>글 수정 페이지!</h4>
                <input type="text" name="title" defaultValue={result.title}></input>
                <input type="text" name="content" defaultValue={result.content}></input>
                <button type="submit">발행!</button>
                <input type="hidden" name="_id" value={props.params.doc}></input>
            </form>
        </div>
    )
}