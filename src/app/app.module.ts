import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TokensComponent } from './tokens/tokens.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AllocationComponent } from './allocation/allocation.component';
import { MarketComponent } from './market/market.component';
import { EthcontractService } from './ethcontract.service';
import { KeysPipe } from './keys.pipe';

const appRoutes: Routes = [
  { path: 'tokens', component: TokensComponent},
  { path: 'accounts',   component: AccountsComponent },
  { path: 'allocation',   component: AllocationComponent },
  { path: 'market',   component: MarketComponent },
  { path: '**', redirectTo: '/tokens'}
];

@NgModule({
  declarations: [
    KeysPipe,
    AppComponent,
    TokensComponent,
    AccountsComponent,
    AllocationComponent,
    MarketComponent
  ],
  imports: [
    BrowserModule,
    //RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
    RouterModule.forRoot(appRoutes, {onSameUrlNavigation: 'reload'}),
  ],
  providers: [ EthcontractService ],
  exports: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
