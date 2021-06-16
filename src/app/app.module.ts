import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Baitap1Component } from './baitap1/baitap1.component';
import { Baitap1HeaderComponent } from './baitap1/baitap1-header/baitap1-header.component';
import { Baitap1ContentComponent } from './baitap1/baitap1-content/baitap1-content.component';
import { Baitap1SidebarComponent } from './baitap1/baitap1-sidebar/baitap1-sidebar.component';
import { Baitap1FooterComponent } from './baitap1/baitap1-footer/baitap1-footer.component';
// Module bt 2
import { Baitap2Module } from './baitap2/baitap2.module';
// Module bt 3
import { Baitap3Module } from './baitap3/baitap3.module';
// Module binding data
import { DataBindingModule } from './data-binding/data-binding.module';
// Module directive
import { StructuralDirectiveModule } from './structural-directive/structural-directive.module';
// Attribute directive
import { AttributeDirectiveModule } from './attribute-directive/attribute-directive.module';
// Interaction
import { InteractionModule } from './interaction/interaction.module';
import { BookingBusModule } from './booking-bus/booking-bus.module';
// Routing
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SidebarComponent,
    Baitap1FooterComponent,
  ],
  imports: [
    BrowserModule,
    Baitap2Module,
    Baitap3Module,
    DataBindingModule,
    StructuralDirectiveModule,
    AttributeDirectiveModule,
    InteractionModule,
    BookingBusModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
