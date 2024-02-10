const getJobInStorage = () =>{
    const storedJobs = localStorage.getItem('applied-jobs');
    if(storedJobs){
        return JSON.parse(storedJobs);
    }
    return [];
}

const savedJobInStorage = (id) =>{
    const storedJobsApplication = getJobInStorage();
    const exits = storedJobsApplication.find(jobId => jobId === id);
    if(!exits){
        storedJobsApplication.push(id);
        localStorage.setItem('applied-jobs', JSON.stringify(storedJobsApplication));
    }
}

export {getJobInStorage, savedJobInStorage};