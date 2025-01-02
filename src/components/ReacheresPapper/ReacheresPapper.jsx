import React from 'react';
const papersData = [
  {
    title: "The Impact of Climate Change on Agriculture",
    authors: "John Doe, Jane Smith",
    abstract:
      "This research explores the effects of climate change on global agricultural productivity.",
    date: "2024-12-20",
    link: "https://example.com/research-paper-1",
  },
  {
    title: "Advancements in Artificial Intelligence",
    authors: "Alice Johnson, Mark Lee",
    abstract: "A comprehensive review of recent AI technologies and applications.",
    date: "2024-11-15",
    link: "https://example.com/research-paper-2",
  },
  {
    title: "Renewable Energy: Challenges and Opportunities",
    authors: "Michael Brown, Emily Davis",
    abstract:
      "An in-depth analysis of the current challenges and future opportunities in renewable energy development.",
    date: "2024-10-10",
    link: "https://example.com/research-paper-3",
  },
  {
    title: "Machine Learning in Healthcare",
    authors: "Laura Wilson, Kevin Thompson",
    abstract:
      "This study examines the application of machine learning algorithms in improving healthcare systems.",
    date: "2024-09-05",
    link: "https://example.com/research-paper-4",
  },
];


const ResearchPapers = () => (
  <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 text-center my-8">
          Recommended Research Papers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {papersData.map((paper, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 border hover:shadow-xl transition 
              duration-300 "
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                {paper.title}
              </h3>
              <p className="text-gray-700 mb-4">{paper.abstract}</p>
              <p className="text-sm text-gray-500">
                <strong>Author(s):</strong> {paper.authors}
              </p>
              <p className="text-sm text-gray-500 mb-4">
                <strong>Published:</strong> {paper.date}
              </p>
              <a
                href={paper.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-white bg-blue-600 hover:bg-blue-700 py-2 px-4 w-1/2 x rounded"
              >
                View Paper
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default ResearchPapers;
  