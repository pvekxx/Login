import React from 'react'
import Button from '../atoms/Button'
import LabelPlusInput from '../molecules/LabelPlusInput'
import SignUpText from '../atoms/SignUpText'
import { Link, useNavigate } from 'react-router-dom'
import useInput from '../../hooks/useInput'
import { useDispatch } from 'react-redux'
// import axios from 'axios'
import { userLogInAction } from '../../action'

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const uid = useInput('');
    const upw = useInput('');

    const handlerOnclick = async (e) => {
        e.preventDefault();
        const signUpData = {
            uid: uid.value,
            upw: upw.value,
        };
        console.log("인풋값")
        console.log(signUpData)
        dispatch(userLogInAction(signUpData, navigate))

        // const response = await axios.post("http://localhost:4000/user/login", signUpData)
        // if (response.status === 201) {
        //     console.log(response);
        //     alert("로그인 성공")
        //     navigate('/mypage')
        // }
    }

    return (
        <div>
            <h1>로그인</h1>
            <LabelPlusInput type="text" placeholder="ID" {...uid}>아이디</LabelPlusInput>
            <LabelPlusInput type="password" placeholder="PASSWORD" {...upw}>비밀번호</LabelPlusInput>
            <Button onClick={handlerOnclick}>로그인</Button>
            <Link to={'/signup'}>
                <SignUpText>회원가입 페이지로 이동</SignUpText>
            </Link>


        </div>
    )
}

export default Login
