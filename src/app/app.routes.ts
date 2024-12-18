import { Routes } from '@angular/router';
import { SigleLayoutComponent } from './layout/sigle-layout/sigle-layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { ProfileCardComponent } from './pages/profile-card/profile-card.component';
import { CreateComponent } from './pages/users/create/create.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { EditFruitComponent } from './pages/users/edit-fruit/edit-fruit.component';
import { ListsComponent } from './pages/list/lists/lists.component';

export const routes: Routes = [
    {
        path:'',
        pathMatch:'full',
        redirectTo:'login'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'signup',
        component:SignupComponent
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
                path:'user',
                component:ListsComponent
            },
            {
                path:'users/fruit',
                component:UsersComponent
            },
            {
                path:'users/fruit/create',
                component:CreateComponent
            },
            {
                path:'users/fruit/edit',
                component:EditFruitComponent
            },
            {
                path:'profile',
                component:ProfileCardComponent
            },
            {
                path:'logout',
                component:LogoutComponent
            }
        ]
    }
];
