import { PersonaRegistroComponent } from './examen/persona-registro/persona-registro.component';

import { PersonaConsultaComponent } from './examen/persona-consulta/persona-consulta.component';

import { NgModule, Component } from '@angular/core';

import { CommonModule } from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{

path: 'personaConsulta',

component: PersonaConsultaComponent

},

{

path: 'personaRegistro',

component: PersonaRegistroComponent

}

];

@NgModule({

declarations: [],

imports: [

CommonModule,

RouterModule.forRoot(routes)

],

exports:[RouterModule]

})

export class AppRoutingModule { }