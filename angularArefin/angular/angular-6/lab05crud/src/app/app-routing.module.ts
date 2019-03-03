import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserCreateComponent } from './user-create/user-create.component';
const routes: Routes = [
{
path:'',
component: HomeComponent
},
{
path:'about',
component: AboutComponent
},
{
path:'userlist',
component: UserListComponent
},
{
path:'usercreate',
component: UserCreateComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
