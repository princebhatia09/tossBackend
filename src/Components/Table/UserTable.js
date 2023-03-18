export const Tablekeys ={

    about: "about",
    approvedStatus: "approvedStatus",
    area: "area",
    city: "city",
    contactNumber: "contactNumber",
    email: "email",
    fullname: "fullname",
    previousExpereince: "previousExpereince",
    profileImages: "profileImages",
    skills: "skills",
    _id: "_id"
}

// https://chat.openai.com/chat/75a7e03f-5952-4b6c-a25b-054d381b133f

export const UserListDefs = {
    [Tablekeys._id]:{
        cols:{
            [Tablekeys._id]:{
                sortValue:Tablekeys._id,
                handleClick:true,
            }
        }
    },
    [Tablekeys.fullname]:{
        cols:{
            [Tablekeys.fullname]:{
                sortValue:Tablekeys.fullname
            }
        }
    },
    [Tablekeys.contactNumber]:{
        cols:{
            [Tablekeys.contactNumber]:{
                sortValue:Tablekeys.contactNumber
            }
        }
    },

    [Tablekeys.email]:{
        cols:{
            [Tablekeys.email]:{
                sortValue:Tablekeys.email
            }
        }
    },
    [Tablekeys.area]:{
        cols:{
            [Tablekeys.area]:{
                sortValue:Tablekeys.area
            }
        }
    },
    [Tablekeys.city]:{
        cols:{
            [Tablekeys.city]:{
                sortValue:Tablekeys.city
            }
        }
    },
    [Tablekeys.about]:{
        cols:{
            [Tablekeys.about]:{
                sortValue:Tablekeys.about
            }
        }
    },
    [Tablekeys.previousExpereince]:{
        cols:{
            [Tablekeys.previousExpereince]:{
                sortValue:Tablekeys.previousExpereince
            }
        }
    },
    [Tablekeys.profileImages]:{
        cols:{
            [Tablekeys.profileImages]:{
                sortValue:Tablekeys.profileImages,
                images:true,
            }
        }
    },
    [Tablekeys.skills]:{
        cols:{
            [Tablekeys.skills]:{
                sortValue:Tablekeys.skills
            }
        }
    },
    [Tablekeys.approvedStatus]:{
        cols:{
            [Tablekeys.approvedStatus]:{
                sortValue:Tablekeys.approvedStatus
            }
        }
    }
 }