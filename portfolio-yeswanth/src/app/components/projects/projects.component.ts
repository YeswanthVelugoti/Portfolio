import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  projects: Project[] = PROJECTS;
}

export interface Project {
  title: string;
  description: string;
  techStack: string;
  githubLink: string;
}

export const PROJECTS: Project[] = [
  {
    title: 'Banking Application',
    description: 'Modular banking system supporting account creation, transactions, and loan processing.',
    techStack: 'Java, Spring Boot, MySQL, JPA, REST APIs',
    githubLink: 'https://github.com/YeswanthVelugoti/Banking-Application'
  },
  {
    title: 'Inventory Management System',
    description: 'SPA for product inventory with secure routing, form validation, and search/filter.',
    techStack: 'Angular, TypeScript, Bootstrap',
    githubLink: 'https://github.com/YeswanthVelugoti/Product-Inventory-Management-System'
  },
  {
    title: 'AI Virtual Drumset',
    description: 'Motion-controlled virtual drumset using webcam and OpenCV.',
    techStack: 'Python, OpenCV, PyAutoGUI',
    githubLink: 'https://github.com/YeswanthVelugoti/Virtual-DrumSet---AI'
  }
];
