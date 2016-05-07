browserify js/build/app.js -o bundle.js
cat css/*/* css/*.css | sed 's/..\/..\/images/images/g' > bundle.css
date; echo;
