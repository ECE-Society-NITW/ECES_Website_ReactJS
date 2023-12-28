import React from "react";
import { Box } from "@mui/material";
import MemberCard from "../components/MemberCard";

const Members = () => {
  const membersList = [
    [
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd1e",
        },
        priority: 2,
        email: "cs22ecb0c07@student.nitw.ac.in",
        name: "Sai Vamsi ",
        native: "Kadapa, Andhrapradesh ",
        year: "B.Tech 2nd Year",
        description:
          "I aim to contribute innovative solutions to real-world problems through coding and programming expertise. My ambition is to continually learn and adapt to emerging technologies, making a positive impact in the ever-evolving landscape of software development.",
        link: "https://www.linkedin.com/in/sai-vamsi-188389283?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pic: "https://drive.google.com/open?id=1F99spfOZdRDUwWWarirsPeP9sJ5UjL5Y",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd1f",
        },
        priority: 2,
        email: "as22ecb0a03@student.nitw.ac.in",
        name: "Asmit Sou ",
        native: "Rajasthan ",
        year: "B.Tech 2nd Year",
        description:
          "I want do an start-up before that work in a very good MNC. I am passionate about working in hardware field .",
        link: "Instagram: asmit.sou ",
        pic: "https://drive.google.com/open?id=11hqLdoFwbtNgbXtvAFwNvHijlPlqnicf",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd20",
        },
        priority: 2,
        email: "rm22ecb0f35@student.nitw.ac.in",
        name: "Rangaraajan Muralidaran",
        native: "Chennai",
        year: "B.Tech 2nd Year",
        description:
          "I aspire to craft intricate electronic circuits at the forefront of technology in VLSI design, while also leading and inspiring teams, leveraging my managerial skills to drive innovation and efficient project execution in the realm of management.",
        link: "https://www.linkedin.com/in/ranga-murali/, https://github.com/ranga-2004, https://www.instagram.com/rangaa.05?igsh=bDBkeXl5MG42OHF1",
        pic: "https://drive.google.com/open?id=1DR1cihRX6ioxieWoNpU97vH2EyiixW_i",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd21",
        },
        priority: 2,
        email: "jd22ecb0f10@student.nitsw.ac.in",
        name: "Jitesh D",
        native: "Chennai, Tamil Nadu",
        year: "B.Tech 2nd Year",
        description: "( self insert )",
        link: "https://github.com/Jytesh\nhttps://in.linkedin.com/in/jitesh-dhakshinamoorthy-7b454124b\nhttps://www.instagram.com/jitesh___d/",
        pic: "https://drive.google.com/open?id=1mwIUjm5ghL9Tt1LH-nR7eRBz58-o734O",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd22",
        },
        priority: 3,
        email: "am23ecb0b10@student.nitw.ac.in",
        name: "Anirvesh Mangipudi ",
        native: "Hyderabad",
        year: "B.Tech 1st Year",
        description:
          "I aspire not to be a good engineer, but someone who can bring about a positive change and leave behind a lasting legacy.",
        link: "https://www.instagram.com/anirveshmangipudi4?igsh=ZDJtMjhraHhha2V6",
        pic: "https://drive.google.com/open?id=1siLHs733dtI58cGW2YxqKQsdmKva6Flj",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd23",
        },
        priority: 2,
        email: "pv22ecb0c05@student.nitw.ac.in",
        name: "Vinayakanitesh Pasumurthi",
        native: "Hyderabad",
        year: "B.Tech 2nd Year",
        description: "To Contribute something to the field of Electronics",
        link: "https://www.linkedin.com/in/vinayaknitesh-pasumurthi-2929b5200?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pic: "https://drive.google.com/open?id=1_JUb9g85m6L7m3QzdT_8ZQKIcHFPb8RF",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd24",
        },
        priority: 3,
        email: "ab23ecb0a11@student.nitw.ac.in",
        name: "Akshara Bonam ",
        native: "Hyderabad ",
        year: "B.Tech 1st Year",
        description:
          "My Career Ambition is working for a good company with everything i worked hard for in my B-TECH. Kind of have some other important ambitions in life for which I need a well paying Job so I'm ambitious to earn that kind of a Job",
        link: "akshara_bonam",
        pic: "https://drive.google.com/open?id=1sHqvhlaZJsXcH0KjoNaALiU7nCC9uGrw",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd25",
        },
        priority: -1,
        email: "dn912041@student.nitw.ac.in",
        name: "D Naga Sai Karthik",
        native: "Visakhapatnam",
        year: "B.Tech 4th Year",
        description: "Hardware Enthusiast\nInterested in management ",
        link: "https://www.instagram.com/dnsk_here?igsh=cGN4dWgxYjhrZXo5\n\nhttps://www.linkedin.com/in/naga-sai-karthik-davuluri-59438a215?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pic: "https://drive.google.com/open?id=1HnieuhaF2SOyNjYMYDciDxWE2lqKHrtu",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd26",
        },
        priority: 1,
        email: "sa942055@student.nitw.ac.in",
        name: "Akhitha Reddy Sangasani",
        native: "Karimnagar, Telangana ",
        year: "B.Tech 4th Year",
        description:
          "My primary goal is centered around establishing a work environment that is both inclusive and diverse.",
        link: "linkedin.com/in/akhithareddy-sangasani-5b2706212\nhttps://github.com/akhithareddy25\nhttps://www.instagram.com/_akhithareddy25__?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr",
        pic: "https://drive.google.com/open?id=1KpFdv-J1H_IYC2hgmUTOcapQfCoGPIV7",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd27",
        },
        priority: 0,
        email: "kn822036@student.nitw.ac.in",
        name: "K Naga Sarachhandra ",
        native: "Vijayawada ",
        year: "B.Tech 4th Year",
        description: "Prime minister of India ",
        link: "https://www.linkedin.com/in/sarachhandra-naga-b80b12217\n\nhttps://www.instagram.com/sarachhandra?igsh=NGVhN2U2NjQ0Yg==",
        pic: "https://drive.google.com/open?id=172i3ZDHirkAi66zPn0vOj2OHrHYg4xPe",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd28",
        },
        priority: 2,
        email: "rm22ecb0f08@student.nitw.ac.in",
        name: "Rohit Mohanraj",
        native: "Sri Lanka",
        year: "B.Tech 2nd Year",
        description:
          "Looking to dive into the network engineering, I'm all about tweaking solutions with my tech knowledge",
        link: "https://www.instagram.com/mut4nt.exe/?igsh=MWVrcHRsa3Q4c2R5cA%3D%3D",
        pic: "https://drive.google.com/open?id=1ojmMkBvfX_ftIQpKmTUwqpKHytFBOKzM",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd29",
        },
        priority: 2,
        email: "nj22ecb0b39@student.nitw.ac.in",
        name: "Nayanapalli Jayasimha ",
        native: "Kadapa",
        year: "B.Tech 2nd Year",
        description:
          "My ambition is to achieve self-independence and while actively contributing to the growth of others, fostering a collaborative environment where everyone can flourish.",
        link: "https://www.instagram.com/jayasimha___22?igsh=YzVkODRmOTdmMw==",
        pic: "https://drive.google.com/open?id=1u9hvQM9y40Kw3GWqdmxa6M9VIvQreD8N",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd2a",
        },
        priority: 2,
        email: "gk22ecb0b24@student.nitw.ac.in",
        name: "GK LAKSHMIKAANTH ",
        native: "Tamilnadu ",
        year: "B.Tech 2nd Year",
        description: "Under process",
        link: "@LAKSHMIKAANTH_KUMAR",
        pic: "https://drive.google.com/open?id=1DFyuAkv9L96NkqXSTuI93gQeRox4Bu7h",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd2b",
        },
        priority: 1,
        email: "sv21ecb0b46@student.nitw.ac.in",
        name: "Shashank vishwas damle ",
        native: "Mumbai , Maharastra",
        year: "B.Tech 3rd Year",
        description:
          "Electronics enthusiast, like to work new technologies related to VLSI and embedded systems",
        link: "https://www.linkedin.com/in/shashank-damle-48b060253",
        pic: "https://drive.google.com/open?id=13lem2HODOpbnnvAM0i-jDFgWq-ZJ0PP4",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd2c",
        },
        priority: 3,
        email: "rv23ecb0b28@student.nitw.ac.in",
        name: "Ramshetty Vineet",
        native: "Hyderabad",
        year: "B.Tech 1st Year",
        description:
          "I want research in the field of Miltary Technology and I also want to see myself as an enterperner by setting up a manufacturing unit of some of those Technology products. ",
        link: "Instagram: https://www.instagram.com/r_vineet007?igsh=OGQ5ZDc2ODk2ZA==\nLinkedIn: https://www.linkedin.com/in/ramshetty-vineet-6a80a6280?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pic: "https://drive.google.com/open?id=1Fu6c1o6qqTfiYUhU64Gx8nrhzkh8ZGRm",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd2d",
        },
        priority: 1,
        email: "ps21ecb0a39@student.nitw.ac.in",
        name: "Sachit Anand",
        native: "Hyderabad ",
        year: "B.Tech 3rd Year",
        description:
          "I am deeply interested in software engineering and machine learning and I am aiming to build a stable career out of it. ",
        link: "https://www.instagram.com/sachitanand193?igsh=MWI4amU3OWNldHVwZQ%3D%3D&utm_source=qr\n\nhttps://www.linkedin.com/in/padala-sachit-anand-22b165229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app\n\nhttps://github.com/sachitanand193",
        pic: "https://drive.google.com/open?id=1ybJSt-8upKqzFr7RYIptQ5ZU47uPu9fz",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd2e",
        },
        priority: 1,
        email: "rh21ecb0a47@student.nitw.ac.in",
        name: "Harshith Ranga ",
        native: "Hyderabad, Telangana ",
        year: "B.Tech 3rd Year",
        description:
          "Interested to work in Electronics Industry with embedded systems and has a niche in Management and Administration.",
        link: "https://www.instagram.com/harshith_ranga_xo?igsh=MTdqcTR1MnJoZHI4cA== \n\nhttps://www.linkedin.com/in/harshith-ranga?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app \n\nhttps://github.com/Harshithranga ",
        pic: "https://drive.google.com/open?id=1KFxkkmRjYmmBv_y2q6fz43-D1avLYs5l",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd2f",
        },
        priority: 2,
        email: "ms22ecb0c13@student.nitw.ac.in",
        name: "M Sri Sai Yesaswini",
        native: "Hyderabad ",
        year: "B.Tech 2nd Year",
        description:
          "I am not so sure but mostly I wanna take up vlsi chip designer",
        link: "https://www.linkedin.com/in/yashaswini-mudda-a42baa24b/\n\nhttps://www.instagram.com/yashaswini8963?igsh=MXF2Mjl1dHpocWloeA==",
        pic: "https://drive.google.com/open?id=1nDGSbMKdG9nJmcEH4Td7pgYtrs0UZ2Ed",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd30",
        },
        priority: 3,
        email: "na23ecb0f22@student.nitw.ac.in",
        name: "Noor Abdul Gaffar",
        native: "Hyderabad is my native place but studied in Saudi Arabia",
        year: "B.Tech 1st Year",
        description:
          "Contribution in the field of ECE, especially as a software analyst & spread the joy of ECE and coding . ",
        link: "https://www.linkedin.com/in/noor-abdul-gaffar-768147294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app\n",
        pic: "https://drive.google.com/open?id=1PGyQ1mPDUFIiWDuGbMmKQ9n362yk-cEq",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd31",
        },
        priority: 3,
        email: "da23ecb1a17@student.nitw.ac.in",
        name: "Dhulipalla Arjun Surya",
        native: "Hyderabad",
        year: "B.Tech 1st Year",
        description: "Live peaceful life",
        link: "Insta arjunsurya2608",
        pic: "https://drive.google.com/open?id=1_0fwOYkFYgFAFFOGbFu-Kekskz6ZhDKH",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd32",
        },
        priority: 1,
        email: "ss21ecb0a57@student.nitw.ac.in",
        name: "Shivam Sethia",
        native: "Alipurduar",
        year: "B.Tech 3rd Year",
        description:
          "Striving to be a better problem solver . Of the minds and of the hearts.",
        link: "https://www.linkedin.com/in/shivam-sethia-a744711a9/\nhttps://www.instagram.com/_shivamsethia_/\nhttps://github.com/shivams2003",
        pic: "https://drive.google.com/open?id=1loMfBSt1aU0bs8pAfZeZy7mk7RVyZp8O",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd33",
        },
        priority: 1,
        email: "cm21ecb0a08@student.nitw.ac.in",
        name: "Chetan Mahajan ",
        native: "Near Indore, M.P.",
        year: "B.Tech 3rd Year",
        description: "Software engineer ",
        link: "https://in.linkedin.com/in/chetan-mahajan-350864228\nhttps://github.com/chetan2332",
        pic: "https://drive.google.com/open?id=1fWmm1GpWozufv-VkGGU2uyuemUQETpya",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd34",
        },
        priority: 3,
        email: "ss23ecb0b18@student.nitw.ac.in",
        name: "Saket",
        native: "Bihar",
        year: "B.Tech 1st Year",
        description:
          "To prosper my team spirit and improving my research work.",
        link: "I don't have any of these profiles ",
        pic: "https://drive.google.com/open?id=1Yfiy-5h0LeaLlrQbPN5Dc8de_e3rJd7z",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd35",
        },
        priority: 3,
        email: "ad23ecb1f01@student.nitw.ac.in",
        name: "Ashwin Devi Srinivasan",
        native: "Puducherry, India ",
        year: "B.Tech 1st Year",
        description:
          "Design chipsets to power machines that change people's lives at a large scale :). ",
        link: "https://www.linkedin.com/in/dsashwin",
        pic: "https://drive.google.com/open?id=1vm33RIq04EzcAZ_XX-SMUH8nYTTzeLK6",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd36",
        },
        priority: 1,
        email: "at21ecb0a03@student.nitw.ac.in",
        name: "Aditi Thakur ",
        native: "Jamshedpur ",
        year: "B.Tech 3rd Year",
        description:
          "Interested in the field of software development. Want to learn new things and keep growing further in this field.",
        link: "LinkedIn - https://www.linkedin.com/in/aditi-thakur-6b7a05229?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app\nInstagram - aditi_thakur2002\nGitHub - https://github.com/Aditiurcoder\n",
        pic: "https://drive.google.com/open?id=1GojNwuIV98fNIkF0veZnamza_mfstAKZ",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd37",
        },
        priority: 2,
        email: "uv22ecb0f32@student.nitw.ac.in",
        name: "Ujvala Vemula",
        native: "Telangana",
        year: "B.Tech 2nd Year",
        description:
          "I aspire to secure a mangerial role in a prestigious company and to pursue MBA to further enhance my skills.",
        link: "https://www.instagram.com/ujvala.v_2810?igsh=MTRzZncxZXBmOHF3NA==\n\n\nhttps://www.linkedin.com/in/ujvala-vemula-32a371288?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
        pic: "https://drive.google.com/open?id=16hi1CHSZ-zRPba780ld1nYowWiYHeW7N",
      },
      {
        _id: {
          $oid: "658bc3de3a1a10ec1183bd38",
        },
        priority: 1,
        email: "rs22ecb0b14@student.nitw.ac.in",
        name: "Nandini Ranga",
        native: "Hyderabad",
        year: "B.Tech 2nd Year",
        description:
          "In a world of endless possibilities and adventures, I am a spirited soul seeking entrepreneurial  streams.",
        link: "https://www.linkedin.com/in/sainandini-ranga-0b6b54251/\nhttps://github.com/Nandiniranga",
        pic: "https://drive.google.com/open?id=1LdKPW-UaNonm6kDABeGyqJNF9U-irHht",
      },
    ],
  ];

  const sortedMembers = membersList[0].sort((a, b) => a.priority - b.priority);

  return (
    <Box>
      <Box display="flex" flexWrap="wrap" justifyContent="center">
      {sortedMembers.map((member, index) => (
          <Box key={index} margin={2}>
            <MemberCard member={member} />
          </Box>
        ))}
      </Box>

      <Box className="title-2" marginBottom={1} marginLeft={82}>
        Joint Secretary
      </Box>
    </Box>
  );
};

export default Members;
