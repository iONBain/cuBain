import { useContext } from "react"
import { DataContext } from "../contexts/DataContext"

const ManageAddress = () => {
    const {data,dataDispatch} = useContext(DataContext)
    const handleCloseAddress = () =>{
        dataDispatch({
            type:"SET_SHOW_ADDRESS",
            payload:false
        })
    }
    return <section className="address-box">
address here
<button onClick={()=>handleCloseAddress()} >Close</button>
{/* {data} */}
{
    "address here"
}
    </section>
}


export default ManageAddress

