import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MtLandingComponent } from './mt-landing/mt-landing.component';
import { MtSelectionAndPurchaseComponent } from './mt-selection-and-purchase/mt-selection-and-purchase.component';
import { MtTicketReviewComponent } from './mt-ticket-review/mt-ticket-review.component';
import { MtConfirmPurchaseComponent } from './mt-confirm-purchase/mt-confirm-purchase.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RedactionPipe } from './redaction.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    MtLandingComponent,
    MtSelectionAndPurchaseComponent,
    MtTicketReviewComponent,
    MtConfirmPurchaseComponent,
    RedactionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
