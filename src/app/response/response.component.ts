import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Responses } from '../responses';

@Component({
  selector: 'app-response',
  templateUrl: './response.component.html',
  styleUrls: ['./response.component.scss'],
})
export class ResponseComponent implements OnInit {
  response: Responses | null = null;
  textareaContent: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.loadResponse();
  }

  loadResponse() {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.response =
        Responses.someTestData().find((r) => r.Name === name) || null;
      this.loadTextareaContent();
    }
  }

  loadTextareaContent() {
    this.textareaContent = '';
    setTimeout(() => {
      this.textareaContent = `
        Response: ${this.response?.Response}
      `;
    }, 2000); // Delay of 1 second (1000 milliseconds)
  }

  onContactClick() {
    console.log('Contact button clicked');
  }
}
