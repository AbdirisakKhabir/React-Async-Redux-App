
// Import axios
import axios from "axios"

// Action Types
export const FETCH_MISSION_START = "FETCH_MISSION_START"
export const FETCH_MISSION_SUCCESS = "FETCH_MISSION_SUCCESS"
export const FETCH_MISSION_FAIL = "FETCH_MISSION_FAIL"


// Action Creator
export const fetchMissions = () => (dispatch) => {

  // Dispatch Start
  dispatch({type: FETCH_MISSION_START})

  // API CALL with axios
  axios.get("https://api.github.com/users/AbdirisakKhabir")
  .then((res) => {

    // Dispatch Succes
    dispatch({type: FETCH_MISSION_SUCCESS, payload: res.data})

  })
  .catch((err) => {
    dispatch({type: FETCH_MISSION_FAIL, payload: err.message})
  })
}