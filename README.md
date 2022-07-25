# Cultur-Event

## Description:
Cultur_Event is the second project of the Ironhack Web Development Bootcamp. A project that has been done by four hands by Angela Rueda and Anna Ma Porras. 
The project is a tool for cultural venues such as theatres, museums, concert halls, libraries and others to promote their events. 
Users will be able to see the events and sign up to attend them and comment their experiences.
In this project there are 3 profile modalities:
1. Admin: controls all the cultural spaces and all the users. You can view, create, modify and delete any user.
2. Collaborator: these are the cultural spaces that can see all the events on the site and create, modify and delete their own events. They can also modify their profile.
3. User: is the end user who can see all the events and sign up for any of them to attend. They can also modify their profile.

## Deployed version:
You can have a look on: https://cultur-event.herokuapp.com/

## Used Technologies:
- NodeJs / Express / Mongoose to create all application with different endpoints grouped into different routes.
- Handlebars to render all pages and views. Conditional rendering applied to show the different possible actions according to the profile.
- Cloudinary to upload pictures.
- Maps-Google-API to locate the events on the map.
- MongoDBAtlas to update our data and share it between us.

## Scalabilities:
- Events  & Users ordened list for Admin profile. 
- Filter to search an event or city more easily.
- To outline the ability to leave comments on events.


## Endpoints

| HTTP METHOD	| URL    	| DESCRIPTION                                    	| PROTECTED 	|
|-------------	|---------------	|------------------------------------------------	|---------	|
| GET         	| /             	| Home page          	| |
| GET         	| /registro    	| Displays a users form to Sign Up 	| |
| POST         	| /registro    	| It creates a new user 	| |
| GET         	| /inicio-sesion 	| Displays a form to Log In	| |
| POST         	| /inicio-sesion 	| The user is logged in 	| |
| POST         	| /cerrar-sesion 	| The user is logged out	|  |
| GET         	| /colaboradores/registro    	| Displays a partner form to Sign Up 	| X|
| POST         	| /colaboradores/registro   	| It creates a new partner 	|X |
| GET         	| /colaboradores/perfil/:id             	| It shows the partner's profile          	| X|
| GET         	| /colaboradores/perfil/:id/editar             	| The partners can edit its profile with an prefilled form        	|X |
| POST         	| /colaboradores/perfil/:id/editar             	| The edited information goes to DataBase         	| X|
| GET         	| /colaboradores/mis-eventos             	| Displays the partners own events list         	|X |
| GET         	| /eventos             	| Displays all events list         	| |
| GET         	| /eventos/detalles/:id    	| Displays the event details 	| |
| POST        	| /eventos/detalles/:id/asistir 	| A user can register for an event 	|X |
| POST         	| /eventos/detalles/:id/comentarios 	| A user will be able to write a comment 	|X |
| GET         	| /eventos/detalles/:id/participantes    	| It will display a list of event participants	| X|
| GET         	| /eventos/crear    	| It will creates an event through a form	| X|
| POST         	| /eventos/crear    	| It saves the event in the DataBase	|X |
| GET         	| /eventos/editar/:id 	| The partners can edit their own events   	|X |
| POST         	| /eventos/editar/:id 	| The edited events are saved in the dataBase 	|X |
| POST         	| /eventos/eliminar/:id 	| It deletes the event	|X |
| GET         	| /perfil-usuario/:id             	| It shows the user's profile         	|X |
| GET         	| /perfil-usuario/:id/editar             	| The users can edit its profile with an prefilled form           	|X |
| POST         	| /perfil-usuario/:id/editar             	| The edited information goes to DataBase            	|X |
| GET         	| /mis-eventos    	|Displays the users events list      	|X |
| GET       	| /admin 	|Home page of Admin role 	| X|
| GET        	| /admin/usuarios 	| It shows a users and partners list 	|X |

# project-Backend
