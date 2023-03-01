import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output
} from '@angular/core';
import { Subject, takeUntil } from 'rxjs';
import { IReview } from 'src/app/core/interfaces/review';
import { ReviewService } from 'src/app/core/services/api/review.service';
import { AddReviewFormService } from './add-review-form.service';
import { Router } from '@angular/router';

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
          placeholder="#"
          [(ngModel)]="rating"
          [step]="0.5"
          [min]="0"
          [max]="5"
          required
        />
      </div>
      <p
        class="error-message"
        *ngIf="
          _addReviewFormService.form.controls['rating'].invalid &&
          _addReviewFormService.form.controls['rating'].value.length != 0
        "
      >
        Can't enter a number larger than 5
      </p>

      <label for="description">Description</label>
      <textarea
        id="description"
        type="text"
        formControlName="description"
        placeholder="Enter your thoughts on the product..."
        [(ngModel)]="description"
        required
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
export class AddReviewFormComponent implements OnInit, OnDestroy {
  @Input() postId!: number;
  existingReview!: IReview | null;
  @Output() reviewCreatedEvent = new EventEmitter<boolean>();
  rating = 0;
  description = '';
  componentIsBeingDestroyedNotifier = new Subject<void>();

  constructor(
    public _addReviewFormService: AddReviewFormService,
    private _reviewService: ReviewService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    if (this.postId) {
      console.log(this.postId);
      this._reviewService
        .getReviewBelongingToPost(this.postId)
        .pipe(takeUntil(this.componentIsBeingDestroyedNotifier))
        .subscribe(review => {
          if (review) {
            this._addReviewFormService.form.setValue({
              rating: review.rating,
              description: review.description,
              postId: review.postId
            });
          }
        });
    }
  }

  onRatingChange(event: any) {
    this.rating = event.rating;
  }

  onSubmit() {
    this._addReviewFormService.submitForm();
    this.reviewCreatedEvent.emit(true);
    this._router.navigate(['/user/transactions']);
  }

  ngOnDestroy(): void {
    this.componentIsBeingDestroyedNotifier.next();
    this.componentIsBeingDestroyedNotifier.complete();
  }
}
