import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { DownBarComponent } from './down-bar/down-bar.component';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    DownBarComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
