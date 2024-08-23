import React, { useState } from 'react'

const useInput = (initValue) => {
    const [value, setValue] = useState(initValue);
    const onChange = (e) => {
        // console.log(e.target.value)
        setValue(e.target.value);
    }

    return (
        { value, onChange }
    )
}

export default useInput

// 온체인지 = 로 변경이 되면
// 상태변수 value를 를 변경

// 상태변수, 온체인지함수 를 내보냄