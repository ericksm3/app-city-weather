# AppCityWeather

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.6.

The app was developed following [Angular coding style guide](https://angular.io/guide/styleguide).

The layout is fully responsive.

## Aditional cities
A `<select>` was added to the project to allow city region changes, since all european cities had almost the same weather constantly.

There are european, asian and brazilians cities added in the mock city service.

Also added one more city per region for layout purposes.

## Card
Each card has its own forecast, current day, hour, temperature and wind speed.

Clicking on the card shows the forecast for the next **six** hours
![Card](https://i.ibb.co/tsmRV7X/card.jpg)

## Weather Themes
Each weather condition has its own theme. Here is a mock for all possible weathers and their colors (day and night).

#### Day
![Day Theme](https://i.ibb.co/JqwTNSw/day.jpg)

### Night
![Night Theme](https://i.ibb.co/m0cZPB4/night.jpg)

## Install

Run `npm install` to install app dependencies.

## Run local server

Run `ng serve` or `npm start` for a dev server. Navigate to `http://localhost:4200/`.

## Running unit tests

Run `ng test` or `npm test` to execute the unit tests.

#### Coverage

Run `npm run test:coverage` to generate coverage report inside `./coverage/app-city-weather` folder. 

This project has 100% code coverage.

![Coverage](https://i.ibb.co/kKkjT6K/coverage.jpg)

## Running tslint
Added a few more rules to tslint, like `no-unused-variable` and `no-any` ensure code quality.

Run `npm run lint`  to execute lint.

## Contact
Email info: erick.sm4@gmail.com
