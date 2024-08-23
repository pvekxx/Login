import React from 'react'
import { useSelector } from 'react-redux'

const Mypage = () => {
    const loginUser = useSelector((state) => {
        console.log("+++++++++++++++++ 전역 상태 데이터+++++++++++++++++")
        console.log(state);
        return !state.user ? null : state.user.payload
    })

    return (
        <div>
            <h1>마이페이지</h1>
            <div>
                {!loginUser ? (
                    <div>로그인 해.</div>
                ) : (
                    <>
                        <div>로그인된 사용자 email: {loginUser.email}</div>
                        <div>로그인된 사용자 id: {loginUser.uid}</div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Mypage
