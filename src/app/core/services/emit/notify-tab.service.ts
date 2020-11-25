
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NotifyTabService {

    @Output() sendTabIndex: EventEmitter<number> = new EventEmitter();

    emitTab(tabIndex: number): void {
        this.sendTabIndex.emit(tabIndex);
    }
}
