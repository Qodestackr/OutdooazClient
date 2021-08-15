Welcome to Hotel101, a hotel bookings system, built with Laravel backend, React and Tailwind CSS in the frontend.

**Demo:**

ps: the backend is hosted by heroku, so just wait a bit for api response

1 - https://hotel101.netlify.app

2 - http://hotel101.ga

** - Setup database and Stripe:**

    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=db_name
    DB_USERNAME=db_username
    DB_PASSWORD=db_password

    STRIPE_KEY=
    STRIPE_SECRET=

** - Migrate, seed , setup oauth2:**
php artisan migrate --seed
php artisan passport:install

** - Serve Laravel Backend:**
php artisan serve
**6 - Install React dependencies:**

    cd ..
    cd frontend
    npm install

**7 - Set base url in .env file**

    REACT_APP_BASE_URL=http://127.0.0.1:8000

**8 - Serve React Frontend**

    npm run serve


**_Technologies and packages used:_**

Backend :

    Laravel, laravel/passport, guzzlehttp/guzzle

Frontend:

    React, TailwindCSS, react-redux, react-router-dom,
    react-slick, react-to-print, react-typical,
    react-image-lightbox, secure-ls,
    @yaireo/tagify, axios, google-maps-react, AOS

Screenshots:

![hotel101 homepage](https://i.imgur.com/QFEVHe8.png)

![hotel101 featured hotels](https://i.imgur.com/CYNWzfv.png)

![hotel101 search](https://i.imgur.com/HUc0fQ5.png)

![hotel101 hotel page](https://i.imgur.com/ESCrj2P.png)

![hotel101 room page](https://i.imgur.com/oizHqCO.png)

![hotel101 booking form](https://i.imgur.com/hJP4ci1.png)
