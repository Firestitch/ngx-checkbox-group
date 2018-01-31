import { EventEmitter, QueryList, IterableDiffers, DoCheck, AfterContentInit, OnDestroy } from '@angular/core';
import { MatCheckbox } from '@angular/material';
import { FsArray } from '@firestitch/common';
export declare class FsCheckboxGroupComponent implements AfterContentInit, DoCheck, OnDestroy {
    FsArray: FsArray;
    private _iterableDiffers;
    change: EventEmitter<any>;
    orientation: 'horizontal' | 'vertical';
    label: any;
    contentChildren: QueryList<MatCheckbox>;
    private innerValue;
    iterableDiffer: any;
    constructor(FsArray: FsArray, _iterableDiffers: IterableDiffers);
    private onTouchedCallback;
    private onChangeCallback;
    ngDoCheck(): void;
    ngAfterContentInit(): void;
    isEquals(obj1: any, obj2: any): boolean;
    writeValue(value: any): void;
    registerOnChange(fn: any): void;
    registerOnTouched(fn: any): void;
    ngOnDestroy(): void;
}
