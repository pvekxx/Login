import React from 'react'
import axios from 'axios'
import LabelPlusInput from '../molecules/LabelPlusInput'
import Button from '../atoms/Button'
import useInput from '../../hooks/useInput';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()

    const email = useInput(''); // value= "", onchange = (e) => {} 상태변수, 온체인지시 상태 변경 함수
    const uid = useInput('');
    const upw = useInput('');

    const handlerOnclick = async (e) => {
        e.preventDefault();
        const signUpData = {
            email: email.value,
            uid: uid.value,
            upw: upw.value,
        };
        console.log("인풋값")
        console.log(signUpData)
        try {
            await axios.post("http://localhost:4000/user/signup", signUpData)
            alert("회원가입 성공")
            navigate('/login')
        } catch (error) {
            alert("이미 가입된 이메일/아이디")
        }
    }

    return (
        <div>
            <h1>회원가입</h1>
            <LabelPlusInput type="text" placeholder="EMAIL" {...email}>이메일</LabelPlusInput>
            <LabelPlusInput type="text" placeholder="ID" {...uid}>아이디</LabelPlusInput>
            <LabelPlusInput type="password" placeholder="PASSWORD" {...upw}>비밀번호</LabelPlusInput>
            <Button onClick={handlerOnclick}>회원가입</Button>
        </div>
    )
}

export default SignUp
