import reducer from "../reducer"

import { applyMiddleware, createStore } from "redux"
import { thunk } from "redux-thunk"

// redux 전역 상태 인스턴스 생성
export const store = createStore(reducer, applyMiddleware(thunk))
// 전역 상태 미들웨어 적용.
// thunk를 줘야 액션에 함수를 받을수 있대요.