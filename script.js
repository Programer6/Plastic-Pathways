let currentStep = 0;

const steps = [
  {
    title: "Thrown Away",
    description: "You throw the bottle in the trash. But where does it go from here?",
    image: "thrown_away.png"
  },
  {
    title: "Landfill",
    description: "The bottle ends up in a landfill, taking hundreds of years to decompose.",
    image: "landfill.jpg"
  },
  {
    title: "Into the Ocean",
    description: "Wind and rain transport some plastic from landfills into rivers and then the ocean.",
    image: "into_ocean.png"
  },
  {
    title: "Marine Life Impact",
    description: "The bottle breaks into microplastics, which are ingested by marine life.",
    image: "marine_life_impact.webp"
  }
];

function nextStep() {
  currentStep = (currentStep + 1) % steps.length;
  document.getElementById("stepTitle").innerText = steps[currentStep].title;
  document.getElementById("stepDescription").innerText = steps[currentStep].description;
  document.getElementById("stepImage").src = steps[currentStep].image;
  
  const indicators = document.querySelectorAll(".dot");
  indicators.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentStep);
  });
}
