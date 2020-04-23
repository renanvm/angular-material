import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DemoModule } from './demo/demo.module';
import { ContactManagerModule } from './contact-manager/contact-manager.module';


const routes: Routes = [{ path: 'contactmanager', loadChildren: './contact-manager/contact-manager.module#ContactManagerModule' },
{ path: 'demo', loadChildren: './demo/demo.module#DemoModule' },
{ path: '**', redirectTo: 'contactmanager' }];

@NgModule({
  imports: [ContactManagerModule, DemoModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
