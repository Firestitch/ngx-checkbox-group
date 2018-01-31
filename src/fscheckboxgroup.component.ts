import { Component, Input, Output, Provider, EventEmitter, forwardRef,
  ContentChildren, QueryList, IterableDiffers, DoCheck, AfterContentInit, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckbox } from '@angular/material';
import { FsArray } from '@firestitch/common';
import { CHECKBOX_VALUE_ACCESSOR } from './fscheckboxgroup.value-accessor';

@Component({
   selector: 'fs-checkbox-group',
   template: `<div class="mat-form-field-label">{{label}}</div>
              <span class="checkboxes" [ngClass]="{ vertical: orientation=='vertical' }">
                  <ng-content></ng-content>
              </span>`,
   styleUrls: [ 'fscheckboxgroup.component.scss' ],
   providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class FsCheckboxGroupComponent implements AfterContentInit, DoCheck, OnDestroy {

 @Output('change') change: EventEmitter<any> = new EventEmitter<any>();
 @Input('orientation') orientation: 'horizontal' | 'vertical' = 'horizontal';
 @Input('label') label;

 @ContentChildren(MatCheckbox) public contentChildren: QueryList<MatCheckbox>;

 private innerValue: any[];

 iterableDiffer;

 constructor(
   public FsArray: FsArray,
   private _iterableDiffers: IterableDiffers
 ) {
   this.iterableDiffer = this._iterableDiffers.find([]).create(null);
 };

 private onTouchedCallback: () => void = () => { };
 private onChangeCallback: (_: any) => void = () => { };

 ngDoCheck() {
   let changes = this.iterableDiffer.diff(this.innerValue);
   if (changes && this.innerValue) {
     this.contentChildren.toArray().forEach((input) => {
       let index = this.FsArray.indexOf(this.innerValue, input.value);
       if(index !== -1) {
         input.checked = true;
       }else {
         input.checked = false;
       }
     });

     this.change.emit(this.innerValue);
   }
 }

 ngAfterContentInit() {
   this.contentChildren.toArray().forEach((input, index) => {
     input.change
       .subscribe((value) => {
         if(value.checked) {
           this.innerValue.push(value.source.value);
         }else {
           let index = this.FsArray.indexOf(this.innerValue, input.value);
           if(index !== -1) {
             this.innerValue.splice(index, 1);
           }
         }
       });
   });
 }

 isEquals(obj1, obj2): boolean {
   return JSON.stringify(obj1) === JSON.stringify(obj2);
 }

 writeValue(value: any) {

   if (!this.isEquals(value, this.innerValue)) {
       this.innerValue = value;
   }
 }

 registerOnChange(fn: any) {
   this.onChangeCallback = fn;
 }

 registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
 }

 ngOnDestroy() {
   this.contentChildren.toArray().forEach((input) => {
     input.change.unsubscribe();
   });
   this.change.unsubscribe();
 }

}
