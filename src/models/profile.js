const { default: mongoose } = require("mongoose");



const ProfileSchema = new mongoose.Schema({
    userId : String,
    role : String,
    email : String,
    isPremium : Boolean,
    memberShipType : String,
    memberShipStartDate : String,
    memberShipEndDate : String,
    recruiterInfo : {
        name : String,
        companyName : String,
        companyRole :String,
    },
    candidateInfo : {
        name : String,
        currentJobLocateion : String, 
        preferedJobLocation : String,
        currentSalary : String,
        noticePeriod : String,
        skills : String,
        currentCompany : String,
        previousCompany : String,
        totalExperience : String,
        college : String,
        collegeLocation : String,
        graduationYear: String,
        linkedinProfile : String,
        githubProfile: String,
        resume : String,

    }
})

const Profile = mongoose.model.Profile || mongoose.model('Profile', ProfileSchema)

export default Profile;