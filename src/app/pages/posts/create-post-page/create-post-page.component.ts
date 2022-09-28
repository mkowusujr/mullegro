import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PostService } from 'src/app/core/services/api/post.service';
import { CreatePostFormService } from './create-post-form.service';


@Component({
  selector: 'create-post-page',
  providers: [CreatePostFormService],
  template: `
    <form [formGroup]="createPostFormService.form" (ngSubmit)="onSubmit()">
      <label for="#title">Title</label>
      <input #title type="text" formControlName="title" />

      <label for="#price">Price</label>
      <input #price type="number" formControlName="price" />

      <label for="#description">Description</label>
      <input #description type="text" formControlName="description" />

      <label for="#category">Category</label>
      <select formControlName="category" #category>
        <option [ngValue]="null" disabled>Select a Category</option>
        <option 
          *ngFor="let category of (categoryOptionsList$ | async)"
          [ngValue]="category"
        >
          {{ category }}
        </option>
      </select>

      <label for="#condition">Condition</label>
      <select formControlName="condition" #condition>
        <option [ngValue]="null" disabled>Select a Condition</option>
        <option 
          *ngFor="let condition of (conditionOptionsList$ | async)"
          [ngValue]="condition"
        >
          {{ condition }}
        </option>
      </select>

      <input type="submit" value="Create Post" [disabled]="!createPostFormService.valid" />
    </form>
  `,
  styles: []
})
export class CreatePostPageComponent implements OnInit {
  categoryOptionsList$?: Observable<string[]>;
  conditionOptionsList$?: Observable<string[]>;

  constructor(
    public createPostFormService: CreatePostFormService,
    private _post_service: PostService,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.categoryOptionsList$ = this._post_service.getFilterCategoryNames();
    this.conditionOptionsList$ = this._post_service.getFilterConditionNames();
  }

  onSubmit() {
    this.createPostFormService.submitForm();
  }
}
