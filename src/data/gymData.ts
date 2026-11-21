export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  image: string;
  featured?: boolean;
  badge?: string;
  features: string[];
  ctaText: string;
  whatsappMessage: string;
}

export interface DaySchedule {
  day: string;
  shortDay: string;
  title: string;
  timeNote?: string;
  activities: string[];
  highlight?: string;
  image: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tags: string[];
}

export const GYM_INFO = {
  name: "MEGA GYM",
  tagline: "BUILT BY DISCIPLINE. POWERED BY YOU.",
  subtitle:
    "Your fitness journey starts here. Train with purpose, stay consistent and become stronger with Mega Gym.",
  address: "14 Camp Davies Rd, Ayobo, Lagos 102213, Lagos, Nigeria",
  phone: "0816 239 8412",
  phoneFormatted: "+234 816 239 8412",
  phoneRaw: "2348162398412",
  whatsappUrl: "https://wa.me/2348162398412",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=14+Camp+Davies+Rd,+Ayobo,+Lagos+102213,+Lagos,+Nigeria",
  googleMapsEmbed:
    "https://maps.google.com/maps?q=14%20Camp%20Davies%20Rd,%20Ayobo,%20Lagos%20102213,%20Lagos,%20Nigeria&t=&z=15&ie=UTF8&iwloc=&output=embed",
  operatingDays: "Monday – Sunday",
  operatingHoursNote:
    "Open 7 days a week. Daily opening and closing hours will be confirmed soon by management.",
  instagram: "To be confirmed (Official handle coming soon)",
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: "registration",
    name: "Registration Fee",
    price: "₦10,000",
    period: "One-time onboarding",
    description: "Standard member registration required for all ongoing memberships.",
    image: "/images/showcase/registration.jpg",
    features: [
      "Official Mega Gym member onboarding",
      "Member profile & record setup",
      "Gym orientation & equipment briefing",
      "Prerequisite for Monthly & Weekly packages",
    ],
    ctaText: "Register Now",
    whatsappMessage: "Hello Mega Gym, I would like to inquire about the ₦10,000 Member Registration.",
  },
  {
    id: "monthly",
    name: "Monthly Membership",
    price: "₦30,000",
    period: "per month",
    description: "Our premier comprehensive package with dedicated coach guidance and full routine support.",
    image: "/images/showcase/dumbbells.jpg",
    featured: true,
    badge: "MOST POPULAR • WITH COACH",
    features: [
      "Includes dedicated fitness coach guidance",
      "Full access to Monday – Sunday gym facilities",
      "Full access to weekly structured workout programme",
      "Aerobics, Boxing, HIIT & Friday Games inclusion",
      "Consistent routine tracking & form guidance",
    ],
    ctaText: "Join Monthly Plan",
    whatsappMessage:
      "Hello Mega Gym, I want to join the Monthly Membership with Coach (₦30,000/month).",
  },
  {
    id: "weekly",
    name: "Weekly Membership",
    price: "₦20,000",
    period: "Fri – Sun access",
    description: "Tailored for weekend warriors needing focused intensive training sessions.",
    image: "/images/showcase/friday-games.jpg",
    features: [
      "Access period: Friday, Saturday & Sunday",
      "Includes Friday Games (6:00 PM) & Fun activities",
      "Saturday arms, aerobics & cardio routines",
      "Sunday open training access",
      "Ideal for busy professionals & weekend athletes",
    ],
    ctaText: "Join Weekly Plan",
    whatsappMessage:
      "Hello Mega Gym, I would like to join the Weekly Membership (Fri–Sun, ₦20,000).",
  },
  {
    id: "daily",
    name: "Daily Drop-In",
    price: "₦4,000",
    period: "per day",
    description: "Flexible pay-per-day pass for casual workouts, visitors, or trial sessions.",
    image: "/images/showcase/strength-training.jpg",
    features: [
      "Single full-day access to gym facilities",
      "Participation in scheduled daily group sessions",
      "Access to strength, cardio & training zones",
      "No long-term commitment required",
    ],
    ctaText: "Get Day Pass",
    whatsappMessage: "Hello Mega Gym, I want to get a Daily Drop-In Pass (₦4,000).",
  },
];

export const WEEKLY_SCHEDULE: DaySchedule[] = [
  {
    day: "Monday",
    shortDay: "MON",
    title: "Start Up & Upper-Body Focus",
    timeNote: "START UP ROUTINE",
    highlight: "Upper-Body Strength",
    image: "/images/showcase/dumbbells.jpg",
    activities: [
      "5-minute treadmill warm-up",
      "Stretching exercise",
      "Step work",
      "Upper-body strength training",
    ],
  },
  {
    day: "Tuesday",
    shortDay: "TUE",
    title: "Aerobics, Cycling & Boxing",
    timeNote: "CARDIO & COMBAT",
    highlight: "Boxing Class",
    image: "/images/showcase/boxing.jpg",
    activities: [
      "Aerobics / Yoga",
      "Cycling",
      "Light stretching",
      "Boxing class",
    ],
  },
  {
    day: "Wednesday",
    shortDay: "WED",
    title: "Lower Body & High-Intensity",
    timeNote: "POWER & ENDURANCE",
    highlight: "Legs, Glutes & HIIT",
    image: "/images/showcase/leg-workout.jpg",
    activities: [
      "Jump-rope warm-up",
      "Stretching",
      "Lower-body strength training (legs and glutes)",
      "15 minutes HIIT",
    ],
  },
  {
    day: "Thursday",
    shortDay: "THUR",
    title: "Aerobics, Mobility & Boxing",
    timeNote: "COMBAT & MOBILITY",
    highlight: "Boxing & Aerobics",
    image: "/images/showcase/yoga-stretching.jpg",
    activities: [
      "Aerobics / Yoga",
      "Stretching",
      "Boxing class",
    ],
  },
  {
    day: "Friday",
    shortDay: "FRI",
    title: "Full Body, Cardio & Community Games",
    timeNote: "END-OF-WEEK POWER",
    highlight: "Friday Games (6 PM)",
    image: "/images/showcase/friday-games.jpg",
    activities: [
      "10-minute cycling",
      "10-minute treadmill",
      "Full-body strength training",
      "20-minute cardio",
      "Friday games (6:00 PM)",
      "Fun activities",
    ],
  },
  {
    day: "Saturday",
    shortDay: "SAT",
    title: "Arms Conditioning & Aerobics",
    timeNote: "WEEKEND BLAST",
    highlight: "Triceps & Biceps",
    image: "/images/showcase/strength-training.jpg",
    activities: [
      "Aerobics / Stretching",
      "Triceps and biceps",
      "Cardio",
    ],
  },
  {
    day: "Sunday",
    shortDay: "SUN",
    title: "Open Gym & Self-Paced Training",
    timeNote: "OPEN FACILITY",
    highlight: "Open Facility",
    image: "/images/gym-interior.jpg",
    activities: [
      "Open gym floor access",
      "Self-directed workouts & recovery",
      "Cardio & weight machines available",
      "Note: Schedule specific activities to be confirmed by management",
    ],
  },
];

export const ACTIVITIES: Activity[] = [
  {
    id: "strength",
    title: "Strength Training",
    category: "Muscle & Power",
    description:
      "Targeted resistance training with free weights, barbells, and plate-loaded machines built for progressive overload.",
    image: "/images/showcase/strength-training.jpg",
    tags: ["Barbells", "Dumbbells", "Hypertrophy"],
  },
  {
    id: "boxing",
    title: "Boxing Class",
    category: "Combat & Agility",
    description:
      "Disciplined boxing combinations, pad drills, footwork, and core training for athletic endurance and stress release.",
    image: "/images/showcase/boxing.jpg",
    tags: ["Pad Work", "Agility", "Reflexes"],
  },
  {
    id: "hiit",
    title: "HIIT Intervals",
    category: "High Intensity",
    description:
      "15–20 minute rapid-fire explosive circuits designed to accelerate metabolic burn and test cardiovascular limits.",
    image: "/images/showcase/hiit.jpg",
    tags: ["Intervals", "Metabolic", "Explosive"],
  },
  {
    id: "friday-games",
    title: "Friday Games (6 PM)",
    category: "Community Event",
    description:
      "Every Friday evening at 6:00 PM, join competitive team challenges, fitness games, and high-energy community bonding.",
    image: "/images/showcase/friday-games.jpg",
    tags: ["Friday 6 PM", "Team Games", "Fun Activities"],
  },
  {
    id: "aerobics",
    title: "Aerobics & Cardio",
    category: "Rhythm & Endurance",
    description:
      "High-energy group aerobic workouts set to motivating rhythms to torch calories and build stamina.",
    image: "/images/showcase/aerobics.jpg",
    tags: ["Rhythm", "Calorie Burn", "Group Vibe"],
  },
  {
    id: "cycling",
    title: "Indoor Cycling",
    category: "Cardio Power",
    description:
      "Stationary cycling intervals that build intense leg strength, lung capacity, and sprint power.",
    image: "/images/showcase/cycling.jpg",
    tags: ["Spin", "Leg Power", "Stamina"],
  },
  {
    id: "yoga",
    title: "Yoga & Stretching",
    category: "Mobility & Recovery",
    description:
      "Deep stretches, mobility flow, and core stability to prevent injury and accelerate muscular recovery.",
    image: "/images/showcase/yoga-stretching.jpg",
    tags: ["Mobility", "Recovery", "Flexibility"],
  },
  {
    id: "cardio",
    title: "Cardio Conditioning",
    category: "Heart & Stamina",
    description:
      "Treadmills, jump ropes, and sustained aerobic stations designed to maximize heart health and athletic conditioning.",
    image: "/images/showcase/cardio-treadmill.jpg",
    tags: ["Treadmill", "Jump Rope", "Conditioning"],
  },
];

export const WHY_CHOOSE_US = [
  {
    number: "01",
    title: "Structured Weekly Workout Routines",
    description:
      "Never wander aimlessly around the gym. Follow a disciplined, balanced weekly split that alternates upper body, lower body, boxing, cardio, and active recovery.",
  },
  {
    number: "02",
    title: "Dedicated Coaching Support",
    description:
      "Take your training further with our Monthly Coaching Membership, offering form guidance, encouragement, and accountability every single week.",
  },
  {
    number: "03",
    title: "Flexible Membership Options",
    description:
      "From single-day drop-ins to weekend access (Friday–Sunday) and all-inclusive monthly plans, choose the tier that fits your life and schedule.",
  },
  {
    number: "04",
    title: "Energising Group Fitness & Friday Games",
    description:
      "Join boxing, aerobics, cycling, and our signature Friday Games at 6:00 PM. Train surrounded by a community that pushes you to give your best.",
  },
  {
    number: "05",
    title: "Motivating & Disciplined Environment",
    description:
      "Rooted in Ayobo, Lagos, Mega Gym is built for real people committed to real progress. No fluff, no excuses—just pure athletic energy.",
  },
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    title: "Mega Gym Heavy Iron & Barbell Zone",
    category: "Strength",
    src: "/images/gym-interior.jpg",
    alt: "Gym training floor with barbell racks and weight plates",
  },
  {
    id: 2,
    title: "Dumbbells & Free Weights Rack",
    category: "Strength",
    src: "/images/showcase/dumbbells.jpg",
    alt: "Heavy dumbbells lined up in training facility",
  },
  {
    id: 3,
    title: "Boxing & Combat Training Rig",
    category: "Combat",
    src: "/images/showcase/boxing.jpg",
    alt: "Athlete hitting punch bag in gym",
  },
  {
    id: 4,
    title: "High Intensity Cardio & Treadmills",
    category: "Cardio",
    src: "/images/showcase/cardio-treadmill.jpg",
    alt: "Runner training on treadmill during workout session",
  },
  {
    id: 5,
    title: "Group Aerobics & Movement Floor",
    category: "Community",
    src: "/images/showcase/aerobics.jpg",
    alt: "Fitness class working out together",
  },
  {
    id: 6,
    title: "Heavy Barbell Strength Conditioning",
    category: "Strength",
    src: "/images/showcase/strength-training.jpg",
    alt: "Athlete lifting heavy barbells",
  },
  {
    id: 7,
    title: "Dedicated Coach-Guided Training",
    category: "Coaching",
    src: "/images/showcase/coach-training.jpg",
    alt: "Trainer coaching client on proper form",
  },
  {
    id: 8,
    title: "Indoor Cycling & Speed Intervals",
    category: "Cardio",
    src: "/images/showcase/cycling.jpg",
    alt: "Spinning bikes in gym studio",
  },
  {
    id: 9,
    title: "Friday Games Community Energy",
    category: "Community",
    src: "/images/showcase/friday-games.jpg",
    alt: "Athletes laughing and celebrating workout completion",
  },
];
