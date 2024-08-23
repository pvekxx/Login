import axios from "axios";

// 액션 크리에이터 함수 작성
export const userLogInAction = (signUpData, navigate) => {
    return async (dispatch, getState) => {
        try {
            const response = await axios.post("http://localhost:4000/user/login", signUpData)
            // console.log(response);
            // console.log("+++++++++++++++++ 액션/ 액시오스 응답 데이터+++++++++++++++++")
            // console.log(response.data)
            dispatch({ type: "LOGIN", payload: response.data }) // 리듀서 함수 호출 액션!
            alert("로그인 성공")
            navigate('/mypage')
        } catch (error) {
            alert("아이디/비밀번호 오류")
        }
    }
}
// 액션은 많이 만들어서 컴바인해서 쓰면 됨 !