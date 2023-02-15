import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ListLaunchesComponent } from './components/list-launches/list-launches.component';
import { MissionComponent } from './components/mission/mission.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { FilterMissionsNamePipe } from './pipes/filter-missions-name.pipe';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { RocketsComponent } from './components/rockets/rockets.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { LimitSymbolsPipe } from './pipes/limit-symbols.pipe';
import { Falcon1Component } from './components/falcon1/falcon1.component';
import { Falcon9Component } from './components/falcon9/falcon9.component';
import { FalconHeavyComponent } from './components/falcon-heavy/falcon-heavy.component';
import { StarshipComponent } from './components/starship/starship.component';
import { SuccessLaunchPipe } from './pipes/success-launch.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountLaunchRocketPipe } from './pipes/count-launch-rocket.pipe';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import { ScrollPageComponent } from './components/scroll-page/scroll-page.component'
import { MatProgressBarModule } from "@angular/material/progress-bar";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundPageComponent,
    ListLaunchesComponent,
    MissionComponent,
    FilterMissionsNamePipe,
    FilterDatePipe,
    RocketsComponent,
    RocketComponent,
    LimitSymbolsPipe,
    Falcon1Component,
    Falcon9Component,
    FalconHeavyComponent,
    StarshipComponent,
    SuccessLaunchPipe,
    CountLaunchRocketPipe,
    ScrollPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatProgressBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
