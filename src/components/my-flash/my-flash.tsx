import { Component, State, Method } from '@stencil/core';
 
@Component({
  tag: 'my-flash',
  styleUrl: 'my-flash.css'
})
export class MyFlash {
 
  @State() active: boolean = false;
  @State() message: string;
  @State() activeClass: string = 'primary';
 
  private timeout: any;
 
  @Method() show(message: string, activeClass: string, duration: number): void {
 
    this.message = message;
    this.activeClass = activeClass;
    this.active = true;
 
    this.timeout = setTimeout(() => {
      this.active = false;
    }, duration)
 
  }
 
  dismiss(){
    this.active = false;
    clearTimeout(this.timeout);
  }
 
  render() {
    return (
      <div onClick={() => this.dismiss()} class={'flash-container ' + (this.active ? 'show ' : 'hide ') + this.activeClass}>
 
        <div class="message">
          {this.message}
        </div>
 
        <p class="dismiss">tap to dismiss</p>
 
      </div>
    );
  }
}