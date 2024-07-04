import React, { useState } from 'react'

function useSearchQuery() {

    const [searchQuery, setSearchQuery] = useState("");

    const handleSearchQuery = (e) => {
        setSearchQuery(e.target.value);
    }
    return { searchQuery, handleSearchQuery }

}

export default useSearchQuery