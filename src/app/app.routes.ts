import { Routes } from '@angular/router';
import { SigleLayoutComponent } from './layout/sigle-layout/sigle-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileCardComponent } from './pages/profile-card/profile-card.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'/dashboard'
    },
    {
        path:'',
        component:SigleLayoutComponent,
        children:[
            {
                path:'dashboard',
                component:DashboardComponent
            },
            {
                path:'users',
                component:UsersComponent
            },
            {
                path:'profile',
                component:ProfileCardComponent
            }
        ]
    }
];
