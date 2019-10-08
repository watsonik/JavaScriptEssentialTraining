function Course(title, instructor, level, published, views) {
    this.title = title;
    this.instructor = instructor;
    this.level = level;
    this.published = published;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    };
}

var courses=[
    new Course("JavaScript Essential Training","Ihar Sakun",1,true,0),
    new Course("Java Training","Watson",1,true,123)
];

// var course01 = new Course("JavaScript Essential Training","Ihar Sakun",1,true,0);

console.log(courses[1].updateViews());




