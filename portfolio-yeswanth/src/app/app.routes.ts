import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ResumeComponent } from './components/resume/resume.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';

export const routes: Routes = [
     { path: '', component: HomeComponent },
     { path: 'projects', component: ProjectsComponent },
     { path: 'experience', component: ExperienceComponent },
     { path: 'skills', component: SkillsComponent },
     { path: 'certifications', component: CertificationsComponent },
     { path: 'resume', component: ResumeComponent },
     { path: 'contact', component: ContactComponent },
     { path: 'education', component: EducationComponent },
    ];
