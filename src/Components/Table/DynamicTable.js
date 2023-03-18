export const Tablekeys ={
    _id:"_id",
    address:"address",
    company_Name: "company_Name",
    createdDate: "createdDate",
    description: "description",
    job_images: "job_images",
    job_name: "job_name",
    job_status: "job_status",
    payment: "payment",
    pincode: "pincode",
    posted_by: "posted_by",
    recepient: "recepient",
    requirement: "requirement",
    updatedAt: "updatedAt",
    workers: "workers",
    tick:"tick"
}

// https://chat.openai.com/chat/75a7e03f-5952-4b6c-a25b-054d381b133f

export const TableListDefs = {
    [Tablekeys._id]:{
        cols:{
            [Tablekeys._id]:{
                sortValue:Tablekeys._id,
                handleClick:true,
            }
        }
    },
    [Tablekeys.company_Name]:{
        cols:{
            [Tablekeys.company_Name]:{
                sortValue:Tablekeys.company_Name
                
            }
        }
    },
    [Tablekeys.description]:{
        cols:{
            [Tablekeys.description]:{
                sortValue:Tablekeys.description
            }
        }
    },
    [Tablekeys.job_name]:{
        cols:{
            [Tablekeys.job_name]:{
                sortValue:Tablekeys.job_name
            }
        }
    },

    [Tablekeys.job_status]:{
        cols:{
            [Tablekeys.job_status]:{
                sortValue:Tablekeys.job_status
            }
        }
    },
    [Tablekeys.job_images]:{
        cols:{
            [Tablekeys.job_images]:{
                sortValue:Tablekeys.job_images,
                images:true,
            }
        }
    },
    [Tablekeys.address]:{
        cols:{
            [Tablekeys.address]:{
                sortValue:Tablekeys.address
            }
        }
    },
    [Tablekeys.payment]:{
        cols:{
            [Tablekeys.payment]:{
                sortValue:Tablekeys.payment
            }
        }
    },
    [Tablekeys.pincode]:{
        cols:{
            [Tablekeys.pincode]:{
                sortValue:Tablekeys.pincode
            }
        }
    },
    [Tablekeys.posted_by]:{
        cols:{
            [Tablekeys.posted_by]:{
                sortValue:Tablekeys.posted_by
            }
        }
    },
    [Tablekeys.recepient]:{
        cols:{
            [Tablekeys.recepient]:{
                sortValue:Tablekeys.recepient
            }
        }
    },
    [Tablekeys.requirement]:{
        cols:{
            [Tablekeys.requirement]:{
                sortValue:Tablekeys.requirement
            }
        }
    },
    [Tablekeys.workers]:{
        cols:{
            [Tablekeys.workers]:{
                sortValue:Tablekeys.workers
            }
        }
    },
    [Tablekeys.createdDate]:{
        cols:{
            [Tablekeys.createdDate]:{
                sortValue:Tablekeys.createdDate
            }
        }
    },
    [Tablekeys.updatedAt]:{
        cols:{
            [Tablekeys.updatedAt]:{
                sortValue:Tablekeys.updatedAt
            }
        }
    },
 }