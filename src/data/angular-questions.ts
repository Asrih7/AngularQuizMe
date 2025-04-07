
import { QuizQuestion } from '@/components/QuizSection';

// Over 200 Angular questions covering the full feature set
export const angularQuestions: QuizQuestion[] = [
  // Angular Basics
  {
    id: 'ang-001',
    question: 'What is Angular?',
    options: [
      'A JavaScript library for building user interfaces',
      'A complete platform for building web applications',
      'A CSS framework',
      'A database management system'
    ],
    answer: 1,
    explanation: 'Angular is a platform and framework for building single-page client applications using HTML and TypeScript. It implements core and optional functionality as a set of TypeScript libraries that you import into your applications.'
  },
  {
    id: 'ang-002',
    question: 'Which of the following is NOT a key feature of Angular?',
    options: [
      'Two-way data binding',
      'Dependency injection',
      'Virtual DOM',
      'TypeScript integration'
    ],
    answer: 2,
    explanation: 'Virtual DOM is a feature of React, not Angular. Angular uses real DOM and implements a change detection mechanism to update the DOM efficiently.'
  },
  {
    id: 'ang-003',
    question: 'What is the primary language used in Angular development?',
    options: [
      'JavaScript',
      'TypeScript',
      'CoffeeScript',
      'Dart'
    ],
    answer: 1,
    explanation: 'TypeScript is the primary language used in Angular development. It is a superset of JavaScript that adds static typing and other features.'
  },
  {
    id: 'ang-004',
    question: 'Which command is used to create a new Angular project using the Angular CLI?',
    options: [
      'ng new project-name',
      'ng create project-name',
      'ng start project-name',
      'ng init project-name'
    ],
    answer: 0,
    explanation: 'The command "ng new project-name" is used to create a new Angular project using the Angular CLI.'
  },
  {
    id: 'ang-005',
    question: 'Which tool is commonly used for managing Angular projects?',
    options: [
      'Angular CLI',
      'Angular Studio',
      'Angular Manager',
      'Angular Builder'
    ],
    answer: 0,
    explanation: 'Angular CLI (Command Line Interface) is the official tool for initializing, developing, scaffolding, and maintaining Angular applications.'
  },
  
  // Components and Templates
  {
    id: 'ang-006',
    question: 'What is the decorator used to define an Angular component?',
    options: [
      '@NgComponent',
      '@Component',
      '@CreateComponent',
      '@AngularComponent'
    ],
    answer: 1,
    explanation: 'The @Component decorator is used to define an Angular component. It provides metadata about the component, such as its selector, template, and styles.'
  },
  {
    id: 'ang-007',
    question: 'What does the "selector" property in a component decorator do?',
    options: [
      'It selects the component from a list of available components',
      'It defines the CSS selector that identifies this component in a template',
      'It selects which module the component belongs to',
      'It selects the styling that should be applied to the component'
    ],
    answer: 1,
    explanation: 'The selector property in the @Component decorator defines the CSS selector that identifies this component in a template. When you use this selector in your HTML, Angular will create and insert an instance of this component.'
  },
  {
    id: 'ang-008',
    question: 'How do you create an inline template in an Angular component?',
    options: [
      'By using the template property in the @Component decorator',
      'By using the inlineTemplate property in the @Component decorator',
      'By using the html property in the @Component decorator',
      'By defining the template in a separate HTML file and importing it'
    ],
    answer: 0,
    explanation: 'You create an inline template in an Angular component by using the template property in the @Component decorator with backticks (`) to define a multi-line template string.'
  },
  {
    id: 'ang-009',
    question: 'Which decorator is used to define input properties in a component?',
    options: [
      '@Input',
      '@InputProperty',
      '@Property',
      '@Prop'
    ],
    answer: 0,
    explanation: 'The @Input decorator is used to define input properties in a component. It allows data to be passed from a parent component to a child component.'
  },
  {
    id: 'ang-010',
    question: 'How do you pass data from a parent component to a child component?',
    options: [
      'Using the @Output decorator',
      'Using the @Input decorator',
      'Using the @Data decorator',
      'Using the @Shared decorator'
    ],
    answer: 1,
    explanation: 'You pass data from a parent component to a child component using the @Input decorator. The property decorated with @Input in the child component can receive data from the parent component.'
  },
  
  // Data Binding
  {
    id: 'ang-011',
    question: 'What is interpolation in Angular?',
    options: [
      'A way to handle HTTP requests',
      'A way to create new components',
      'A way to display component data in the view',
      'A way to route between different pages'
    ],
    answer: 2,
    explanation: 'Interpolation is a way to display component data in the view. It uses double curly braces {{ }} to bind component data to the view.'
  },
  {
    id: 'ang-012',
    question: 'Which syntax is used for property binding in Angular?',
    options: [
      '{{ propertyName }}',
      '[propertyName]="expression"',
      '(propertyName)="expression"',
      '#propertyName'
    ],
    answer: 1,
    explanation: 'Property binding in Angular uses the syntax [propertyName]="expression". This allows you to bind a property of a DOM element to a property in your component.'
  },
  {
    id: 'ang-013',
    question: 'Which syntax is used for event binding in Angular?',
    options: [
      '{{ eventName }}',
      '[eventName]="expression"',
      '(eventName)="expression"',
      '#eventName'
    ],
    answer: 2,
    explanation: 'Event binding in Angular uses the syntax (eventName)="expression". This allows you to listen for events such as clicks, keystrokes, and mouse movements, and respond to them in your component.'
  },
  {
    id: 'ang-014',
    question: 'What is two-way data binding in Angular?',
    options: [
      'Data flowing from component to view only',
      'Data flowing from view to component only',
      'Data flowing both from component to view and from view to component',
      'Data flowing between two different components'
    ],
    answer: 2,
    explanation: 'Two-way data binding in Angular means that data flows both from component to view and from view to component. It is a combination of property binding and event binding, and typically uses the [(ngModel)] syntax.'
  },
  {
    id: 'ang-015',
    question: 'What is the syntax for two-way data binding in Angular?',
    options: [
      '{{ data }}',
      '[data]="property"',
      '(data)="property = $event"',
      '[(ngModel)]="property"'
    ],
    answer: 3,
    explanation: 'The [(ngModel)] syntax is used for two-way data binding in Angular. It requires the FormsModule to be imported in your application module.'
  },
  
  // Directives
  {
    id: 'ang-016',
    question: 'What are directives in Angular?',
    options: [
      'Classes that add additional behavior to elements',
      'Functions that perform specific tasks',
      'HTML templates for components',
      'CSS stylesheets for components'
    ],
    answer: 0,
    explanation: 'Directives in Angular are classes that add additional behavior to elements in your Angular applications. There are three kinds of directives: components, attribute directives, and structural directives.'
  },
  {
    id: 'ang-017',
    question: 'Which directive is used for conditional rendering in Angular?',
    options: [
      'ngFor',
      'ngIf',
      'ngSwitch',
      'ngShow'
    ],
    answer: 1,
    explanation: 'The ngIf directive is used for conditional rendering in Angular. It adds or removes elements from the DOM based on a condition.'
  },
  {
    id: 'ang-018',
    question: 'Which directive is used for list rendering in Angular?',
    options: [
      'ngFor',
      'ngList',
      'ngRepeat',
      'ngEach'
    ],
    answer: 0,
    explanation: 'The ngFor directive is used for list rendering in Angular. It creates a copy of the element for each item in a collection.'
  },
  {
    id: 'ang-019',
    question: 'What is the purpose of the ngClass directive?',
    options: [
      'To define classes for the component',
      'To dynamically add or remove CSS classes',
      'To create a new CSS class',
      'To inherit classes from another component'
    ],
    answer: 1,
    explanation: 'The ngClass directive is used to dynamically add or remove CSS classes based on expression evaluation.'
  },
  {
    id: 'ang-020',
    question: 'What is the purpose of the ngStyle directive?',
    options: [
      'To define styles for the component',
      'To dynamically add or remove CSS styles',
      'To create a new CSS style',
      'To inherit styles from another component'
    ],
    answer: 1,
    explanation: 'The ngStyle directive is used to dynamically add or remove CSS styles based on expression evaluation.'
  },
  
  // Pipes
  {
    id: 'ang-021',
    question: 'What are pipes in Angular?',
    options: [
      'A way to transfer data between components',
      'A mechanism for handling HTTP requests',
      'Functions that transform displayed values within a template',
      'A method for organizing component hierarchies'
    ],
    answer: 2,
    explanation: 'Pipes in Angular are simple functions that you can use in template expressions to transform displayed values before they are rendered.'
  },
  {
    id: 'ang-022',
    question: 'Which pipe is used for formatting dates in Angular?',
    options: [
      'formatDate',
      'dateFormat',
      'date',
      'datetime'
    ],
    answer: 2,
    explanation: 'The "date" pipe is used for formatting dates in Angular. For example, {{ today | date:"MM/dd/yy" }} formats the date as "month/day/year".'
  },
  {
    id: 'ang-023',
    question: 'Which pipe is used for currency formatting in Angular?',
    options: [
      'money',
      'currency',
      'currencyFormat',
      'formatCurrency'
    ],
    answer: 1,
    explanation: 'The "currency" pipe is used for currency formatting in Angular. For example, {{ price | currency:"USD" }} formats the number as US dollars.'
  },
  {
    id: 'ang-024',
    question: 'How do you chain multiple pipes in Angular?',
    options: [
      'Using the pipe() method',
      'Using multiple pipe symbols (|)',
      'Using the chain() method',
      'Using commas between pipes'
    ],
    answer: 1,
    explanation: 'You can chain multiple pipes in Angular by using multiple pipe symbols (|). For example, {{ birthday | date | uppercase }} will first format the date and then convert it to uppercase.'
  },
  {
    id: 'ang-025',
    question: 'What is a pure pipe in Angular?',
    options: [
      'A pipe that never needs to be updated',
      'A pipe that only runs when its input parameters change',
      'A pipe that doesn\'t transform data',
      'A pipe with no side effects'
    ],
    answer: 1,
    explanation: 'A pure pipe in Angular is a pipe that only runs when its input parameters change. It is optimized for performance and is the default behavior for pipes.'
  },
  
  // Services and Dependency Injection
  {
    id: 'ang-026',
    question: 'What is a service in Angular?',
    options: [
      'A component that provides a specific functionality',
      'A class with a specific purpose that can be injected into components',
      'A special type of module',
      'A function that handles HTTP requests'
    ],
    answer: 1,
    explanation: 'A service in Angular is a class with a specific purpose that can be injected into components and other services. Services are typically used for tasks such as data fetching, logging, and business logic.'
  },
  {
    id: 'ang-027',
    question: 'Which decorator is used to make a class injectable as a service?',
    options: [
      '@Service',
      '@Injectable',
      '@Provider',
      '@Inject'
    ],
    answer: 1,
    explanation: 'The @Injectable decorator is used to make a class injectable as a service. This tells Angular that the class has dependencies that should be injected into its constructor.'
  },
  {
    id: 'ang-028',
    question: 'What is dependency injection in Angular?',
    options: [
      'A design pattern where components depend on each other',
      'A system for importing external libraries',
      'A programming technique where an object receives other objects that it depends on',
      'A method for injecting HTML into templates'
    ],
    answer: 2,
    explanation: 'Dependency injection in Angular is a programming technique where an object receives other objects that it depends on. It is a core concept in Angular that allows for more maintainable and testable code.'
  },
  {
    id: 'ang-029',
    question: 'At which level can services be provided in Angular?',
    options: [
      'Only at the module level',
      'Only at the component level',
      'Only at the application level',
      'At the module, component, or application level'
    ],
    answer: 3,
    explanation: 'Services can be provided at different levels in Angular: at the root level (application-wide), at the module level, or at the component level. The level at which a service is provided determines its scope and lifetime.'
  },
  {
    id: 'ang-030',
    question: 'What happens when you provide a service at the component level?',
    options: [
      'The service is available to all components in the application',
      'The service is available only to that component and its child components',
      'The service is available only to that component',
      'The service is available to all components in the same module'
    ],
    answer: 1,
    explanation: 'When you provide a service at the component level, it is available only to that component and its child components. Each component gets its own instance of the service.'
  },
  
  // HTTP and Observables
  {
    id: 'ang-031',
    question: 'Which module provides HTTP functionality in Angular?',
    options: [
      'HttpModule',
      'HttpClientModule',
      'AjaxModule',
      'RestModule'
    ],
    answer: 1,
    explanation: 'The HttpClientModule provides HTTP functionality in Angular. It is part of the @angular/common/http package and needs to be imported into your application module.'
  },
  {
    id: 'ang-032',
    question: 'Which library is used for handling asynchronous operations in Angular?',
    options: [
      'Promise',
      'Callback',
      'RxJS',
      'Async/Await'
    ],
    answer: 2,
    explanation: 'RxJS (Reactive Extensions for JavaScript) is used for handling asynchronous operations in Angular. It provides an implementation of the Observable type along with utility operators.'
  },
  {
    id: 'ang-033',
    question: 'What is an Observable in Angular?',
    options: [
      'A design pattern for error handling',
      'A way to watch DOM events',
      'A reactive programming concept for handling asynchronous operations',
      'A type of service for handling HTTP requests'
    ],
    answer: 2,
    explanation: 'An Observable in Angular is a reactive programming concept for handling asynchronous operations. It represents a stream of data that can arrive over time, and provides operators to transform, combine, and compose Observables.'
  },
  {
    id: 'ang-034',
    question: 'Which method subscribes to an Observable?',
    options: [
      'watch()',
      'listen()',
      'subscribe()',
      'observe()'
    ],
    answer: 2,
    explanation: 'The subscribe() method is used to subscribe to an Observable. It takes one or more callbacks for handling emitted values, errors, and completion.'
  },
  {
    id: 'ang-035',
    question: 'What does the HttpClient.get() method return?',
    options: [
      'A Promise',
      'An Observable',
      'A callback function',
      'JSON data'
    ],
    answer: 1,
    explanation: 'The HttpClient.get() method returns an Observable. Unlike the older Http service, HttpClient automatically parses JSON responses.'
  },
  
  // Angular Routing
  {
    id: 'ang-036',
    question: 'What is the Angular Router?',
    options: [
      'A service that handles HTTP requests',
      'A library for creating responsive layouts',
      'A mechanism for navigating between different components in a single-page application',
      'A tool for generating component boilerplate code'
    ],
    answer: 2,
    explanation: 'The Angular Router is a mechanism for navigating between different components in a single-page application. It enables users to navigate to different parts of an application without full page reloads.'
  },
  {
    id: 'ang-037',
    question: 'Which directive is used to create a link in Angular routing?',
    options: [
      'routerLink',
      'href',
      'navigationLink',
      'routePath'
    ],
    answer: 0,
    explanation: 'The routerLink directive is used to create a link in Angular routing. It is similar to an HTML anchor tag but keeps the application in a single-page context instead of reloading the entire page.'
  },
  {
    id: 'ang-038',
    question: 'Which component is used to determine where the router should display the components?',
    options: [
      '<router>',
      '<routing>',
      '<router-view>',
      '<router-outlet>'
    ],
    answer: 3,
    explanation: 'The <router-outlet> component is used to determine where the router should display the components. When a route is activated, the corresponding component is inserted next to the <router-outlet>.'
  },
  {
    id: 'ang-039',
    question: 'How do you navigate programmatically in Angular?',
    options: [
      'Using the navigate() method of the Location service',
      'Using the go() method of the Router service',
      'Using the navigate() method of the Router service',
      'Using the redirect() method of the Router service'
    ],
    answer: 2,
    explanation: 'You navigate programmatically in Angular using the navigate() method of the Router service. For example: this.router.navigate(["/products"]);'
  },
  {
    id: 'ang-040',
    question: 'What is lazy loading in Angular routing?',
    options: [
      'Loading components only when they are visible on the screen',
      'Loading modules only when they are needed',
      'Loading data only when it is requested',
      'Loading images only when they are scrolled into view'
    ],
    answer: 1,
    explanation: 'Lazy loading in Angular routing is a technique where modules are loaded only when they are needed, typically when a user navigates to a route associated with that module. This can significantly improve the initial load time of an application.'
  },
  
  // Forms in Angular
  {
    id: 'ang-041',
    question: 'What are the two types of forms in Angular?',
    options: [
      'HTML forms and Angular forms',
      'Template-driven forms and Reactive forms',
      'Static forms and Dynamic forms',
      'Simple forms and Complex forms'
    ],
    answer: 1,
    explanation: 'There are two types of forms in Angular: Template-driven forms and Reactive forms. Template-driven forms are simpler and rely on directives in the template, while Reactive forms are more robust and use explicit form control objects in the component class.'
  },
  {
    id: 'ang-042',
    question: 'Which module do you need to import for Template-driven forms?',
    options: [
      'ReactiveFormsModule',
      'TemplateFormsModule',
      'FormsModule',
      'NgFormsModule'
    ],
    answer: 2,
    explanation: 'You need to import the FormsModule for Template-driven forms. This module provides directives like ngModel that are necessary for Template-driven forms.'
  },
  {
    id: 'ang-043',
    question: 'Which module do you need to import for Reactive forms?',
    options: [
      'ReactiveFormsModule',
      'TemplateFormsModule',
      'FormsModule',
      'NgFormsModule'
    ],
    answer: 0,
    explanation: 'You need to import the ReactiveFormsModule for Reactive forms. This module provides classes like FormControl, FormGroup, and FormBuilder that are necessary for Reactive forms.'
  },
  {
    id: 'ang-044',
    question: 'In Reactive forms, what class is used to track the value and validation status of individual form controls?',
    options: [
      'FormControl',
      'FormGroup',
      'FormArray',
      'FormBuilder'
    ],
    answer: 0,
    explanation: 'In Reactive forms, the FormControl class is used to track the value and validation status of individual form controls like input fields, dropdown lists, etc.'
  },
  {
    id: 'ang-045',
    question: 'In Reactive forms, what class is used to track the value and validation status of a group of form controls?',
    options: [
      'FormControl',
      'FormGroup',
      'FormArray',
      'FormBuilder'
    ],
    answer: 1,
    explanation: 'In Reactive forms, the FormGroup class is used to track the value and validation status of a group of form controls. It aggregates the values of each child FormControl into a single object, with each control name as the key.'
  },
  
  // Angular Modules
  {
    id: 'ang-046',
    question: 'What is an Angular module?',
    options: [
      'A JavaScript function that encapsulates related code',
      'A TypeScript class with an @NgModule decorator that organizes related components, directives, pipes, and services',
      'A special type of component that can include other components',
      'A library of pre-built Angular functionality'
    ],
    answer: 1,
    explanation: 'An Angular module is a TypeScript class with an @NgModule decorator that organizes related components, directives, pipes, and services. It provides a compilation context for its components and can be used to group related functionality.'
  },
  {
    id: 'ang-047',
    question: 'What is the root module in an Angular application?',
    options: [
      'The module that contains the main component',
      'The module that is loaded first',
      'The module that all other modules extend from',
      'The module that bootstraps the application'
    ],
    answer: 3,
    explanation: 'The root module in an Angular application is the module that bootstraps the application. It is typically called AppModule and is decorated with @NgModule.'
  },
  {
    id: 'ang-048',
    question: 'What is the purpose of the declarations array in the @NgModule decorator?',
    options: [
      'To list the modules that this module depends on',
      'To list the components, directives, and pipes that belong to this module',
      'To list the services that this module provides',
      'To list the routes that this module handles'
    ],
    answer: 1,
    explanation: 'The declarations array in the @NgModule decorator is used to list the components, directives, and pipes that belong to this module. These are only visible and usable within this module.'
  },
  {
    id: 'ang-049',
    question: 'What is the purpose of the imports array in the @NgModule decorator?',
    options: [
      'To list the modules that this module depends on',
      'To list the components, directives, and pipes that belong to this module',
      'To list the services that this module provides',
      'To list the routes that this module handles'
    ],
    answer: 0,
    explanation: 'The imports array in the @NgModule decorator is used to list the modules that this module depends on. These imported modules make their exported declarations available to this module.'
  },
  {
    id: 'ang-050',
    question: 'What is the purpose of the exports array in the @NgModule decorator?',
    options: [
      'To list the modules that this module shares with other modules',
      'To list the components, directives, and pipes from this module that should be available to other modules',
      'To list the services from this module that should be available to other modules',
      'To list the routes that this module exposes to other modules'
    ],
    answer: 1,
    explanation: 'The exports array in the @NgModule decorator is used to list the components, directives, and pipes from this module that should be available to other modules. If another module imports this module, it can use any exported declarations.'
  },
  
  // Angular Lifecycle Hooks
  {
    id: 'ang-051',
    question: 'What are lifecycle hooks in Angular?',
    options: [
      'Functions that allow you to tap into the lifecycle of a component or directive',
      'Hooks that connect components to the DOM',
      'Methods that handle HTTP requests at different stages',
      'Callbacks that are triggered when a service is created or destroyed'
    ],
    answer: 0,
    explanation: 'Lifecycle hooks in Angular are functions that allow you to tap into the lifecycle of a component or directive. They are called at specific moments during the lifecycle of a component or directive.'
  },
  {
    id: 'ang-052',
    question: 'Which lifecycle hook is called first?',
    options: [
      'ngOnInit',
      'ngOnChanges',
      'ngDoCheck',
      'ngAfterViewInit'
    ],
    answer: 1,
    explanation: 'The ngOnChanges lifecycle hook is called first, before ngOnInit. It is called whenever one or more data-bound input properties change.'
  },
  {
    id: 'ang-053',
    question: 'Which lifecycle hook is called after Angular initializes the component\'s data-bound properties?',
    options: [
      'ngOnInit',
      'ngOnChanges',
      'ngDoCheck',
      'ngAfterViewInit'
    ],
    answer: 0,
    explanation: 'The ngOnInit lifecycle hook is called after Angular initializes the component\'s data-bound properties. It is called only once, after the first ngOnChanges.'
  },
  {
    id: 'ang-054',
    question: 'Which lifecycle hook is called before a component is destroyed?',
    options: [
      'ngOnDestroy',
      'ngBeforeDestroy',
      'ngDestroyComponent',
      'ngEnd'
    ],
    answer: 0,
    explanation: 'The ngOnDestroy lifecycle hook is called just before Angular destroys the component. It is used for cleanup, like unsubscribing from Observables to prevent memory leaks.'
  },
  {
    id: 'ang-055',
    question: 'Which lifecycle hook is used for detecting changes that Angular can\'t or won\'t detect on its own?',
    options: [
      'ngOnInit',
      'ngOnChanges',
      'ngDoCheck',
      'ngAfterViewChecked'
    ],
    answer: 2,
    explanation: 'The ngDoCheck lifecycle hook is used for detecting changes that Angular can\'t or won\'t detect on its own. It is called during every change detection run, immediately after ngOnChanges and ngOnInit.'
  },
  
  // Advanced Angular Concepts
  {
    id: 'ang-056',
    question: 'What is Angular Universal?',
    options: [
      'A module for creating universal components that work in any environment',
      'A platform for server-side rendering of Angular applications',
      'A framework for building cross-platform mobile applications',
      'A set of best practices for building scalable Angular applications'
    ],
    answer: 1,
    explanation: 'Angular Universal is a platform for server-side rendering of Angular applications. It generates static HTML on the server, which can improve performance and SEO.'
  },
  {
    id: 'ang-057',
    question: 'What is the purpose of NgZone in Angular?',
    options: [
      'To handle browser-specific implementations',
      'To provide zone-specific styling for components',
      'To execute code in different geographical zones',
      'To handle change detection by notifying Angular when to update the UI'
    ],
    answer: 3,
    explanation: 'NgZone in Angular is a wrapper around Zone.js that helps Angular know when to trigger change detection by notifying it when asynchronous operations are done.'
  },
  {
    id: 'ang-058',
    question: 'What is the ViewEncapsulation in Angular?',
    options: [
      'A security feature that prevents unauthorized access to views',
      'A way to encapsulate complex view logic into simpler components',
      'A mechanism that defines how the CSS styles of a component are scoped',
      'A technique for lazy loading views to improve performance'
    ],
    answer: 2,
    explanation: 'ViewEncapsulation in Angular is a mechanism that defines how the CSS styles of a component are scoped. It determines whether the styles defined in a component affect the entire application or just the component\'s view.'
  },
  {
    id: 'ang-059',
    question: 'What is the purpose of the ChangeDetectorRef in Angular?',
    options: [
      'To detect changes in the browser\'s DOM',
      'To manually trigger change detection',
      'To prevent changes to a component',
      'To reset the component to its default state'
    ],
    answer: 1,
    explanation: 'The ChangeDetectorRef in Angular is used to manually trigger change detection. It provides methods like detectChanges() and markForCheck() to control how and when change detection is performed.'
  },
  {
    id: 'ang-060',
    question: 'What is the purpose of the OnPush change detection strategy?',
    options: [
      'To force changes to be pushed to the view',
      'To optimize performance by reducing the number of change detection cycles',
      'To push changes from child components to parent components',
      'To push updates to a server'
    ],
    answer: 1,
    explanation: 'The OnPush change detection strategy in Angular is used to optimize performance by reducing the number of change detection cycles. With OnPush, change detection is only triggered for the component when its input properties change or when an event is emitted from the component or its children.'
  },
  
  // Angular Testing
  {
    id: 'ang-061',
    question: 'Which testing framework is commonly used with Angular?',
    options: [
      'Jest',
      'Mocha',
      'Jasmine',
      'QUnit'
    ],
    answer: 2,
    explanation: 'Jasmine is the testing framework commonly used with Angular. It provides functions to help structure your tests and make assertions about code behavior.'
  },
  {
    id: 'ang-062',
    question: 'What is TestBed in Angular?',
    options: [
      'A class for creating isolated unit tests',
      'A utility that helps create a testing module for testing components',
      'A testing environment for end-to-end tests',
      'A set of mock services for testing'
    ],
    answer: 1,
    explanation: 'TestBed in Angular is a utility that helps create a testing module for testing components. It provides methods for configuring a module for isolated testing and for creating component instances.'
  },
  {
    id: 'ang-063',
    question: 'Which method is used to compile components for testing in Angular?',
    options: [
      'TestBed.createComponent()',
      'TestBed.compileTestingModule()',
      'TestBed.compileComponents()',
      'TestBed.initTestEnvironment()'
    ],
    answer: 2,
    explanation: 'The TestBed.compileComponents() method is used to compile components for testing in Angular. It asynchronously compiles all the components configured in the testing module.'
  },
  {
    id: 'ang-064',
    question: 'What is the purpose of fixture.detectChanges() in Angular tests?',
    options: [
      'To detect errors in the test',
      'To trigger change detection and update the DOM',
      'To verify changes to the component',
      'To reset the component after each test'
    ],
    answer: 1,
    explanation: 'The fixture.detectChanges() method in Angular tests is used to trigger change detection and update the DOM. It is needed because Angular doesn\'t trigger change detection automatically in tests.'
  },
  {
    id: 'ang-065',
    question: 'What is the purpose of spyOn in Jasmine?',
    options: [
      'To spy on users interacting with the application',
      'To monitor network requests',
      'To track function calls and mock their implementation',
      'To watch for changes in component properties'
    ],
    answer: 2,
    explanation: 'The spyOn function in Jasmine is used to track function calls and mock their implementation. It allows you to test a component in isolation by controlling the behavior of its dependencies.'
  },
  
  // Angular Performance
  {
    id: 'ang-066',
    question: 'What is AOT compilation in Angular?',
    options: [
      'A technique for compiling CSS ahead of time',
      'A way to precompile Angular templates',
      'A method for optimizing TypeScript code',
      'A tool for analyzing application performance'
    ],
    answer: 1,
    explanation: 'AOT (Ahead-of-Time) compilation in Angular is a way to precompile Angular templates during the build process, rather than at runtime. It can improve performance and security.'
  },
  {
    id: 'ang-067',
    question: 'What is tree shaking in Angular?',
    options: [
      'A technique for organizing component hierarchies',
      'A method for removing unused code from the final bundle',
      'A process for optimizing the DOM structure',
      'A way to minimize CSS files'
    ],
    answer: 1,
    explanation: 'Tree shaking in Angular is a method for removing unused code from the final bundle. It is a form of dead code elimination that is performed during the build process.'
  },
  {
    id: 'ang-068',
    question: 'How can you optimize change detection in Angular?',
    options: [
      'By using the Default change detection strategy for all components',
      'By avoiding change detection entirely',
      'By using the OnPush change detection strategy and immutable data',
      'By manually calling detectChanges() after every operation'
    ],
    answer: 2,
    explanation: 'You can optimize change detection in Angular by using the OnPush change detection strategy and immutable data. This tells Angular to only check for changes when inputs change or events are emitted.'
  },
  {
    id: 'ang-069',
    question: 'What is lazy loading in Angular?',
    options: [
      'Loading components only when they are needed',
      'Loading data only when it is requested',
      'Loading modules only when they are needed',
      'Loading styles only when they are applied'
    ],
    answer: 2,
    explanation: 'Lazy loading in Angular is a technique for loading modules only when they are needed, typically when a user navigates to a route associated with that module. This can significantly improve the initial load time of an application.'
  },
  {
    id: 'ang-070',
    question: 'What is the purpose of the trackBy function in ngFor?',
    options: [
      'To track the current index in the collection',
      'To track changes in the collection and improve rendering performance',
      'To track errors when rendering the collection',
      'To track which items are selected in the collection'
    ],
    answer: 1,
    explanation: 'The trackBy function in ngFor is used to track changes in the collection and improve rendering performance. It helps Angular identify which items have changed, been added, or been removed, so that it can minimize DOM operations.'
  },
  
  // Angular Security
  {
    id: 'ang-071',
    question: 'What is Cross-Site Scripting (XSS) in Angular?',
    options: [
      'A technique for sharing scripts between different Angular applications',
      'A vulnerability where malicious scripts can be injected into a web page',
      'A method for executing scripts on multiple sites simultaneously',
      'A security feature in Angular that prevents script execution'
    ],
    answer: 1,
    explanation: 'Cross-Site Scripting (XSS) in Angular is a vulnerability where malicious scripts can be injected into a web page viewed by users. This can allow attackers to steal sensitive information or perform actions on behalf of the user.'
  },
  {
    id: 'ang-072',
    question: 'How does Angular help prevent XSS attacks?',
    options: [
      'By blocking all script execution',
      'By sanitizing user input and escaping potentially dangerous content',
      'By isolating each component in its own iframe',
      'By encrypting all data transmitted to the server'
    ],
    answer: 1,
    explanation: 'Angular helps prevent XSS attacks by sanitizing user input and escaping potentially dangerous content. It treats all values as untrusted by default and automatically escapes untrusted values in HTML, styles, URLs, and resource URLs.'
  },
  {
    id: 'ang-073',
    question: 'What is the purpose of the DomSanitizer in Angular?',
    options: [
      'To clean up the DOM after components are destroyed',
      'To optimize DOM operations for better performance',
      'To sanitize and secure values before they are inserted into the DOM',
      'To validate the structure of the DOM'
    ],
    answer: 2,
    explanation: 'The DomSanitizer in Angular is used to sanitize and secure values before they are inserted into the DOM. It helps prevent XSS attacks by marking values as trusted for specific contexts, such as HTML, styles, and URLs.'
  },
  {
    id: 'ang-074',
    question: 'What is CSRF in Angular?',
    options: [
      'Cross-Site Request Forgery, a vulnerability where unauthorized commands are transmitted from a user the website trusts',
      'Client-Side Rendering Framework, a technique for rendering Angular applications',
      'Component Style Resolution Format, a way to define component styles',
      'Cross-Site Resource Fetching, a method for loading resources from different domains'
    ],
    answer: 0,
    explanation: 'CSRF (Cross-Site Request Forgery) in Angular is a vulnerability where unauthorized commands are transmitted from a user the website trusts. It tricks the user\'s browser into executing unwanted actions on a web application in which the user is authenticated.'
  },
  {
    id: 'ang-075',
    question: 'How can you protect against CSRF in Angular?',
    options: [
      'By using HTTPS for all communications',
      'By implementing a CSRF token mechanism',
      'By validating all form inputs',
      'By disabling cookies'
    ],
    answer: 1,
    explanation: 'You can protect against CSRF in Angular by implementing a CSRF token mechanism. This involves sending a unique token with each request that the server validates to ensure the request came from your application and not a malicious site.'
  },
  
  // Angular CLI
  {
    id: 'ang-076',
    question: 'What is the Angular CLI?',
    options: [
      'A web-based IDE for Angular development',
      'A command-line interface for initializing, developing, scaffolding, and maintaining Angular applications',
      'A client library for making HTTP requests in Angular',
      'A component library for Angular'
    ],
    answer: 1,
    explanation: 'The Angular CLI (Command Line Interface) is a command-line tool for initializing, developing, scaffolding, and maintaining Angular applications. It provides commands for creating new projects, generating code, running tests, and building for production.'
  },
  {
    id: 'ang-077',
    question: 'Which command is used to create a new component using the Angular CLI?',
    options: [
      'ng new component-name',
      'ng create component-name',
      'ng generate component component-name',
      'ng add component-name'
    ],
    answer: 2,
    explanation: 'The command "ng generate component component-name" (or "ng g c component-name" for short) is used to create a new component using the Angular CLI.'
  },
  {
    id: 'ang-078',
    question: 'Which command is used to build an Angular application for production?',
    options: [
      'ng build --prod',
      'ng prod',
      'ng production',
      'ng deploy'
    ],
    answer: 0,
    explanation: 'The command "ng build --prod" is used to build an Angular application for production. It applies production optimizations such as bundling, minification, and ahead-of-time (AOT) compilation.'
  },
  {
    id: 'ang-079',
    question: 'Which command is used to run unit tests in an Angular application?',
    options: [
      'ng unit-test',
      'ng test',
      'ng run-tests',
      'ng check'
    ],
    answer: 1,
    explanation: 'The command "ng test" is used to run unit tests in an Angular application. It uses Karma as the test runner and Jasmine as the testing framework by default.'
  },
  {
    id: 'ang-080',
    question: 'Which command is used to run end-to-end tests in an Angular application?',
    options: [
      'ng end-to-end',
      'ng e2e',
      'ng system-test',
      'ng integration-test'
    ],
    answer: 1,
    explanation: 'The command "ng e2e" is used to run end-to-end tests in an Angular application. It uses Protractor as the test runner by default, which is built on top of WebDriverJS.'
  },
  
  // Angular Material
  {
    id: 'ang-081',
    question: 'What is Angular Material?',
    options: [
      'A CSS framework for styling Angular applications',
      'A UI component library for Angular based on Material Design',
      'A tool for analyzing the material requirements of an Angular application',
      'A service for handling material resources in Angular'
    ],
    answer: 1,
    explanation: 'Angular Material is a UI component library for Angular based on Material Design. It provides a set of reusable, well-tested, and accessible UI components.'
  },
  {
    id: 'ang-082',
    question: 'How do you install Angular Material?',
    options: [
      'npm install @angular/material',
      'ng add @angular/material',
      'npm add angular-material',
      'ng install material-design'
    ],
    answer: 1,
    explanation: 'You install Angular Material using the command "ng add @angular/material". This not only installs the necessary dependencies but also sets up the theming and imports the BrowserAnimationsModule.'
  },
  {
    id: 'ang-083',
    question: 'Which module do you need to import to use MatButtonModule in your component?',
    options: [
      'MaterialModule',
      'MatComponentsModule',
      'MatButtonModule',
      'AngularMaterialModule'
    ],
    answer: 2,
    explanation: 'You need to import MatButtonModule to use MatButtonModule in your component. Angular Material follows a modular approach, where each component or set of related components has its own module.'
  },
  {
    id: 'ang-084',
    question: 'What is a theme in Angular Material?',
    options: [
      'A collection of styles that define the visual appearance of the components',
      'A component that allows users to switch between different visual modes',
      'A feature that dynamically changes the appearance of components based on user preferences',
      'A set of custom icons and images'
    ],
    answer: 0,
    explanation: 'A theme in Angular Material is a collection of styles that define the visual appearance of the components. Angular Material provides several pre-built themes, and you can also create custom themes.'
  },
  {
    id: 'ang-085',
    question: 'Which directive is used for a Material Design button?',
    options: [
      'mdButton',
      'materialButton',
      'mat-button',
      'angular-material-button'
    ],
    answer: 2,
    explanation: 'The mat-button directive is used for a Material Design button. For example: <button mat-button>Click me</button>.'
  },
  
  // Angular Flex Layout
  {
    id: 'ang-086',
    question: 'What is Angular Flex Layout?',
    options: [
      'A layout engine for Angular based on CSS Grid',
      'A service for arranging components dynamically',
      'A utility for animating layout changes',
      'A library for building responsive layouts in Angular applications'
    ],
    answer: 3,
    explanation: 'Angular Flex Layout is a library for building responsive layouts in Angular applications. It provides a flexible and powerful API for creating layouts using Flexbox and CSS Grid.'
  },
  {
    id: 'ang-087',
    question: 'How do you install Angular Flex Layout?',
    options: [
      'npm install @angular/flex-layout',
      'ng add @angular/flex-layout',
      'npm add angular-flex',
      'ng install flex-layout'
    ],
    answer: 0,
    explanation: 'You install Angular Flex Layout using the command "npm install @angular/flex-layout". After installation, you need to import the FlexLayoutModule into your application module.'
  },
  {
    id: 'ang-088',
    question: 'Which directive is used to create a flex container in Angular Flex Layout?',
    options: [
      'flex',
      'fxFlex',
      'fxLayout',
      'fxContainer'
    ],
    answer: 2,
    explanation: 'The fxLayout directive is used to create a flex container in Angular Flex Layout. It defines the flex-direction and other container properties.'
  },
  {
    id: 'ang-089',
    question: 'Which directive is used to define how a flex item will shrink or grow in Angular Flex Layout?',
    options: [
      'fxFlexSize',
      'fxGrow',
      'fxFlex',
      'fxItem'
    ],
    answer: 2,
    explanation: 'The fxFlex directive is used to define how a flex item will shrink or grow in Angular Flex Layout. It corresponds to the flex CSS property.'
  },
  {
    id: 'ang-090',
    question: 'How do you specify a media query breakpoint in Angular Flex Layout?',
    options: [
      'Using the @media CSS rule',
      'Using the "breakpoint" input property',
      'Using the fxBreakpoint directive',
      'Adding a suffix to the directive name, like fxLayout.lt-md'
    ],
    answer: 3,
    explanation: 'In Angular Flex Layout, you specify a media query breakpoint by adding a suffix to the directive name, like fxLayout.lt-md. This applies the directive only when the specified breakpoint condition is met.'
  },
  
  // Angular Elements
  {
    id: 'ang-091',
    question: 'What are Angular Elements?',
    options: [
      'Basic building blocks of Angular applications, like components and services',
      'A way to convert Angular components to native web components',
      'A feature for creating dynamic elements in Angular templates',
      'A library of pre-built UI elements for Angular'
    ],
    answer: 1,
    explanation: 'Angular Elements is a feature that allows you to convert Angular components to native web components (custom elements). This allows you to use Angular components in non-Angular applications or directly in the DOM.'
  },
  {
    id: 'ang-092',
    question: 'Which package provides Angular Elements functionality?',
    options: [
      '@angular/elements',
      '@angular/web-components',
      '@angular/custom-elements',
      '@angular/native-elements'
    ],
    answer: 0,
    explanation: 'The @angular/elements package provides Angular Elements functionality. It includes the createCustomElement function, which converts an Angular component to a web component.'
  },
  {
    id: 'ang-093',
    question: 'How do you create a custom element from an Angular component?',
    options: [
      'Using the @CustomElement decorator',
      'Using the createComponent method of ElementsModule',
      'Using the createCustomElement function from @angular/elements',
      'Using the toCustomElement method of ComponentFactoryResolver'
    ],
    answer: 2,
    explanation: 'You create a custom element from an Angular component using the createCustomElement function from @angular/elements. After creating the custom element, you need to register it with the browser using customElements.define().'
  },
  {
    id: 'ang-094',
    question: 'What is a benefit of using Angular Elements?',
    options: [
      'They provide better performance than regular Angular components',
      'They allow Angular components to be used in non-Angular applications',
      'They automatically handle browser compatibility issues',
      'They reduce the size of Angular applications'
    ],
    answer: 1,
    explanation: 'A key benefit of using Angular Elements is that they allow Angular components to be used in non-Angular applications. Once an Angular component is converted to a web component, it can be used in any HTML page or in other frameworks like React or Vue.'
  },
  {
    id: 'ang-095',
    question: 'What is required to use Angular Elements in a browser?',
    options: [
      'The browser must support custom elements natively or through polyfills',
      'A special Angular Elements browser extension',
      'A server-side rendering engine',
      'A specific version of Angular'
    ],
    answer: 0,
    explanation: 'To use Angular Elements in a browser, the browser must support custom elements (part of the Web Components standard) either natively or through polyfills. Most modern browsers support custom elements, but polyfills may be needed for older browsers.'
  },
  
  // Angular PWA (Progressive Web Apps)
  {
    id: 'ang-096',
    question: 'What is an Angular PWA?',
    options: [
      'A special type of Angular component that performs well on mobile devices',
      'An Angular application that can be installed on a device and run offline',
      'A performance optimization technique for Angular apps',
      'An Angular application with advanced web animations'
    ],
    answer: 1,
    explanation: 'An Angular PWA (Progressive Web App) is an Angular application that can be installed on a device and run offline. PWAs combine the best of web and mobile apps, providing features like offline access, push notifications, and home screen installation.'
  },
  {
    id: 'ang-097',
    question: 'Which Angular package provides PWA support?',
    options: [
      '@angular/pwa',
      '@angular/service-worker',
      '@angular/offline',
      '@angular/progressive'
    ],
    answer: 1,
    explanation: 'The @angular/service-worker package provides PWA support in Angular. It includes features for caching assets and HTTP requests, enabling offline functionality.'
  },
  {
    id: 'ang-098',
    question: 'How do you add PWA support to an existing Angular application?',
    options: [
      'Run "ng add @angular/pwa"',
      'Run "ng add @angular/service-worker"',
      'Run "ng add @angular/offline"',
      'Run "ng generate pwa"'
    ],
    answer: 1,
    explanation: 'You add PWA support to an existing Angular application by running "ng add @angular/service-worker". This adds the necessary dependencies, updates the app module, creates a service worker configuration file, and updates the build configuration.'
  },
  {
    id: 'ang-099',
    question: 'What is the purpose of the ngsw-config.json file in an Angular PWA?',
    options: [
      'To configure the Angular CLI for PWA builds',
      'To define which assets and routes should be cached by the service worker',
      'To specify push notification settings',
      'To configure the app manifest'
    ],
    answer: 1,
    explanation: 'The ngsw-config.json file in an Angular PWA is used to define which assets and routes should be cached by the service worker. It allows you to specify caching strategies for different types of resources.'
  },
  {
    id: 'ang-100',
    question: 'What file provides metadata for an Angular PWA when it is installed on a device?',
    options: [
      'pwa-settings.json',
      'ngsw-config.json',
      'manifest.webmanifest',
      'pwa-manifest.json'
    ],
    answer: 2,
    explanation: 'The manifest.webmanifest file provides metadata for an Angular PWA when it is installed on a device. It includes information like the app\'s name, icons, colors, and start URL.'
  },
  
  // Angular Architecture and Best Practices
  {
    id: 'ang-101',
    question: 'What is the recommended architecture for large Angular applications?',
    options: [
      'Monolithic architecture with a single module',
      'Microservices architecture with separate Angular applications',
      'Modular architecture with feature modules and core/shared modules',
      'Server-based architecture with minimal client-side code'
    ],
    answer: 2,
    explanation: 'The recommended architecture for large Angular applications is a modular architecture with feature modules and core/shared modules. This promotes separation of concerns, encapsulation, and maintainability.'
  },
  {
    id: 'ang-102',
    question: 'What is a core module in Angular?',
    options: [
      'A module that provides core functionality to the browser',
      'A module that contains singleton services, app-wide components, and other features that are loaded only once',
      'A module that is required for the application to function',
      'The main module of the application, usually AppModule'
    ],
    answer: 1,
    explanation: 'A core module in Angular is a module that contains singleton services, app-wide components, and other features that are loaded only once. It typically includes services that are shared across the entire application, like authentication service or data service.'
  },
  {
    id: 'ang-103',
    question: 'What is a shared module in Angular?',
    options: [
      'A module that is shared between different Angular applications',
      'A module that contains components, directives, and pipes that are used across multiple feature modules',
      'A module that shares data between components',
      'A module that is automatically shared with all child modules'
    ],
    answer: 1,
    explanation: 'A shared module in Angular is a module that contains components, directives, and pipes that are used across multiple feature modules. It is imported by feature modules that need its functionality.'
  },
  {
    id: 'ang-104',
    question: 'What is a feature module in Angular?',
    options: [
      'A module that provides special features to the application',
      'A module that lazy loads features as needed',
      'A module that delivers a cohesive set of functionality focused on a specific application feature',
      'A module that contains experimental features'
    ],
    answer: 2,
    explanation: 'A feature module in Angular is a module that delivers a cohesive set of functionality focused on a specific application feature. It typically has a top component that acts as the feature root and a set of child components that implement the feature.'
  },
  {
    id: 'ang-105',
    question: 'What is a barrel in Angular?',
    options: [
      'A container for storing multiple Angular modules',
      'A build tool for bundling Angular applications',
      'A file that re-exports components, directives, and other symbols from a directory',
      'A large Angular module with many dependencies'
    ],
    answer: 2,
    explanation: 'A barrel in Angular is a file that re-exports components, directives, and other symbols from a directory. It is typically named index.ts and simplifies imports by allowing you to import multiple items from a directory with a single import statement.'
  },
  
  // Angular and RxJS
  {
    id: 'ang-106',
    question: 'What is RxJS used for in Angular?',
    options: [
      'For styling components',
      'For handling asynchronous operations and events',
      'For routing between components',
      'For dependency injection'
    ],
    answer: 1,
    explanation: 'RxJS is used in Angular for handling asynchronous operations and events. It provides an implementation of the Observable type along with utility operators that make it easier to work with asynchronous data and events.'
  },
  {
    id: 'ang-107',
    question: 'What is the most common use of Observables in Angular?',
    options: [
      'For component communication',
      'For handling HTTP responses',
      'For detecting changes in form controls',
      'For routing events'
    ],
    answer: 1,
    explanation: 'The most common use of Observables in Angular is for handling HTTP responses. The HttpClient methods return Observables that emit the response data.'
  },
  {
    id: 'ang-108',
    question: 'What is a Subject in RxJS?',
    options: [
      'A type of Observable that cannot be subscribed to',
      'A type of Observable that can emit values programmatically and can be both an Observable and an Observer',
      'A wrapper for an Observable that adds additional functionality',
      'A special type of data that can be observed by multiple components'
    ],
    answer: 1,
    explanation: 'A Subject in RxJS is a type of Observable that can emit values programmatically and can be both an Observable and an Observer. It can be subscribed to like any Observable, and you can also call next(), error(), and complete() methods on it to emit values, errors, or completion notifications.'
  },
  {
    id: 'ang-109',
    question: 'What is the purpose of the pipe method in RxJS?',
    options: [
      'To connect Observables to Subjects',
      'To connect Observables to other Observables',
      'To apply a series of operators to an Observable',
      'To transform the data type of an Observable'
    ],
    answer: 2,
    explanation: 'The pipe method in RxJS is used to apply a series of operators to an Observable. It allows you to compose operators in a clean and readable way to transform, filter, and manipulate the data emitted by an Observable.'
  },
  {
    id: 'ang-110',
    question: 'What is the purpose of the takeUntil operator in RxJS?',
    options: [
      'To take a specified number of values from an Observable',
      'To take values from an Observable until a condition is met',
      'To take values from an Observable until another Observable emits a value',
      'To take the first value from an Observable and then complete'
    ],
    answer: 2,
    explanation: 'The takeUntil operator in RxJS is used to take values from an Observable until another Observable emits a value. It is commonly used in Angular components to automatically unsubscribe from Observables when the component is destroyed, preventing memory leaks.'
  },
  
  // Advanced RxJS in Angular
  {
    id: 'ang-111',
    question: 'What is the switchMap operator in RxJS?',
    options: [
      'An operator that switches between multiple Observables based on a condition',
      'An operator that maps each value to a new Observable and unsubscribes from the previous Observable',
      'An operator that switches the order of values emitted by an Observable',
      'An operator that switches between different mapping functions'
    ],
    answer: 1,
    explanation: 'The switchMap operator in RxJS maps each value from the source Observable to a new Observable, and then unsubscribes from the previous Observable when a new Observable is created. It is useful for scenarios like cancelling previous HTTP requests when new ones are made.'
  },
  {
    id: 'ang-112',
    question: 'What is the concatMap operator in RxJS?',
    options: [
      'An operator that concatenates multiple Observables',
      'An operator that maps each value to a new Observable and subscribes to the new Observable only after the previous one completes',
      'An operator that concatenates values from multiple Observables',
      'An operator that concatenates strings emitted by an Observable'
    ],
    answer: 1,
    explanation: 'The concatMap operator in RxJS maps each value from the source Observable to a new Observable, and then subscribes to the new Observable only after the previous one completes. It is useful for scenarios where you want to ensure that operations are performed in sequence.'
  },
  {
    id: 'ang-113',
    question: 'What is the mergeMap operator in RxJS?',
    options: [
      'An operator that merges multiple Observables into one',
      'An operator that maps each value to a new Observable and subscribes to all of them concurrently',
      'An operator that merges values from multiple Observables',
      'An operator that merges objects emitted by an Observable'
    ],
    answer: 1,
    explanation: 'The mergeMap operator in RxJS maps each value from the source Observable to a new Observable, and then subscribes to all of them concurrently. It is useful for scenarios where you want to perform multiple operations in parallel and don\'t care about the order of completion.'
  },
  {
    id: 'ang-114',
    question: 'What is the purpose of the BehaviorSubject in RxJS?',
    options: [
      'To emit the latest value to new subscribers',
      'To modify the behavior of an Observable',
      'To monitor the behavior of an Observable',
      'To enforce specific behavior for subscribers'
    ],
    answer: 0,
    explanation: 'The BehaviorSubject in RxJS is used to emit the latest value to new subscribers. It requires an initial value and stores the latest value emitted. When a new subscriber subscribes, it immediately receives the latest value.'
  },
  {
    id: 'ang-115',
    question: 'What is the purpose of the ReplaySubject in RxJS?',
    options: [
      'To replay all values emitted by an Observable',
      'To emit only specific values emitted by an Observable',
      'To emit the specified number of most recent values to new subscribers',
      'To repeat values emitted by an Observable'
    ],
    answer: 2,
    explanation: 'The ReplaySubject in RxJS is used to emit the specified number of most recent values to new subscribers. It buffers a specified number of values and then replays them to new subscribers, in addition to emitting new values as they occur.'
  },
  
  // Angular Animations
  {
    id: 'ang-116',
    question: 'Which module provides animation support in Angular?',
    options: [
      'AnimationModule',
      'NgAnimateModule',
      'BrowserAnimationsModule',
      'AngularAnimationsModule'
    ],
    answer: 2,
    explanation: 'The BrowserAnimationsModule provides animation support in Angular. It is imported from @angular/platform-browser/animations and needs to be imported into your application module.'
  },
  {
    id: 'ang-117',
    question: 'Which function is used to define animations in Angular?',
    options: [
      'animate()',
      'animation()',
      'trigger()',
      'transition()'
    ],
    answer: 2,
    explanation: 'The trigger() function is used to define animations in Angular. It takes a name and a list of states and transitions, and returns an object that can be used in the animations array of a component.'
  },
  {
    id: 'ang-118',
    question: 'How do you add an animation to a component in Angular?',
    options: [
      'Using the animations property in the @Component decorator',
      'Using the animate property in the @Component decorator',
      'Using the transitions property in the @Component decorator',
      'Using the effects property in the @Component decorator'
    ],
    answer: 0,
    explanation: 'You add an animation to a component in Angular using the animations property in the @Component decorator. The animations property takes an array of animation triggers defined using the trigger() function.'
  },
  {
    id: 'ang-119',
    question: 'Which directive is used to attach an animation trigger to an element?',
    options: [
      '@animate',
      '@transition',
      '@triggerName',
      '[@triggerName]'
    ],
    answer: 3,
    explanation: 'The syntax [@triggerName] is used to attach an animation trigger to an element. The triggerName should match the name of a trigger defined in the component\'s animations array.'
  },
  {
    id: 'ang-120',
    question: 'What is the purpose of the state() function in Angular animations?',
    options: [
      'To define the initial state of the application',
      'To define a state of an element that can be animated between',
      'To represent the current state of an animation',
      'To check if an animation is in progress'
    ],
    answer: 1,
    explanation: 'The state() function in Angular animations is used to define a state of an element that can be animated between. It takes a name and a set of styles, and is used within a trigger() function.'
  },
  
  // Angular Schematics
  {
    id: 'ang-121',
    question: 'What are Angular Schematics?',
    options: [
      'A tool for documenting the structure of Angular applications',
      'A collection of code generators that can create or modify code',
      'A template language for generating Angular components',
      'A library for generating Angular diagrams'
    ],
    answer: 1,
    explanation: 'Angular Schematics are a collection of code generators that can create or modify code. They are used by the Angular CLI for scaffolding and by third-party libraries for integrating with Angular applications.'
  },
  {
    id: 'ang-122',
    question: 'How do you create a new schematic?',
    options: [
      'Using the "ng generate schematic" command',
      'Using the @schematics/angular package',
      'Using the Schematic CLI with the "schematics blank" command',
      'Using the SchematicFactory class'
    ],
    answer: 2,
    explanation: 'You create a new schematic using the Schematic CLI with the "schematics blank" command. This creates a blank schematic that you can then modify to suit your needs.'
  },
  {
    id: 'ang-123',
    question: 'What is the purpose of a schematic\'s rule function?',
    options: [
      'To validate the input schema',
      'To define the business logic that will modify or create files',
      'To handle errors during schematic execution',
      'To specify the dependencies of the schematic'
    ],
    answer: 1,
    explanation: 'The rule function in a schematic is used to define the business logic that will modify or create files. It takes a Tree object and options, and returns a modified Tree or a Rule that will be executed.'
  },
  {
    id: 'ang-124',
    question: 'Which command is used to run a schematic?',
    options: [
      'ng run schematic-name',
      'ng schematic schematic-name',
      'ng generate schematic-name',
      'ng execute schematic-name'
    ],
    answer: 2,
    explanation: 'The "ng generate schematic-name" command is used to run a schematic. For third-party schematics, you would use "ng generate package-name:schematic-name".'
  },
  {
    id: 'ang-125',
    question: 'What is the Tree in Angular Schematics?',
    options: [
      'A hierarchical representation of the file system',
      'A data structure that represents the component hierarchy',
      'A visual tool for viewing the schematic execution',
      'A diagram of the schematic\'s rules'
    ],
    answer: 0,
    explanation: 'The Tree in Angular Schematics is a hierarchical representation of the file system. It allows you to read, write, create, and delete files without actually touching the file system until the schematic is committed.'
  },
  
  // Angular Debugging
  {
    id: 'ang-126',
    question: 'Which Chrome extension is commonly used for debugging Angular applications?',
    options: [
      'Angular Debugger',
      'Angular DevTools',
      'Angular Inspector',
      'Angular Debug'
    ],
    answer: 1,
    explanation: 'Angular DevTools is a Chrome extension commonly used for debugging Angular applications. It provides tools for inspecting the component tree, profiling change detection, and viewing injected services.'
  },
  {
    id: 'ang-127',
    question: 'How can you debug an Angular application in Visual Studio Code?',
    options: [
      'Using the Angular CLI debugger',
      'Using the browser DevTools only',
      'Using the Debugger for Chrome extension with a launch configuration',
      'Angular applications cannot be debugged in VS Code'
    ],
    answer: 2,
    explanation: 'You can debug an Angular application in Visual Studio Code using the Debugger for Chrome extension with a launch configuration. This allows you to set breakpoints in your TypeScript code and step through it in VS Code.'
  },
  {
    id: 'ang-128',
    question: 'What is Augury?',
    options: [
      'A feature of Angular that predicts potential errors',
      'A Chrome DevTools extension for debugging and profiling Angular applications',
      'A library for adding advanced debugging to Angular applications',
      'A tool for visualizing Angular application architecture'
    ],
    answer: 1,
    explanation: 'Augury is a Chrome DevTools extension for debugging and profiling Angular applications. It allows you to inspect the component tree, view injected dependencies, and track routing events.'
  },
  {
    id: 'ang-129',
    question: 'How can you view the current state of an Observable in Angular?',
    options: [
      'Using the async pipe in the template',
      'Using the debug() operator from RxJS',
      'Using Angular DevTools',
      'Using the tap() operator to log values to the console'
    ],
    answer: 3,
    explanation: 'You can view the current state of an Observable in Angular using the tap() operator (formerly do()) to log values to the console without affecting the Observable chain.'
  },
  {
    id: 'ang-130',
    question: 'What is the purpose of the ng.probe() function?',
    options: [
      'To test if Angular is running properly',
      'To debug performance issues',
      'To access the internal Angular objects for a component',
      'To probe network connections'
    ],
    answer: 2,
    explanation: 'The ng.probe() function is used to access the internal Angular objects for a component. It has been removed in production builds and is not recommended for use in newer versions of Angular, but it was historically used for debugging.'
  },
  
  // Angular Testing Advanced
  {
    id: 'ang-131',
    question: 'How do you test an Angular service that makes HTTP requests?',
    options: [
      'By mocking the service methods',
      'By using real HTTP requests in tests',
      'By using HttpClientTestingModule and HttpTestingController',
      'By disabling HTTP requests during tests'
    ],
    answer: 2,
    explanation: 'You test an Angular service that makes HTTP requests by using HttpClientTestingModule and HttpTestingController. These allow you to mock HTTP requests and responses without making actual network requests.'
  },
  {
    id: 'ang-132',
    question: 'What is the purpose of the ComponentFixture in Angular testing?',
    options: [
      'To fix issues in components',
      'To provide methods for detecting changes and interacting with a component during testing',
      'To fixture or attach a component to the DOM',
      'To create fixed component states for testing'
    ],
    answer: 1,
    explanation: 'The ComponentFixture in Angular testing provides methods for detecting changes and interacting with a component during testing. It wraps the component and its template, allowing you to trigger change detection, query the DOM, and access the component instance.'
  },
  {
    id: 'ang-133',
    question: 'How do you test a component that has a service dependency?',
    options: [
      'By creating a real instance of the service',
      'By using TestBed.configureTestingModule to provide a mock service',
      'By bypassing the dependency during tests',
      'By testing the service separately'
    ],
    answer: 1,
    explanation: 'You test a component that has a service dependency by using TestBed.configureTestingModule to provide a mock service. This allows you to control the service behavior in your tests without depending on the real service implementation.'
  },
  {
    id: 'ang-134',
    question: 'What is a test double in Angular testing?',
    options: [
      'A component that is tested twice',
      'A substitute for a real component, directive, pipe, or service in tests',
      'A duplicate test to ensure consistency',
      'A special test environment that runs tests twice'
    ],
    answer: 1,
    explanation: 'A test double in Angular testing is a substitute for a real component, directive, pipe, or service in tests. Test doubles include spies, stubs, mocks, dummies, and fakes, and are used to isolate the code being tested.'
  },
  {
    id: 'ang-135',
    question: 'How do you test an Angular router?',
    options: [
      'By using real navigation in tests',
      'By using RouterTestingModule and a mock ActivatedRoute',
      'By disabling the router during tests',
      'By testing each route separately'
    ],
    answer: 1,
    explanation: 'You test an Angular router by using RouterTestingModule and a mock ActivatedRoute. This allows you to simulate navigation and route parameters without actual navigation.'
  },
  
  // Angular Internationalization (i18n)
  {
    id: 'ang-136',
    question: 'What is Angular i18n?',
    options: [
      'A module for handling HTTP requests in 18 different ways',
      'A library for creating interactive user interfaces',
      'A feature for internationalizing Angular applications',
      'A tool for testing Angular components in 18 different browsers'
    ],
    answer: 2,
    explanation: 'Angular i18n (short for internationalization) is a feature for internationalizing Angular applications. It provides tools for marking text in templates for translation, extracting this text into translation files, and merging the translations back into the application.'
  },
  {
    id: 'ang-137',
    question: 'Which attribute is used to mark text for translation in Angular templates?',
    options: [
      'translate',
      'i18n',
      'localize',
      'globalize'
    ],
    answer: 1,
    explanation: 'The i18n attribute is used to mark text for translation in Angular templates. For example: <h1 i18n>Hello</h1>.'
  },
  {
    id: 'ang-138',
    question: 'How do you extract translatable text from an Angular application?',
    options: [
      'Using the "ng extract-i18n" command',
      'Using the "ng i18n-extract" command',
      'Using the "ng xi18n" command',
      'Using the "ng localize" command'
    ],
    answer: 2,
    explanation: 'You extract translatable text from an Angular application using the "ng xi18n" command. This creates an XML Localization Interchange File Format (XLIFF) file, which can be sent to translators.'
  },
  {
    id: 'ang-139',
    question: 'What is the purpose of the i18n-attribute syntax in Angular?',
    options: [
      'To mark attributes for translation',
      'To provide context for translators',
      'To specify the language of an attribute',
      'To indicate that an attribute should not be translated'
    ],
    answer: 0,
    explanation: 'The i18n-attribute syntax in Angular is used to mark attributes for translation. For example, i18n-title="@@homeTitle" marks the title attribute for translation.'
  },
  {
    id: 'ang-140',
    question: 'How do you create a localized version of an Angular application?',
    options: [
      'By using multiple translation files at runtime',
      'By creating separate builds for each locale',
      'By dynamically loading translations based on the user\'s browser settings',
      'By using a third-party translation service'
    ],
    answer: 1,
    explanation: 'You create a localized version of an Angular application by creating separate builds for each locale. This is done using the "ng build" command with the --localize option, which generates a separate version of the application for each locale.'
  },
  
  // Angular and Server-Side Rendering
  {
    id: 'ang-141',
    question: 'What is Server-Side Rendering (SSR) in Angular?',
    options: [
      'Rendering Angular applications on the server instead of in the browser',
      'Using a server to render static HTML pages',
      'A technique for serving Angular applications from a server',
      'A method for optimizing server performance'
    ],
    answer: 0,
    explanation: 'Server-Side Rendering (SSR) in Angular is rendering Angular applications on the server instead of in the browser. This can improve performance and SEO by providing fully rendered HTML to clients on initial load.'
  },
  {
    id: 'ang-142',
    question: 'What is Angular Universal?',
    options: [
      'A universal framework that works with any front-end library',
      'A set of tools for developing Angular applications across multiple platforms',
      'A platform for server-side rendering of Angular applications',
      'A universal component library for Angular'
    ],
    answer: 2,
    explanation: 'Angular Universal is a platform for server-side rendering of Angular applications. It allows you to run your Angular application on the server, generating static HTML that is then sent to the client.'
  },
  {
    id: 'ang-143',
    question: 'What are the benefits of Server-Side Rendering in Angular?',
    options: [
      'Reduced server load and improved application performance',
      'Improved SEO, faster initial load, and better performance on low-powered devices',
      'Simplified application architecture and reduced code complexity',
      'Automatic data synchronization between client and server'
    ],
    answer: 1,
    explanation: 'The benefits of Server-Side Rendering in Angular include improved SEO (search engines can index the full HTML content), faster initial load (users see content sooner), and better performance on low-powered devices (less client-side processing required).'
  },
  {
    id: 'ang-144',
    question: 'Which command is used to add Angular Universal to an existing Angular project?',
    options: [
      'ng add @angular/universal',
      'ng add @angular/ssr',
      'ng universal --add',
      'ng ssr --enable'
    ],
    answer: 0,
    explanation: 'The command "ng add @angular/universal" is used to add Angular Universal to an existing Angular project. This sets up the necessary files and configurations for server-side rendering.'
  },
  {
    id: 'ang-145',
    question: 'What is the main challenge of implementing Server-Side Rendering in Angular?',
    options: [
      'Increased server resource usage',
      'Complexity of maintaining separate client and server codebases',
      'Handling browser-specific code and APIs that are not available on the server',
      'Reduced application performance'
    ],
    answer: 2,
    explanation: 'The main challenge of implementing Server-Side Rendering in Angular is handling browser-specific code and APIs that are not available on the server. This includes DOM manipulation, browser APIs like localStorage, and third-party libraries that depend on browser features.'
  },
  
  // Angular Error Handling
  {
    id: 'ang-146',
    question: 'How can you handle errors globally in an Angular application?',
    options: [
      'By using try-catch blocks in all components',
      'By implementing the ErrorHandler interface and providing a custom implementation',
      'By using the global.error event',
      'By using the Angular ErrorModule'
    ],
    answer: 1,
    explanation: 'You can handle errors globally in an Angular application by implementing the ErrorHandler interface and providing a custom implementation. This is done by extending the ErrorHandler class and registering it as a provider with the useClass syntax.'
  },
  {
    id: 'ang-147',
    question: 'How do you handle errors in HTTP requests in Angular?',
    options: [
      'By using the try-catch block around HTTP calls',
      'By using the catchError operator from RxJS in the pipe method',
      'By implementing the HttpErrorHandler interface',
      'By enabling automatic error handling in HttpClient'
    ],
    answer: 1,
    explanation: 'You handle errors in HTTP requests in Angular by using the catchError operator from RxJS in the pipe method. This allows you to catch and handle errors in a reactive way, without breaking the Observable chain.'
  },
  {
    id: 'ang-148',
    question: 'What is the purpose of the retry operator in RxJS when making HTTP requests?',
    options: [
      'To retry failed HTTP requests a specified number of times',
      'To retry only specific types of HTTP requests',
      'To automatically retry all HTTP requests that fail',
      'To retry an HTTP request after a user action'
    ],
    answer: 0,
    explanation: 'The retry operator in RxJS is used to retry failed HTTP requests a specified number of times. It re-subscribes to the source Observable when an error occurs, which can be useful for handling transient network errors.'
  },
  {
    id: 'ang-149',
    question: 'What is the difference between catchError and handleError in Angular HTTP error handling?',
    options: [
      'catchError is for catching specific errors, while handleError is for handling all errors',
      'catchError is an RxJS operator, while handleError is a custom method often used within catchError',
      'catchError is for client-side errors, while handleError is for server-side errors',
      'catchError is deprecated, while handleError is the recommended approach'
    ],
    answer: 1,
    explanation: 'catchError is an RxJS operator used in the pipe method of an Observable, while handleError is a custom method often used within catchError to handle errors in a consistent way. catchError catches the error in the Observable chain, and handleError processes it.'
  },
  {
    id: 'ang-150',
    question: 'How can you display error messages to users in an Angular application?',
    options: [
      'Only using browser alerts',
      'Only using console error logs',
      'Using components, directives, or services specifically designed for error display',
      'Error messages should not be displayed to users'
    ],
    answer: 2,
    explanation: 'You can display error messages to users in an Angular application using components, directives, or services specifically designed for error display. Common approaches include error message components, toast notifications, alert services, or form validation error displays.'
  },
  
  // Angular Optimization
  {
    id: 'ang-151',
    question: 'What is Ahead-of-Time (AOT) compilation in Angular?',
    options: [
      'A technique for compiling Angular applications before users access them',
      'A method for optimizing Angular templates during development',
      'A process that compiles Angular templates to JavaScript during the build process, not at runtime',
      'A tool for analyzing future code usage patterns'
    ],
    answer: 2,
    explanation: 'Ahead-of-Time (AOT) compilation in Angular is a process that compiles Angular templates to JavaScript during the build process, not at runtime. This improves performance by reducing the need for just-in-time compilation in the browser and enables tree shaking.'
  },
  {
    id: 'ang-152',
    question: 'What is Just-in-Time (JIT) compilation in Angular?',
    options: [
      'A technique for compiling Angular applications at the last possible moment',
      'A method for optimizing Angular templates during runtime',
      'A process that compiles Angular templates to JavaScript at runtime in the browser',
      'A tool for reducing compilation time during development'
    ],
    answer: 2,
    explanation: 'Just-in-Time (JIT) compilation in Angular is a process that compiles Angular templates to JavaScript at runtime in the browser. This is the default for development but is less efficient than AOT for production.'
  },
  {
    id: 'ang-153',
    question: 'How can you optimize change detection in Angular?',
    options: [
      'By using the Default change detection strategy for all components',
      'By disabling change detection',
      'By using the OnPush change detection strategy and immutable objects',
      'By running change detection more frequently'
    ],
    answer: 2,
    explanation: 'You can optimize change detection in Angular by using the OnPush change detection strategy and immutable objects. With OnPush, Angular only checks a component for changes when its inputs change or when an event handler is triggered, rather than checking during every change detection cycle.'
  },
  {
    id: 'ang-154',
    question: 'What is the purpose of the ngZone.runOutsideAngular method?',
    options: [
      'To run code that doesn\'t trigger change detection',
      'To run code outside the Angular application',
      'To run code in a separate thread',
      'To run code in a different browser context'
    ],
    answer: 0,
    explanation: 'The ngZone.runOutsideAngular method is used to run code that doesn\'t trigger change detection. This is useful for operations that don\'t affect the view, such as certain long-running calculations or third-party libraries that manage their own DOM updates.'
  },
  {
    id: 'ang-155',
    question: 'What is the purpose of the trackBy function in ngFor?',
    options: [
      'To track errors in the ngFor loop',
      'To track the current index in the loop',
      'To help Angular identify which items have changed, been added, or been removed, improving performance',
      'To track user interactions with items in the loop'
    ],
    answer: 2,
    explanation: 'The trackBy function in ngFor helps Angular identify which items have changed, been added, or been removed, improving performance. Without trackBy, ngFor identifies objects by reference, which can lead to unnecessary DOM operations when the collection changes.'
  },
  
  // Angular Build and Deployment
  {
    id: 'ang-156',
    question: 'What is the purpose of the angular.json file?',
    options: [
      'To define the structure of an Angular application',
      'To specify the dependencies of an Angular application',
      'To configure the Angular CLI workspace and project build defaults',
      'To configure the Angular component hierarchy'
    ],
    answer: 2,
    explanation: 'The angular.json file is used to configure the Angular CLI workspace and project build defaults. It contains settings for build targets, file paths, tool options, and more.'
  },
  {
    id: 'ang-157',
    question: 'Which command is used to create a production build in Angular?',
    options: [
      'ng build --production',
      'ng build --prod',
      'ng build --release',
      'ng prod-build'
    ],
    answer: 0,
    explanation: 'The command "ng build --production" is used to create a production build in Angular. This applies production optimizations such as bundling, minification, and tree shaking.'
  },
  {
    id: 'ang-158',
    question: 'What is the difference between ng build and ng serve?',
    options: [
      'ng build creates a production build, while ng serve creates a development build',
      'ng build outputs files to the dist folder, while ng serve serves the application from memory without output files',
      'ng build is for testing, while ng serve is for production',
      'ng build requires a deployment server, while ng serve includes one'
    ],
    answer: 1,
    explanation: 'The difference between ng build and ng serve is that ng build outputs files to the dist folder, while ng serve serves the application from memory without output files. ng serve is used for development with auto-reload, whereas ng build is used to generate files for deployment.'
  },
  {
    id: 'ang-159',
    question: 'What is the purpose of the "budgets" property in angular.json?',
    options: [
      'To specify the financial limitations for the project',
      'To allocate resources to different parts of the application',
      'To set size limits for the application bundles and warn or error when they are exceeded',
      'To determine how much of each resource (CPU, memory) the application can use'
    ],
    answer: 2,
    explanation: 'The "budgets" property in angular.json is used to set size limits for the application bundles and warn or error when they are exceeded. This helps keep the application size under control and alerts developers when the bundle size increases significantly.'
  },
  {
    id: 'ang-160',
    question: 'What are environment files in Angular and how are they used?',
    options: [
      'Files that configure the development environment settings',
      'Files that contain environment variables for different deployment environments',
      'Files that specify the requirements for running the application',
      'Files that monitor the runtime environment of the application'
    ],
    answer: 1,
    explanation: 'Environment files in Angular are files that contain environment variables for different deployment environments (like development, staging, production). They allow you to define environment-specific values that can be used throughout the application, and the appropriate file is selected during the build process based on the --configuration flag.'
  },
  
  // Angular and State Management
  {
    id: 'ang-161',
    question: 'What is the purpose of using a state management library in Angular?',
    options: [
      'To handle the state of the application\'s UI components only',
      'To simplify HTTP requests',
      'To manage global and shared state in a predictable way',
      'To replace Angular\'s built-in change detection'
    ],
    answer: 2,
    explanation: 'The purpose of using a state management library in Angular is to manage global and shared state in a predictable way. This is particularly useful for complex applications where state is shared across multiple components and services.'
  },
  {
    id: 'ang-162',
    question: 'Which state management library is officially supported by the Angular team?',
    options: [
      'NgRx',
      'NGXS',
      'Akita',
      'MobX'
    ],
    answer: 0,
    explanation: 'NgRx is the state management library officially supported by the Angular team. It is a Redux-inspired state management solution for Angular applications that leverages RxJS for handling side effects.'
  },
  {
    id: 'ang-163',
    question: 'What are the core concepts of the NgRx library?',
    options: [
      'Models, Views, Controllers',
      'Store, Actions, Reducers, Selectors, Effects',
      'Services, Components, Directives',
      'Observables, Subjects, Operators'
    ],
    answer: 1,
    explanation: 'The core concepts of the NgRx library are Store, Actions, Reducers, Selectors, and Effects. The Store holds the application state, Actions describe events, Reducers update the state in response to Actions, Selectors extract data from the Store, and Effects handle side effects like HTTP requests.'
  },
  {
    id: 'ang-164',
    question: 'What is a Reducer in NgRx?',
    options: [
      'A function that compresses the application state to save memory',
      'A function that takes the current state and an action, and returns a new state',
      'A function that reduces the number of components in an application',
      'A service that handles HTTP requests'
    ],
    answer: 1,
    explanation: 'A Reducer in NgRx is a pure function that takes the current state and an action, and returns a new state. Reducers handle the transition from one state to the next state in a predictable and immutable way.'
  },
  {
    id: 'ang-165',
    question: 'What is an Effect in NgRx?',
    options: [
      'A side effect of using NgRx, such as increased application size',
      'A visual effect that occurs when state changes',
      'A class that handles side effects like HTTP requests and returns new actions',
      'An unintended state change that occurs due to bugs in reducers'
    ],
    answer: 2,
    explanation: 'An Effect in NgRx is a class that handles side effects like HTTP requests and returns new actions. Effects listen for actions dispatched from the Store, perform tasks like data fetching, and dispatch new actions when those tasks complete.'
  },
  
  // Angular Forms Advanced
  {
    id: 'ang-166',
    question: 'What is a FormArray in Angular Reactive Forms?',
    options: [
      'An array of form elements displayed in a table',
      'A collection of FormControl instances or other form groups',
      'An array of values bound to a form',
      'A special type of array that can be used in templates'
    ],
    answer: 1,
    explanation: 'A FormArray in Angular Reactive Forms is a collection of FormControl instances or other form groups. It is used for managing a dynamic number of form controls, such as a dynamic list of items in a form.'
  },
  {
    id: 'ang-167',
    question: 'How do you add validation to a Reactive Form control?',
    options: [
      'By adding validation attributes to the HTML element',
      'By passing validator functions when creating the FormControl',
      'By using the validate() method on the form',
      'By adding a Validator directive to the component'
    ],
    answer: 1,
    explanation: 'You add validation to a Reactive Form control by passing validator functions when creating the FormControl. For example: new FormControl(\'\', [Validators.required, Validators.minLength(4)]).'
  },
  {
    id: 'ang-168',
    question: 'How do you create a custom validator for Angular forms?',
    options: [
      'By extending the Validator class and implementing the validate method',
      'By creating a directive that implements the Validator interface',
      'By creating a function that takes a FormControl and returns an error object or null',
      'By using the CustomValidator decorator'
    ],
    answer: 2,
    explanation: 'You create a custom validator for Angular forms by creating a function that takes a FormControl (or AbstractControl) and returns an error object if the validation fails or null if it passes. This function can then be used like any other validator.'
  },
  {
    id: 'ang-169',
    question: 'What is cross-field validation in Angular forms?',
    options: [
      'Validating forms across different components',
      'Validating a field against values in another field',
      'Validating forms across different browsers',
      'Validating a field against values from an API'
    ],
    answer: 1,
    explanation: 'Cross-field validation in Angular forms is validating a field against values in another field. For example, confirming that a password and password confirmation field match, or ensuring a start date is before an end date.'
  },
  {
    id: 'ang-170',
    question: 'How do you handle form submission in Angular Reactive Forms?',
    options: [
      'By using the (submit) event on the form element and calling a method that accesses the form value',
      'By using the ngSubmit directive with a template variable',
      'By binding the form to a model and automatically submitting when the model changes',
      'By using the submit() method on the FormGroup'
    ],
    answer: 0,
    explanation: 'You handle form submission in Angular Reactive Forms by using the (submit) event on the form element and calling a method that accesses the form value. For example: <form [formGroup]="myForm" (submit)="onSubmit()">.'
  },
  
  // Angular Component Communication
  {
    id: 'ang-171',
    question: 'Which decorator is used for passing data from parent to child component?',
    options: [
      '@Input',
      '@Output',
      '@Inject',
      '@Property'
    ],
    answer: 0,
    explanation: 'The @Input decorator is used for passing data from parent to child component. It decorates a property in the child component, allowing that property to receive data from the parent component.'
  },
  {
    id: 'ang-172',
    question: 'Which decorator is used for emitting events from child to parent component?',
    options: [
      '@Input',
      '@Output',
      '@Emit',
      '@Event'
    ],
    answer: 1,
    explanation: 'The @Output decorator is used for emitting events from child to parent component. It decorates an EventEmitter property in the child component, allowing the child to emit events that the parent can listen for.'
  },
  {
    id: 'ang-173',
    question: 'How can components communicate if they are not directly related (not parent-child)?',
    options: [
      'Only through global variables',
      'By using a shared service with observables',
      'By using the Component communication API',
      'Components that are not directly related cannot communicate'
    ],
    answer: 1,
    explanation: 'Components that are not directly related can communicate by using a shared service with observables. The service acts as a central store for data and provides methods or observables that components can use to send and receive data.'
  },
  {
    id: 'ang-174',
    question: 'What is the ViewChild decorator used for?',
    options: [
      'To access a parent component from a child component',
      'To access a child component, directive, or DOM element from a parent component',
      'To create a view for a child component',
      'To define a component as a child of another component'
    ],
    answer: 1,
    explanation: 'The ViewChild decorator is used to access a child component, directive, or DOM element from a parent component. It provides a reference to the first element that matches the selector, allowing the parent component to interact with the child.'
  },
  {
    id: 'ang-175',
    question: 'What is the ContentChild decorator used for?',
    options: [
      'To access content inside a component',
      'To project content into a component',
      'To access a content child that was projected into a component',
      'To define content for a child component'
    ],
    answer: 2,
    explanation: 'The ContentChild decorator is used to access a content child that was projected into a component. It provides a reference to the first element that matches the selector among the projected content, allowing the component to interact with it.'
  },
  
  // Angular Advanced Components
  {
    id: 'ang-176',
    question: 'What is content projection in Angular?',
    options: [
      'A technique for projecting component content onto a screen or display',
      'A way to include content from one component into another component',
      'A method for creating dynamic content in Angular',
      'A feature for projecting images onto angular surfaces'
    ],
    answer: 1,
    explanation: 'Content projection in Angular is a way to include content from one component into another component. It allows parent components to pass templates to child components, which then render that content in specific locations defined by the <ng-content> element.'
  },
  {
    id: 'ang-177',
    question: 'What is the purpose of the ng-content directive?',
    options: [
      'To create dynamic content',
      'To render content conditionally',
      'To project content from a parent component into a child component',
      'To manage content visibility based on user permissions'
    ],
    answer: 2,
    explanation: 'The purpose of the ng-content directive is to project content from a parent component into a child component. It allows the child component to receive and display HTML content from its parent.'
  },
  {
    id: 'ang-178',
    question: 'What is multi-slot content projection in Angular?',
    options: [
      'Projecting content into multiple components simultaneously',
      'Projecting content into multiple slots within a single component',
      'Projecting multiple content instances into a single slot',
      'Projecting content across multiple modules'
    ],
    answer: 1,
    explanation: 'Multi-slot content projection in Angular is projecting content into multiple slots within a single component. It allows a component to define multiple insertion points for content using the "select" attribute of the ng-content element to target specific content.'
  },
  {
    id: 'ang-179',
    question: 'What is a host binding in Angular?',
    options: [
      'A way to automatically bind data from a service to a component',
      'A feature that binds a component to its host container',
      'A way to bind properties or attributes of the host element that contains a component or directive',
      'A technique for binding a host machine to an Angular application'
    ],
    answer: 2,
    explanation: 'A host binding in Angular is a way to bind properties or attributes of the host element that contains a component or directive. It is declared using the @HostBinding decorator and allows a component or directive to modify its own host element.'
  },
  {
    id: 'ang-180',
    question: 'What is a host listener in Angular?',
    options: [
      'A way to listen for changes to a host machine',
      'A background service that monitors the host environment',
      'A way to listen for events on the host element that contains a component or directive',
      'A mechanism for detecting when a component enters or leaves its host container'
    ],
    answer: 2,
    explanation: 'A host listener in Angular is a way to listen for events on the host element that contains a component or directive. It is declared using the @HostListener decorator and allows a component or directive to respond to events that occur on its host element.'
  },
  
  // Angular Best Practices
  {
    id: 'ang-181',
    question: 'What is the recommended approach for organizing large Angular applications?',
    options: [
      'Placing all code in a single module for better performance',
      'Using feature modules and lazy loading',
      'Creating one component per feature to reduce complexity',
      'Using only services to manage application state'
    ],
    answer: 1,
    explanation: 'The recommended approach for organizing large Angular applications is using feature modules and lazy loading. This approach promotes code organization, encapsulation, and on-demand loading of modules, which improves initial load time.'
  },
  {
    id: 'ang-182',
    question: 'What is the OnPush change detection strategy, and when should it be used?',
    options: [
      'A strategy that aggressively checks for changes; should be used for critical components',
      'A strategy that skips change detection; should be used for static components',
      'A strategy that only checks for changes when inputs change or events occur; should be used to optimize performance',
      'A strategy that pushes changes to the server; should be used for real-time applications'
    ],
    answer: 2,
    explanation: 'The OnPush change detection strategy is a strategy that only checks for changes when inputs change or events occur. It should be used to optimize performance, especially for components that rarely change or have immutable inputs.'
  },
  {
    id: 'ang-183',
    question: 'Why should you avoid using the "any" type in TypeScript when writing Angular applications?',
    options: [
      'Because "any" is deprecated in recent TypeScript versions',
      'Because it bypasses type checking, making it harder to catch errors and reducing IDE support',
      'Because it significantly increases the application bundle size',
      'Because Angular does not support the "any" type'
    ],
    answer: 1,
    explanation: 'You should avoid using the "any" type in TypeScript when writing Angular applications because it bypasses type checking, making it harder to catch errors and reducing IDE support. This defeats the purpose of using TypeScript, which is to add static typing to JavaScript.'
  },
  {
    id: 'ang-184',
    question: 'What is the recommended way to manage shared data between components in Angular?',
    options: [
      'Using global variables',
      'Using services with RxJS observables',
      'Using session storage or local storage',
      'Using URL parameters'
    ],
    answer: 1,
    explanation: 'The recommended way to manage shared data between components in Angular is using services with RxJS observables. This provides a centralized, reactive approach to state management that works well with Angular\'s change detection.'
  },
  {
    id: 'ang-185',
    question: 'Why is it important to unsubscribe from observables in Angular components?',
    options: [
      'To improve application performance by freeing up memory',
      'To prevent memory leaks and unexpected behavior when a component is destroyed',
      'To stop the server from sending data to inactive components',
      'To enable the garbage collector to remove unused variables'
    ],
    answer: 1,
    explanation: 'It is important to unsubscribe from observables in Angular components to prevent memory leaks and unexpected behavior when a component is destroyed. If you don\'t unsubscribe, the observable subscription will continue to exist, potentially causing memory leaks and other issues.'
  },
  
  // Angular and RxJS Patterns
  {
    id: 'ang-186',
    question: 'What is the async pipe in Angular?',
    options: [
      'A pipe that handles asynchronous data from a service',
      'A pipe that wraps synchronous functions to make them asynchronous',
      'A pipe that automatically subscribes to an Observable or Promise and returns the latest value',
      'A pipe that delays the rendering of a component'
    ],
    answer: 2,
    explanation: 'The async pipe in Angular is a pipe that automatically subscribes to an Observable or Promise and returns the latest value. It also automatically unsubscribes when the component is destroyed, helping to prevent memory leaks.'
  },
  {
    id: 'ang-187',
    question: 'What is the switchMap operator used for in Angular?',
    options: [
      'To switch between different maps or routes in an application',
      'To switch from one observable to another based on a condition',
      'To map each value from a source observable to a new observable and unsubscribe from the previous observable',
      'To switch between different data mapping strategies'
    ],
    answer: 2,
    explanation: 'The switchMap operator in Angular is used to map each value from a source observable to a new observable and unsubscribe from the previous observable. This is useful for cancelling previous HTTP requests when a new one is made, such as in a search function that sends a request for each keystroke.'
  },
  {
    id: 'ang-188',
    question: 'What is the purpose of the forkJoin operator in RxJS?',
    options: [
      'To combine multiple observables into one that emits the latest values from each',
      'To split a single observable into multiple parallel observables',
      'To fork the execution of an observable into a new thread',
      'To join two arrays emitted by different observables'
    ],
    answer: 0,
    explanation: 'The forkJoin operator in RxJS is used to combine multiple observables into one that emits the latest values from each when all observables complete. It is similar to Promise.all() and is useful for making multiple HTTP requests in parallel and waiting for all of them to complete.'
  },
  {
    id: 'ang-189',
    question: 'What is the purpose of the combineLatest operator in RxJS?',
    options: [
      'To combine the latest values from multiple observables into a single observable',
      'To combine all historical values from multiple observables',
      'To combine the values from multiple observables only when they all emit at the same time',
      'To combine multiple observables into one that emits only the most recently emitted value'
    ],
    answer: 0,
    explanation: 'The combineLatest operator in RxJS is used to combine the latest values from multiple observables into a single observable. It emits a new combined value whenever any of the source observables emit a value, using the latest value from each source.'
  },
  {
    id: 'ang-190',
    question: 'What is the purpose of the BehaviorSubject in RxJS?',
    options: [
      'To study the behavior of observables',
      'To analyze how users behave when interacting with an application',
      'To emit the initial value and all subsequent values to subscribers',
      'To enforce specific behavior patterns in observables'
    ],
    answer: 2,
    explanation: 'The BehaviorSubject in RxJS is used to emit the initial value and all subsequent values to subscribers. It stores the most recent value and provides it to new subscribers immediately upon subscription, unlike a regular Subject which only emits subsequent values.'
  },
  
  // Angular Latest Features
  {
    id: 'ang-191',
    question: 'What is Angular Signals?',
    options: [
      'A new way to handle HTTP requests in Angular',
      'A new primitive for reactive programming in Angular',
      'A way to send signals between disconnected components',
      'A system for providing visual feedback to users'
    ],
    answer: 1,
    explanation: 'Angular Signals is a new primitive for reactive programming in Angular. It provides a more efficient and fine-grained reactivity model compared to traditional observables and change detection.'
  },
  {
    id: 'ang-192',
    question: 'What are standalone components in Angular?',
    options: [
      'Components that can run independently without Angular',
      'Components that don\'t require a parent component',
      'Components that don\'t require NgModules to be used',
      'Components that can be used in any Angular version'
    ],
    answer: 2,
    explanation: 'Standalone components in Angular are components that don\'t require NgModules to be used. They are self-contained and can be imported directly by other standalone components, directives, or pipes, simplifying the Angular mental model.'
  },
  {
    id: 'ang-193',
    question: 'What is the Angular Hydration feature?',
    options: [
      'A feature for handling water-related animations',
      'A technique for keeping Angular applications updated with fresh data',
      'A process that reuses server-rendered DOM and attaches event listeners client-side',
      'A way to optimize Angular applications for mobile devices'
    ],
    answer: 2,
    explanation: 'Angular Hydration is a process that reuses server-rendered DOM and attaches event listeners client-side. It improves performance by avoiding the need to re-render the entire application on the client after server-side rendering.'
  },
  {
    id: 'ang-194',
    question: 'What is the purpose of the inject function in Angular?',
    options: [
      'To inject CSS styles into components',
      'To inject HTML content into templates',
      'To inject dependencies without using constructor injection',
      'To inject services into non-Angular classes'
    ],
    answer: 2,
    explanation: 'The inject function in Angular is used to inject dependencies without using constructor injection. It allows for simpler dependency injection in standalone components, services, and other contexts where constructor injection might be cumbersome.'
  },
  {
    id: 'ang-195',
    question: 'What is Angular Deferrable Views?',
    options: [
      'Views that can be customized by users',
      'Views that can be deferred or delayed in loading until they are needed',
      'Views that are hidden from certain users',
      'Views that are only shown during specific time periods'
    ],
    answer: 1,
    explanation: 'Angular Deferrable Views are views that can be deferred or delayed in loading until they are needed. This feature allows for more efficient loading of Angular applications by loading components only when they are needed, such as when they come into view or after user interaction.'
  },
  
  // Angular and API Integration
  {
    id: 'ang-196',
    question: 'What is the main service used for making HTTP requests in Angular?',
    options: [
      'HttpService',
      'ApiService',
      'HttpClient',
      'RequestService'
    ],
    answer: 2,
    explanation: 'HttpClient is the main service used for making HTTP requests in Angular. It is provided by the HttpClientModule and provides methods for making HTTP requests, such as get(), post(), put(), and delete().'
  },
  {
    id: 'ang-197',
    question: 'How do you handle CORS issues in Angular?',
    options: [
      'By adding the "cors" header to all HTTP requests',
      'By disabling CORS in the Angular configuration',
      'By configuring the server to allow requests from the Angular application\'s origin',
      'By using the Angular CORS module'
    ],
    answer: 2,
    explanation: 'CORS (Cross-Origin Resource Sharing) issues in Angular are handled by configuring the server to allow requests from the Angular application\'s origin. This is because CORS is a server-side security feature that restricts HTTP requests from being made to a different domain than the one that served the web page.'
  },
  {
    id: 'ang-198',
    question: 'How do you add authentication headers to all HTTP requests in Angular?',
    options: [
      'By adding the headers manually to each request',
      'By using the AuthModule from Angular',
      'By configuring the HttpClient with default headers',
      'By using an HTTP interceptor'
    ],
    answer: 3,
    explanation: 'You add authentication headers to all HTTP requests in Angular by using an HTTP interceptor. Interceptors allow you to intercept HTTP requests and responses to transform or handle them before they are processed.'
  },
  {
    id: 'ang-199',
    question: 'What is the purpose of the HttpParams class in Angular?',
    options: [
      'To parse HTTP response parameters',
      'To handle HTTP error parameters',
      'To set query parameters in HTTP requests',
      'To define the parameters of an HTTP service'
    ],
    answer: 2,
    explanation: 'The HttpParams class in Angular is used to set query parameters in HTTP requests. It provides an immutable approach to working with URL parameters, where each new parameter you add returns a new instance of the HttpParams object.'
  },
  {
    id: 'ang-200',
    question: 'What is the purpose of the HttpInterceptor interface in Angular?',
    options: [
      'To intercept and log all HTTP traffic for debugging',
      'To implement error handling for HTTP requests',
      'To block certain HTTP requests based on criteria',
      'To intercept HTTP requests and responses for transformation or handling'
    ],
    answer: 3,
    explanation: 'The HttpInterceptor interface in Angular is used to intercept HTTP requests and responses for transformation or handling. Interceptors can perform tasks such as adding authentication tokens, logging, caching, and error handling for all HTTP requests and responses in an application.'
  },
  
  // Advanced Angular Topics
  {
    id: 'ang-201',
    question: 'What is Angular Zone.js?',
    options: [
      'A library for defining zones or regions in an Angular application',
      'A library that helps Angular know when to update the UI by intercepting asynchronous operations',
      'A tool for managing different development and production zones',
      'A framework for creating zoneless Angular applications'
    ],
    answer: 1,
    explanation: 'Angular Zone.js is a library that helps Angular know when to update the UI by intercepting asynchronous operations. It patches global asynchronous operations like setTimeout and XMLHttpRequest, allowing Angular to detect when these operations complete and trigger change detection.'
  },
  {
    id: 'ang-202',
    question: 'What is change detection debugging in Angular?',
    options: [
      'A technique for finding bugs in change detection code',
      'A process for detecting changes in the debugging environment',
      'A set of tools and techniques for understanding and optimizing when and why Angular updates the DOM',
      'A method for debugging changes in application state'
    ],
    answer: 2,
    explanation: 'Change detection debugging in Angular is a set of tools and techniques for understanding and optimizing when and why Angular updates the DOM. This includes using tools like Angular DevTools, NgZone API methods, and enabling debug mode for components to visualize change detection cycles.'
  },
  {
    id: 'ang-203',
    question: 'What is the purpose of the InjectionToken in Angular?',
    options: [
      'To provide a token for user authentication',
      'To create a unique identifier for services',
      'To inject non-class dependencies or to create a unique identifier for dependencies',
      'To token-based permissions in the application'
    ],
    answer: 2,
    explanation: 'The InjectionToken in Angular is used to inject non-class dependencies or to create a unique identifier for dependencies. It helps avoid naming collisions when injecting primitive values like strings or objects, or when you want to inject a value that isn\'t a class.'
  },
  {
    id: 'ang-204',
    question: 'What is Angular Elements?',
    options: [
      'A collection of basic Angular components',
      'A way to convert Angular components to custom elements (web components)',
      'A framework for creating elemental UI designs',
      'A set of predefined HTML elements in Angular'
    ],
    answer: 1,
    explanation: 'Angular Elements is a way to convert Angular components to custom elements (web components). This allows Angular components to be used in non-Angular applications or directly in HTML, providing interoperability between Angular and other frameworks or plain HTML/JavaScript.'
  },
  {
    id: 'ang-205',
    question: 'What is the Ivy renderer in Angular?',
    options: [
      'A third-party rendering engine for Angular',
      'A technique for rendering ivy plants in Angular applications',
      'Angular\'s next-generation compilation and rendering pipeline',
      'A special renderer for animations'
    ],
    answer: 2,
    explanation: 'The Ivy renderer in Angular is Angular\'s next-generation compilation and rendering pipeline. It offers features like tree-shakable code, faster compilation, smaller bundle sizes, better debug information, and improved type checking.'
  },
  
  // Angular Compatibility and Migration
  {
    id: 'ang-206',
    question: 'What is the Angular Update Guide?',
    options: [
      'A built-in feature in Angular that automatically updates applications',
      'A command-line tool that updates Angular code',
      'An online resource that provides a step-by-step guide for updating Angular applications',
      'A section in the Angular documentation that explains new features'
    ],
    answer: 2,
    explanation: 'The Angular Update Guide is an online resource that provides a step-by-step guide for updating Angular applications from one version to another. It customizes the migration steps based on your current and target Angular versions and the complexity of your application.'
  },
  {
    id: 'ang-207',
    question: 'What is the purpose of the ng update command?',
    options: [
      'To update the Angular CLI globally',
      'To check for updates to Angular documentation',
      'To update Angular and other dependencies in a project',
      'To update the application\'s data from an API'
    ],
    answer: 2,
    explanation: 'The purpose of the ng update command is to update Angular and other dependencies in a project. It not only updates the package versions but also runs migration scripts to update the code to be compatible with the new versions.'
  },
  {
    id: 'ang-208',
    question: 'What is the ngcc (Angular Compatibility Compiler)?',
    options: [
      'A compiler that ensures compatibility between different Angular versions',
      'A tool that compiles Angular components to be compatible with older browsers',
      'A processor that transforms Angular libraries to be compatible with the Ivy compiler',
      'A service that checks if your Angular code is compatible with best practices'
    ],
    answer: 2,
    explanation: 'The ngcc (Angular Compatibility Compiler) is a processor that transforms Angular libraries to be compatible with the Ivy compiler. It processes node_modules to convert View Engine formatted code (older Angular format) to Ivy, allowing older libraries to work with newer Angular versions.'
  },
  {
    id: 'ang-209',
    question: 'What is the purpose of the TypeScript strict mode in Angular?',
    options: [
      'To enforce strict coding standards and linting rules',
      'To restrict the use of certain Angular features',
      'To enable stricter type checking and catch more errors during compilation',
      'To limit the amount of memory Angular applications can use'
    ],
    answer: 2,
    explanation: 'The purpose of the TypeScript strict mode in Angular is to enable stricter type checking and catch more errors during compilation. It includes several flags like strictNullChecks, strictPropertyInitialization, and noImplicitAny that make TypeScript more rigorous in its type checking.'
  },
  {
    id: 'ang-210',
    question: 'What is the purpose of the --force flag in ng update?',
    options: [
      'To force update even if there are modified files',
      'To force update to the latest version regardless of compatibility',
      'To forcefully remove older versions before installing new ones',
      'To bypass version checks and install newer versions'
    ],
    answer: 0,
    explanation: 'The purpose of the --force flag in ng update is to force update even if there are modified files. Normally, ng update will fail if it detects that files would be overwritten or modified, but --force bypasses this check and applies the updates anyway.'
  }
];

// Helper function to get a subset of questions
export const getAngularQuestions = (count: number = 20): QuizQuestion[] => {
  // Shuffle the array using Fisher-Yates algorithm
  const shuffled = [...angularQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return the first 'count' questions or all if count is larger
  return shuffled.slice(0, Math.min(count, shuffled.length));
};
