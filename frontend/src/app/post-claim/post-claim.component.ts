import {Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import {ResponseClaimType} from "../../types/response-claim-type";
import {Observable} from "rxjs";

@Component({
    selector: 'app-post-claim',
    templateUrl: './post-claim.component.html',
    styleUrls: ['./post-claim.component.sass']
})
export class PostClaimComponent implements OnInit {
    @Input() claimData: Observable<ResponseClaimType>;
    public oData: ResponseClaimType;

    ngOnInit(): void {
        this.claimData.subscribe((value) => {
            this.oData = value;
        })
    }
}
