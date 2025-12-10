import React, { useState } from "react";
import {
  ChakraProvider,
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Grid,
  GridItem,
  Image,
  Icon,
  Link,
  Flex,
  Badge,
  Card,
  CardBody,
  CardHeader,
  Divider,
  Avatar,
  IconButton,
  useColorMode,
  useColorModeValue,
  Stack,
  Progress,
} from "@chakra-ui/react";
import {
  ExternalLink,
  Mail,
  Linkedin,
  Github,
  Moon,
  Sun,
  Code,
  Briefcase,
  GraduationCap,
  User,
  Home,
  MessageSquare,
} from "lucide-react";

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("home");
  const { colorMode, toggleColorMode } = useColorMode();

  const bgColor = useColorModeValue("gray.50", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const textColor = useColorModeValue("gray.800", "white");
  const accentColor = useColorModeValue("blue.600", "blue.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  const skills = {
    Frontend: [
      "JavaScript/ES6",
      "TypeScript",
      "React",
      "Redux",
      "HTML/CSS",
      "Chakra UI",
      "Material-UI",
    ],
    Backend: ["Node.js", "Java Spring Boot", "Express.js", "REST API", "JPA"],
    Database: ["MongoDB", "MySQL/SQL", "MariaDB", "NoSQL", "Redis"],
    DevOps: ["Docker", "Kubernetes", "Jenkins", "CI/CD", "Spinnaker", "AWS"],
    Tools: [
      "Git/GitHub/GitLab",
      "Jest/Mockito",
      "Swagger",
      "Liquibase",
      "Version Control",
    ],
  };

  const experience = [
    {
      title: "Software Engineer",
      company: "Copart UK",
      location: "United Kingdom • Hybrid",
      period: "May 2024 - Present",
      achievements: [
        "Developed Auto Audit, a claims settlement platform achieving 25% improvement in delivery time",
        "Built backend architecture using SOLID principles with Java Spring Boot and JPA",
        "Implemented Redis caching for enhanced scalability",
        "Created CI/CD pipeline using Jenkins and Spinnaker",
        "Developed comprehensive Swagger API documentation",
      ],
    },
    {
      title: "Software Engineer",
      company: "Nextbridge Ltd.",
      location: "Pakistan • Onsite",
      period: "Mar 2021 - Sept 2022",
      achievements: [
        "Developed E-commerce application using MERN stack and Docker",
        "Built web-based list application improving team collaboration by 25%",
        "Implemented Redux toolkit for optimized performance",
        "Conducted unit testing and TDD for error-free experience",
        "Deployed applications using Docker containers",
      ],
    },
  ];

  const projects = [
    {
      name: "Auto Audit Platform",
      description:
        "Web-based claims settlement platform for handling salvage category vehicles",
      tech: [
        "React",
        "TypeScript",
        "Java Spring Boot",
        "MariaDB",
        "Redis",
        "Docker",
      ],
      impact: "25% improvement in project delivery time",
    },
    {
      name: "Market Place",
      description: "Full-stack microservices-based e-commerce platform",
      tech: ["React", "Node.js", "MongoDB", "Docker Compose", "Express.js"],
      impact: "Microservices architecture for scalability",
    },
    {
      name: "Group Captain",
      description:
        "Collaborative list management tool built with Agile methodology",
      tech: ["React", "Node.js", "Material-UI", "Redux"],
      impact: "25% improvement in team collaboration",
    },
  ];

  const education = [
    {
      degree: "Master of Science: Cyber Security Management",
      institution: "University of Law",
      location: "London, United Kingdom",
      period: "Sep 2022 - Oct 2023",
    },
    {
      degree: "Bachelor of Science: Computer Science",
      institution: "University of Management and Technology",
      location: "Lahore, Pakistan",
      period: "Jan 2017 - Feb 2021",
    },
  ];

  const imgLink =
    "https://media.licdn.com/dms/image/v2/D4E03AQGPdqx5bnojnw/profile-displayphoto-crop_800_800/B4EZpHOljNKYAI-/0/1762131599050?e=1767225600&v=beta&t=1OEgtLGG7oXykLvRYjz5J5vgiKCPQ42PkTOKF6OFZYI";

  const NavButton = ({ section, icon, label }) => (
    <Button
      leftIcon={<Icon as={icon} />}
      onClick={() => setActiveSection(section)}
      variant={activeSection === section ? "solid" : "ghost"}
      colorScheme={activeSection === section ? "blue" : "gray"}
      size="md"
      fontWeight="semibold"
    >
      {label}
    </Button>
  );

  const renderHome = () => (
    <VStack spacing={8} align="stretch" py={12}>
      <Flex direction={{ base: "column", md: "row" }} align="center" gap={8}>
        <Avatar
          size="2xl"
          name="Syed Hasnain Kazmi"
          src={imgLink} // User can add their image URL here
          border="4px solid"
          borderColor={accentColor}
        />
        <VStack align={{ base: "center", md: "start" }} spacing={4} flex={1}>
          <Heading
            size="2xl"
            bgGradient="linear(to-r, blue.400, purple.500)"
            bgClip="text"
          >
            Syed Hasnain Kazmi
          </Heading>
          <Text fontSize="xl" color="gray.500" fontWeight="medium">
            Full-Stack Software Engineer
          </Text>
          <HStack spacing={4}>
            <Badge colorScheme="green" fontSize="md" px={3} py={1}>
              Available for Work
            </Badge>
            <Badge colorScheme="blue" fontSize="md" px={3} py={1}>
              Remote, Hybrid, Onsite
            </Badge>
            <Badge colorScheme="pink" fontSize="md" px={3} py={1}>
              United Kingdom
            </Badge>
          </HStack>
        </VStack>
      </Flex>

      <Card bg={cardBg} shadow="lg" borderWidth="1px" borderColor={borderColor}>
        <CardBody>
          <Text fontSize="lg" lineHeight="tall" color={textColor}>
            Experienced Software Engineer with a proven track record of
            delivering high-quality solutions. Skilled in full-stack development
            with a focus on developing robust and scalable web applications.
            Dedicated to leveraging emerging technologies to create innovative
            software solutions. Effective communicator and collaborator
            committed to continuous learning and professional growth.
          </Text>
        </CardBody>
      </Card>

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        <Card
          bg={cardBg}
          shadow="md"
          _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
          transition="all 0.3s"
        >
          <CardBody textAlign="center">
            <Icon as={Briefcase} w={12} h={12} color={accentColor} mb={3} />
            <Heading size="md" mb={2}>
              3+ Years
            </Heading>
            <Text color="gray.500">Experience</Text>
          </CardBody>
        </Card>
        <Card
          bg={cardBg}
          shadow="md"
          _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
          transition="all 0.3s"
        >
          <CardBody textAlign="center">
            <Icon as={Code} w={12} h={12} color={accentColor} mb={3} />
            <Heading size="md" mb={2}>
              5+ Projects
            </Heading>
            <Text color="gray.500">Completed</Text>
          </CardBody>
        </Card>
        <Card
          bg={cardBg}
          shadow="md"
          _hover={{ shadow: "xl", transform: "translateY(-4px)" }}
          transition="all 0.3s"
        >
          <CardBody textAlign="center">
            <Icon as={GraduationCap} w={12} h={12} color={accentColor} mb={3} />
            <Heading size="md" mb={2}>
              2 Degrees
            </Heading>
            <Text color="gray.500">MSc & BSc</Text>
          </CardBody>
        </Card>
      </Grid>

      <HStack spacing={4} justify="center">
        <Link href="mailto:hasnainkazmi47@gmail.com" isExternal>
          <Button leftIcon={<Icon as={Mail} />} colorScheme="blue" size="lg">
            Contact Me
          </Button>
        </Link>
        <Link href="https://www.linkedin.com/in/syed-hasnain-kazmi" isExternal>
          <IconButton
            icon={<Icon as={Linkedin} />}
            colorScheme="blue"
            size="lg"
            aria-label="LinkedIn"
          />
        </Link>
      </HStack>
    </VStack>
  );

  const renderSkills = () => (
    <VStack spacing={8} align="stretch" py={8}>
      <Heading size="xl" textAlign="center" mb={4}>
        Technical Skills
      </Heading>
      {Object.entries(skills).map(([category, skillList]) => (
        <Card
          key={category}
          bg={cardBg}
          shadow="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardHeader>
            <Heading size="md" color={accentColor}>
              {category}
            </Heading>
          </CardHeader>
          <CardBody>
            <Flex flexWrap="wrap" gap={3}>
              {skillList.map((skill) => (
                <Badge
                  key={skill}
                  colorScheme="blue"
                  fontSize="md"
                  px={4}
                  py={2}
                  borderRadius="full"
                  _hover={{ transform: "scale(1.05)", shadow: "md" }}
                  transition="all 0.2s"
                  cursor="pointer"
                >
                  {skill}
                </Badge>
              ))}
            </Flex>
          </CardBody>
        </Card>
      ))}

      <Divider my={4} />

      <Heading size="xl" textAlign="center" mb={4}>
        Soft Skills
      </Heading>
      <Card bg={cardBg} shadow="lg" borderWidth="1px" borderColor={borderColor}>
        <CardBody>
          <Flex flexWrap="wrap" gap={3} justify="center">
            {[
              "Communication",
              "Problem Solving",
              "Time Management",
              "Attention to Detail",
              "Cross-Functional Collaboration",
              "Teamwork",
              "Client Engagement",
              "Creativity",
              "Quick Learner",
              "Adaptability",
            ].map((skill) => (
              <Badge
                key={skill}
                colorScheme="purple"
                fontSize="md"
                px={4}
                py={2}
                borderRadius="full"
                _hover={{ transform: "scale(1.05)", shadow: "md" }}
                transition="all 0.2s"
                cursor="pointer"
              >
                {skill}
              </Badge>
            ))}
          </Flex>
        </CardBody>
      </Card>
    </VStack>
  );

  const renderExperience = () => (
    <VStack spacing={8} align="stretch" py={8}>
      <Heading size="xl" textAlign="center" mb={4}>
        Professional Experience
      </Heading>
      {experience.map((exp, idx) => (
        <Card
          key={idx}
          bg={cardBg}
          shadow="lg"
          borderWidth="1px"
          borderColor={borderColor}
          borderLeftWidth="4px"
          borderLeftColor={accentColor}
        >
          <CardHeader>
            <VStack align="start" spacing={2}>
              <Heading size="lg">{exp.title}</Heading>
              <Text fontSize="xl" fontWeight="bold" color={accentColor}>
                {exp.company}
              </Text>
              <HStack>
                <Badge colorScheme="blue">{exp.location}</Badge>
                <Badge colorScheme="green">{exp.period}</Badge>
              </HStack>
            </VStack>
          </CardHeader>
          <CardBody>
            <VStack align="start" spacing={3}>
              {exp.achievements.map((achievement, i) => (
                <HStack key={i} align="start">
                  <Box
                    w={2}
                    h={2}
                    bg={accentColor}
                    borderRadius="full"
                    mt={2}
                    flexShrink={0}
                  />
                  <Text>{achievement}</Text>
                </HStack>
              ))}
            </VStack>
          </CardBody>
        </Card>
      ))}
    </VStack>
  );

  const renderProjects = () => (
    <VStack spacing={8} align="stretch" py={8}>
      <Heading size="xl" textAlign="center" mb={4}>
        Featured Projects
      </Heading>
      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        {projects.map((project, idx) => (
          <Card
            key={idx}
            bg={cardBg}
            shadow="lg"
            borderWidth="1px"
            borderColor={borderColor}
            _hover={{ shadow: "2xl", transform: "translateY(-8px)" }}
            transition="all 0.3s"
          >
            <CardHeader>
              <Heading size="md">{project.name}</Heading>
            </CardHeader>
            <CardBody>
              <VStack align="start" spacing={4}>
                <Text color="gray.600">{project.description}</Text>
                <Flex flexWrap="wrap" gap={2}>
                  {project.tech.map((tech) => (
                    <Badge key={tech} colorScheme="cyan" fontSize="sm">
                      {tech}
                    </Badge>
                  ))}
                </Flex>
                <Badge colorScheme="green" fontSize="sm" px={3} py={1}>
                  {project.impact}
                </Badge>
              </VStack>
            </CardBody>
          </Card>
        ))}
      </Grid>
    </VStack>
  );

  const renderEducation = () => (
    <VStack spacing={8} align="stretch" py={8}>
      <Heading size="xl" textAlign="center" mb={4}>
        Education
      </Heading>
      {education.map((edu, idx) => (
        <Card
          key={idx}
          bg={cardBg}
          shadow="lg"
          borderWidth="1px"
          borderColor={borderColor}
        >
          <CardBody>
            <VStack align="start" spacing={3}>
              <Heading size="md" color={accentColor}>
                {edu.degree}
              </Heading>
              <Text fontSize="lg" fontWeight="semibold">
                {edu.institution}
              </Text>
              <HStack>
                <Badge colorScheme="purple">{edu.location}</Badge>
                <Badge colorScheme="blue">{edu.period}</Badge>
              </HStack>
            </VStack>
          </CardBody>
        </Card>
      ))}
    </VStack>
  );

  const renderContact = () => (
    <VStack spacing={8} align="stretch" py={8}>
      <Heading size="xl" textAlign="center" mb={4}>
        Get In Touch
      </Heading>
      <Card
        bg={cardBg}
        shadow="lg"
        borderWidth="1px"
        borderColor={borderColor}
        maxW="2xl"
        mx="auto"
        w="full"
      >
        <CardBody>
          <VStack spacing={6}>
            <Avatar
              size="2xl"
              name="Syed Hasnain Kazmi"
              src={imgLink} // User can add their image URL here
              border="2px solid"
              borderColor={accentColor}
            />
            <Heading size="lg">Let's Work Together</Heading>
            <Text textAlign="center" color="gray.600">
              I'm always interested in hearing about new projects and
              opportunities.
            </Text>
            <Divider />
            <VStack spacing={4} w="full">
              <Link href="mailto:hasnainkazmi47@gmail.com" w="full">
                <Button
                  leftIcon={<Icon as={Mail} />}
                  colorScheme="blue"
                  size="lg"
                  w="full"
                >
                  hasnainkazmi47@gmail.com
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/syed-hasnain-kazmi"
                isExternal
                w="full"
              >
                <Button
                  leftIcon={<Icon as={Linkedin} />}
                  colorScheme="linkedin"
                  size="lg"
                  w="full"
                >
                  LinkedIn Profile
                </Button>
              </Link>
              <HStack>
                <Badge colorScheme="green" fontSize="md" px={4} py={2}>
                  📞 +44 7541 583039
                </Badge>
                <Badge colorScheme="blue" fontSize="md" px={4} py={2}>
                  📍 United Kingdom
                </Badge>
              </HStack>
            </VStack>
          </VStack>
        </CardBody>
      </Card>
    </VStack>
  );

  return (
    <ChakraProvider>
      <Box bg={bgColor} minH="100vh">
        {/* Header */}
        <Box
          bg={cardBg}
          shadow="md"
          position="sticky"
          top={0}
          zIndex={10}
          borderBottomWidth="1px"
          borderColor={borderColor}
        >
          <Container maxW="container.xl" py={4}>
            <Flex
              justify="space-between"
              align="center"
              flexWrap="wrap"
              gap={4}
            >
              <Heading
                size="lg"
                bgGradient="linear(to-r, blue.400, purple.500)"
                bgClip="text"
              >
                Syed's Portfolio
              </Heading>
              <HStack spacing={2} flexWrap="wrap">
                <NavButton section="home" icon={Home} label="Home" />
                <NavButton section="skills" icon={Code} label="Skills" />
                <NavButton
                  section="experience"
                  icon={Briefcase}
                  label="Experience"
                />
                <NavButton section="projects" icon={Github} label="Projects" />
                <NavButton
                  section="education"
                  icon={GraduationCap}
                  label="Education"
                />
                <NavButton
                  section="contact"
                  icon={MessageSquare}
                  label="Contact"
                />
                <IconButton
                  icon={
                    colorMode === "light" ? (
                      <Icon as={Moon} />
                    ) : (
                      <Icon as={Sun} />
                    )
                  }
                  onClick={toggleColorMode}
                  aria-label="Toggle color mode"
                  variant="ghost"
                />
              </HStack>
            </Flex>
          </Container>
        </Box>

        {/* Main Content */}
        <Container maxW="container.xl" py={8}>
          {activeSection === "home" && renderHome()}
          {activeSection === "skills" && renderSkills()}
          {activeSection === "experience" && renderExperience()}
          {activeSection === "projects" && renderProjects()}
          {activeSection === "education" && renderEducation()}
          {activeSection === "contact" && renderContact()}
        </Container>

        {/* Footer */}
        <Box
          bg={cardBg}
          borderTopWidth="1px"
          borderColor={borderColor}
          py={6}
          mt={12}
        >
          <Container maxW="container.xl">
            <Text textAlign="center" color="gray.500">
              © 2024 Syed Hasnain Kazmi. All rights reserved.
            </Text>
          </Container>
        </Box>
      </Box>
    </ChakraProvider>
  );
};

export default Portfolio;
