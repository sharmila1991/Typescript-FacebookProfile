var SocialProfile = /** @class */ (function () {
    //constructor
    function SocialProfile(birthday, NameOfUser, mobileNumber, address, gender, workExperience, placesLived, education, groups, bloodGroup, otherNames, relationShipStatus, familyMembers, lifeEvents, checkIns, films, tvProgramms, books, likes) {
        var _this = this;
        //getter methods
        this.getBirthday = function () {
            return _this.birthday;
        };
        this.getNameOfUser = function () {
            return _this.NameOfUser;
        };
        this.getMobileNumber = function () {
            return _this.mobileNumber;
        };
        this.getAdrress = function () {
            return _this.address;
        };
        this.getGender = function () {
            return _this.gender;
        };
        this.getWorkExperience = function () {
            return _this.workExperience;
        };
        this.getPlacesLived = function () {
            return _this.placesLived;
        };
        this.getEducationDetails = function () {
            return _this.education;
        };
        this.getBloodGroup = function () {
            return _this.bloodGroup;
        };
        this.getOtherNames = function () {
            return _this.otherNames;
        };
        this.getRelationShipStatus = function () {
            return _this.relationShipStatus;
        };
        this.getFamilyMembers = function () {
            return _this.familyMembers;
        };
        this.getLifeEvents = function () {
            return _this.lifeEvents;
        };
        this.getCheckIns = function () {
            return _this.checkIns;
        };
        this.getFilms = function () {
            return _this.films;
        };
        this.getTvProgramms = function () {
            return _this.tvProgramms;
        };
        this.getBooks = function () {
            return _this.books;
        };
        this.getLikes = function () {
            return _this.likes;
        };
        this.getGroups = function () {
            return _this.groups;
        };
        //methods
        this.updateMobileNumber = function (mobileNumber) {
            _this.mobileNumber = mobileNumber;
        };
        this.updateRelationshipStatus = function (status) {
            _this.relationShipStatus = status;
        };
        this.addEducationDetails = function () {
            var educationAdded = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                educationAdded[_i] = arguments[_i];
            }
            var newInstitute = educationAdded;
            _this.education = _this.education.concat(newInstitute);
        };
        this.addGroups = function () {
            var group = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                group[_i] = arguments[_i];
            }
            var newGroup = group;
            _this.groups = _this.groups.concat(newGroup);
        };
        this.addOtherNames = function () {
            var names = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                names[_i] = arguments[_i];
            }
            var newNames = names;
            _this.otherNames = _this.otherNames.concat(newNames);
        };
        this.addTvProgramm = function () {
            var programm = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                programm[_i] = arguments[_i];
            }
            var newProgramm = programm;
            _this.tvProgramms = _this.tvProgramms.concat(newProgramm);
        };
        this.addFilms = function () {
            var film = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                film[_i] = arguments[_i];
            }
            var newFilms = film;
            _this.films = _this.films.concat(newFilms);
        };
        this.addcheckIns = function () {
            var checkin = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                checkin[_i] = arguments[_i];
            }
            var newCheckin = checkin;
            _this.checkIns = _this.checkIns.concat(newCheckin);
        };
        this.addFamilyMembers = function () {
            var members = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                members[_i] = arguments[_i];
            }
            var newMembers = members;
            _this.familyMembers = _this.familyMembers.concat(newMembers);
        };
        this.addLifeEvents = function () {
            var event = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                event[_i] = arguments[_i];
            }
            var newEvents = event;
            _this.events = _this.events.concat(newEvents);
        };
        this.addLikes = function () {
            var like = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                like[_i] = arguments[_i];
            }
            var newLikes = like;
            _this.likes = _this.likes.concat(newLikes);
        };
        this.addBooks = function () {
            var book = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                book[_i] = arguments[_i];
            }
            var newBooks = book;
            _this.books = _this.books.concat(newBooks);
        };
        this.birthday = birthday;
        this.NameOfUser = NameOfUser;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.gender = gender;
        this.workExperience = workExperience;
        this.placesLived = placesLived;
        this.education = education;
        this.groups = groups;
        this.bloodGroup = bloodGroup;
        this.otherNames = otherNames;
        this.relationShipStatus = relationShipStatus;
        this.familyMembers = familyMembers;
        this.lifeEvents = lifeEvents;
        this.checkIns = checkIns;
        this.films = films;
        if (tvProgramms)
            this.tvProgramms = tvProgramms;
        else
            this.tvProgramms = [];
        if (books)
            this.books = books;
        else
            this.books = [];
        if (likes)
            this.likes = likes;
        else
            this.likes = [];
    }
    return SocialProfile;
}());
var myProfile = new SocialProfile("27-07-1991", "sharmila", 9000423419, "Hyderabad", "female", ["InnovateApps", "Infosys"], ["Vizag", "Hyderabad"], ["Sidhartha school", "sri chaitanya"], ["Drupal Community", "Friends", "Bathula Group"], "B+", ["lakki", "sharmi"], "Single", ["Ram", "Hari", "Pravalli"], ["Birthday-27-07-1012", "Marraige29-09-2013"], ["Novotel", "Infosys Mysore"], ["Mahanati", "Bahubali"]);
console.log("Name :" + myProfile.getNameOfUser());
console.log("Address :" + myProfile.getAdrress());
console.log("Mobile Number :" + myProfile.getMobileNumber());
console.log("Gender :" + myProfile.getGender());
console.log("Birthday :" + myProfile.getBirthday());
console.log("Work Experience :" + myProfile.getWorkExperience());
console.log("Places LivedIn:" + myProfile.getPlacesLived());
console.log("Education Details:" + myProfile.getEducationDetails());
console.log("Group Added:" + myProfile.getGroups());
console.log("Blood Group :" + myProfile.getBloodGroup());
console.log("other Names:" + myProfile.getOtherNames());
console.log("Relationship Status:" + myProfile.getRelationShipStatus());
console.log("Family Members:" + myProfile.getFamilyMembers());
console.log("Life Events:" + myProfile.getLifeEvents());
console.log("Check Ins:" + (myProfile.getLifeEvents()));
console.log("Films:" + myProfile.getFilms());
console.log("tvProgramms:" + myProfile.getTvProgramms());
console.log("Books:" + myProfile.getBooks());
console.log("Likes:" + myProfile.getLikes());
//Results after update
console.log('\n' + "Updated Values");
console.log('\n');
myProfile.updateRelationshipStatus("married");
console.log("Relationship Status:" + myProfile.getRelationShipStatus());
myProfile.updateMobileNumber(8885358726);
console.log("New Mobile Number :" + myProfile.getMobileNumber());
myProfile.addEducationDetails("Sanketika Vidya Parishad", "Geetam");
console.log("Education Details:" + myProfile.getEducationDetails());
myProfile.addTvProgramm("Big Boss");
console.log("TvProgramms:" + myProfile.getTvProgramms());
myProfile.addOtherNames("lakshmi", "pretty");
console.log("OtherNames:" + myProfile.getOtherNames());
myProfile.addBooks("Twilight", "The Journey Home");
console.log("Books:" + myProfile.getBooks());
