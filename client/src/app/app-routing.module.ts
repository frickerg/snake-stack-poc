import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryDisplayComponent } from './query-display/query-display.component';

const routes: Routes = [
	{ path: '**', component: QueryDisplayComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
