import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ContactRequest } from '../../shared/models/contact-request.model';
import { ContactApiService } from '../../shared/services/contact-api.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  formData: ContactRequest = {
    fullName: '',
    phoneNumber: '',
    message: '',
  };
  submitting = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;

  constructor(private contactApi: ContactApiService) { }

  ngOnInit(): void {
  }

  submit(form: NgForm) {
    if (form.invalid || this.submitting) {
      return;
    }

    this.submitting = true;
    this.successMessage = null;
    this.errorMessage = null;

    this.contactApi.submit(this.formData).subscribe({
      next: (response) => {
        this.successMessage = response.message;
        this.submitting = false;
        this.formData = {
          fullName: '',
          phoneNumber: '',
          message: '',
        };
        form.resetForm(this.formData);
      },
      error: (error) => {
        this.errorMessage =
          error?.error?.message || 'We could not send your message right now. Please try again.';
        this.submitting = false;
      },
    });
  }

}
