import React, { useEffect, useState } from 'react';

const useHook = () => {
    const [jobsData, setJobsData] = useState([]);
    useEffect(() => {
        fetch('jobs.json')
            .then(res => res.json())
            .then(data => setJobsData(data))
    }, [])
    return [jobsData];
};

export default useHook;