import styled from "@emotion/styled";
import { Box, Container, Link, Typography } from "@mui/material";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaFacebook,
  FaFile,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 90px;
  background: #181818;
`;

const iconStyles = {
  color: "#a3a3a3",
marginLeft: "10px",
marginRight: "10px",
  fontSize: "2rem",
  transition: "all ease-in-out 200ms",
  cursor: "pointer",
  textDecoration: "none",
  "&:hover": {
    color: "white",
  },
};

const Footer = () => {
  return (
    <FooterContainer>
      <Typography
        variant="p"
        sx={{
          color: "#a3a3a3",
          marginTop: "10px",
          marginBottom: "15px",
          wordBreak: "unset",
          fontStyle: "italic",
        }}
      >
        Developed by Rafael Nóbrega on Aug 15th, 2022.
      </Typography>
      <Box>
        <Link
          sx={iconStyles}
          href="https://www.linkedin.com/in/rafnobrega/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin sx={{ color: "red", textDecoration: "none" }} />
        </Link>
        <Link
          sx={iconStyles}
          href="https://github.com/rafnobrega"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub />
        </Link>
        <Link
          sx={iconStyles}
          href="https://www.canva.com/design/DAFD7z7OF0o/k4ZRfi6PE14Z_nAV1jEwNg/view?utm_content=DAFD7z7OF0o&utm_campaign=designshare&utm_medium=link&utm_source=publishsharelink"
          rel="noreferrer"
          target="_blank"
        >
          <FaFile />
        </Link>
        <Link
          href="mailto:rafael.rlnr@outlook.com"
          rel="noreferrer"
          sx={iconStyles}
        >
          <MdEmail />
        </Link>
      </Box>
    </FooterContainer>
  );
};

export default Footer;
