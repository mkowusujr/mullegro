import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

      
    </form>
  `,
  styles: []
})
export class CreatePostPageComponent implements OnInit {
  constructor(
    public createPostFormService: CreatePostFormService,
    private _router: Router
  ) {}

  ngOnInit(): void {}

  onSubmit() {
    this.createPostFormService.submitForm();
  }
}
