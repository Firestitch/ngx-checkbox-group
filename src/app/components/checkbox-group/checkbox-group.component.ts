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
  forwardRef,
  HostBinding
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckbox } from '@angular/material';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
   selector: 'fs-checkbox-group',
   templateUrl: './checkbox-group.component.html',
   styleUrls: [ './checkbox-group.component.scss' ],
   providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsCheckboxGroupComponent),
    multi: true
  }]
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
  private _destroy$ = new Subject();
  private _differChildren;
  private _differValue;

  constructor(private iterableDiffers: IterableDiffers) {
    this._differChildren = this.iterableDiffers.find([]).create(null);
    this._differValue = this.iterableDiffers.find([]).create(null);
  };

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

  ngDoCheck() {
    const changes = this._differValue.diff(this.innerValue);
    if (changes && this.innerValue) {

      this.contentChildren.toArray().forEach((input) => {
        const index = this.innerValue.indexOf(input.value);
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

    let changeDiff = this._differChildren.diff(this.contentChildren);
    if (changeDiff) {
      changeDiff.forEachAddedItem(change => {
        this._addCheckbox(change.item);
      });
    }

    this.contentChildren.changes
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe(fsModelObjects => {
        changeDiff = this._differChildren.diff(fsModelObjects);
        if (changeDiff) {
          changeDiff.forEachAddedItem((change) => {
            this._addCheckbox(change.item);
          });
        }
      });
  }

  private _addCheckbox(input) {
    input.change
    .pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((value) => {
      if (value.checked) {
        this.innerValue.push(value.source.value);
      } else {
        const index = this.innerValue.indexOf(input.value);
        if (index !== -1) {
          this.innerValue.splice(index, 1);
        }
      }
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
    this._destroy$.next();
    this._destroy$.complete();
  }
}
