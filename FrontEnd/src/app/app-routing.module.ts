import { NgModule             } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlumnoComponent } from './components/alumno/alumno.component'

const routes: Routes = [
  {path: 'alumno', component: AlumnoComponent}
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
