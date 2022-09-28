import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { take } from 'rxjs';

import { AbstractFormService } from 'src/app/core/services/abstract-form.service';
import { PostService } from 'src/app/core/services/api/post.service';
import { CreatePostForm } from './create-post-form';

@Injectable({
  providedIn: 'root'
})
export class CreatePostFormService extends AbstractFormService<CreatePostForm> {
  constructor(
      protected override fb: FormBuilder,
      private _postService: PostService
  ) {
    super(fb);
  }

  buildForm(): FormGroup<any> {
    return this.fb.group({
      title: ['', [Validators.required]],
      price: ['', [Validators.required]],
      description: ['', [Validators.required]],
      condition: ['', [Validators.required]],
      category: ['', [Validators.required]]
    });
  }

    submitForm() {
      this._postService.createPost(this.getFormValue())
      .pipe(take(1))
      .subscribe();
  }
}
