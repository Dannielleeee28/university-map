
floors = {
  1: {
    id: 1,
    name: "1st Floor",
    image: "1st-Floor.jpg" 
  },
  2: {
    id: 2,
    name: "2nd Floor",
    image: "2nd-Floor.jpg" 
  }
};

roomData = {
  // Classrooms
  "classroom-110a": {
    id: "classroom-110a",
    name: "RM 110-A",
    type: "classroom",
    floor: 1, 
    coordinates: { x: 1033, y: 225 },
    dimensions: { width: 34, height: 55 },
    connections: ["hallway-110a"]
  },
  "classroom-110": {
    id: "classroom-110",
    name: "RM 110",
    type: "classroom",
    floor: 1,
    coordinates: { x: 998, y: 225 },
    dimensions: { width: 35, height: 55 },
    connections: ["hallway-110"]
  },
  "classroom-112": {
    id: "classroom-112",
    name: "RM 112",
    type: "classroom",
    floor: 1,
    coordinates: { x: 928, y: 225 },
    dimensions: { width: 35, height: 54 },
    connections: ["hallway-112"]
  },
  "classroom-113": {
    id: "classroom-113",
    name: "RM 113",
    type: "classroom",
    floor: 1,
    coordinates: { x: 858, y: 205 },
    dimensions: { width: 104, height: 94 },
    connections: ["hallway-113"]
  },
  "classroom-114": {
    id: "classroom-114",
    name: "RM 114",
    type: "classroom",
    floor: 1,
    coordinates: { x: 736, y: 224 },
    dimensions: { width: 68, height: 55 },
    connections: ["hallway-114"]
  },
  "classroom-115": {
    id: "classroom-115",
    name: "RM 115",
    type: "classroom",
    floor: 1,
    coordinates: { x: 666, y: 225 },
    dimensions: { width: 70, height: 53 },
    connections: ["hallway-115"]
  },
  "classroom-116": {
    id: "classroom-116",
    name: "RM 116",
    type: "classroom",
    floor: 1,
    coordinates: { x: 597, y: 225 },
    dimensions: { width: 66, height: 53 },
    connections: ["hallway-116"]
  },
  "classroom-118": {
    id: "classroom-118",
    name: "RM 118",
    type: "classroom",
    floor: 1,
    coordinates: { x: 546, y: 225 },
    dimensions: { width: 35, height: 53 },
    connections: ["hallway-118"]
  },
  "classroom-130": {
    id: "classroom-130",
    name: "RM 130",
    type: "classroom",
    floor: 1,
    coordinates: { x: 177, y: 548 },
    dimensions: { width: 89, height: 67 },
    connections: ["hallway-130"]
  },
  "classroom-131": {
    id: "classroom-131",
    name: "RM 131",
    type: "classroom",
    floor: 1,
    coordinates: { x: 492, y: 540 },
    dimensions: { width: 35, height: 60 },
    connections: ["hallway-131"]
  },
  "classroom-132": {
    id: "classroom-132",
    name: "RM 132",
    type: "classroom",
    floor: 1,
    coordinates: { x: 543, y: 540 },
    dimensions: { width: 65, height: 60 },
    connections: ["hallway-132"]
  },
  "classroom-133": {
    id: "classroom-133",
    name: "RM 133", 
    type: "classroom",
    floor: 1,
    coordinates: { x: 611, y: 540 },
    dimensions: { width: 69, height: 60 },
    connections: ["hallway-133"]
  },
  "classroom-134": {
    id: "classroom-134",
    name: "RM 134",
    type: "classroom",
    floor: 1,
    coordinates: { x: 681, y: 540 },
    dimensions: { width: 69, height: 60 },
    connections: ["hallway-134"]
  },
  "classroom-135": {
    id: "classroom-135",
    name: "RM 135",
    type: "classroom",
    floor: 1,
    coordinates: { x: 751, y: 540 },
    dimensions: { width: 69, height: 60 },
    connections: ["hallway-135"]
  },
  "classroom-137": {
    id: "classroom-137",
    name: "RM 137",
    type: "classroom",
    floor: 1,
    coordinates: { x: 861, y: 540 },
    dimensions: { width: 69, height: 60 },
    connections: ["hallway-137"]
  },
  "classroom-138": {
    id: "classroom-138",
    name: "RM 138",
    type: "classroom",
    floor: 1,
    coordinates: { x: 913, y: 540 },
    dimensions: { width: 35, height: 60 },
    connections: ["hallway-138"]
  },
  "classroom-139": {
    id: "classroom-139",
    name: "RM 139",
    type: "classroom",
    floor: 1,
    coordinates: { x: 948, y: 540 },
    dimensions: { width: 35, height: 60 },
    connections: ["hallway-139"]
  },
  "classroom-140": {
    id: "classroom-140",
    name: "RM 140",
    type: "classroom",
    floor: 1,
    coordinates: { x: 983, y: 540 },
    dimensions: { width: 36, height: 60 },
    connections: ["hallway-140"]
  },
  "classroom-142": {
    id: "classroom-142",
    name: "RM 142",
    type: "classroom",
    floor: 1,
    coordinates: { x: 1000, y: 467 },
    dimensions: { width: 69, height: 54 },
    connections: ["hallway-1-con1"]
  },
  "classroom-143": {
    id: "classroom-143",
    name: "RM 143",
    type: "classroom",
    floor: 1,
    coordinates: { x: 1077, y: 467 },
    dimensions: { width: 55, height: 54 },
    connections: ["hallway-1-con1"]
  },
  "classroom-144": {
    id: "classroom-144",
    name: "RM 144",
    type: "classroom",
    floor: 1,
    coordinates: { x: 85, y: 548 },
    dimensions: { width: 54, height: 67 },
    connections: ["hallway-144"]
  },
  "classroom-146": {
    id: "classroom-146",
    name: "RM 146",
    type: "classroom",
    floor: 1,
    coordinates: { x: 85, y: 463 },
    dimensions: { width: 54, height: 54 },
    connections: ["hallway-146"]
  },
  "classroom-147": {
    id: "classroom-147",
    name: "RM 147",
    type: "classroom",
    floor: 1,
    coordinates: { x: 85, y: 408 },
    dimensions: { width: 54, height: 54 },
    connections: ["hallway-147"]
  },
  "classroom-148": {
    id: "classroom-148",
    name: "RM 148",
    type: "classroom",
    floor: 1,
    coordinates: { x: 85, y: 353 },
    dimensions: { width: 54, height: 54 },
    connections: ["hallway-148"]
  },
  // Labs
  "physics-lab-1": {
    id: "physics-lab-1",
    name: "Physics Lab 1",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 475, y: 468 },
    dimensions: { width: 75, height: 55 },
    connections: ["hallway-physics1"]
  },
  "physics-lab-2": {
    id: "physics-lab-2",
    name: "Physics Lab 2",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 475, y: 413 },
    dimensions: { width: 75, height: 55 },
    connections: ["hallway-physics2"]
  },
  "physics-lab-3": {
    id: "physics-lab-3",
    name: "Physics Lab 3",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 475, y: 358 },
    dimensions: { width: 75, height: 52 },
    connections: ["hallway-physics3"]
  },
  "ie-lab": {
    id: "ie-lab",
    name: "IE Lab",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 475, y: 305 },
    dimensions: { width: 75, height: 55 },
    connections: ["hallway-ie"]
  },
  "ce-lab": {
    id: "ce-lab",
    name: "CE Lab",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 475, y: 238 },
    dimensions: { width: 75, height: 78 },
    connections: ["hallway-ce"]
  },
  "consmat-lab": {
    id: "consmat-lab",
    name: "Cons Mat Lab",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 390, y: 373 },
    dimensions: { width: 50, height: 80 },
    connections: ["hallway-consmat"]
  },
  "ee-lab": {
    id: "ee-lab",
    name: "EE Lab",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 390, y: 306 },
    dimensions: { width: 50, height: 53 },
    connections: ["hallway-ee"]
  },
  "me-lab": {
    id: "me-lab",
    name: "ME Lab",
    type: "laboratory",
    floor: 1,
    coordinates: { x: 390, y: 239 },
    dimensions: { width: 50, height: 80 },
    connections: ["hallway-me"]
  },
  
  // Facilities
  "elevator": {
    id: "elevator",
    name: "Elevator",
    type: "facility",
    floor: 1,
    coordinates: { x: 934, y: 451 },
    dimensions: { width: 20, height: 20 },
    connections: ["hallway-elev", "elevator-2"]
  },
  "elevator-2": {
    id: "elevator-2",
    name: "Elevator",
    type: "facility",
    floor: 2,
    coordinates: { x: 953, y: 483 }, 
    dimensions: { width: 20, height: 20 },
    connections: ["hallway-elev-2", "elevator"] 
  },
  "restroom-1": {
    id: "restroom-1",
    name: "Restroom",
    type: "facility",
    floor: 1,
    coordinates: { x: 1077, y: 225 },
    dimensions: { width: 53, height: 55 },
    connections: ["hallway-restroom1"]
  },
  "restroom-2": {
    id: "restroom-2",
    name: "Restroom 2",
    type: "facility",
    floor: 1,
    coordinates: { x: 268, y: 468 },
    dimensions: { width: 52, height: 54 },
    connections: ["hallway-restroom2"]
  },
  "bookstore": {
    id: "bookstore",
    name: "Bookstore",
    type: "facility",
    floor: 1,
    coordinates: { x: 1070, y: 540 },
    dimensions: { width: 70, height: 60 },
    connections: ["hallway-1-con1"]
  },
  "entry": {
    id: "entry",
    name: "Entrance",
    type: "facility",
    floor: 1,
    coordinates: { x: 1120, y: 413 },
    dimensions: { width: 28, height: 50 },
    connections: ["hallway-ent"]
  },
  "canteen": {
    id: "canteen",
    name: "Canteen",
    type: "facility",
    floor: 1,
    coordinates: { x: 328, y: 553 },
    dimensions: { width: 170, height: 80 },
    connections: ["hallway-canteen"]
  },
  "welding": {
    id: "welding",
    name: "Welding & Machine Shop",
    type: "facility",
    floor: 1,
    coordinates: { x: 296, y: 348 },
    dimensions: { width: 105, height: 184 },
    connections: ["hallway-welding"]
  },    
  "machine-121": {
    id: "machine-121",
    name: "Machine-121",
    type: "facility",
    floor: 1,
    coordinates: { x: 388, y: 462 },
    dimensions: { width: 45, height: 45 },
    connections: ["hallway-1-con5"]
  },
  "quadrangle": {
    id: "quadrangle",
    name: "Quadrangle",
    type: "facility",
    floor: 1,
    coordinates: { x: 651, y: 383 },
    dimensions: { width: 242, height: 220 },
    connections: []
  },
  //Offices
  "laws-office-111": {
    id: "laws-office-111",
    name: "Laws Office",
    type: "office",
    floor: 1,
    coordinates: { x: 963, y: 225 },
    dimensions: { width: 34, height: 55 },
    connections: ["hallway-laws"]
  },
  "bed-office": {
    id: "bed-office",
    name: "BED Office",
    type: "office",
    floor: 1,
    coordinates: { x: 1000, y: 357 },
    dimensions: { width: 69, height: 54 },
    connections: ["hallway-bed-office"]
  },
  "accred-room": {
    id: "accred-room",
    name: "Accreditation room",
    type: "office",
    floor: 1,
    coordinates: { x: 1000, y: 300 },
    dimensions: { width: 69, height: 60 },
    connections: ["hallway-accred"]
  },
  "religious-institute": {
    id: "religious-institute",
    name: "Religious Institute",
    type: "office",
    floor: 1,
    coordinates: { x: 1077, y: 327 },
    dimensions: { width: 55, height: 114 },
    connections: ["hallway-relig"]
  },
  "market-office": {
    id: "market-office",
    name: "Marketing Office",
    type: "office",
    floor: 1,
    coordinates: { x: 1018, y: 540 },
    dimensions: { width: 35, height: 60 },
    connections: ["hallway-marketing"]
  },
  "e-affairs": {
    id: "e-affairs",
    name: "External Affairs Office",
    type: "office",
    floor: 1,
    coordinates: { x: 309, y: 468 },
    dimensions: { width: 28, height: 54 },
    connections: ["hallway-affairs"]
  },
  "bosh-145": {
    id: "bosh-145",
    name: "RM 145",
    type: "office",
    floor: 1,
    coordinates: { x: 85, y: 503 },
    dimensions: { width: 54, height: 25 },
    connections: ["hallway-1-con4"]
  },
  "lab-faculty": {
    id: "lab-faculty",
    name: "Lab Faculty",
    type: "facility",
    floor: 1,
    coordinates: { x: 426, y: 386 },
    dimensions: { width: 21, height: 55 },
    connections: ["hallway-labfac"]
  },
  
  // // Second floor rooms
  // "classroom-210": {
  //   id: "classroom-210",
  //   name: "RM 210",
  //   type: "classroom",
  //   floor: 2,
  //   coordinates: { x: 998, y: 225 },
  //   dimensions: { width: 35, height: 55 },
  //   connections: ["hallway-210"]
  // },
  // "classroom-212": {
  //   id: "classroom-212",
  //   name: "RM 212",
  //   type: "classroom",
  //   floor: 2,
  //   coordinates: { x: 1000, y: 225 },
  //   dimensions: { width: 35, height: 54 },
  //   connections: ["hallway-212"]
  // },
  // "classroom-214": {
  //   id: "classroom-214",
  //   name: "RM 214",
  //   type: "classroom",
  //   floor: 2,
  //   coordinates: { x: 800, y: 210 },
  //   dimensions: { width: 40, height: 40 },
  //   connections: ["hallway-214"]
  // },
  // // Second floor - Facilities
  // "USC": {
  //   id: "USC",
  //   name: "University Supplies Center",
  //   type: "Facility",
  //   floor: 2,
  //   coordinates: { x: 746, y: 287 },
  //   dimensions: { width: 70, height: 55 },
  //   connections: ["hallway-214"]
  // },
  // // Second floor - Offices
  // "SSC": {
  //   id: "SSC",
  //   name: "Student Personnel Services",
  //   type: "Office",
  //   floor: 2,
  //   coordinates: { x: 885, y: 243 },
  //   dimensions: { width: 89, height: 100 },
  //   connections: ["hallway-212"]
  // },
  
  // Hallways - First Floor
  "hallway-1": {
    id: "hallway-1",
    name: "Hallway 1",
    type: "hallway",
    floor: 1,
    coordinates: { x: 522, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "hallway-1-con3", "hallway-1-con4", "hallway-131", "hallway-132", "hallway-133", "hallway-physics1", "hallway-1-con5"]
  },
  "hallway-1-con": {
    id: "hallway-1-con",
    name: "Hallway 1 East",
    type: "hallway",
    floor: 1,
    coordinates: { x: 955, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1", "hallway-1-con1", "hallway-134", "hallway-135", "hallway-137", "hallway-138", "hallway-139", "hallway-140", "hallway-marketing", "hallway-elev"]
  },
  "hallway-1-con1": {
    id: "hallway-1-con1",
    name: "East Junction",
    type: "hallway",
    floor: 1,
    coordinates: { x: 1042, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "hallway-ent", "bookstore", "classroom-142", "classroom-143"]
  },
  "hallway-1-con2": {
    id: "hallway-1-con2",
    name: "Top Hallway West",
    type: "hallway",
    floor: 1,
    coordinates: { x: 522, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "hallway-118", "hallway-116", "hallway-115", "hallway-ce"]
  },
  "hallway-4": {
    id: "hallway-4",
    name: "Top Hallway East",
    type: "hallway",
    floor: 1,
    coordinates: { x: 955, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con2", "hallway-114", "hallway-113", "hallway-112", "hallway-laws", "hallway-110", "hallway-110a", "hallway-restroom1", "hallway-accred"]
  },
  "hallway-131": { 
    id: "hallway-131",
    name: "Hallway 131",
    type: "hallway",
    floor: 1,
    coordinates: { x: 490, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1", "classroom-131"]
  },
  "hallway-132": { 
    id: "hallway-132",
    name: "Hallway 132",
    type: "hallway",
    floor: 1,
    coordinates: { x: 542, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1", "classroom-132"]
  },
  "hallway-133": { 
    id: "hallway-133",
    name: "Hallway 133",
    type: "hallway",
    floor: 1,
    coordinates: { x: 610, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1", "classroom-133"]
  },
  "hallway-134": { 
    id: "hallway-134",
    name: "Hallway 134",
    type: "hallway",
    floor: 1,
    coordinates: { x: 680, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "classroom-134"]
  },
  "hallway-135": { 
    id: "hallway-135",
    name: "Hallway 135",
    type: "hallway",
    floor: 1,
    coordinates: { x: 750, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "classroom-135"]
  },
  "hallway-quad2": { 
    id: "hallway-quad2",
    name: "Bottom Quadrangle Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 800, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "hallway-quad1", "stairs-2"]
  },
  "hallway-137": { 
    id: "hallway-137",
    name: "Hallway 137",
    type: "hallway",
    floor: 1,
    coordinates: { x: 860, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "classroom-137"]
  },
  "hallway-138": { 
    id: "hallway-138",
    name: "Hallway 138",
    type: "hallway",
    floor: 1,
    coordinates: { x: 912, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "classroom-138"]
  },
  "hallway-139": { 
    id: "hallway-139",
    name: "Hallway 139",
    type: "hallway",
    floor: 1,
    coordinates: { x: 950, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "classroom-139"]
  },
  "hallway-140": { 
    id: "hallway-140",
    name: "Hallway 140",
    type: "hallway",
    floor: 1,
    coordinates: { x: 982, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "classroom-140"]
  },
  "hallway-bed-office": { 
    id: "hallway-bed-office",
    name: "BED Office Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 955, y: 355 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-ent1", "bed-office", "hallway-accred"]
  },
  "hallway-accred": { 
    id: "hallway-accred",
    name: "Accreditation Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 955, y: 310 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "accred-room"]
  },
  "hallway-relig": { 
    id: "hallway-relig",
    name: "Religious Institute",
    type: "hallway",
    floor: 1,
    coordinates: { x: 1042, y: 350 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-ent", "religious-institute", "hallway-110a"]
  },
  "hallway-physics1": { 
    id: "hallway-physics1",
    name: "Physics Lab 1 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 522, y: 470 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1", "physics-lab-1", "hallway-physics2"]
  },
  "hallway-physics2": { 
    id: "hallway-physics2",
    name: "Physics Lab 2 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 522, y: 420 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-physics1", "physics-lab-2", "hallway-physics3"]
  },
  "hallway-physics3": { 
    id: "hallway-physics3",
    name: "Physics Lab 3 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 522, y: 370 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-physics2", "physics-lab-3", "hallway-ie"]
  },
  "hallway-ie": { 
    id: "hallway-ie",
    name: "IE Lab Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 522, y: 320 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-physics3", "ie-lab", "hallway-ce"]
  },
  "hallway-ce": { 
    id: "hallway-ce",
    name: "CE Lab Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 522, y: 250 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-ie", "hallway-1-con2", "ce-lab"]
  },
  "hallway-118": { 
    id: "hallway-118",
    name: "Room 118 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 545, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con2", "classroom-118"]
  },
  "hallway-116": { 
    id: "hallway-116",
    name: "Room 116 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 600, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con2", "classroom-116"]
  },
  "hallway-115": { 
    id: "hallway-115",
    name: "Room 115 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 665, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con2", "classroom-115"]
  },
  "hallway-114": { 
    id: "hallway-114",
    name: "Room 114 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 735, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "classroom-114"]
  },
  "hallway-quad1": { 
    id: "hallway-quad1",
    name: "Top Quadrangle Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 800, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "stairs-3"]
  },
  "hallway-113": { 
    id: "hallway-113",
    name: "Room 113 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 850, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "classroom-113"]
  },
  "hallway-112": { 
    id: "hallway-112",
    name: "Room 112 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 930, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "classroom-112"]
  },
  "hallway-laws": { 
    id: "hallway-laws",
    name: "Laws Office Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 965, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "laws-office-111"]
  },
  "hallway-110": { 
    id: "hallway-110",
    name: "Room 110 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 1000, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "classroom-110"]
  },
  "hallway-110a": { 
    id: "hallway-110a",
    name: "Room 110-A Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 1042, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "classroom-110a"]
  },
  "hallway-restroom1": { 
    id: "hallway-restroom1",
    name: "Restroom Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 1075, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4", "restroom-1"]
  },
  "hallway-restroom2": { 
    id: "hallway-restroom2",
    name: "Restroom 2 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 270, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con3", "restroom-2"]
  },
  "hallway-affairs": { 
    id: "hallway-affairs",
    name: "External Affairs Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 305, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con3", "e-affairs"]
  },
  "hallway-canteen": { 
    id: "hallway-canteen",
    name: "Canteen Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 325, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con3", "canteen"]
  },
  "hallway-marketing": { 
    id: "hallway-marketing",
    name: "Marketing Office Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 1015, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con", "market-office"]
  },
  "hallway-1-con3": { 
    id: "hallway-1-con3",
    name: "Southwest Junction",
    type: "hallway",
    floor: 1,
    coordinates: { x: 230, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con4", "hallway-1", "hallway-130", "hallway-restroom2", "hallway-affairs", "hallway-canteen", "hallway-1-con3-stairs"]
  },
  "hallway-130": { 
    id: "hallway-130",
    name: "Room 130 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 230, y: 530 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con3", "classroom-130"]
  },
  "hallway-1-con3-stairs": { 
    id: "hallway-1-con3-stairs",
    name: "Stairs-5 Connector",
    type: "hallway",
    floor: 1,
    coordinates: { x: 230, y: 600 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con3", "stairs-5"]
  },
  "hallway-1-con4": { 
    id: "hallway-1-con4",
    name: "West Vertical Connector",
    type: "hallway",
    floor: 1,
    coordinates: { x: 125, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con3", "hallway-1", "bosh-145", "hallway-144", "hallway-146", "hallway-147", "hallway-148", "stairs-6"]
  },
  "hallway-144": { 
    id: "hallway-144",
    name: "Room 144 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 125, y: 525 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con4", "classroom-144"]
  },
  "hallway-146": { 
    id: "hallway-146",
    name: "Room 146 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 125, y: 475 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con4", "classroom-146"]
  },
  "hallway-147": { 
    id: "hallway-147",
    name: "Room 147 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 125, y: 420 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con4", "classroom-147"]
  },
  "hallway-148": { 
    id: "hallway-148",
    name: "Room 148 Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 125, y: 365 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con4", "classroom-148"]
  },
  "hallway-1-con5": { 
    id: "hallway-1-con5",
    name: "Machine Connection",
    type: "hallway",
    floor: 1,
    coordinates: { x: 425, y: 500 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1", "hallway-labfac", "stairs-4", "machine-121"]
  },
  "hallway-labfac": { 
    id: "hallway-labfac",
    name: "Lab Faculty Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 425, y: 420 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con5", "lab-faculty", "hallway-1-con6"]
  },
  "hallway-1-con6": { 
    id: "hallway-1-con6",
    name: "West Labs Junction",
    type: "hallway",
    floor: 1,
    coordinates: { x: 357, y: 420 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-labfac", "hallway-consmat", "hallway-ee", "hallway-me", "hallway-welding"]
  },
  "hallway-consmat": { 
    id: "hallway-consmat",
    name: "Cons Mat Lab Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 357, y: 380 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con6", "consmat-lab"]
  },
  "hallway-me": { 
    id: "hallway-me",
    name: "ME Lab Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 357, y: 250 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con6", "me-lab"]
  },
  "hallway-ee": { 
    id: "hallway-ee",
    name: "EE Lab Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 357, y: 320 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con6", "ee-lab"]
  },
  "hallway-welding": { 
    id: "hallway-welding",
    name: "Welding Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 357, y: 300 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con6", "welding"]
  },
  "hallway-ent": { 
    id: "hallway-ent",
    name: "Entrance Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 1042, y: 415 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-con1", "hallway-ent1", "entry", "hallway-relig"]
  },
  "hallway-ent1": { 
    id: "hallway-ent1",
    name: "Entrance Connection",
    type: "hallway",
    floor: 1,
    coordinates: { x: 955, y: 415 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-ent", "hallway-elev", "stairs-1", "hallway-bed-office"]
  },
  "hallway-elev": { 
    id: "hallway-elev",
    name: "Elevator Hallway",
    type: "hallway",
    floor: 1,
    coordinates: { x: 955, y: 452 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-ent1", "hallway-1-con", "elevator"]
  },
  
  // Second Floor Hallways
  "hallway-210": {
    id: "hallway-210",
    name: "Room 210 Hallway",
    type: "hallway",
    floor: 2,
    coordinates: { x: 1000, y: 260 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4-2", "classroom-210"]
  },
  "hallway-212": {
    id: "hallway-212",
    name: "Room 212 Hallway",
    type: "hallway",
    floor: 2,
    coordinates: { x: 885, y: 305 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4-2", "classroom-212"]
  },
  "hallway-214": {
    id: "hallway-214",
    name: "Room 214 Hallway",
    type: "hallway",
    floor: 2,
    coordinates: { x: 745, y: 249 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-stairs-3-2", "classroom-214", "USC"]
  },
  "hallway-4-2": {
    id: "hallway-4-2",
    name: "Top Hallway East 2F",
    type: "hallway",
    floor: 2,
    coordinates: { x: 975, y: 305 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-210", "hallway-212", "hallway-stairs-1-2", "hallway-elev-2"]
  },
  "hallway-4-2-con": {
    id: "hallway-4-2-con",
    name: "Top Hallway East 2F",
    type: "hallway",
    floor: 2,
    coordinates: { x: 810, y: 305 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4-2", "hallway-stairs-3-2"]
  },
  "hallway-stairs-1-2": {
    id: "hallway-stairs-1-2",
    name: "Stairs 1 Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 975, y: 385 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4-2", "stairs-1-2"]
  },
  "hallway-stairs-2-2": {
    id: "hallway-stairs-2-2",
    name: "Stairs 2 Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 840, y: 540 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-2", "stairs-2-2"]
  },
  "hallway-stairs-3-2": {
    id: "hallway-stairs-3-2",
    name: "Stairs 3 Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 810, y: 249 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4-2-con", "stairs-3-2"]
  },
  
  "hallway-stairs-4-2": {
    id: "hallway-stairs-4-2",
    name: "Stairs 4 Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 425, y: 540 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-2", "stairs-4-2"]
  },
  "hallway-stairs-5-2": {
    id: "hallway-stairs-5-2",
    name: "Stairs 5 Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 223, y: 635 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-2", "stairs-5-2"]
  },
  "hallway-stairs-6-2": {
    id: "hallway-stairs-6-2",
    name: "Stairs 6 Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 125, y: 540 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-1-2", "stairs-6-2"]
  },
  "hallway-elev-2": {
    id: "hallway-elev-2",
    name: "Elevator Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 975, y: 485 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-4-2", "elevator-2"]
  },
  "hallway-1-2": {
    id: "hallway-1-2",
    name: "Main Hallway (2F)",
    type: "hallway",
    floor: 2,
    coordinates: { x: 223, y: 540 },
    dimensions: { width: 10, height: 10 },
    connections: ["hallway-stairs-2-2", "hallway-stairs-4-2", "hallway-stairs-5-2", "hallway-stairs-6-2"]
  },
  
  // Stairs 
  "stairs-1": {
    id: "stairs-1",
    name: "Stairs 1",
    type: "facility",
    floor: 1,
    coordinates: { x: 930, y: 413 },
    dimensions: { width: 30, height: 53 },
    connections: ["hallway-ent1", "stairs-1-2"] 
  },
  "stairs-1-2": {
    id: "stairs-1-2",
    name: "Stairs 1",
    type: "facility",
    floor: 2,
    coordinates: { x: 946, y: 388 }, 
    dimensions: { width: 30, height: 53 },
    connections: ["hallway-stairs-1-2", "stairs-1"] 
  },
  "stairs-2": {
    id: "stairs-2",
    name: "Stairs 2",
    type: "facility",
    floor: 1,
    coordinates: { x: 810, y: 545 },
    dimensions: { width: 30, height: 43 },
    connections: ["hallway-quad2", "stairs-2-2"]
  },
  "stairs-2-2": {
    id: "stairs-2-2",
    name: "Stairs 2",
    type: "facility",
    floor: 2,
    coordinates: { x: 826, y: 565 }, 
    dimensions: { width: 22, height: 39 },
    connections: ["hallway-stairs-2-2", "stairs-2"] 
  },
  "stairs-3": {
    id: "stairs-3",
    name: "Stairs 3",
    type: "facility",
    floor: 1,
    coordinates: { x: 781, y: 230 },
    dimensions: { width: 20, height: 40 },
    connections: ["hallway-quad1", "stairs-3-2"] 
  },
  "stairs-3-2": {
    id: "stairs-3-2",
    name: "Stairs 3",
    type: "facility",
    floor: 2,
    coordinates: { x: 791, y: 275 }, 
    dimensions: { width: 20, height: 35 },
    connections: ["hallway-stairs-3-2", "stairs-3"] 
  },
  "stairs-4": {
    id: "stairs-4",
    name: "Stairs 4",
    type: "facility",
    floor: 1,
    coordinates: { x: 424, y: 528 },
    dimensions: { width: 21, height: 30 },
    connections: ["hallway-1-con5", "stairs-4-2"] 
  },
  "stairs-4-2": {
    id: "stairs-4-2",
    name: "Stairs 4",
    type: "facility",
    floor: 2,
    coordinates: { x: 424, y: 563 }, 
    dimensions: { width: 21, height: 30 },
    connections: ["hallway-stairs-4-2", "stairs-4"]
  },
  "stairs-5": {
    id: "stairs-5",
    name: "Stairs 5",
    type: "facility",
    floor: 1,
    coordinates: { x: 200, y: 627 },
    dimensions: { width: 21, height: 30 },
    connections: ["hallway-1-con3-stairs", "stairs-5-2"] 
  },
  "stairs-5-2": {
    id: "stairs-5-2",
    name: "Stairs 5",
    type: "facility",
    floor: 2,
    coordinates: { x: 200, y: 665 }, 
    dimensions: { width: 21, height: 30 },
    connections: ["hallway-stairs-5-2", "stairs-5"] 
  },
  "stairs-6": {
    id: "stairs-6",
    name: "Stairs 6",
    type: "facility",
    floor: 1,
    coordinates: { x: 143, y: 475 },
    dimensions: { width: 21, height: 30 },
    connections: ["hallway-1-con4", "stairs-6-2"] 
  },
  "stairs-6-2": {
    id: "stairs-6-2",
    name: "Stairs 6",
    type: "facility",
    floor: 2,
    coordinates: { x: 143, y: 510 }, 
    dimensions: { width: 21, height: 30 },
    connections: ["hallway-stairs-6-2", "stairs-6"] 
  }
};

// Categorize rooms
roomCategories = {
  classrooms: [
    // First floor classrooms
    "classroom-110a", "classroom-110", "classroom-112", "classroom-113", 
    "classroom-114", "classroom-115", "classroom-116", "classroom-118", 
    "classroom-130", "classroom-131", "classroom-132", "classroom-133", 
    "classroom-134", "classroom-135", "classroom-137", "classroom-138", 
    "classroom-139", "classroom-140", "classroom-142", "classroom-143", 
    "classroom-144", "classroom-146", "classroom-147", "classroom-148",
    
    // Second floor classrooms
    "classroom-210", "classroom-212", "classroom-214"
  ],
  laboratories: [
    // First floor labs
    "physics-lab-1", "physics-lab-2", "physics-lab-3", 
    "ce-lab", "ie-lab", "consmat-lab", "ee-lab", "me-lab"
  ],
  facilities: [
    // First floor facilities
    "elevator", "restroom-1", "restroom-2", "bookstore", "entry", 
    "canteen", "machine-121", "welding", "lab-faculty", "quadrangle",
    "stairs-1", "stairs-2", "stairs-3", "stairs-4", "stairs-5", "stairs-6",
    
    // Second floor facilities
    "elevator-2", "stairs-1-2", "stairs-2-2", "stairs-3-2", 
    "stairs-4-2", "stairs-5-2", "stairs-6-2", "USC",
  ],
  hallways: [
    // First floor hallways
    "hallway-1", "hallway-1-con", "hallway-1-con1", "hallway-1-con2", 
    "hallway-1-con3", "hallway-1-con3-stairs", "hallway-1-con4", 
    "hallway-1-con5", "hallway-1-con6", "hallway-4", "hallway-131", 
    "hallway-132", "hallway-133", "hallway-134", "hallway-135", 
    "hallway-137", "hallway-138", "hallway-139", "hallway-140", 
    "hallway-bed-office", "hallway-accred", "hallway-relig", 
    "hallway-physics1", "hallway-physics2", "hallway-physics3", 
    "hallway-ie", "hallway-ce", "hallway-118", "hallway-116", 
    "hallway-115", "hallway-114", "hallway-113", "hallway-112", 
    "hallway-laws", "hallway-110", "hallway-110a", "hallway-restroom1", 
    "hallway-restroom2", "hallway-affairs", "hallway-canteen", 
    "hallway-marketing", "hallway-130", "hallway-144", "hallway-146", 
    "hallway-147", "hallway-148", "hallway-labfac", "hallway-consmat", 
    "hallway-me", "hallway-ee", "hallway-welding", "hallway-ent", 
    "hallway-ent1", "hallway-elev", "hallway-quad1", "hallway-quad2",
    
    // Second floor hallways
    "hallway-210", "hallway-212", "hallway-214", "hallway-4-2",
    "hallway-stairs-1-2", "hallway-stairs-2-2", "hallway-stairs-3-2",
    "hallway-stairs-4-2", "hallway-stairs-5-2", "hallway-stairs-6-2",
    "hallway-elev-2", "hallway-1-2", "hallway-4-2-con"
  ],
  office: [
    // First floor offices
    "laws-office-111", "bed-office", "accred-room", 
    "market-office", "e-affairs", "religious-institute", "bosh-145",
    // // Second floor offices
    // "SSC",
  ]
};

// floors → used for swapping map images
window.floors = {
  1: { id: 1, name: "1st Floor", image: "1st-Floor.jpg" },
  2: { id: 2, name: "2nd Floor", image: "2nd-Floor.jpg" },
  3: { id: 3, name: "3rd Floor", image: "3rd-Floor.jpg" },
  4: { id: 4, name: "4th Floor", image: "4th-Floor.jpg" },
};

// your entire roomData object follows as you already have it,
// just leave it alone.  new nodes for floors 2/3/4 go here too:
window.roomData = {
  /* … all of your classroom-110a, hallway-1, etc … */
};


window.floors = floors;
window.roomData = roomData;
window.roomCategories = roomCategories;
