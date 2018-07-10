class SocialProfile{

        //Properties
        private birthday :string;
        private NameOfUser:string;
        private mobileNumber:number;
        private address:string;
        private gender :string;
        private workExperience:string[];
        private placesLived:string[];
        private education:string[];
        private bloodGroup:string;
        private otherNames:string[];
        private relationShipStatus:string;
        private familyMembers:string[];
        private lifeEvents:string[];
        private checkIns:string[];
        private films:string[];
        private tvProgramms:string[];
        private books:string[];
        private likes:string[];
        private events:string[];
        private groups:string[];

        //constructor
        constructor(birthday:string,NameOfUser:string,mobileNumber:number,address:string,gender:string,workExperience:string[],
                placesLived:string[],education:string[],groups:string[],bloodGroup:string,otherNames:string[],relationShipStatus:string,
                familyMembers:string[],lifeEvents:string[],checkIns:string[],films:string[],tvProgramms?:string[],
                books?:string[],likes?:string[])
                    {
                    this.birthday = birthday;
                    this.NameOfUser = NameOfUser;
                    this.mobileNumber = mobileNumber;
                    this.address = address;
                    this.gender = gender;
                    this.workExperience = workExperience;
                    this.placesLived = placesLived;
                    this.education = education;
                    this.groups =groups;
                    this.bloodGroup =bloodGroup;
                    this.otherNames = otherNames;
                    this.relationShipStatus =relationShipStatus;
                    this.familyMembers = familyMembers;
                    this.lifeEvents = lifeEvents;
                    this.checkIns= checkIns;
                    this.films = films;
                    if(tvProgramms)
                        this.tvProgramms = tvProgramms;
                    else
                        this.tvProgramms = [];
                    if(books)
                        this.books = books;
                    else
                        this.books = [];
                    if(likes)
                        this.likes = likes;
                    else
                        this.likes = [];
                    }

        //getter methods
        getBirthday = ()=>{
                return this.birthday;
            }
        getNameOfUser = ()=>{
                return this.NameOfUser;
            }
        getMobileNumber = ()=>{
                return this.mobileNumber;
            }
        getAdrress= ()=>{
                return this.address;
            }
        getGender = ()=>{
                return this.gender;
            }
        getWorkExperience = () =>{
            return this.workExperience;
        }
        getPlacesLived = ()=>{
            return this.placesLived;
        }
        getEducationDetails = ()=>{
            return this.education;
        }
        getBloodGroup = ()=>{
            return this.bloodGroup;
        }
        getOtherNames = ()=>{
            return this.otherNames;
        }
        getRelationShipStatus = ()=>{
            return this.relationShipStatus;
        }
        getFamilyMembers = ()=>{
            return this.familyMembers;    
        }
        getLifeEvents = ()=>{
            return this.lifeEvents;
        }
        getCheckIns = ()=>{
            return this.checkIns;
        }
        getFilms= ()=>{
            return this.films;
        }
        getTvProgramms = ()=>{
            return this.tvProgramms;
        }
        getBooks = ()=>{
            return this.books;
        }
        getLikes=()=>{
            return this.likes;
        }
        getGroups=()=>{
            return this.groups;
        }


        //methods

        updateMobileNumber = (mobileNumber:number) =>{
            this.mobileNumber = mobileNumber;
        }
        updateRelationshipStatus = (status:string) =>{
            this.relationShipStatus = status;
        }
        addEducationDetails = (...educationAdded:string[]) =>{
            let newInstitute = educationAdded;
            this.education = this.education.concat(newInstitute);
        }

        addGroups = (...group:string[])=>{
            let newGroup = group;
            this.groups= this.groups.concat(newGroup);
        }

        addOtherNames = (...names:string[])=>{
            let newNames = names;
            this.otherNames = this.otherNames.concat(newNames);
        }
        addTvProgramm =(...programm:string[])=>{
            let newProgramm = programm;
            this.tvProgramms = this.tvProgramms.concat(newProgramm);
        }
        addFilms=(...film:string[])=>{
            let newFilms= film;
            this.films = this.films.concat(newFilms);
        }
        addcheckIns=(...checkin:string[])=>{
            let newCheckin =checkin;
            this.checkIns = this.checkIns.concat(newCheckin);
        }
        addFamilyMembers = (...members:string[])=>{
            let newMembers = members;
            this.familyMembers = this.familyMembers.concat(newMembers);
        }
        addLifeEvents = (...event:string[])=>{
            let newEvents = event;
            this.events= this.events.concat(newEvents);
        }
        addLikes = (...like:string[])=>{
            let newLikes = like;
            this.likes = this.likes.concat(newLikes);
        }
        addBooks=(...book:string[])=>{
            let newBooks= book;
            this.books = this.books.concat(newBooks)  ;
        }

}


let myProfile = new SocialProfile("27-07-1991","sharmila",9000423419,"Hyderabad","female",["InnovateApps","Infosys"],["Vizag","Hyderabad"],
        ["Sidhartha school","sri chaitanya"],["Drupal Community","Friends","Bathula Group"],"B+",["lakki","sharmi"],"Single",["Ram","Hari","Pravalli"],
        ["Birthday-27-07-1012","Marraige29-09-2013"],["Novotel","Infosys Mysore"],["Mahanati","Bahubali"]);

console.log("Name :"+ myProfile.getNameOfUser());
console.log("Address :"+ myProfile.getAdrress());
console.log("Mobile Number :"+ myProfile.getMobileNumber());
console.log("Gender :"+ myProfile.getGender());
console.log("Birthday :"+myProfile.getBirthday());
console.log("Work Experience :"+myProfile.getWorkExperience());
console.log("Places LivedIn:"+myProfile.getPlacesLived());
console.log("Education Details:"+myProfile.getEducationDetails());
console.log("Group Added:"+myProfile.getGroups());
console.log("Blood Group :"+myProfile.getBloodGroup());
console.log("other Names:"+myProfile.getOtherNames());
console.log("Relationship Status:"+myProfile.getRelationShipStatus());
console.log("Family Members:"+myProfile.getFamilyMembers());
console.log("Life Events:"+myProfile.getLifeEvents());
console.log("Check Ins:"+(myProfile.getLifeEvents()));
console.log("Films:"+myProfile.getFilms());
console.log("tvProgramms:"+myProfile.getTvProgramms());
console.log("Books:"+myProfile.getBooks());
console.log("Likes:"+myProfile.getLikes());

//Results after update
console.log('\n'+"Updated Values");
console.log('\n');

myProfile.updateRelationshipStatus("married");
console.log("Relationship Status:"+myProfile.getRelationShipStatus());

myProfile.updateMobileNumber(8885358726);
console.log("New Mobile Number :"+myProfile.getMobileNumber());

myProfile.addEducationDetails("Sanketika Vidya Parishad","Geetam");
console.log("Education Details:"+myProfile.getEducationDetails());

myProfile.addTvProgramm("Big Boss");
console.log("TvProgramms:"+myProfile.getTvProgramms());

myProfile.addOtherNames("lakshmi","pretty");
console.log("OtherNames:"+myProfile.getOtherNames());

myProfile.addBooks("Twilight","The Journey Home");
console.log("Books:"+myProfile.getBooks());