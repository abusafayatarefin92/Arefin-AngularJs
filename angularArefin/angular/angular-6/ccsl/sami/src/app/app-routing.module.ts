import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
import { DeleteuserComponent } from './deleteuser/deleteuser.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
{
	path:'',
	component: UserlistComponent 
},
{
	path:'create',
	component: UsercreateComponent 
},
{
	path:'delete',
	component: DeleteuserComponent 
},
{
	path:'edit',
	component: EdituserComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
