import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { MainComponent } from './Components/main/main.component';
import { WhyPremiumComponent } from './Components/why-premium/why-premium.component';
import { PickPremiumComponent } from './Components/pick-premium/pick-premium.component';
import { FooterComponent } from './Components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainComponent,
    WhyPremiumComponent,
    PickPremiumComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
