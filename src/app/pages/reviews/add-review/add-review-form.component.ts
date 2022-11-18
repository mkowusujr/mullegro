import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AddReviewFormService } from './add-review-form.service';

@Component({
  selector: 'add-review-form',
  providers: [AddReviewFormService],
  template: `
    <form [formGroup]="_addReviewFormService.form" (ngSubmit)="onSubmit()">
      <label for="#ratingFormField">Rating</label>
      <div class="rating-section">
        <star-rating-control
          #ratingFormField
          formControlName="rating"
          [showHalfStars]="true"
          [hoverEnabled]="true"
          [rating]="rating"
          (ratingChange)="onRatingChange($event)"
        ></star-rating-control>
        <input
          type="number"
          formControlName="rating"
          [(ngModel)]="rating"
          [step]="0.5"
          [min]="0"
          [max]="5"
        />
      </div>

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
  @Output() reviewCreatedEvent = new EventEmitter<boolean>();
  rating = 0;
  constructor(public _addReviewFormService: AddReviewFormService) {}

  ngOnInit(): void {}

  onRatingChange(event: any) {
    this.rating = event.rating;
  }

  onSubmit() {
    this._addReviewFormService.submitForm();
    this.reviewCreatedEvent.emit(true);
  }
}
