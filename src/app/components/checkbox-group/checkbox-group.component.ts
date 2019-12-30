import {
  AfterContentInit,
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ContentChildren,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  IterableDiffers,
  OnDestroy,
  Output,
  QueryList
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatCheckbox } from '@angular/material/checkbox';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { isEqual, remove } from 'lodash-es';


@Component({
   selector: 'fs-checkbox-group',
   templateUrl: './checkbox-group.component.html',
   styleUrls: [ './checkbox-group.component.scss' ],
   providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsCheckboxGroupComponent),
    multi: true
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsCheckboxGroupComponent implements AfterContentInit, OnDestroy {

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

  constructor(
    private iterableDiffers: IterableDiffers,
    private _cdRef: ChangeDetectorRef,
  ) {
    this._differChildren = this.iterableDiffers.find([]).create(null);
  };

  private onTouchedCallback: () => void = () => { };
  private onChangeCallback: (_: any) => void = () => { };

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
            setTimeout(() => {
              this._addCheckbox(change.item);
            });
          });
        }
      });
  }

  private _toggleInput(input) {
    if (this.innerValue) {
      input.checked = this._valueExists(input.value);
    }
  }

  private _valueExists(inputValue) {
    return this.innerValue.find((value) => {
      return isEqual(value, inputValue);
    }) !== undefined;
  }

  private _addCheckbox(input) {

    this._toggleInput(input);
    this._cdRef.markForCheck();

    input.change
    .pipe(
      takeUntil(this._destroy$),
    )
    .subscribe((value) => {

      if (value.checked) {

        if (!this._valueExists(input.value)) {
          this.innerValue.push(value.source.value);
        }

      } else {
        remove(this.innerValue, (v) => {
          return isEqual(v, input.value);
        });
      }

      this.onChangeCallback(this.innerValue);
      this.change.emit(this.innerValue);
    });
  }

  public isEquals(obj1, obj2): boolean {
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

  public writeValue(value: any) {

    this.innerValue = value;

    if (this.contentChildren) {
      this.contentChildren.toArray().forEach((input) => {
        this._toggleInput(input);
      });
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
