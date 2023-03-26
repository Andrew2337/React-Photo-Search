export default function SearchPhotos(
    {query , setQuery}
) {

    const updateQueryFn = (e) => {
        setQuery(e.target.value)
    }

    return(
        <form className='form text center'>
        <input 
            type="text" 
            className="input"
            placeholder="試著搜尋Dog吧~"
            value={query}
            onChange={updateQueryFn}
        />
        </form>
    )
}