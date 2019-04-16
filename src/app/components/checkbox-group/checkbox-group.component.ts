import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChildren,
  QueryList,
  IterableDiffers,
  DoCheck,
  AfterContentInit,
  OnDestroy,
  Provider,
  forwardRef,
  HostBinding
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckbox } from '@angular/material';

import { indexOf } from '@firestitch/common';


export const CHECKBOX_VALUE_ACCESSOR: Provider = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => FsCheckboxGroupComponent),
  multi: true
};


@Component({
   selector: 'fs-checkbox-group',
   templateUrl: './checkbox-group.component.html',
   styleUrls: [ './checkbox-group.component.scss' ],
   providers: [CHECKBOX_VALUE_ACCESSOR]
})
export class FsCheckboxGroupComponent implements AfterContentInit, DoCheck, OnDestroy {

  @Output('change')
  public change: EventEmitter<any> = new EventEmitter<any>();

  @Input('orientation')
  public orientation: 'horizontal' | 'vertical' = 'horizontal';

  @Input('label')
  public label;

  @HostBinding('class.fs-form-wrapper') formWrapper = true;

  @ContentChildren(MatCheckbox)
  public contentChildren: QueryList<MatCheckbox>;

  private innerValue: any[];

  public iterableDiffer;

  constructor(private iterableDiffers: IterableDiffers) {
    this.iterableDiffer = this.iterableDiffers.find([]).create(null);
  };

 private onTouchedCallback: () => void = () => { };
 private onChangeCallback: (_: any) => void = () => { };

 ngDoCheck() {
   const changes = this.iterableDiffer.diff(this.innerValue);
   if (changes && this.innerValue) {
     this.contentChildren.toArray().forEach((input) => {
       const index = indexOf(this.innerValue, input.value);
       if (index !== -1) {
         input.checked = true;
       } else {
         input.checked = false;
       }
     });

     this.onChangeCallback(this.innerValue);
     this.change.emit(this.innerValue);
   }
 }

 public ngAfterContentInit() {
   this.contentChildren.toArray().forEach((input) => {
     input.change
       .subscribe((value) => {
         if (value.checked) {
           this.innerValue.push(value.source.value);
         } else {
           const index = indexOf(this.innerValue, input.value);
           if (index !== -1) {
             this.innerValue.splice(index, 1);
           }
         }
       });
   });
 }

 public isEquals(obj1, obj2): boolean {
   return JSON.stringify(obj1) === JSON.stringify(obj2);
 }

 public writeValue(value: any) {

   if (!this.isEquals(value, this.innerValue)) {
       this.innerValue = value;
   }
 }

 public registerOnChange(fn: any) {
   this.onChangeCallback = fn;
 }

 public registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
 }

 public ngOnDestroy() {
   this.contentChildren.toArray().forEach((input) => {
     input.change.unsubscribe();
   });
   this.change.unsubscribe();
 }

}
