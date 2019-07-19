import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ClaimService} from "../services/claim-service";
import {HttpClientModule} from "@angular/common/http";
import {MinuteSecondsPipe} from "../pipes/minuteSeconds";
import {PreClaimComponent} from "./pre-claim/pre-claim.component";
import {CommonModule} from "@angular/common";
import {PostClaimComponent} from "./post-claim/post-claim.component";

@NgModule({
    declarations: [
        AppComponent,
        MinuteSecondsPipe,
        PreClaimComponent,
        PostClaimComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CommonModule,
        HttpClientModule
    ],
    exports: [
        MinuteSecondsPipe
    ],
    providers: [ClaimService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
