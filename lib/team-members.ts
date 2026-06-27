/** Bump version when a team photo file is replaced (same filename) to bust browser/CDN cache. */
export const TEAM_IMAGE_VERSIONS: Record<string, string> = {
  dema: "20250627",
};

export function teamImage(filename: string) {
  const version = TEAM_IMAGE_VERSIONS[filename.replace(/\.[^.]+$/, "")];
  return version ? `/team/${filename}?v=${version}` : `/team/${filename}`;
}

export const teamMembers = [
  {
    name: "Dema",
    role: "Managing Director",
    img: teamImage("dema.jpg"),
    tagline: "Leading with heart, inspiring with action!",
    bio: [
      "Dema is the heart and vision behind Bedurya Community Care Services, serving as our passionate Managing Director. With over six years of experience as both a Registered Nurse and Enrolled Nurse, Dema brings deep expertise in mental health, community care, and palliative care—ensuring our services are professional, compassionate, and truly person-centred.",
      "Guided by Buddhist principles, Dema approaches leadership with selflessness, kindness, and a lifelong commitment to making a positive difference in the community. Under Dema's guidance, Bedurya isn't just a care service—it's a place where people are supported, empowered, and valued.",
    ],
    expertise: ["Mental Health", "Community Care", "Palliative Care", "Leadership"],
    color: "#1E4D7B",
    quote:
      "Bedurya isn't just a care service—it's a place where people are supported, empowered, and valued. Guided by Buddhist principles, I approach leadership with selflessness, kindness, and a lifelong commitment to making a positive difference in the community.",
  },
  {
    name: "Karma",
    role: "Compliance & Quality Manager",
    img: teamImage("karma.jpg"),
    tagline: "With Karma on the team, quality isn't just a requirement—it's a promise.",
    bio: [
      "Karma brings both heart and expertise to her role as Compliance and Quality Manager at Bedurya Community Care Services. With over five years of experience as a Registered Nurse across a variety of clinical settings—including community care—she knows what quality care truly looks like on the ground.",
      "She's passionate about making sure everything we do meets the highest standards of safety, quality, and NDIS compliance—so our participants receive care they can truly trust. Her strong clinical background, combined with in-depth knowledge of NDIS regulations, gives Bedurya a real edge.",
      "Driven, detail-oriented, and deeply compassionate, Karma is committed to making a real difference—helping Bedurya deliver care that is safe, trustworthy, and always centred around the people we support.",
    ],
    expertise: ["NDIS Compliance", "Quality Management", "Clinical Governance", "Community Care"],
    color: "#B45309",
    quote:
      "Quality isn't just a requirement—it's a promise. I'm passionate about making sure everything we do meets the highest standards of safety and NDIS compliance, so our participants receive care they can truly trust.",
  },
  {
    name: "Sonam",
    role: "Business Development Manager",
    img: teamImage("sonam.jpg"),
    tagline: "With Sonam on your side, every step of your journey is guided, supported, and full of possibilities!",
    bio: [
      "Sonam is our energetic Business Development Manager, bringing over six years of experience as a Registered Nurse across aged care, community nursing, and hospital settings. She combines deep expertise with a passion for helping people thrive.",
      "Working closely with participants, Sonam helps develop and coordinate personalised NDIS plans—turning goals into achievable steps and dreams into reality.",
    ],
    expertise: ["NDIS Planning", "Aged Care", "Community Nursing", "Business Development"],
    color: "#4A7C59",
    quote:
      "Every step of your journey is guided, supported, and full of possibilities. Working closely with participants, I help turn goals into achievable steps and dreams into reality.",
  },
] as const;

export const teamPreview = teamMembers.map(({ name, role, img }) => ({ name, role, img }));

export const teamTestimonials = teamMembers.map(({ name, role, img, quote }) => ({
  name,
  designation: role,
  src: img,
  quote,
}));
