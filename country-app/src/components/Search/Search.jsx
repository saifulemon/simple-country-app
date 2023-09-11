import { useEffect, useState } from "react"


const Search = (props) => {
    const [search, setSearch] = useState('');

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        props.onSearch(search);
    }, [search])
  return (
    <div style={{textAlign: "center"}}>
        <input type="text" placeholder="Search Country" value={search} onChange={handleChange} />
    </div>
  )
}

export default Search