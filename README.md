# Template Angular 6 (Bootstrap and Material desing)

### Material Components
* Toolbar
* Icon
* Button
* Sidenav
* List
* Badge
* Expansion
* Menu

### Modules
* app.module (Primary)
* pages.module
* shared.module
* services.module
* components.module

### Routes
* app.routes
* pages.routes

### Pages
1. Pages: Sidenav, Toolbar and ```<router-outlet>```
2. Home (empty)
3. Login (empty)
4. Register (empty)
5. NoFound (empty)

### Components
1. message (toolbar)
2. notification (toolbar)
3. profile (toolbar)

### Services
1. [Shared] > sidenav.service


## Notes
1. sidenav: Access 'sidenav.service' and fill in the 'menu' attribute with the format set there
    1. type: 'link' or 'accordion'
    2. name: index title
    3. icon: index icon
    4. submenu[optional]: ('accordion') Array with the above attributes




