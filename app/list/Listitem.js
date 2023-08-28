'use client'
import Link from 'next/link'
import { EditorButton } from "@/app/list/editorbutton"
import { useEffect } from 'react'

export default function Listitem(props) {
    // result 변수에 담아서 아래에는 props가 없어요!
    // 요 방식이 아니면 props.result.title 식으로 써요!!
    // 아니면 props버리고 저 영역에 {result} ok!
    let result = props.res

    // useEffect = 서버에게 부탁하는 코드!
    // 단점 = 이런 식으로 코드짜면 검색이 잘 안됨!
    // useEffect = html 렌더링 후 실행!
    // 검색 노출이 잘 안됨! ( 검색엔진 봇들은 못 읽음! )
    // useEffect(() => {}, [])
    // 가장 좋은 건 props사용!
    // client는 유저가 볼 수 있으니 서버 컴포넌트가 좋음!!
    return(
        <div>
            {
            result.map((v, i) => {
                return (
                    <div className="list-item">
                        {/* 링크태그가 useRoute의 prefetch 기능이에요 */}
                        <Link prefetch={false} href={"detail"+ "/" + result[i]._id}>
                            <h4>{result[i].title}</h4>
                        </Link>
                        {/* <Links></Links> */}
                        <p>{result[i].content}</p>
                        <EditorButton link={result[i]._id}></EditorButton>
                        {/* form 써도 되지만! client에서는 ajax 사용 가능! */}
                        <span onClick={()=>{
                            // 부드러운 전환 - 비동기는 ajax!
                            fetch('/api/delete', {
                                method : 'POST',
                                // body : "서버로 보내는 데이터!"
                                // obejct , array 쓰려면
                                body : result[i]._id
                            }).then((r)=>{
                                // 서버로부터 응답을 받으면 then실행!
                                return r.json()

                                // alert('삭제되었습니다!')
                                // 서버로부터 응답을 받으면 then실행!
                            }).then((r)=>{
                                console.log(r)
                            }).then((result)=>{
                                //성공시 실행할 코드!
                            }).catch((err)=>{
                                console.log(err)
                            })
                            // ajax 에러처리

                                //                             //정식 코드 fetch('/URL')
                                // .then((r)=>{
                                //     if(r.status == 200) {
                                //       return r.json()
                                //     } else {
                                //       //서버가 에러코드전송시 실행할코드
                                //     }
                                //   })
                                //   .then((result)=>{ 
                                //     //성공시 실행할코드
                                //   }).catch((error)=>{
                                //     //인터넷문제 등으로 실패시 실행할코드
                                //     console.log(error)
                                //   })
                        }}>delete!</span>
                    </div>
                )
            })
            // 생략하고 싶다면! {()} 끝 생략 가능!
            }
        </div>
    )
}

export { Listitem }