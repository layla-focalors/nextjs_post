'use client'
import Link from 'next/link'
import { EditorButton } from "@/app/list/editorbutton"
import { useEffect } from 'react'

export default function Listitem(props) {
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
                    </div>
                )
            })
            // 생략하고 싶다면! {()} 끝 생략 가능!
            }
        </div>
    )
}

export { Listitem }