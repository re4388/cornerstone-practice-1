import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Dwv0Component } from './dwv0/dwv0.component';
import { AppComponent } from './app.component';

const routes: Routes = [{ path: 'dwv0', component: Dwv0Component }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
