import { Component, Input, OnInit } from '@angular/core';
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
        #postId
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
  constructor(public _addReviewFormService: AddReviewFormService) {}

  ngOnInit(): void {
    console.log("this.postId");
    console.log(this.postId)
  }

  onSubmit() {
    this._addReviewFormService.submitForm();
  }
}
