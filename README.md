# **Protein Vuejs Bootcamp Horse-Racing App** :racehorse:


## :books: **Introduction** 


This repo is a web application that simulates horse racing and was created according to the task given in the **Protein Vuejs Bootcamp**.

- Vue3
- Pinia
- Sass
- Vitest
- Vite

<br>

## :briefcase: **Task**


1. Real-time race of horses running in 8 different lanes on a straight route.
2. After pressing the start button, the countdown is shown and then the horses start from the starting point to the race.
3. During the race; the horse speeds within a certain range (eg: min 20 km/h, max 40 km/h) are
changes randomly.
4. During the race;
depending on the design, the leaderboard is located anywhere on the screen.
5. Depends on the position of the horses the changing rankings are displayed in this table instantly.
6. Race can be started at any time by start button.
7. The race that has started, cannot end before the last horse crosses the finish line.
8. The last horse, after crossing the finish line the race is over, results are shown in a list with lane numbers.
9. At the bottom of the list of results is a restart button and when is clicked the button, the app is returns where ready to start of race.

### :framed_picture: **A. UI**


**UI should contain as a minimum.**
* Start Button
* Countdown
* Leaderboard
* Starting Point
* Lanes
* Horses
* Finish Point
* Results
* Restart Button

<br>

## :tv: **DEMO**

### [Netlify Demo](https://horse-racing-vue.netlify.app/)

<br>

## :film_strip: **Preview**

![Race Start Video](/src//assets/readme-img/gif-1.gif "Gif-1")
![Race Finish Video](/src//assets/readme-img/gif-2.gif "Gif-2")

<br>

## :bookmark_tabs: **Features**
> In addition to the assigned tasks, the following features have been added 
### **A. Parallax Background**
 Three layered background was used that moves against the direction the horses are running from the start of the race to the end of the race. Also, in order to be close to reality, after the race starts, the starting line shifts to the left and disappears. Likewise, when any horse completes 70% of the race at the finish line, the finish line slides from the invisible area towards the screen and stops.

### **B. Select Horse**
The user selects a horse before the race starts and view the ranking of the selected horse on the leaderboard during the race and at the end of the race and the user can change selected horse at the end of the race or start to new race with the same horse by clicking restart button.

## :running_man: **Quick Start**

### **A. Clone the repository and install dependencies**

* Clone this repo on GitHub
* `cd` to **Project Directory** and run `npm install`

### **B. Executable Scripts**
 Hot-reloads for development

```
npm run dev
```

Builds and minifies for production

```
npm run build
```

Serves recently built app

```
npm run preview
```

Run the tests

```
npm test
```
