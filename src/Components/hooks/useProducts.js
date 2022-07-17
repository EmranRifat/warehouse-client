import { useEffect, useState } from "react"

const useProducts = () => {

    const [items, setItems] = useState([]);

    useEffect(() => {

        fetch('https://desolate-reef-26430.herokuapp.com/service ')
            .then(res => res.json())
            .then(data => setItems(data))
    }, []);
    return [items, setItems];

}
export default useProducts;