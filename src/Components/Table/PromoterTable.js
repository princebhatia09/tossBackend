const PromoterKeys = {
  _id:"_id",
  full_name: "full_name",
  work_email: "work_email",
  company_Name: "company_Name",
  office_address: "office_address",
  password: "password",
  job_images: "profileImages",
};

export const PromoterTableDefs = {
  [PromoterKeys._id]: {
    cols: {
      [PromoterKeys._id]: {
        sortValue: PromoterKeys._id,
        handleClick:true,

      },
    },
  },
  [PromoterKeys.full_name]: {
    cols: {
      [PromoterKeys.full_name]: {
        sortValue: PromoterKeys.full_name,
      },
    },
  },
  [PromoterKeys.company_Name]: {
    cols: {
      [PromoterKeys.company_Name]: {
        sortValue: PromoterKeys.company_Name,
      },
    },
  },
  [PromoterKeys.work_email]: {
    cols: {
      [PromoterKeys.work_email]: {
        sortValue: PromoterKeys.work_email,
      },
    },
  },
  [PromoterKeys.office_address]: {
    cols: {
      [PromoterKeys.office_address]: {
        sortValue: PromoterKeys.office_address,
      },
    },
  },
  [PromoterKeys.password]: {
    cols: {
      [PromoterKeys.password]: {
        sortValue: PromoterKeys.password,
      },
    },
  },
  [PromoterKeys.job_images]: {
    cols: {
      [PromoterKeys.job_images]: {
        sortValue: PromoterKeys.job_images,
        images:true,
      },
    },
  },
};
