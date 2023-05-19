import react, {useState} from "react";
import { useDispatch } from "react-redux";
import * as act from "../../redux/actions";

const SearBar = () => {

    const dispatch = useDispatch()
    const [name, setName] = useState("");

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            // Presionar "Enter" equivale a hacer clic en el botón
            handleButton();
        }
    };

    function handleChange (e) {
        e.preventDefault();
        setName(e.target.value);
    }

    function handleButton (e) {
        //e.preventDefault();
        dispatch(act.getByName(name))
    }

    return (
        <div>
            <input type="text" placeholder="Search country by name..." onChange={e => handleChange(e)}  onKeyDown={handleKeyDown} />
            <button type="submit" className="" onClick={e => handleButton(e)} >Search</button>
        </div>
    )
}

export default SearBar;