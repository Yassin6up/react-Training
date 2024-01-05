import React , {useEffect , useState} from 'react'




function Table(props) {
    const [data, setData] = useState( props.list || []) 





const handleDelet = (e)=>{

    let updateArray = data.filter((ele)=> ele.matricule != e.target.id)
    setData(updateArray)
}



    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col" >#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Note</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((user) => {
        return (
            <tr>
                <th scope="row" key={user.matricule}>{user.matricule}</th>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.note}</td>
                <td><button class="btn btn-danger" id={user.matricule} onClick={handleDelet}>delete</button></td>
            </tr>
        )
    })
                }
                


            </tbody>
        </table>
    )
}

export default Table