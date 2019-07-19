import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: 'minuteSeconds'
})
export class MinuteSecondsPipe implements PipeTransform {

    transform(value: number): string {
        const minutes: number = Math.floor(value / 60);
        if (minutes < 10) {
            return '0' + minutes + ':' + (value - minutes * 60);
        } else {
            return minutes + ':' + (value - minutes * 60);
        }
    }

}
