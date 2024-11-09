import styled from "styled-components";

// Container for the entire form
export const Container = styled.div`
  padding: 16px; // Padding for the container
  margin: auto; // Center container
  @media (max-width: 768px) {
    padding: 12px;
  }

  // Media query for mobile devices
  @media (max-width: 480px) {
    padding: 8px;
  }
`;

// Content for title and opening text
export const Content = styled.div`
  margin-bottom: 20px; // Space below
  @media (max-width: 480px) {
    margin-bottom: 16px; // Adjust margin for smaller screens
  }
`;

// Title for the page
export const titlePage = styled.h1`
  font-size: 24px; // Adjust size
  text-align: center; // Center text
  @media (max-width: 768px) {
    font-size: 22px;
  }

  @media (max-width: 480px) {
    font-size: 20px;
  }
`;

// Opening text
export const textoAbertura = styled.p`
  font-size: 16px; // Smaller font for mobile
  text-align: center; // Center text

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
  }
`;

// Content for questions
export const ContentQuest = styled.div`
  padding: 10px; // Inner padding
  @media (max-width: 480px) {
    padding: 8px;
  }
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

// Button container
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center; // Center the button
  margin-top: 20px; // Space above button
`;
