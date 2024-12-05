const blogs=[
    {title:"Understanding JavaScript Closures", category: "tech" },
    { title: "Top 10 Travel Destinations for 2024", category: "travel" },
    { title: "Improving Your Work-Life Balance", category: "lifestyle" },
    { title: "Getting Started with React", category: "tech" },
    { title: "Packing Tips for Long Trips", category: "travel" },
    { title: "Healthy Eating Habits", category: "lifestyle" },
    { title: "Mastering CSS Grid Layout", category: "tech" },
    { title: "The Best Beaches in Southeast Asia", category: "travel" },
    { title: "10 Ways to Stay Productive Working from Home", category: "lifestyle" },
    { title: "Understanding Async/Await in JavaScript", category: "tech" },
    { title: "How to Travel on a Budget", category: "travel" },
    { title: "Building Better Relationships at Work", category: "lifestyle" },
    { title: "Introduction to TypeScript", category: "tech" },
    { title: "Top 5 Road Trip Destinations in the USA", category: "travel" },
    { title: "Mindfulness Practices for Daily Life", category: "lifestyle" },
    { title: "Deploying Applications with Docker", category: "tech" },
    { title: "A Complete Guide to European Travel", category: "travel" },
    { title: "Creating a Morning Routine for Success", category: "lifestyle" },
    { title: "Optimizing Performance in React Applications", category: "tech" },
    { title: "Exploring Hidden Gems in South America", category: "travel" },
    { title: "The Benefits of Journaling Every Day", category: "lifestyle" },
    { title: "A Beginner’s Guide to Webpack", category: "tech" },
    { title: "Island-Hopping Adventures in the Philippines", category: "travel" },
    { title: "How to Create a Balanced Diet Plan", category: "lifestyle" },
    { title: "Building RESTful APIs with Node.js", category: "tech" },
    { title: "The Most Scenic Hiking Trails in the World", category: "travel" },
    { title: "Simple Steps to Declutter Your Space", category: "lifestyle" },
    { title: "Exploring the World of Machine Learning", category: "tech" },
    { title: "Cultural Experiences You Shouldn’t Miss in India", category: "travel" },
    { title: "Daily Habits for Mental Well-being", category: "lifestyle" }
  ];
  

const searchInput=document.getElementById("searchInput");
const filter=document.getElementById("filter");
const resultContainer=document.getElementById("resultContainer");

function displayResults(filteredBlogs){
  resultContainer.innerHTML= "";
  if(filteredBlogs.length===0){
    resultContainer.innerHTML="<h3>No results found.</h3>";
    return;
  }
  filteredBlogs.forEach((blog)=>{
    const div=document.createElement("div");
    div.className="resultItem";
    div.textContent=blog.title;
    resultContainer.appendChild(div);
  });
}

function filterBlogs(){
  console.log("filter")
  const searchTerm=searchInput.value.toLowerCase();
  const selectedCategory=filter.value;

  const filteredBlogs=blogs.filter((blog)=>{
    const matchesCategory=selectedCategory === "all" || blog.category === selectedCategory;
    const matchesSearch=blog.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
  displayResults(filteredBlogs);
}

searchInput.addEventListener("input", filterBlogs);
filter.addEventListener("change", filterBlogs);

displayResults(blogs);