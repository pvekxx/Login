const initState = {
    user: null
}

const reducer = (state = initState, action) => {
    const { type, payload } = action;
    switch (type) {
        case "LOGIN":
            return { ...state, user: { payload } }
        default:
            return state
    }
}

export default reducer

// 리듀서는 유저 아이템 인증 뭐 이렇게 기능별로 하나씩 !