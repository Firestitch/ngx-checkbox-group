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
  OnChanges,
  OnDestroy,
  Output,
  QueryList,
  SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { MatCheckbox } from '@angular/material/checkbox';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { isEqual, remove } from 'lodash-es';


@Component({
  selector: 'fs-checkbox-group',
  templateUrl: './checkbox-group.component.html',
  styleUrls: ['./checkbox-group.component.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => FsCheckboxGroupComponent),
    multi: true,
  }],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsCheckboxGroupComponent implements AfterContentInit, ControlValueAccessor, OnDestroy, OnChanges {

  @Output()
  public change: EventEmitter<unknown[]> = new EventEmitter<unknown[]>();

  @Input()
  public orientation: 'horizontal' | 'vertical' = 'vertical';

  @Input()
  public position: 'top' | 'center' = 'top';

  @Input()
  public label;

  @Input()
  public disabled: boolean = null;

  @Input()
  public compareWith: (o1: any, o2: any) => boolean;

  @HostBinding('class.fs-form-wrapper') public formWrapper = true;

  @ContentChildren(MatCheckbox)
  public contentChildren: QueryList<MatCheckbox>;

  public onTouchedCallback: () => void;
  public onChangeCallback: (_: any) => void;

  private _innerValue: unknown[] = [];
  private _destroy$ = new Subject();
  private _differChildren;

  constructor(
    private _iterableDiffers: IterableDiffers,
    private _cdRef: ChangeDetectorRef,
  ) {
    this.compareWith = this.compareWith || ((o1, o2) => isEqual(o1, o2));
    this._differChildren = this._iterableDiffers.find([]).create(null);
  }


  public ngOnChanges(changes: SimpleChanges): void {
    if (this.disabled !== null && changes.disabled && this.contentChildren) {
      this.contentChildren.forEach((checkbox: MatCheckbox) => {
        checkbox.disabled = this.disabled;
      });
    }
  }

  public ngAfterContentInit() {
    let changeDiff = this._differChildren.diff(this.contentChildren);
    if (changeDiff) {
      changeDiff.forEachAddedItem((change) => {
        this._addCheckbox(change.item);
      });
    }

    this.contentChildren.changes
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((fsModelObjects) => {
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

  public writeValue(value: any) {
    if (Array.isArray(value)) {
      this._innerValue = value;
    } else {
      this._innerValue = value !== undefined && value !== null ? [value] : [];
    }

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
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private _toggleInput(input) {
    if (this._innerValue) {
      input.checked = this._valueExists(input.value);
    }
  }

  private _valueExists(inputValue) {
    return this._innerValue.find((value) => {
      return this.compareWith(value, inputValue);
    }) !== undefined;
  }

  private _addCheckbox(input) {

    if (this.disabled !== null) {
      input.disabled = this.disabled;
    }

    this._toggleInput(input);
    this._cdRef.markForCheck();

    input.change
      .pipe(
        takeUntil(this._destroy$),
      )
      .subscribe((value) => {

        if (value.checked) {

          if (!this._valueExists(input.value)) {
            this._innerValue.push(value.source.value);
          }

        } else {
          remove(this._innerValue, (item) => {
            return this.compareWith(item, input.value);
          });
        }

        this.onChangeCallback(this._innerValue);
        this.change.emit(this._innerValue);
      });
  }
}
