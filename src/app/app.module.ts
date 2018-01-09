import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule}   from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { RuletaContainerComponent } from './componentes/ruleta-container/ruleta-container.component';
import { RuletaItemComponent } from './componentes/ruleta-item/ruleta-item.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    RuletaItemComponent,
    RuletaContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
