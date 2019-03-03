import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserlistComponent } from './userlist/userlist.component';
import { UsercreateComponent } from './usercreate/usercreate.component';
const routes: Routes = [
{
	path:'',
	component: UserlistComponent 
},
{
	path:'create',
	component: UsercreateComponent 
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
