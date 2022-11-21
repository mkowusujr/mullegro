import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { ReviewService } from 'src/app/core/services/api/review.service';
import { IReview } from 'src/app/core/interfaces/review';

@Injectable({
  providedIn: 'root'
})
export class AddReviewFormService extends AbstractFormService<IReview> {
  constructor(
    protected override fb: FormBuilder,
    private _reviewService: ReviewService
  ) {
    super(fb);
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
      rating: [0, [Validators.required]],
      description: ['', [Validators.required]],
      postId: []
    });
  }

  submitForm() {
    this._reviewService
      .getReviewBelongingToPost(this.form.get('postId')?.value)
      .pipe(take(1))
      .subscribe(existingReview => {
        if (existingReview) {
          this._reviewService
            .updateReview(existingReview.id ?? -1, this.getFormValue())
            .pipe(take(1))
            .subscribe();
        } else {
          this._reviewService
            .createReview(this.getFormValue())
            .pipe(take(1))
            .subscribe();
        }
      });
  }
}
