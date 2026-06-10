export type VisaPlan = {
  title: string
  price: string
  validity: string
  processing: string
  minorPrice: string
}

export const singleEntryPlans: VisaPlan[] = [
  {
    title: "96 Hour Transit Visa",
    price: "2,299",
    validity: "96 Hours",
    processing: "48-96 hours",
    minorPrice: "1,149",
  },
  {
    title: "14 Day Single Entry",
    price: "2,499",
    validity: "14 Days",
    processing: "48-96 hours",
    minorPrice: "1,149",
  },
  {
    title: "30 Day Single Entry",
    price: "2,599",
    validity: "30 Days",
    processing: "48-96 hours",
    minorPrice: "1,149",
  },
  {
    title: "60 Day Single Entry",
    price: "5,099",
    validity: "60 Days",
    processing: "48-96 hours",
    minorPrice: "2,299",
  },
]

export const multipleEntryPlans: VisaPlan[] = [
  {
    title: "30 Day Multiple Entry",
    price: "4,299",
    validity: "30 Days",
    processing: "48-96 hours",
    minorPrice: "2,299",
  },
  {
    title: "60 Day Multiple Entry",
    price: "6,199",
    validity: "60 Days",
    processing: "48-96 hours",
    minorPrice: "3,199",
  },
]
