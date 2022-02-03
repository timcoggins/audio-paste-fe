# Audio Paste
Kinda like a blog for audio

curated by the owner themself, the owner can hand our a private password to give upload access, public facing posts go on the front page, private posts are only accessible by link

tracks are non removable by users of the blog

Front end stack
React 17 with
- React router 6
- React query
- React wavesurfer

Back end stack
- NestJS
- PostGres
- integrate into s3?


Add email list support

## Why?
- Services like soundcloud cost money and are essentially a open social platform.
- ContentID type problems with centralised services like youtube, soundcloud etc.
- No self hosted alternatives which are focused on audio
- Most other CMS are focused on text, which the user can then embed audio
- More like a personal portfolio of tracks the user wants to share
- On other services, it's not possible to subscribe without having an account on the service
- Creators can build a collection of fan emails
- 

## User stories
- As a creator, I want to upload my music so others can listen to it
- As a creator, I want to attach an image and information to the song so others can see it
- As a creator, I want the option to make a track private, so I can share it privately
- As a creator, I want the option to make a track public, so it displays on the front page and general users can find it
- 
- As a user, I want to be able to listen, download and share a song
- As a user, I want to join a mailing list so I can find out when a new track is uploaded
- As a user, I want to be able to leave comments on a track at a timestamp
- As a user, I want to click on a comment and be taken to that location
- As a user, I want to be able to replay from the position I last seeked



## Backlog
- Implement the comment timestamps
- Add a way for users to subscribe and recieve emails when a new track is uploaded
- 