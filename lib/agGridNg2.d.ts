// ag-grid-ng2 v6.0.3
import { ViewContainerRef, ElementRef, NgZone } from '@angular/core';
import { GridApi, ColumnApi } from 'ag-grid/main';
import { Ng2FrameworkFactory } from "./ng2FrameworkFactory";
export declare class AgGridNg2 {
    private viewContainerRef;
    private ng2FrameworkFactory;
    private zone;
    private _nativeElement;
    private _initialised;
    private _destroyed;
    private gridOptions;
    private gridParams;
    api: GridApi;
    columnApi: ColumnApi;
    constructor(elementDef: ElementRef, viewContainerRef: ViewContainerRef, ng2FrameworkFactory: Ng2FrameworkFactory, zone: NgZone);
    private escapeZone(timeoutOrInterval, period, action);
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
    private globalEventListener(eventType, event);
}
