import express, {Request, Response} from 'express'
const app = express()

const port = process.env.PORT || 3000

import db from './models'
import { ProjectAssignments } from './seeders/projectAssignment'
import { projects } from './seeders/projects'
import {users} from './seeders/users'

const createUsers = ()=>{
    users.map(user => {
        db.User.create(user)
    })
}

const createProject = ()=>{
    projects.map(project => {
        db.Project.create(project)
    })
}

const createProjectAssignment = ()=>{
    ProjectAssignments.map(ProjectAssignment => {
        db.ProjectAssignment.create(ProjectAssignment)
    })
}

// createUsers()
// createProject()
// createProjectAssignment()
app.get('/', (req:Request, res:Response)=>{
    return 'jeff ngugi'
})
 
db.sequelize.sync().then(()=>{
    app.listen(port, ()=>{
        console.log(`App listening on port ${port}`)
    })
})