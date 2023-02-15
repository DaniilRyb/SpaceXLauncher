import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { NotFoundPageComponent } from "./components/not-found-page/not-found-page.component";
import { ListLaunchesComponent } from "./components/list-launches/list-launches.component";
import { RocketsComponent } from "./components/rockets/rockets.component";
import { Falcon1Component } from "./components/falcon1/falcon1.component";
import { Falcon9Component } from "./components/falcon9/falcon9.component";
import { FalconHeavyComponent } from "./components/falcon-heavy/falcon-heavy.component";
import { StarshipComponent } from "./components/starship/starship.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', redirectTo: '/', pathMatch: 'full'},
  {path: 'launches', component: ListLaunchesComponent},
  {path: 'rockets', component: RocketsComponent},
  {path: 'rockets/falcon1', component: Falcon1Component},
  {path: 'rockets/falcon9', component: Falcon9Component},
  {path: 'rockets/falconheavy', component: FalconHeavyComponent},
  {path: 'rockets/starship', component: StarshipComponent},
  {path: '**', component: NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
