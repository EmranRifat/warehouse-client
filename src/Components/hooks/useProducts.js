import { useEffect, useState } from "react"

const useProducts = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems];

}
export default useProducts;