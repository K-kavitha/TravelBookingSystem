import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from '../../../service/booking.service';

@Component({
  selector: 'app-help-chat',
  templateUrl: './help-chat.component.html',
  styleUrl: './help-chat.component.css'
})
export class HelpChatComponent {
  messages: Message[] = []; //
  isOpen: boolean = false;
  currentQuestion: string = '';
  predefinedQuestions: string[] = [
    'What is your name?',
    'Where are you from?',
    'How can I help you?',

    'I have a booking issue.',
    'I need assistance with payment.'
  ];
  user: any;
  constructor(public bookingservice:BookingService
    ,
    public route:Router,
    public activateRoute: ActivatedRoute){
      this.currentQuestion = this.predefinedQuestions[0];
    }
    sendMessage(question: string) {
      if (question.trim() === '') return; // Don't send an empty question

      // Limit the number of displayed messages to 3
      if (this.messages.length >= 3) {
        this.messages.shift(); // Remove the oldest message
      }

      this.messages.push({ text: question, isUser: true });

      // Simulate a response from the server (you would replace this with real backend communication)
      const response = this.bookingservice.getChatResponse(question); // Use your service to get a response
      this.messages.push({ text: response, isUser: false });

      // Clear the current question
      this.currentQuestion = '';
    }
    toggleChat() {
      this.isOpen = !this.isOpen; // Toggle the chat window's visibility
    }

    closeChat() {
      this.isOpen = false; // Close the chat window
    }
    logout() {
      if (sessionStorage.getItem("user")) {
        sessionStorage.clear()
        localStorage.clear()
        alert("Logout Successfully")
        this.route.navigateByUrl("/user/login")
      }
      else {
        alert("No user loged in")
      }
    }
    checkSessionAndNavigate() {
      if (!this.user) {
        this.route.navigateByUrl("/user/login");
      }

    }
  }

  interface Message {
    text: string;
    isUser: boolean;
  }

