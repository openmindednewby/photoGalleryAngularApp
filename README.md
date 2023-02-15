- [Photo Gallery Angular App](#photo-gallery-angular-app)
  - [Requirements](#requirements)
    - [Photos screen has an infinite scrollable list of photos](#photos-screen-has-an-infinite-scrollable-list-of-photos)
    - [Header](#header)
    - [Favorites screen](#favorites-screen)
    - [Single photo page](#single-photo-page)
    - [UI Mocks](#ui-mocks)
  - [User Story Breakdown](#user-story-breakdown)
    - [Story Priority](#story-priority)
    - [(DONE) UI: Create Project (User Portal)](#done-ui-create-project-user-portal)
    - [(Completed implementation ONLY pending unit tests) UI: Infinite list of scrollable random photos](#completed-implementation-only-pending-unit-tests-ui-infinite-list-of-scrollable-random-photos)
    - [(Completed implementation ONLY pending unit tests) UI: App Header](#completed-implementation-only-pending-unit-tests-ui-app-header)
    - [UI: Favorites screen](#ui-favorites-screen)
    - [UI: Single photo page view](#ui-single-photo-page-view)
  - [List of Test Cases (template)](#list-of-test-cases-template)
  - [App Specs](#app-specs)

# Photo Gallery Angular App

Minimal photo gallery angular application. Create a photo library that includes an infinite random photo stream, with the ability
to save photos to your “Favorites” library

## Requirements

### Photos screen has an infinite scrollable list of photos

- Located at / path.
- Clicking a photo adds it to Favorites.
- When scrolling, new photos should be loaded. Loader icon should be
  displayed.
- Use https://picsum.photos/200/300 to get random photos (or any other
  resource).
- Emulate real-world API, when getting photos. Loading new photos
  should have a random delay of 200-300ms

### Header

- Consists of 2 buttons and allows you to switch between your “Favorites” library and a random photo stream.
- An active view must be highlighted

### Favorites screen

- Located at /favorites path.
- Contains a list of favorite photos (no need for infinite scrolling here, just
  list of all photos).
- Clicking on a photo opens a single photo page.
- Favorites list should persist after a page refresh
  - session storage or local storage

### Single photo page

- Located at /photos/:id path.
- Shows just a single full-screen photo, instead of a grid.
- Should contain the “Remove from favorites” button.
- The header remains the same on this page.

### UI Mocks

![ui mock 1](./documentation-images/ui-mock-1.png)
![ui mock 2](./documentation-images/ui-mock-2.png)

## User Story Breakdown

### Story Priority

1. UI: Create Project (User Portal)
   1. Set up routing, angular material and scss
2. UI: Photos random screen with an infinite scrollable list of photos
3. UI: App Header
4. UI: Favorites screen
5. UI: Single photo page view

### (DONE) UI: Create Project (User Portal)

Must have

- **DONE** Create project
  - ng new photo-gallery --style=scss --routing=true
- **DONE** routing
  - Created app with routing
  - need to add routing for
    - Add fall back page redirect root page (random list of photos) or to 404 (stretch)
  - Add lazy loading (stretch)
- **DONE** angular material (deep purple/amber theme)
- **DONE** scss
- **DONE** angular http client
- **DONE** create version file (use semantic versioning)
- **DONE** unit tests:
  - 'AppComponent.should create component'
  - 'HttpClientService.should be created'
  - 'HttpClientService.methods.getBlob.should be created'
  - 'HttpClientService.methods.getBlob.should have called get method'

### (Completed implementation ONLY pending unit tests) UI: Infinite list of scrollable random photos

Must have

- on load, load photos
- infinite scroll down
  - When scrolling, new photos should be loaded. Loader icon should be displayed.
- load photos from (https://picsum.photos/200/300)
- **DONE** implement onPush strategy  (stretch)
- **DONE** be located at '/' root
  - Add lazy loading (stretch)
- http requests are delayed by 250ms
- Clicking a photo adds it to Favorites. 
  - Favorites need to persist, over refresh! Hence we need to make use of the session storage. Hence we should store the request url not the actual blobs since the session storage is supposed only to store small pieces of information. Also add the heart badge there to indicate its a favorite
- Use https://picsum.photos/200/300 to get random photos (or any other
  resource).
- photo widget needs to be the same in favorite page and in random list
- Emulate real-world API, when getting photos. Loading new photos
  should have a random delay of 200-300ms
- **DONE** unit tests:
  - **PhotoGalleryComponent**
    - 'PhotoGalleryComponent Dom Test.should create'
    - 'PhotoGalleryComponent Dom Test.should show loader when scrolling down'
    - 'PhotoGalleryComponent Dom Test.should load more images when scrolling down'
    - 'PhotoGalleryComponent Dom Test.should be marked as favorite on click'
    - 'PhotoGalleryComponent Dom Test.should be unmarked as favorite on click'
    - 'PhotoGalleryComponent Dom Test.should redirect user to favorites page'
  - **PhotoWidgetComponent**
    - 'PhotoWidgetComponent Class test.should create'
    - 'PhotoWidgetComponent Class test.should return a blob'
    - 'PhotoWidgetComponent DOM test.should create'
    - 'PhotoWidgetComponent DOM test.should render an image'
  - **SessionStorageService**
    - 'SessionStorageService.should be created'
    - 'SessionStorageService.set.should set a value'
    - 'SessionStorageService.get.should have retrieved null'
    - 'SessionStorageService.get.should have retrieved set value'
    - 'SessionStorageService.removeItem.should have removed key value'
    - 'SessionStorageService.clear.should have removed all keys'
    - 'SessionStorageService.getKeys.should retrieve all keys'
  - **GalleryServiceService**
    - 'GalleryServiceService.should be created'
    - 'GalleryServiceService.getRandomImage.should return a random image'
    - 'GalleryServiceService.getFavoriteImage.should return favorite image from session storage if it exists'
    - 'GalleryServiceService.setFavoriteImage.should set favorite image to session storage'
    - 'GalleryServiceService.removeFavoriteImage.should remove session item'

### (Completed implementation ONLY pending unit tests) UI: App Header

Must have

- unit tests (to be defined)
- on change show loader
- Consists of 2 buttons and allows you to switch between your “Favorites” library and a random photo stream.
- An active view must be highlighted

### UI: Favorites screen

Must have

- unit tests (to be defined)
- **DONE** Located at /favorites path.
- Contains a list of favorite photos (no need for infinite scrolling here, just
  list of all photos).
- Clicking on a photo opens a single photo page.
- Favorites list should persist after a page refresh
  - session storage or local storage

### UI: Single photo page view

Must have

- unit tests (to be defined)
- Located at /photos/:id path.
- Shows just a single full-screen photo, instead of a grid.
- Should contain the “Remove from favorites” button.
- The header remains the same on this page.

## List of Test Cases (template)

| Case No | Description | Expected Result |
| ------- | ----------- | --------------- |
|         |             |                 |

## App Specs

1. Use Angular Router module
2. Use the latest Angular, and SCSS instead of CSS
3. Use Angular Material components
4. Implement the infinitive scroll on your own. Do not use libraries.
5. Don’t use any backend server for retaining state
6. Add unit tests
7. Think carefully about how to structure your code. Make separate reusable components, modules, etc Test your code
8. Use async pipe and RxJS do not use subscriptions and promises
9. Implement Change Detection on Push To improve Performance (stretch)
10. Add content security policy (stretch)
11. Make sure scrolling image log work both when we scroll using wheel and key arrow
12. clear all console logs
13. add error handling
14. make headers not re rendered between pages
15. add error handling on all http requests
16. refactor favorite widget with photo widget and merge them into a single component
