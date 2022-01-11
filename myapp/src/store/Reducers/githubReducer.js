//IMPORT ACTION TYPES
import { FETCH_MISSION_START,FETCH_MISSION_SUCCESS,FETCH_MISSION_FAIL } from "../actions/githubActions"

const initialState = {
    mission:[],
    onLoading: false,
    error:""
}
export const githubReducer = (state = initialState, action) =>{
    console.log("REDUCER", action.payload)
switch(action.type){
    case FETCH_MISSION_START:
    return {
        ...state,
        onLoading:true,
        error:""
    }
    case FETCH_MISSION_SUCCESS:
    return{
        ...state,
        onLoading:false,
        mission:action.payload
    }
    case FETCH_MISSION_FAIL:
        return{
            ...state,
            onLoading:false,
            error:action.payload
        }

        default: 
        return state
}


}