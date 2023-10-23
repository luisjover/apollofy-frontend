# <a href="https://apollofy-frontend.vercel.app/">APOLLOFY</a> APP 👽📱
<br/>
<div align="center>
<img src="https://github.com/luisjover/apollofy-frontend/assets/131694498/880bcf24-20e8-46f5-8a27-5bede74f2272" width="300" height="606"/>
<img src="https://github.com/luisjover/apollofy-frontend/assets/131694498/3d225169-bf82-472a-9910-c43df4748c05" width="300" height="606"/>
<img src="https://github.com/luisjover/apollofy-frontend/assets/131694498/1c96dddb-39c1-4fa4-926a-973198acd956" width="300" height="606"/>
</div>
<br/>
<div align="center">
  <img src="https://github.com/luisjover/apollofy-frontend/assets/131694498/c1176794-82c3-4dc6-8706-56114c1c8bb9"/>
</div>





## Table of Content:

- [Team Members](#team-members)
- [About](#about)
- [Technologies](#technologies)
- [Setup](#setup)

## Team Members
<ul>
  <li><a href="https://github.com/luisjover">Luis Jover</a></li>
  <li><a href="https://github.com/ali-hourag">Ali Hourag</a></li>
  <li><a href="https://github.com/Madpug2022">Matías Alaimo</a></li>
  <li><a href="https://github.com/JaviGCK">Javier García</a></li>
  <li><a href="https://https://github.com/ifdezluperena">Ivan Fernández</a></li>
</ul>


## About

Apollofy project is a music app that resembles Spotify and Soundcloud, since it enables us to navigate though different songs,
albums, playlists and artists while giving us the opportunity of adding our own tracks or albums and manage them.
<br/>
<br/>

* Built with React and TypeScript, aside from other different libraries like react-hook-form, react-loading-skeleton, react-hot-toast, react-icons, react-router-dom...
* It can be used in spanish or english (**i18next** library).
* Great attention to **UX/UI**, **components interactions**, **best practices**, clean, maintainable and scalable code by **modularizing** and using **React contexts** and **reducers** as well as **hooks** such as useState, useEffect, useNavigate, useLocation and useParams, and **custom hooks**.
* **Dynamic** search and filter.
* **Auth0** and Auth0 **JWT** for user authentication and route protection.
* **Cloudinary** for media files managing (audio and image).
* **Complex architecture** consisting on 2 databases: one done with **MongoDB** (<a href="https://github.com/luisjover/apollofy_hamilton_back">repo</a>) that stores the app data and a second one that keeps different user stats with **PostgreSQL** (<a href="https://github.com/ali-hourag/apollofy_stats_back">repo</a>).
* Both of them build in Node.js + Express using Prisma ORM and other libraries such as **cors** and **morgan**.
* Front-back interaction trough **REST API** allowing creation, reading, updating and deleting (**CRUD**), managing and preventing errors.
* Unit Testing with **Jest** and **React-Testing-Library**.


## Technologies
- HTML
- CSS
- JavaScript
- TypeScript
- React
- Auth0
- Cloudinary
- AntDesign
- Figma
- Node.js
- Express.js
- Mongodb
- PostgreSQL
- Prisma
- Vercel
- Jest
- React-Testing-Library


## Setup

Project is deployed (<a href="https://apollofy-frontend.vercel.app/">APOLLOFY</a>), but if you want to run it locally:

```
git clone https://github.com/luisjover/apollofy-frontend
```

```
npm install
```

```
git clone https://github.com/luisjover/apollofy_hamilton_back
```

```
npm install
```

- Create an account at Auth0 and Cloudinary
- Create your own .env file 
- Get referenced by the provided .env.example file

```
npm run dev in both repos
```

## Try <a href="https://apollofy-frontend.vercel.app/">APOLLOFY</a> app and enjoy! 👽📱
