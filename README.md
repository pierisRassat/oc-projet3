# OC-3 Sophie Bluel architecte d'intérieur

## Install
From both Frontend and Backend directory run:
```
npm install
```
## Running the app
Read the ReadMe.md in ./Backend

Due to the unstable comportment of `live-server` this exercice app use WebPack instead so, from ./Backend run:
```
npm start
```
and from ./FrontEnd run:
```
npm run build && npm start
```

Then run your browser on http://localhost:8090

I tried to refactore this few features.
```
find . -name '*.js' | xargs wc -l
 30 ./isLogged/createEditionBanner.js
 49 ./isLogged/createEditionButtons.js
 17 ./isLogged/isLogged.js
 23 ./categories/requestCategories.js
 15 ./categories/handleRadioChange.js
 47 ./categories/categories.js
 21 ./app.js
 23 ./works/portfolio.js
 10 ./works/clearGallery.js
 21 ./works/requestPortfolio.js
 12 ./addWork/addWorkCloseModalListener.js
 81 ./addWork/handleAddWorkForm.js
 44 ./addWork/requestAddWork.js
 10 ./addWork/addWorkBackModalListener.js
  9 ./addWork/addWorkWindowCloseModalListener.js
126 ./addWork/createAddWorkForm.js
 12 ./addWork/addAddWorkModalListener.js
 34 ./modalEditMode/portfolioThumbnails.js
 12 ./modalEditMode/addEditListener.js
  6 ./modalEditMode/clearThumbnailGallery.js
 47 ./modalEditMode/createModal.js
  9 ./modalEditMode/addWindowCloseModalListener.js
  8 ./modalEditMode/addCloseModalListener.js
 56 ./login/createLoginForm.js
 17 ./login/addLoginListener.js
 27 ./login/requestLogin.js
 25 ./deleteWork/requestDeleteWork.js
 15 ./deleteWork/requestWorkNumber.js
 13 ./deleteWork/addDeleteListener.js
819 total
```
