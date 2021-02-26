import { Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { DashboardComponent } from "./dashboard/dashboard.component"
import { StudentComponent } from "./student/student.component";
import { CourseComponent } from "./course/course.component"
import { StudentListComponent } from "./student-list/student-list.component";
import { TableComponent } from "./table/table.component";
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
                path:"table",
                component:TableComponent
            },
            {
                path:"student",
                component:StudentComponent,
                children:[
                    {
                        path:"course",
                            component:CourseComponent
                    },
                    
                    {
                        path:"studentlist",
                        component:StudentListComponent
                    },
                ]
            },

            // {
            //     path:"course",
            //     component:CourseComponent
            // }
        ]
    },

    {
        path:"",
        redirectTo:"/login",
        pathMatch:"full"
    }
]