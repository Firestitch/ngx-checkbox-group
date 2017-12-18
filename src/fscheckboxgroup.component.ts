import { Component, Input, Output, Provider, EventEmitter, forwardRef,
  ContentChildren, QueryList, IterableDiffers, DoCheck, AfterContentInit, OnDestroy } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckbox } from '@angular/material';
import { FsArray } from '@firestitch/common';
import { CHECKBOX_VALUE_ACCESSOR } from './fscheckboxgroup.value-accessor';

@Component({
   selector: 'fs-checkbox-group',
   template: `<ng-content></ng-content>`,
   providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class FsCheckboxGroupComponent implements AfterContentInit, DoCheck, OnDestroy {

 @Output('change') change: EventEmitter<any> = new EventEmitter<any>();

 @ContentChildren(MatCheckbox) public contentChildren: QueryList<MatCheckbox>;

 private innerValue: any[];

 iterableDiffer;

 constructor(
   public FsArray: FsArray,
   private _iterableDiffers: IterableDiffers
 ) {
   this.iterableDiffer = this._iterableDiffers.find([]).create(null);
 };

 _onTouched = () => { };
 _onChange = (value: any) => { };
 onFocused = (event: any) => { };

 // we initiate those functions to emit events outside the component
 registerOnChange(fn: (value: any) => any): void { this._onChange = fn }
 registerOnTouched(fn: () => any): void { this._onTouched = fn }

 ngDoCheck() {
   let changes = this.iterableDiffer.diff(this.innerValue);
   if (changes && this.innerValue) {
     this.contentChildren.toArray().forEach((input) => {
       let index = this.FsArray.indexOf(this.innerValue, input.value);
       if (index !== -1) {
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
         if (value.checked) {
           this.innerValue.push(value.source.value);
         }else {
           let index = this.FsArray.indexOf(this.innerValue, input.value);
           if (index !== -1) {
             this.innerValue.splice(index, 1);
           }
         }
         this._onChange(this.innerValue);
       });
   });
 }

 isEquals(obj1, obj2): boolean {
   return JSON.stringify(obj1) === JSON.stringify(obj2);
 }

 writeValue(value = []) {

   if (!this.isEquals(value, this.innerValue)) {
       this.innerValue = value;
       this._onChange(this.innerValue);
   }
 }

 ngOnDestroy() {
   this.contentChildren.toArray().forEach((input) => {
     input.change.unsubscribe();
   });
   this.change.unsubscribe();
 }

}
