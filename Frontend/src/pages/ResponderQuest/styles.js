import styled from "styled-components";

// Container for the entire form
export const Container = styled.div`
  padding: 16px; // Padding for the container
  max-width: 600px; // Limit max width
  margin: auto; // Center container
`;

// Content for title and opening text
export const Content = styled.div`
  margin-bottom: 20px; // Space below
`;

// Title for the page
export const titlePage = styled.h1`
  font-size: 24px; // Adjust size
  text-align: center; // Center text
`;

// Opening text
export const textoAbertura = styled.p`
  font-size: 16px; // Smaller font for mobile
  text-align: center; // Center text
`;

// Content for questions
export const ContentQuest = styled.div`
  padding: 10px; // Inner padding
`;

// Title for the questions section
export const titleQuest = styled.h2`
  font-size: 20px; // Adjust size for mobile
  text-align: center; // Center title
`;

// Line separator
export const line = styled.hr`
  margin: 10px 0; // Space above and below
`;

// Container for questions
export const PerguntasQuest = styled.div`
  margin-top: 15px; // Space above questions
`;

// Question box
export const QuestionBox = styled.div`
  background-color: #f9f9f9; // Light background for questions
  border: 1px solid #ddd; // Border for the box
  border-radius: 8px; // Rounded corners
  padding: 15px; // Inner padding
  margin-bottom: 15px; // Space between questions
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); // Subtle shadow

  // Responsive sizing
  width: 100%; // Full width
  max-width: 500px; // Max width to contain the box
  margin: 0 auto; // Center the box
  transition: all 0.3s; // Smooth transitions for responsiveness

  @media (max-width: 768px) {
    padding: 12px; // Adjust padding for medium screens
  }

  @media (max-width: 480px) {
    padding: 10px; // Adjust padding for small screens
    max-width: 90%; // Allow more width on very small screens
  }
`;

// Button container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // Center the button
  margin-top: 20px; // Space above button
`;

// Add media queries for global styles
export const mobileStyles = `
  @media (max-width: 480px) {
    ${Container} {
      padding: 8px;
    }

    ${titlePage}, ${titleQuest} {
      font-size: 18px;
    }

    ${textoAbertura} {
      font-size: 14px;
    }

    ${ButtonContainer} {
      margin-top: 15px;
    }
  }
`;

