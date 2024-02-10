const getJobLocalStorage = () =>{
    const strodeJobs = localStorage.getItem('apply-jobs');
    if(strodeJobs){
        return JSON.parse(strodeJobs);
    }
    return [];
}

const saveJobLocalStorage = (id) =>{
    const savedJobs = getJobLocalStorage();
    const exits = savedJobs.find(jobId => jobId === id);
    if(!exits){
        savedJobs.push(id);
        localStorage.setItem('apply-jobs', JSON.stringify(savedJobs));
    }
}

export{getJobLocalStorage, saveJobLocalStorage};