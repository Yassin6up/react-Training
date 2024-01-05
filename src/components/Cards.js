import React ,{ useState , useEffect }  from "react";

function Card() {
const [schools , setSchools ] = useState([])
const [change , setChange] = useState(0)
const [text , setText] = useState("")

useEffect(()=>{
    fetch("http://universities.hipolabs.com/search?country=" + text)
    .then((res)=>{
        return res.json()
        }).then((data)=>{
            setSchools(data)
        })
} , [change] )

const handleClick = ()=>{
    setChange(change + 1)
}

const handelChange = (event)=>{
setText(event.target.value)
}

    return (
        <center>
        <div className="card" >
            <ul>
                {schools.map(school=>{
                    return <li>{school.name}</li>
                })}
            </ul>
            <br></br>
            <br></br>
            <br></br>
            <div style={{width:"100%"}}>
            <input type="text" onChange={handelChange} />
            <button onClick={handleClick}  className="btn btn-primary" >Change</button>
            </div>
        </div>
        </center>
    )
}
export default Card;




















