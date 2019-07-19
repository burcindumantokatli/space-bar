import {Component, OnDestroy, OnInit} from '@angular/core';
import {ClaimService} from "../services/claim-service";
import {ResponseClaimType} from "../types/response-claim-type";
import {Observable} from "rxjs";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
    public boolClaimed: boolean = false;
    public preClaimData$: Observable<ResponseClaimType>;
    public postClaimData$: Observable<ResponseClaimType>;

    constructor(private claimService: ClaimService) {

    }

    ngOnInit() {
        // RxJs way
        // data will be gathered through ajax request
        // when observable return value that object will be passed to first component
        // in first component, when user clicks button, data is being transfered to app component
        // after that it will be transfered to second component to show the result
        this.preClaimData$ = this.claimService.getObservable();

        // promise way
        // this.claimService.getPromise().then(
        //     (response: any) => {
        //         this.intAmount = response.amount;
        //         this.strPrize = response.prize;
        //         this.strGame = response.game;
        //         this.intCountDown = response.countdown;
        //     },
        //     (error: any) => {
        //         console.log('Error occured: ', error);
        //     }
        // );
    }

    isClaimMade(oData: Observable<ResponseClaimType>) {
        this.boolClaimed = true;
        this.postClaimData$ = oData;
    }
}


