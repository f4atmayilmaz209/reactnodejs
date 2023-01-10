import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import './det.css';
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
const WorkoutDetails=({workout})=>{
    const {dispatch}=useWorkoutsContext()
    const handleClick=async ()=>{
       
        const response=await fetch('http://localhost:4000/api/workouts/'+workout._id,{
        method:'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Z-Key',
            'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, OPTIONS'}})
        const json=await response.json()
        if (response.ok){
            
            dispatch({type:'DELETE_WORKOUTS',payload:json})
            
        }
    }
    return (
        <div className="container">
            <h4>{workout.title}</h4>
            <p><strong>Load(kg):</strong>{workout.load}</p>
            <p><strong>Reps:</strong>{workout.reps}</p>
            <p>{formatDistanceToNow(new Date(workout.createdAt),{addSuffix:true})}</p>
            <span className="material-symbols-outlined" onClick={handleClick} >delete</span>
            
            
        </div>
        

    )

}

export default WorkoutDetails