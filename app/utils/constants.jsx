export {
  gudieBookingStatus,
  booking_report,
  show_records,
  booking_table_data,
  ongoing_booking_table_data,
  durations,
  today_booking_list,booking_history_table_header,booking_history_table_data,ongoing_booking_table_header,bookingDetails,contacts_list
};

const gudieBookingStatus = [
  {
    id: 1,
    title: "Confirmed Bookings",
    count: "12",
    performance: "profit",
    performance_count: "1.9%",
    performance_text: "Compare to the last month",
  },
  {
    id: 2,
    title: "Total Completed Bookings",
    count: "5896424",
    performance: "loss",
    performance_count: "42.9%",
    performance_text: "Compare to the last month",
  },
  {
    id: 3,
    title: "Current Month Earning",
    count: "$12,596",
    performance: "profit",
    performance_count: "19%",
    performance_text: "Compare to the last month",
  },
  {
    id: 4,
    title: "Canceled Booking",
    count: "12",
    performance: "loss",
    performance_count: "12.9%",
    performance_text: "Compare to the last month",
  },
];

const booking_report = [
  {
    date: "Jan",
    Bookings: 48,
  },
  {
    date: "Feb",
    Bookings: 55,
  },
  {
    date: "Mar ",
    Bookings: 40,
  },
  {
    date: "Apr ",
    Bookings: 35,
  },
  {
    date: "May ",
    Bookings: 30,
  },
  {
    date: "Jun ",
    Bookings: 34,
  },
  {
    date: "Jul ",
    Bookings: 36,
  },
  {
    date: "Aug ",
    Bookings: 40,
  },
  {
    date: "Sep ",
    Bookings: 48,
  },
  {
    date: "Oct ",
    Bookings: 52,
  },
  {
    date: "Nov ",
    Bookings: 46,
  },
  {
    date: "Dec ",
    Bookings: 36,
  },
];

const durations = [
  { value: "1months", label: "1 Month" },
  { value: "3months", label: "3 Months" },
  { value: "6months", label: "6 Months" },
  { value: "1year", label: "1 Year" },
];

const show_records = [
  {
    id: "1",
    label: "Show 10 rows",
    value: "10",
  },
  {
    id: "2",
    label: "Show 20 rows",
    value: "20",
  },
  {
    id: "3",
    label: "Show 30 rows",
    value: "30",
  },
  {
    id: "4",
    label: "Show 40 rows",
    value: "40",
  },
];

const booking_table_data = [
  {
    id: "#12785",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [
      {
        id: 1,
        name: "John",
        img: "/assets/images/avatar1.png",
      },
    ],
    action: "",
  },
  {
    id: "#12786",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [],
    action: "",
  },
  {
    id: "#12787",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [
      {
        id: 1,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 2,
        name: "Naveed",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 3,
        name: "Faizan",
        img: "/assets/images/avatar1.png",
      },
    ],
    action: "",
  },
  {
    id: "#12788",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [],
    action: "",
  },
  {
    id: "#12789",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [
      {
        id: 1,
        name: "John",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 2,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
    ],
    action: "",
  },
  {
    id: "#12790",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [
      {
        id: 1,
        name: "Elven1",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 2,
        name: "Elven2",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 3,
        name: "Elven3",
        img: "/assets/images/avatar1.png",
      },
    ],
    action: "",
  },
  {
    id: "#12791",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [],
    action: "",
  },
  {
    id: "#12792",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [
      {
        id: 1,
        name: "John",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 2,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 3,
        name: "Elven",
        img: "/assets/images/avatar1.png",
      },
    ],
    action: "",
  },
  {
    id: "#12793",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [],
    action: "",
  },
  {
    id: "#12794",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [
      {
        id: 1,
        name: "John",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 2,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 4,
        name: "Elven1",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 5,
        name: "Elven2",
        img: "/assets/images/avatar1.png",
      },
      {
        id: 6,
        name: "Elven3",
        img: "/assets/images/avatar1.png",
      },
    ],
    action: "",
  },
  {
    id: "#12795",
    name: "Cabane Brunet Beginner -Private",
    date: "24/02/2024",
    location: "ESV",
    participants: "2",
    guides: [],
    action: "",
  },
];

const ongoing_booking_table_header = [
  {
   id:1, name: "Booking ID"},
   { id:2, name: "Fulfilment Date(s)"},
   { id:3, name: "Name"},
   {id:4, name: "Catagory"},
   {id:5, name: "Product Name"},
   {id:6, name: "Booking Status"},
   {id:7, name: "Details",
  },
];

const ongoing_booking_table_data = [
  {
    id:1 ,
    booking_id: "#12785",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",
    action: "",
  },
  {
    id:2 ,
    booking_id: "#12786",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:3 ,
    booking_id: "#12787",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:4 ,
    booking_id: "#12788",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:5 ,
    booking_id: "#12789",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:6 ,
    booking_id: "#12790",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 7,
    booking_id: "#12791",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:8 ,
    booking_id: "#12792",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:9 ,
    booking_id: "#12793",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:10 ,
    booking_id: "#12794",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:11 ,
    booking_id: "#12795",
    prod_name: "Cabane Brunet Beginner Private Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
];

const today_booking_list = [
  {
    list: ["MTB Lesson", "Downhill Youth", "Beginner"],
    info: [
      { key: "Name", value: "Miracle" },
      { key: "Participants", value: "2" },
      { key: "Time", value: "09:00 am" },
      { key: "Location", value: "ESV1" },
    ],
  },
  {
    list: ["MTB Lesson", "Downhill Youth", "Beginner", "Expert"],
    info: [
      { key: "Name", value: "Miracle" },
      { key: "Participants", value: "2" },
      { key: "Time", value: "09:00 am" },
      { key: "Location", value: "ESV1" },
    ],
  },
  {
    list: [" Lesson", "Downhill Youth", "Beginner"],

    info: [
      { key: "Name", value: "Natural" },
      { key: "Participants", value: "2" },
      { key: "Time", value: "04:00 pm" },
      { key: "Location", value: "ESV3" },
    ],
  },
  {
    list: [" Youth", "Beginner"],

    info: [
      { key: "Name", value: "Miracle" },
      { key: "Participants", value: "2" },
      { key: "Time", value: "11:00 am" },
      { key: "Location", value: "ESV4" },
    ],
  },
  {
    list: ["Beginner", "Expert", "MTB Lesson", "Downhill Youth"],

    info: [
      { key: "Name", value: "Natural" },
      { key: "Participants", value: "4" },
      { key: "Time", value: "02:00 pm" },
      { key: "Location", value: "ESV5" },
    ],
  },
];

const booking_history_table_header = [
  {
    id:1, name: "Booking ID"},
    { id:2, name: "Fulfilment Date(s)"},
    { id:3, name: "Name"},
    {id:4, name: "Catagory"},
    {id:5, name: "Product Name"},
    {id:6, name: "Booking Status"},
    {id:7, name: "Details",
   },
];

const booking_history_table_data = [
  {
    id:1,
    booking_id: "#12785",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",
    action: "",
  },
  {
    id:2,
    booking_id: "#12786",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Completed",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 3,
    booking_id: "#12787",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 4,
    booking_id: "#12788",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Canceled",
    name: "Justin Mango",

    action: "",
  },
  {
    id:5 ,
    booking_id: "#12789",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:6 ,
    booking_id: "#12790",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Completed",
    name: "Justin Mango",

    action: "",
  },
  {
    id:7 ,
    booking_id: "#12791",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 8,
    booking_id: "#12792",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Canceld",
    name: "Justin Mango",

    action: "",
  },
  {
    id:9 ,
    booking_id: "#12793",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id:10 ,
    booking_id: "#12794",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Completed",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 11,
    booking_id: "#12795",
    prod_name: "Cabane Brunet Beginner Private Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
];

const bookingDetails = [
  { label: 'Customer Name', value: 'Miracle' },
  { label: 'Fulfilment dates(s)', value: '24/02/2024' },
  { label: 'Start Date & Time', value: '-' },
  { label: 'End Date & Time', value: '-' },
  { label: 'Duration', value: 'Half Day' },
  { label: 'Participants', value: '2' },
  { label: 'Category', value: 'Youth' },
  { label: 'Location', value: 'ESV' },
  { label: 'Product', value: 'MTB Lesson • Downhill' },
  { label: 'Level', value: 'Youth • Beginner' },
  { label: 'Guides', guides: [
    {
      id: 1,
      name: "John",
      img: "/assets/images/avatar1.png",
    },
  ],},
  { label: 'Vendor', guides: [
    {
      id: 1,
      name: "Theo",
      img: "/assets/images/avatar1.png",
    },
    {
      id: 2,
      name: "John",
      img: "/assets/images/avatar1.png",
    },
  ], },
  { label: 'Lead', value: 'Marcus Westervelt' },
  { label: 'Angel', value: 'Cristofer' },
  { label: 'Number of Bikes', value: '5' },
  { label: 'Number of Prot. Packs', value: '5' },
  { label: 'Amount', value: 'CHF 275.00' },
  { label: 'Payment Group', value: 'Group 1' },
  { label: 'Your Earning', value: 'CHF 20.00' }
];

const contacts_list=[
  {
    id:1,
    name:'Mira Herwitz',
    role:'Customer',
    phone:'+991248654265',
    email:'rbrajumullah100@gmail.com',
    action:'',
    isLead:false
  },
  {
    id:2,
    name:'Corey Bergson',
    role:'Vendor',
    phone:'+991248654265',
    email:'rbrajumullah100@gmail.com',
    action:'',
    isLead:true
  },
  {
    id:3,
    name:'Mira Herwitz',
    role:'Guide',
    phone:'+991248654265',
    email:'rbrajumullah100@gmail.com',
    action:'',
    isLead:false
  },
  {
    id:4,
    name:'Corey Bergson',
    role:'Guide',
    phone:'+991248654265',
    email:'rbrajumullah100@gmail.com',
    action:'',
    isLead:false
  }
]


