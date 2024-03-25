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
    bookings: 48,
  },
  {
    date: "Feb",
    bookings: 55,
  },
  {
    date: "Mar ",
    bookings: 40,
  },
  {
    date: "Apr ",
    bookings: 35,
  },
  {
    date: "May ",
    bookings: 30,
  },
  {
    date: "Jun ",
    bookings: 34,
  },
  {
    date: "Jul ",
    bookings: 36,
  },
  {
    date: "Aug ",
    bookings: 40,
  },
  {
    date: "Sep ",
    bookings: 48,
  },
  {
    date: "Oct ",
    bookings: 52,
  },
  {
    date: "Nov ",
    bookings: 46,
  },
  {
    date: "Dec ",
    bookings: 36,
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
    id: 1,
    name: "Booking ID",
  },
  { id: 2, name: "Fulfilment Date(s)" },
  { id: 3, name: "Name" },
  { id: 4, name: "Catagory" },
  { id: 5, name: "Product Name" },
  { id: 6, name: "Booking Status" },
  { id: 7, name: "Details" },
];

const ongoing_booking_table_data = [
  {
    id: 1,
    booking_id: "#12785",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",
    action: "",
  },
  {
    id: 2,
    booking_id: "#12786",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
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
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 5,
    booking_id: "#12789",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 6,
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
    id: 8,
    booking_id: "#12792",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 9,
    booking_id: "#12793",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 10,
    booking_id: "#12794",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
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
    id: 1,
    name: "Booking ID",
  },
  { id: 2, name: "Fulfilment Date(s)" },
  { id: 3, name: "Name" },
  { id: 4, name: "Catagory" },
  { id: 5, name: "Product Name" },
  { id: 6, name: "Booking Status" },
  { id: 7, name: "Details" },
];

const booking_history_table_data = [
  {
    id: 1,
    booking_id: "#12785",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",
    action: "",
  },
  {
    id: 2,
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
    id: 5,
    booking_id: "#12789",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 6,
    booking_id: "#12790",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Completed",
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
    id: 9,
    booking_id: "#12793",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    status: "Ongoing",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 10,
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
  { label: "Customer Name", value: "Miracle" },
  { label: "Fulfilment dates(s)", value: "24/02/2024" },
  { label: "Start Date & Time", value: "-" },
  { label: "End Date & Time", value: "-" },
  { label: "Duration", value: "Half Day" },
  { label: "Participants", value: "2" },
  { label: "Category", value: "Youth" },
  { label: "Location", value: "ESV" },
  { label: "Product", value: "MTB Lesson • Downhill" },
  { label: "Level", value: "Youth • Beginner" },
  {
    label: "Guides",
    guides: [
      {
        id: 1,
        name: "John",
        img: "/assets/images/avatar1.png",
      },
    ],
  },
  {
    label: "Vendor",
    guides: [
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
    ],
  },
  { label: "Lead", value: "Marcus Westervelt" },
  { label: "Angel", value: "Cristofer" },
  { label: "Number of Bikes", value: "5" },
  { label: "Number of Prot. Packs", value: "5" },
  { label: "Amount", value: "CHF 275.00" },
  { label: "Payment Group", value: "Group 1" },
  { label: "Your Earning", value: "CHF 20.00" },
];

const contacts_list = [
  {
    id: 1,
    name: "Mira Herwitz",
    role: "Customer",
    phone: "+991248654265",
    email: "rbrajumullah100@gmail.com",
    action: "",
    isLead: false,
  },
  {
    id: 2,
    name: "Corey Bergson",
    role: "Vendor",
    phone: "+991248654265",
    email: "rbrajumullah100@gmail.com",
    action: "",
    isLead: true,
  },
  {
    id: 3,
    name: "Mira Herwitz",
    role: "Guide",
    phone: "+991248654265",
    email: "rbrajumullah100@gmail.com",
    action: "",
    isLead: false,
  },
  {
    id: 4,
    name: "Corey Bergson",
    role: "Guide",
    phone: "+991248654265",
    email: "rbrajumullah100@gmail.com",
    action: "",
    isLead: false,
  },
];

// invoice

const summaryList = [
  {
    id: 1,
    title: "Current Month Earning",
    count: "$12,596",
    performance: "profit",
    performance_count: "1.9%",
    performance_text: "Compare to the last month",
  },
  {
    id: 2,
    title: "Current Year Earning",
    count: "$12,596",
    performance: "profit",
    performance_count: "1.9%",
    performance_text: "Compare to the last month",
  },
  {
    id: 3,
    title: "Average Month Earning",
    count: "$12,596",
    performance: "profit",
    performance_count: "1.9%",
    performance_text: "Compare to the last month",
  },
];

const invoice_earning_report = [
  {
    id: 1,
    date: "Jan",
    bookings: 4800,
  },
  {
    id: 2,
    date: "Feb",
    bookings: 5500,
  },
  {
    id: 3,
    date: "Mar",
    bookings: 4000,
  },
  {
    id: 4,
    date: "Apr",
    bookings: 3500,
  },
  {
    id: 5,
    date: "May",
    bookings: 3000,
  },
  {
    id: 6,
    date: "Jun",
    bookings: 3400,
  },
  {
    id: 7,
    date: "Jul",
    bookings: 3600,
  },
  {
    id: 8,
    date: "Aug",
    bookings: 4000,
  },
  {
    id: 9,
    date: "Sep",
    bookings: 4800,
  },
  {
    id: 10,
    date: "Oct",
    bookings: 5200,
  },
  {
    id: 11,
    date: "Nov",
    bookings: 4600,
  },
  {
    id: 12,
    date: "Dec",
    bookings: 3600,
  },
];

const invoice_table_header = [
  {
    id: 1,
    name: "Invoice ID",
  },
  { id: 2, name: "Month" },
  { id: 3, name: "Paid Date" },
  { id: 4, name: "Total Bookings" },
  { id: 5, name: "Amount" },
  { id: 6, name: " Status" },
  { id: 7, name: "More" },
];

const invoice_table_data = [
  {
    id: 1,
    invoice_id: "#12785",
    month: "February",
    date: "24/02/2024",
    catagory: "Youth",
    amount: "$5,424.00",
    status: "Paid",
    more: "",
  },
  {
    id: 2,
    invoice_id: "#12786",
    month: "January",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "Paid",

    more: "",
  },
  {
    id: 3,
    invoice_id: "#12787",
    month: "December",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "UnPaid",

    more: "",
  },
  {
    id: 4,
    invoice_id: "#12788",
    month: "December",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "Paid",

    more: "",
  },
  {
    id: 5,
    invoice_id: "#12789",
    month: "January",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "UnPaid",

    more: "",
  },
  {
    id: 6,
    invoice_id: "#12790",
    month: "February",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "Paid",

    more: "",
  },
  {
    id: 7,
    invoice_id: "#12791",
    month: "December",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "UnPaid",

    more: "",
  },
  {
    id: 8,
    invoice_id: "#12792",
    month: "January",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "Paid",

    more: "",
  },
  {
    id: 9,
    invoice_id: "#12793",
    month: "February",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "Paid",

    more: "",
  },
  {
    id: 10,
    invoice_id: "#12794",
    month: "December",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "Paid",

    more: "",
  },
  {
    id: 11,
    invoice_id: "#12795",
    month: "January",
    date: "24/02/2024",
    bookings: 60,
    amount: "$5,424.00",
    status: "Paid",

    more: "",
  },
];

const invoiceDetail = [
  {
    id: 1,
    title: "Total Earn",
    count: "CHF 12,596",
  },
  {
    id: 2,
    title: "Total Completed Bookings",
    count: "60",
  },
  {
    id: 3,
    title: "My Created Booking",
    count: "7",
  },
  {
    id: 4,
    title: "Other Earn",
    count: "CHF 240",
  },
];

const invoiceDetailTableHeader = [
  {
    id: 1,
    name: "Booking ID",
  },
  { id: 2, name: "Fulfilment Date(s)" },
  { id: 3, name: "Name" },
  { id: 4, name: "Catagory" },
  { id: 5, name: "Product Name" },
  { id: 6, name: "Earning" },
  { id: 7, name: "Details" },
];

const invoiceDetailTableData = [
  {
    id: 1,
    booking_id: "#12785",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",
    action: "",
  },
  {
    id: 2,
    booking_id: "#12786",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 3,
    booking_id: "#12787",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 4,
    booking_id: "#12788",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 5,
    booking_id: "#12789",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 6,
    booking_id: "#12790",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 7,
    booking_id: "#12791",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 8,
    booking_id: "#12792",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 9,
    booking_id: "#12793",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 10,
    booking_id: "#12794",
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
  {
    id: 11,
    booking_id: "#12795",
    prod_name: "Cabane Brunet Beginner Private Cabane Brunet Beginner Private",
    date: "24/02/2024",
    catagory: "Youth",
    earning: "$250.00",
    name: "Justin Mango",

    action: "",
  },
];

// settings

const userLocationsList = [
  {
    id: 1,
    location: "Any",
    value: "any",
  },

  {
    id: 2,
    location: "ESV L1",
    value: "esvl1",
  },
  {
    id: 3,
    location: "ESV L2",
    value: "esvl2",
  },
  {
    id: 4,
    location: "ESV L3",
    value: "esvl3",
  },
  {
    id: 5,
    location: "ESV L4",
    value: "esvl4",
  },
  {
    id: 6,
    location: "ESV L5",
    value: "esvl5",
  },
];

// notifications

const newBooking = [
  {
    list: ["MTB Lesson", "Downhill Youth", "Beginner"],
    info: [
      { key: "Date", value: "24/02/2024 - 26/02/2024" },
      { key: "Participants", value: "2" },
      { key: "Other Guides", value: "-" },
      { key: "Location", value: "ESV1" },
    ],
  },
];

const guideNotificationsList = [
  {
    id: 1,
    title: "New Booking Request",
    time: "9 hours ago",
    status: "new",
    detail: [
      {
        list: ["MTB Lesson", "Downhill Youth", "Beginner"],
        info: [
          { key: "Date", value: "24/02/2024 - 26/02/2024" },
          { key: "Participants", value: "2" },
          { key: "Other Guides", value: "-" },
          { key: "Location", value: "ESV1" },
        ],
      },
    ],
  },
  {
    id: 2,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
  {
    id: 3,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
  {
    id: 4,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
  {
    id: 5,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
  {
    id: 6,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
  {
    id: 7,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
  {
    id: 8,
    title: "New Booking Request",
    time: "9 hours ago",
    status: "new",
    detail: [
      {
        list: ["MTB Lesson", "Downhill Youth", "Beginner"],
        info: [
          { key: "Date", value: "24/02/2024 - 26/02/2024" },
          { key: "Participants", value: "2" },
          { key: "Other Guides", value: "-" },
          { key: "Location", value: "ESV1" },
        ],
      },
    ],
  },
  {
    id: 9,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
  {
    id: 10,
    title: " Booking Completed",
    description:
      "The advent of algorithmic trading and machine learning algorithms is reshaping market dynamics. ",
    time: "9 hours ago",
    status: "completed",
  },
];




// vendor dashboard 

const vendorBookingStatus = [
  {
    id: 1,
    title: "Available Bikes",
    count: "57",
    chf:"CHF 12 ",
    item:'per bike'

  },
  {
    id: 2,
    title: "Available Protection",
    count: "25",
    chf:"CHF 12 ",
    item:"per protection"
  },
  {
    id: 3,
    title: "Ongoing Booking",
    count: "49",
    performance: "profit",
    performance_count: "19%",
    performance_text: "Compare to the last month",
  },
  {
    id: 4,
    title: "Total Bookings",
    count: "24,45",
    performance: "loss",
    performance_count: "12.9%",
    performance_text: "Compare to the last month",
  },
];

// new booking 

const vendorNewBookingTableHeader = [
  {
    id: 1,
    name: "Product Name",
  },
  { id: 2, name: "Fulfilment Date(s)" },
  { id: 3, name: "Location" },
  { id: 4, name: "Bikes" },
  { id: 5, name: "Height (cm)" },
  { id: 6, name: "Protections" },
  { id: 7, name: "Guides" },
  { id: 8, name: "Actions" },
];

const vendorNewBookingTableData = [
  {
    id: 1,
    
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
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
    id: 2,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
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
      
    ],
    action: "",
  },
  {
    id: 3,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    guides:[],
    action: "",
  },
  {
    id: 4,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    guides: [
      {
        id: 1,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
      
    ],
    action: "",
  },
  {
    id: 5,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    guides:[],
    action: "",
  },
  {
    id: 6,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
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
    id: 7,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    guides:[],
    action: "",
  },
  {
    id: 8,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    guides: [
      {
        id: 1,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
      
    ],
    action: "",
  },
  {
    id: 9,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
guides:[],
    action: "",
  },
  {
    id: 10,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
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
      
    ],
    action: "",
  },
  {
    id: 11,
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
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
];

// ongoing booking

const vendorOngoingBookingTableHeader = [
  {
    id: 1,
    name: "Order ID",
  },
  { id: 2, name: "Fulfilment Date(s)" },
  { id: 3, name: "Customer Name " },
  { id: 4, name: "Catagory" },
  { id: 5, name: "Product name" },
  { id: 6, name: "Bike type" },
  { id: 7, name: "Bikes" },
  { id: 8, name: "Height (cm)" } ,
  { id: 9, name: "Protections" },
  { id: 10, name: "Guides" },
  { id: 11, name: "Amount" },
  { id: 12, name: " Fulfilment status" },
  { id: 13, name: "Equipment status" },
  { id: 14, name: "More" }, 
];

const vendorOngoingBookingTableData = [
  {
    id: 1,
    orderId:'#12780',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },{
        id:2,name:'E-Bike'
      }
    ],
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
    id: 2,
    orderId:'#12781',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },{
        id:2,name:'E-Bike'
      }
    ],
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
      
    ],
    action: "",
  },
  {
    id: 3,
    orderId:'#12782',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },
    ],
    guides:[],
    action: "",
  },
  {
    id: 4,
    orderId:'#12783',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },{
        id:2,name:'E-Bike'
      }
    ],
    guides: [
      {
        id: 1,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
      
    ],
    action: "",
  },
  {
    id: 5,
    orderId:'#12784',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },
    ],
    guides:[],
    action: "",
  },
  {
    id: 6,
    orderId:'#12785',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
     {
        id:2,name:'E-Bike'
      }
    ],
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
    id: 7,
    orderId:'#12785',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },
    ],
    guides:[],
    action: "",
  },
  {
    id: 8,
    orderId:'#12785',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },{
        id:2,name:'E-Bike'
      }
    ],
    guides: [
      {
        id: 1,
        name: "Ahmad",
        img: "/assets/images/avatar1.png",
      },
      
    ],
    action: "",
  },
  {
    id: 9,
    orderId:'#12785',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
     
    ],
guides:[],
    action: "",
  },
  {
    id: 10,
    orderId:'#12785',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },{
        id:2,name:'E-Bike'
      }
    ],
    guides: [
      
      {
        id: 2,
        name: "Naveed",
        img: "/assets/images/avatar1.png",
      },
      
    ],
    action: "",
  },
  {
    id: 11,
    orderId:'#12785',
    customer:'Lindsey',
    catagory:'Adults',
    prod_name: "Cabane Brunet Beginner Private",
    date: "24/02/2024",
    location: "ESV L1",
    bikes: "6",
    heights: '176',
    total:' 5+ more',
    protections:'6',
    amount:'CHF 25',
    fulfilment_status:'Ongoing',
    equipment_status:'Accepted',
    bikeTypes:[
      {
        id:1,name:'Enduro'
      },
    ],
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
];


export {
  gudieBookingStatus,
  booking_report,
  show_records,
  booking_table_data,
  ongoing_booking_table_data,
  durations,
  today_booking_list,
  booking_history_table_header,
  booking_history_table_data,
  ongoing_booking_table_header,
  bookingDetails,
  contacts_list,
  invoice_earning_report,
  summaryList,
  invoice_table_header,
  invoice_table_data,
  invoiceDetail,
  invoiceDetailTableHeader,
  invoiceDetailTableData,
  userLocationsList,
  newBooking,
  guideNotificationsList,vendorBookingStatus,vendorNewBookingTableHeader,vendorNewBookingTableData,vendorOngoingBookingTableHeader,vendorOngoingBookingTableData
};
