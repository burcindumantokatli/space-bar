import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ResponseClaimType} from "../../types/response-claim-type";
import {Observable} from "rxjs";

@Component({
    selector: 'app-pre-claim',
    templateUrl: './pre-claim.component.html',
    styleUrls: ['./pre-claim.component.sass']
})
export class PreClaimComponent implements OnInit {
    @Input() claimData: Observable<ResponseClaimType>;
    @Output() claimMade = new EventEmitter<Observable<ResponseClaimType>>();

    private boolClaimMade: boolean = false;
    public oData: ResponseClaimType;

    public isClaimMade(): boolean {
        return this.boolClaimMade;
    }

    ngOnInit(): void {
        this.claimData.subscribe((value) => {
            this.oData = value;
        })
    }

    makeClaim() {
        this.boolClaimMade = true;
        this.claimMade.emit(this.claimData);
    }
}
