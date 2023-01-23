import { Component } from '@angular/core';
import { Project } from './project';
import { RegisterService } from "./register.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  environments = ['Java', 'Python', 'C', 'C++', 'C#']
  environmentHasError = true

  sources = ['MongoDB', 'SSIS']
  sourceHasError = true

  submitted = false

  projectModel = new Project('', 'default', 'default')

  constructor(private registerservice: RegisterService) {}

  validateEnvironment(value: string) {
    if(value == 'default') {
      this.environmentHasError = true;
    } else {
      this.environmentHasError = false;
    }
  }

  validateSource(value: string) {
    if(value == 'default') {
      this.sourceHasError = true;
    } else {
      this.sourceHasError = false;
    }

  }

  onSubmit() {
    this.submitted = true;
    this.registerservice.register(this.projectModel)
      .subscribe(
              data => console.log("Success", data),
              error => console.log("Error", error)
    ) 
  }
  
}
