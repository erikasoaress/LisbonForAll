# Project Name

<br>



## Description

Search platform for restaurants, bars and other leisure or cultural activities accessible for disabled people.
In this platform, the goal is also to exchange opinions and experience about specific places and venues.


<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and filter by type of restaurant, log in and sign up. 
- **sign up** - As a user I want to sign up on the web page so that I can add review and add my favourite places to my list.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of favourite places to visit.
- **edit user** - As a user I want to be able to edit my profile, favourites and reviews.
- **result** - As a user I want to see the list of places filter by my preferences.
- **Places/venues listing** - As a user I want to see more details of the restaurant, be able to call them and visit their website and save it as favorites.



<br>



## Server Routes (Back-end):



| **Method** | **Route**                          | **Description**                                              | Request  - Body                                          |
| ---------- | ---------------------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| `GET`      | `/`                                | Main page route.  Renders home `index` view.                 |                                                          |
| `GET`      | `/login`                           | Renders `login` form view.                                   |                                                          |
| `POST`     | `/login`                           | Sends Login form data to the server.                         | { email, password }                                      |
| `GET`      | `/signup`                          | Renders `signup` form view.                                  |                                                          |
| `POST`     | `/signup`                          | Sends Sign Up info to the server and creates user in the DB. | {  email, password  }                                    |
| `GET`      | `/private/edit-profile`            | Private route. Renders `edit-profile` form view.             |                                                          |
| `PUT`      | `/private/edit-profile`            | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, [firstName], [lastName], [imageUrl] } |
                                                |
| `GET`      | `/places`                     | Renders `places-list` view.                              |                                                          |
| `GET`      | `/places/details/:id`         | Renders `places-details` view for the particular restaurant. |                                                          |







## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  favorites: [{
    type: Schema.Types.ObjectId,
    ref: 'Places'
  }],
}

```


Reviews model

```javascript
{
  content: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "user"
  }
}

```

Places model

```javascript
{
    name: String,
    image: String,
    location: String,
    accessibility: String,
      review: [{
    type: Schema.Types.ObjectId,
    ref: 'Review'
  }]
  }

```



<br>

## API's


<br>


## Packages



<br>



## Backlog

[See the Trello board.](https://trello.com/b/Ni3giVKf/ironhackproject)



<br>



## Links



### Git

The url to your repository and to your deployed project

[Repository Link]()

[Deploy Link]()



<br>



### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors
FirstName LastName - [`<github-username>`](https://github.com/person1-username) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person1-username)

FirstName LastName - [`<github-username>`](https://github.com/person2-username) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/person2-username)