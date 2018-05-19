import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {AppComponent, AvailableDeviceComponent, DiagramComponent, LoginComponent, OverviewComponent, OptionsComponent, DetailsComponent} from './components';
import {DiagramService, UserService} from './services';
import {MaxValidator, MinValidator,ConfirmEqualValidatorDirective } from './validators';
import {AppRoutingModule} from './app-routing.module';
import { LoginGuard } from './login.guard';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    NgxChartsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    AvailableDeviceComponent,
    DiagramComponent,
    MaxValidator,
    MinValidator,
    LoginComponent,
    OverviewComponent,
    OptionsComponent,
    DetailsComponent,
    FooterComponent,
    ConfirmEqualValidatorDirective
  ],
  providers: [
    DiagramService,
    UserService,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
