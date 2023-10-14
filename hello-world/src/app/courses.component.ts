// in angular we have a decorator called component that you can attach to a class and make that class a component as shown below:
// here we are pulling from the core library of angular
import { Component } from '@angular/core';
import { CourcesService } from './courses.service';

@Component({
    // we will use selector to set this component to a css class:
    // <courses>: "courses"; <div class="courses">: ".courses" <div id="courses">: "#courses"
    selector: 'courses',
    // html markup that you want to be rendered to this component
    template: `
        <h2>{{ "Title: " + title }}</h2>
        <ul>
            <!-- In Angular, Directives are defined as classes that can add new behavior to the elements in the template or modify existing behavior. The purpose of Directives in Angular is to maneuver the DOM, be it by adding new elements to DOM or removing elements and even changing the appearance of the DOM elements. -->
            <!-- we can use an angular directive here -->
            <li *ngFor="let course of courses">
                {{ course }}
            </li>
        </ul>

    `
})
export class CoursesComponent {
    _title = 'List of courses';
    get title() {
        return this._title;
    }
    courses;

    constructor(service: CourcesService) {
        // let service = new CourcesService();
        this.courses = service.courses;
    }
}