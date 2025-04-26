const jobs = [
    {
      id: 1,
      title: "T-Shirt Print for Youth Summit",
      image: "https://via.placeholder.com/400x250?text=T-Shirt+Print",
      description: "Custom t-shirts for a youth empowerment summit."
    },
    {
      id: 2,
      title: "Vehicle Branding - Logistics Van",
      image: "https://via.placeholder.com/400x250?text=Vehicle+Branding",
      description: "Eye-catching branding for a logistics company vehicle."
    },
    {
      id: 3,
      title: "Large Format Banner for Church Event",
      image: "https://via.placeholder.com/400x250?text=Banner+Design",
      description: "Designed and printed 12ft banner for a special service."
    },
    {
      id: 4,
      title: "Corporate Flyer Design",
      image: "https://via.placeholder.com/400x250?text=Flyer+Design",
      description: "Sleek flyer for a tech company's service announcement."
    },
    {
      id: 5,
      title: "Monogrammed Polos",
      image: "https://via.placeholder.com/400x250?text=Monogramming",
      description: "Branded polo shirts with company logo embroidery."
    },
    {
      id: 6,
      title: "School Yearbook Layout",
      image: "https://via.placeholder.com/400x250?text=Yearbook+Design",
      description: "A 60-page customized yearbook for a private school."
    },
  ];
  
  function Catalogue() {
    return (
      <div className="py-16 px-6 container mx-auto">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-10">Job Catalogue</h1>
  
        <div className="grid md:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-lg shadow-md hover:shadow-lg transition">
              <img src={job.image} alt={job.title} className="w-full h-48 object-cover rounded-t-lg" />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-blue-600">{job.title}</h3>
                <p className="text-gray-600 mt-2">{job.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  export default Catalogue;
  