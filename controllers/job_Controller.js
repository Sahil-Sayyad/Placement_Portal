const url = 'https://www.themuse.com/api/public/jobs?category=Software%20Engineering&page=2';


// Route to fetch jobs 
module.exports.fetch = async (req, res) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return res.render('job_list', {
        title:"job",
        data:data
    })
  } catch (error) {
    console.error('Error fetching jobs:', error);
    res.status(500).json({ error: 'Error fetching jobs' });
  }
};


