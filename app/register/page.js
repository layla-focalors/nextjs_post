export default function Reg() {
    return (
        <div>
            <form action="/api/reg" method="POST">
                <input type="text" name="id" placeholder="아이디를 입력하세요!"></input>
                <input type="password" name="pw" placeholder="비밀번호를 입력하세요!"></input>
                <button type="submit">회원가입!</button>
            </form>
        </div>
    )
}