import React from 'react';
import inputImage from '/src/assets/bookrecommender_pics/recommendinput.png';
import outputImage from '/src/assets/bookrecommender_pics/recommendoutput.png';

function Project1() {
  return (
    <div className="container text-center mt-5">
      <h1 className="mb-4">Book Recommender System</h1>
      <p className="mt-3">
        The Book Recommender System helps users find books similar to the ones they already enjoy. Using machine learning algorithms, it suggests titles based on similarities in authors, categories, and descriptions.
      </p>

      <h2 className="mt-5">How It Works</h2>
      <div id = "howitwp1">
      <p className="mt-3">
        The system uses a dataset of books containing titles, authors, categories, descriptions, and publication years.
      </p>
      <p>
        Features like the author's name and description are weighted and combined to create a unique vector for each book.
      </p>
      <p>
        The system uses the TF-IDF vectorizer and cosine similarity to find books most similar to the one entered by the user.
      </p>
      <p>
        The top 30 similar books are listed, excluding the input book itself.
      </p>
      </div>

      <h2 className="mt-5">System Workflow</h2>
      <p className="mt-3">1. The user enters the title of a book.</p>
      <p>2. The system searches for a close match in the dataset.</p>
      <p>3. If a match is found, the system calculates similarity scores for all books and displays the top recommendations.</p>

      <h2 className="mt-5">Screenshots</h2>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <div className="image-container mx-3">
          <img src={inputImage} alt="User Input Form" className="project-image" />
          <p className="screenshot-caption">User Input Form</p>
        </div>
        <div className="image-container mx-3">
          <img src={outputImage} alt="Recommendation Results" className="project-image" />
          <p className="screenshot-caption">Recommendation Results</p>
        </div>
      </div>

      <h2 className="mt-5">Key Features</h2>
      <ul className="key-features list-unstyled">
        <li> Personalized recommendations based on book content</li>
        <li> Advanced similarity calculations using cosine similarity</li>
        <li> Easy-to-use interface for entering book names</li>
        <li> Support for multiple genres and authors</li>
        <li> Displays author name and publication date along with the title</li>
      </ul>

      <h2 className="mt-5">Technologies Used</h2>
      <p className="mt-3">Python, PyScript, Pandas, TF-IDF Vectorizer, Cosine Similarity</p>

      <div className="mt-5">
        <a
          href="https://github.com/an301/Book_Recommender"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary mx-2"
        >
          View on GitHub
        </a>
        <a
          href="https://an301.github.io/Book_Recommender/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary mx-2"
        >
          Open Recommender Website
        </a>
      </div>
    </div>
  );
}

export default Project1;
