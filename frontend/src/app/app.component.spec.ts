import {TestBed, async, ComponentFixture} from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing';
import {AppComponent} from './app.component';
import {MinuteSecondsPipe} from "../pipes/minuteSeconds";
import {PreClaimComponent} from "./pre-claim/pre-claim.component";
import {PostClaimComponent} from "./post-claim/post-claim.component";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import {ClaimService} from "../services/claim-service";

describe('AppComponent', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                RouterTestingModule,
                CommonModule,
                HttpClientModule
            ],
            declarations: [
                AppComponent,
                MinuteSecondsPipe,
                PreClaimComponent,
                PostClaimComponent
            ],
            providers: [ClaimService]
        }).compileComponents()
    }));

    it('should create the app', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.debugElement.componentInstance;
        expect(app).toBeTruthy();
    }));

    it('should have first component: app-pre-claim', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-pre-claim')).toBeDefined();
    }));

    it('should render button text', () => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('.div-button-claim').textContent).toContain('Claim now');
    });

    it('should have app-post-claim', async(() => {
        const fixture = TestBed.createComponent(AppComponent);
        fixture.detectChanges();
        const compiled = fixture.debugElement.nativeElement;
        expect(compiled.querySelector('app-post-claim')).toBeDefined();
    }));

});
