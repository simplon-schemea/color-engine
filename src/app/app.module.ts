import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { ColorListComponent } from "./components/color-list/color-list.component";
import { ColorFormComponent } from "./components/color-form/color-form.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ColorListComponent,
    ColorFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
