import { React,useState } from "react";
import { SearchbarFetch } from "./SearchbarFetch";
import { SearchResultsList } from "./SearchResultsList";

const Searchbar = () => {

    const [results, setResults] = useState([]);

    return (
        <>
            <div>
                <div className="search-bar-container">
                    <SearchbarFetch setResults={setResults} />
                    {results && results.length > 0 && <SearchResultsList results={results} />}
                </div>
            </div>
        </>
    )
}

export default Searchbar