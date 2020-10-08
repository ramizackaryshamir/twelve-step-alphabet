# MASTER WORKING REPO FOR APP DEV

## 12 Step Alphabet

**12 Step Alphabet** is a comprehensive 12 step meeting directory and review platform for [CMA](https://www.crystalmeth.org/) [NA](https://www.na.org/?ID=aboutus) [AA](https://www.aa.org/pages/en_US/what-is-aa) & [ALANON](https://al-anon.org/) 

### MVP
- Use mitmproxy to reverse engineer API calls used by leading ios recovery applications
- Build meeting database from retrieved datasets
- Create functionality to allow users to search comprehensive directory of 12 step meetings
- Create functionality to allow users to create, update, and delete reviews of 12 step meetings

### Goals

- _Develop a working product as basis for future iterations of development, with the end goal of releasing the application on Apple's App store_
- _Refine recent advances in my React knowledge—including PropTypes for client-side error handling and React-JSS for dynamic CSS-through implementation in project development_

### Libraries and Dependencies

|     Library      | Description                                |
| :--------------: | :----------------------------------------- |
|      [React](https://create-react-app.dev/)       | _Role: Create efficient and interactve client-side UI._ |
|   [React Router](https://www.npmjs.com/package/react-router)   | _Role: Manage client-side routing._ |
| [React PropTypes](https://www.npmjs.com/package/prop-types) | _Role: Client-side debugging using typechecking._ |
|     [React-JSS](https://www.npmjs.com/package/react-jss)      | _Role: Style dynamic CSS. Pass CSS as props_ |

### DOCS

[Medium: Intercept iOs/Android Network Calls using mitmproxy](https://medium.com/testvagrant/intercept-ios-android-network-calls-using-mitmproxy-4d3c94831f62) || [mitmproxy docs](https://docs.mitmproxy.org/stable/) || [Rails Guides](https://guides.rubyonrails.org/)

## Client (Front End)

#### Wireframes

[Prototype: iphone X, XS, 11 Pro](https://xd.adobe.com/view/21403106-c549-4c49-a64f-509952a11ae4-7413/)

### Component Hierarchy

``` structure

src
|__ assets/
|__ Components/
      |__ App/
            |__ App.jsx
            |__ App.test.js
       |__ MapDetail/
            |__ MapDetail.js   
            |__ MapDetail.jsx
      |__ Meeting/
            |__ Meeting.js   
            |__ Meeting.jsx
      |__ shared/
            |__Layout/
                  |__Layout.jsx
            |__ Header/
                  |__Header.jsx      
            |__ Nav/
                  |__ Nav.jsx       
            |__Footer/
                  |__Footer.jsx
      |__Meeting/
            |__ Meeting.jsx   
|__ screens/
      |__ Meetings 
            |__ Meetings.jsx
            |__ Meetings.js
      |__MeetingDetail/
            |__ MeetingDetail.jsx
            |__ Meeting.js
|__ services/
      |__ apiConfig.js
      |__ meetings.js
      |__ reviews.js
|__ index.js

```

### Component Breakdown 

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    App    | functional |   n   |   n   | _The App Component will handle client-side routing_               |
|  Meetings  | functional |   n   |   y   | _The Meetings Component will act as the landing page for the app, rendering each entry in the meeting directory and displaying it in a MeetingCard Component_ |
| MeetingCard | functional |   y   |   y   | _The MeetingCard Component will contain the Time, Meeting, Name,and Address Components and render details for each meeting from the meeting database_       | Meeting | functional |   y   |   y   | _The Meeting Component will contain the Meetings Component and render the detailed info about each meeting via props_                 |          |
|   Time    |   functional    |   n   |   y  | _The Time Component will display the time for each meeting via props_      |
|    Meeting    | functional |   n   |   y   | _The Meeting Component will display the type of meeting—CMA, NA, AA, etc.-for each meeting via props_ |
|   Name    |   functional    |   n   |   y   | _The Name Component will display the name of each meeting via props_      |
|    Address    | functional |   n   |   y  | _The Address Component will Display the address for each meeting via props_ |
|    Day    | functional |   n   |   y  | _The Day Component will display the day of each week to be used fort navigational functionality_ |
|   MeetingDetail    |   functional    |   n   |   y  | _The MeetingDetail screen will contain the Time, Meeting, Name,and Address, and Review Components to display meeting detail and user reviews for a single meeting_      |
|   PostReview    |   functional    |   y   |   y  | _The PostReview will provide Create functionality for a user to post a review about a meeting_      |
|    UpdateReview    | functional |   y   |   y   | _The UpdateReview will provide Update and Delete functionality for a user to update and delete a review about a meeting_ |
|   Layout    |   functional    |   n   |   y   | _The Layout Component will contain the Header and Footer, will render Components via props.children_      |
|    Header    | functional |   n   |   y  | _The Header will contain the Day Component and the Search Bar_  |
|   Footer  | functional |   n   |   n   | _The Footer will contain two buttons to provide navigational functionality between the Meetings screen and the PostReview screen_       |
|    Post-MVP: Map    | functional |   y   |   y   | _The Map Component will contain the Meeting Component and provide Read functionality by rendering a map of the meetings_ |

### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Project Proposal  |     H     |     4 hrs      |     4 hrs     |      - hrs       |
| Review Form    |    H     |     4 hrs      |     - hrs     |    -hrs    |
| Full CRUD for user review |    H     |     10 hrs      |     - hrs     |      - hrs       |
| Basic CSS Styling |    H     |     4 hrs      |     -hrs     |     TBD     |
| Style  for different mobile and desktop viewports  |    H     |     5hrs      |     - hrs     |      - hrs       |
| Back-end architecture|    H     |     3 hrs      |     - hrs     |      - hrs       |
| Front-end architecture|    H     |     3 hrs      |     - hrs     |      - hrs       |
| Post-MVP: Map Funtionality|    L     |     7 hrs      |     - hrs     |      - hrs       |
| TOTAL               |          |     40 hrs      |     -hrs     |      - hrs       |

## Server (Back-end)

### ERD 

[ERD](https://app.lucidchart.com/invitations/accept/d4c11f10-7091-4a45-89fd-46d81e7900e2)

### Post-MVP 

- Map functionality to display meeting directory
- Geolocation functionality to find local meetings
- Anniversary functionality display user's sober date, and parse user's sober days
- Bookmark functionality for user to bookmark meetings
- Check-in functionality for user to manipulate and record user's meeting attendance

***

### Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

### Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.