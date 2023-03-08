import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { ListLaunchesComponent } from './components/list-launches/list-launches.component';
import { MissionComponent } from './components/mission/mission.component';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FilterMissionsNamePipe } from './pipes/filter-missions-name.pipe';
import { FilterDatePipe } from './pipes/filter-date.pipe';
import { RocketsComponent } from './components/rockets/rockets.component';
import { RocketComponent } from './components/rocket/rocket.component';
import { LimitSymbolsPipe } from './pipes/limit-symbols.pipe';
import { Falcon1Component } from './components/rockets-list/falcon1/falcon1.component';
import { Falcon9Component } from './components/rockets-list/falcon9/falcon9.component';
import { FalconHeavyComponent } from './components/rockets-list/falcon-heavy/falcon-heavy.component';
import { StarshipComponent } from './components/rockets-list/starship/starship.component';
import { SuccessLaunchPipe } from './pipes/success-launch.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CountLaunchRocketPipe } from './pipes/count-launch-rocket.pipe';
import { MatOptionModule } from "@angular/material/core";
import { MatSelectModule } from "@angular/material/select";
import { MatInputModule } from '@angular/material/input';
import { ScrollPageComponent } from './components/scroll-page/scroll-page.component'
import { MatProgressBarModule } from "@angular/material/progress-bar";
import { MatAutocompleteModule } from "@angular/material/autocomplete";
import { MdbCarouselModule } from "mdb-angular-ui-kit/carousel";
import { MenuComponent } from './components/menu/menu.component';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

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
    MenuComponent,
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
    MatProgressBarModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MdbCheckboxModule,
    MdbCarouselModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'ru'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
