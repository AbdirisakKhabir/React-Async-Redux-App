import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { fetchMissions } from "../store/actions/githubActions";
import "../components/style.css";
function GithubApi(){

      // UseSelector waxay u yeeraysaa Reducer-ka
  const missionData = useSelector(state => state.mission);
  const missionLoading = useSelector(state => state.isLoading)
  const missionErrors = useSelector(state => state.error)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchMissions()) 
    }, [dispatch])

    console.log("missionData", missionData)
    return (
        <div className="card">
           <div className="card-img">
        <img src={missionData.avatar_url} className="image" /> 
        </div>
        <div className="card-text">
        <h2> {missionData.name}</h2>
        <h3>Bio: {missionData.bio}</h3>
        <h3>Location: {missionData.location}</h3>
        <h3>URL: {missionData.html_url}</h3>
        <h3>Followers: {missionData.followers}</h3>
        <button onClick={missionData.html_url}>Visit</button>
        </div>

            {missionLoading ? <h3>Mission Loading Now...</h3> :null }
            {missionErrors ? <h3>Sorry Something Went Wrong</h3> :null }

        </div>
    )
}
export default GithubApi;