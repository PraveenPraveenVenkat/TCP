import HomeIcon from '@mui/icons-material/Home';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EmailIcon from '@mui/icons-material/Email';
import FlakyIcon from '@mui/icons-material/Flaky';
import Groups2Icon from '@mui/icons-material/Groups2';
import AddLocationAltSharpIcon from '@mui/icons-material/AddLocationAltSharp';


const Data = [
  {
    "title": "Home",
    icon: <HomeIcon />,
    icon1:<ArrowDropDownIcon/>,
    "path": "/Home",
    "subMenu": [
      { "title": "Project", "path":"/Project", },
      { "title": "Teams", "path": "/Teams" },
    ],
  },
 
  {
    "title": "About Us",
    icon: <Groups2Icon/>,
    icon1:<ArrowDropDownIcon/>,
    "path": "/about",
    "subMenu": [
      { "title": "Our Growth", "path": "/OurGrowth" },
      { "title": "Our Vision", "path": "/OurVision" },
    ],
  },

  {
    "title": "Services",
    icon: <SupportAgentIcon />,
    icon1:<ArrowDropDownIcon/>,
    "path": "/services",
    "subMenu": [
      { "title": "Web Development", "path": "/WebDevelopment" },
      { "title": "App Development", "path": "/AppDevelopment" },
      { "title": "3D Architect", "path": "/Architect" },
    ],
  },
  {
    "title": "Contact",
    icon: <PermContactCalendarIcon />,
    icon1:<ArrowDropDownIcon/>,
    "path": "/contact",
    "subMenu": [
      { "title": "LinkedIN", "path": "/Linkedin" },
      { "title": "Website", "path": "/Website" },
    ],
  },

  {
    "title": "Mail",
    icon:<EmailIcon/>,
    icon1:<ArrowDropDownIcon/>,
    "subMenu": [
      { "title": "Mail", "path": "/Mail" },
      { "title": "Website", "path": "/services/app" },
    ]


  },
  {
    "title": "Review",
    icon:<FlakyIcon/>,
    icon1:<ArrowDropDownIcon/>,
    "subMenu": [
      { "title": "Customer Review", "path": "/Customer Review" },
      { "title": "Website", "path": "/services/app" },
    ]
  
  },
  {
    "title": "Location",
    icon :< AddLocationAltSharpIcon />,
    icon1:<ArrowDropDownIcon/>,
    "subMenu": [
      { "title": "CBE", "path": "/services/web" },
      { "title": "Chennai", "path": "/services/app" },
    ]
    
  }
];


const Rows = [
  { "food":"Frozen yoghurt", 
    "Calories":159, 
    "fat":6.0,
    "Carbs": 24 , 
    "Protein" :4.0,

  },
  { "food":"Ice cream sandwich", 
    "Calories": 237, 
    "fat":9.0,
    "Carbs": 37 , 
    "Protein":4.3,

  },
  { "food":"Eclair", 
    "Calories":262, 
    "fat":16,
    "Carbs":24, 
    "Protein" :6.0,

  },
  { "food":"Cupcake", 
    "Calories":356, 
    "fat":3.7,
    "Carbs":64 , 
    "Protein":4.3,

  },
  { "food":"Gingerbread", 
    "Calories":519, 
    "fat":6.0,
    "Carbs": 24 , 
    "Protein":3.9,

  },


];


export default Data;