import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgxChartsModule} from '@swimlane/ngx-charts';

import {AppComponent, AvailableDeviceComponent, DiagramComponent, LoginComponent, OverviewComponent} from './components';
import {DiagramService} from './services';
import {MaxValidator, MinValidator} from './validators';
import {AppRoutingModule} from './app-routing.module';

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
    OverviewComponent
  ],
  providers: [
    DiagramService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
