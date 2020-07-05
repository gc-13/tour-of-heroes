# tour-of-heroes repository
## Angular Tour of Heroes
Following the [Tour of Heroes tutorial](https://angular.io/tutorial)

This tutorial creates a simple app used to view a set of Heroes. You are able to add and delete heroes, as well as change their names. From the dashboard, you are able to search for a specific hero by their name. A message log is visible at the bottom of each page that informs the user of all of the actions that have been taken (addition, deletion, updates, etc.).

## Makeup
### Components 
* Dashboard  

     Displays Heroes 2-5 (indices 1-4) and links to their detail pages.
* Heroes  

     Displays a list of all Heroes next to their ID. The 'x' button next to each name allows you to delete that specific hero. At the top of the page is a box where you can input a name and a button that will add a hero with that name and an automatically generated ID when clicked.
* Hero Detail Pages 

     A page that is unique to each hero and displays their name and ID. An input box (which displays the current name of the hero) and save button can be used to update the name of a hero. The Go Back button will return to the previous page (whether that be the Heroes List or the Dashboard).
* Hero Search
    
    A search box that is visible at the bottom of both the Dashboard and Heroes component. A user is able to search for heroes by name with this tool. After each new input, a list is displayed below the box with heroes who have the input within their name. Each hero in this list is a link to their detail page. 

* Messages
   
   A list of previous user actions that is displayed at the bottom of each component. Actions that are displayed include:
   * Adding heroes
   * Deleting heroes
   * Updating heroes
   * Fetching heroes (for the loading of the dashboard, heroes, and detail pages)
   * Searching for terms in the Hero Search box

### Services
* In-Memory-Data
   
   Used to simulate real http requests/responses. Has a fixed list of heroes that are returned in a createDb() method. Contains genId which is used to generate the IDs of each new hero that is created. 

* Message
   
   Injected into the Hero Service, which uses it to send messages to be displayed after actions. 

* Hero Service
   
   Used to deal with Hero data. This service fetches heroes from the server, updates them, adds them, deletes them, and can search for them. It adds a message to messageService each time one of these methods is called. This service also has a handleError for http operations that fail. 
