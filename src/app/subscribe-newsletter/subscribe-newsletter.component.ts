import { Component } from '@angular/core';
import { NewsLetterSubscription } from '../model/news-letter-subscription.model';
import { SubscribtionService } from './subscribtion.service';
import { FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-subscribe-newsletter',
  templateUrl: './subscribe-newsletter.component.html',
  styleUrls: ['./subscribe-newsletter.component.css']
})
export class SubscribeNewsletterComponent {
  emailid: string = ''
  response!: NewsLetterSubscription
  emailValidationError: string = ""
  control = new FormControl('', [Validators.email]);

  constructor(private apiService: SubscribtionService) { }

  subscribe() {
    this.emailValidationError = ""
    if (this.emailid === "") {
      this.emailValidationError = "Please enter your Email!"
      return
    }

    this.control.setValue(this.emailid);
    if (!this.control.valid) {
      this.emailValidationError = "Please enter correct Email!"
      return
    }

    const emailObj = new NewsLetterSubscription()
    emailObj.email = this.emailid

    this.apiService.subscribeNewsletter(emailObj).subscribe((data: NewsLetterSubscription) => {
      this.response = data
    },
      (error) => {
        this.response = new NewsLetterSubscription();
      }
    )
  }
}
