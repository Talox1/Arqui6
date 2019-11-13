import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RfidComponent } from './components/rfid/rfid.component';
import { AlumnosComponent } from './components/alumnos/alumnos.component';
import { AsistenciaComponent } from './components/asistencia/asistencia.component';

const appRoutes: Routes = [
  { path:'', component:HomeComponent},
  { path:'home', component:HomeComponent},
  { path:'rfid', component:RfidComponent},
  { path:'alumnos', component:AlumnosComponent},
  { path :'asistencia', component:AsistenciaComponent},
  { path:'**',  redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
