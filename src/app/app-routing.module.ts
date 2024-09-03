import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MtLandingComponent } from './mt-landing/mt-landing.component';
import { MtSelectionAndPurchaseComponent } from './mt-selection-and-purchase/mt-selection-and-purchase.component';
import { MtTicketReviewComponent } from './mt-ticket-review/mt-ticket-review.component';
import { MtConfirmPurchaseComponent } from './mt-confirm-purchase/mt-confirm-purchase.component';

const routes: Routes = [
{path: '', component: MtLandingComponent },
{path: 'movie-selection', component: MtSelectionAndPurchaseComponent },
{path: 'ticket-review', component: MtTicketReviewComponent },
{path: 'confirmation-purchase', component: MtConfirmPurchaseComponent },
{path: '', redirectTo: '/movie-selection', pathMatch: 'full' },
{path: '**', redirectTo: '/movie-selection' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
