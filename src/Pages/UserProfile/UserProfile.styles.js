// src/Pages/UserProfile/UserProfile.styles.js
import styled from "styled-components";

export const ProfileContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 32px 16px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 25px;
  margin-bottom: 24px;
`;

export const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 4px solid #30363d;
`;

export const Name = styled.h1`
  color: #77d684;
  font-size: 22px;
  margin: 0 0 4px;
`;

export const Username = styled.p`
  font-size: 15px;
  margin: 0 0 8px;
`;

export const Bio = styled.p`
  color: #748799;
  font-size: 14px;
  margin: 0;
`;

export const Stats = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 16px;
`;

export const Stat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StatValue = styled.span`
  color: #9d9dad;
  font-size: 20px;
  font-weight: 600;
`;

export const StatLabel = styled.span`
  color: #8b949e;
  font-size: 18px;
`;

export const Location = styled.p`
  color: #ff0101;
  font-size: 14px;
  margin-bottom: 20px;
`;

export const Company = styled.p`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const Website = styled.a`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #58a6ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const Twitter = styled.a`
  margin-top: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  color: #58a6ff;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

// import styled from "styled-components";

export const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  margin-top: 20px;
  padding: 12px 20px;

  background: #24292f;
  color: white;

  border-radius: 8px;
  text-decoration: none;

  font-size: 15px;
  font-weight: 600;

  transition: all 0.3s ease;

  svg {
    font-size: 20px;
  }

  &:hover {
    background: #000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ProfileStatus = styled.p`
  color: #1b2633;
  text-align: center;
  margin-top: 40px;
`;

// Original jsx mein error wale <p> pe DONO classes lagti thi:
// className="profile-status profile-error" - matlab text-align/margin-top
// profile-status se aata tha, aur sirf color profile-error se override
// hota tha. Styled-components mein isko "styled(ProfileStatus)" se replicate
// karte hain - yeh ProfileStatus ke saare styles ke upar bas color change
// karega.
export const ProfileError = styled(ProfileStatus)`
  color: #f85149;
`;
