import {useState} from 'react';
import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Home = () => {
    const [items,setItems] = useState([]);
    const [eachItem, setEachItem] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        const updatedItems = [...items,eachItem];
        setItems(updatedItems);
        toast.success("items added",{theme:'light'});
        setEachItem("");
    }
    const handleDelete = (idx) => {
        const updatedItems = [...items];
        toast.error("item deleted",{theme:'light'});
        updatedItems.splice(idx,1)
        setItems(updatedItems);
    }
    return (
        <>
            <ToastContainer stacked />
            <div className="w-[50%] flex flex-col items-center justify-center gap-10 p-10 shadow-xl rounded-2xl ">
                <p className="text-3xl font-semibold text-gray-600">Grocery Bud</p>
                <form onSubmit={handleSubmit}> 
                    <div className="border border-solid border-black border-opacity-20 p-2 rounded-lg">
                        <input
                            className="p-2 text-gray-600 bg-transparent"
                            placeholder="enter your grocery"
                            value={eachItem}
                            onChange={(e) => setEachItem(e.target.value)}
                        />
                        <button type="submit" className="p-2 bg-red-600 rounded-lg text-white">Add Items</button>
                    </div>
                </form>
                <ul className='flex flex-col rounded-lg w-[40%] shadow-xl p-2'>
                    {
                        items.map((ele,idx) => (
                            <li key={idx} className='flex items-center p-2 w-full justify-between rounded-lg'>
                                {idx+1}. {ele}
                                <MdDelete className='text-rose-600 hover:scale-110 cursor-pointer transition-all' onClick={() => handleDelete(idx)}/>
                            </li>
                        ))
                    }
                </ul>
                
            </div>
        </>
    )
}
export default Home;