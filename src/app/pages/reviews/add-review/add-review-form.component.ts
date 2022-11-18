import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddReviewFormService } from './add-review-form.service';

@Component({
  selector: 'add-review-form',
  providers: [AddReviewFormService],
  template: `
    <form [formGroup]="_addReviewFormService.form" (ngSubmit)="onSubmit()">
      <label for="#rating">Rating</label>
      <input #price type="number" formControlName="rating" />

      <label for="#description">Description</label>
      <textarea
        #description
        type="text"
        formControlName="description"
      ></textarea>

      <input
        hidden
        type="number"
        formControlName="postId"
        [(ngModel)]="postId"
      />

      <input
        type="submit"
        value="Post Review"
        [disabled]="!_addReviewFormService.valid"
      />
    </form>
  `,
  styles: []
})
export class AddReviewFormComponent implements OnInit {
  @Input() postId!: number | undefined;
  @Output() reviewCreatedEvent = new EventEmitter<boolean>;

  constructor(public _addReviewFormService: AddReviewFormService) {}

  ngOnInit(): void {}

  onSubmit() {
    this._addReviewFormService.submitForm();
    this.reviewCreatedEvent.emit(true);
  }
}
