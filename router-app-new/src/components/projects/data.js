export const data ={
    projects:[
        {projectID: '101', projectName: 'Project A', location: 'xyz', management:'Manager A'},
        {projectID: '102', projectName: 'Project B', location: 'abc', management:'Manager B'},
        {projectID: '103', projectName: 'Project C', location: 'def', management:'Manager C'},

    ],


    getProjectById(id){
        return this.projects.find(project =>{
            project.projectID === id
        })
    },

    deleteProjectById(id){
        this.projects = this.projects.filter(project =>{
            project.projectID !== id
        })
    }




}


