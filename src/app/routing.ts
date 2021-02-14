import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component"
import { StudentComponent } from "./student/student.component";
import { CourseComponent } from "./course/course.component"
export const router:Routes = [
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"app",
        component:DashboardComponent,
        children:[
            {
                path:"student",
                component:StudentComponent
            },
            {
                path:"course",
                component:CourseComponent
            }
        ]
    },

    {
        path:"",
        redirectTo:"/login",
        pathMatch:"full"
    }
]