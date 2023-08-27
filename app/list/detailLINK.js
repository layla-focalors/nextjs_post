'use client'
import { useParams, usePathname, useRouter } from 'next/navigation'

export default function Links(){

    // useRouter = client 안에서만 사용!
    // 유저의 입력이 궁금할 때!
    let router = useRouter(
    )
    let ac = usePathname()
    let ab = useParams()
    return (

        // push = 페이지 이동!
        // back = 뒤로가기!
        // forward = 앞으로가기!
        // refresh = 새로고침!
        // prefetch = 미리 로딩!

        <button onClick={()=>{router.prefetch('/detail')}}>페이지 이동</button>
    )
}

export { Links }