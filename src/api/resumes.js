
export default async function handler(req, res) {
    // Mock database of resume options
    const resumes = [
      { id: 1, name: "Web Developer Resume", link: "/resumes/web-developer.pdf" },
      { id: 2, name: "Java Developer Resume", link: "/resumes/java-developer.pdf" },
      { id: 3, name: "Python Developer Resume", link: "/resumes/python-developer.pdf" },
      { id: 4, name: "Custom Resume (Request)" },
    ];
  
    // Handle GET requests
    if (req.method === "GET") {
      return res.status(200).json(resumes);
    }
  
    // Handle unsupported methods
    res.setHeader("Allow", ["GET"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
  