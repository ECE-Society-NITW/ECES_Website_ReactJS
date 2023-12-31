import React from "react";
import { Card, CardContent, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Capture from "../Assets/image.png";


const GlassmorphicCard2 = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",
  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

const GlassmorphicCard3 = styled(Card)(({ theme }) => ({
  backgroundColor: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(10px)",
  borderRadius: "16px",

  overflow: "hidden",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.1)",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
}));

const GlassmorphicComponent = () => {
  const imageUrl =
    "https://media.discordapp.net/attachments/1104941169345044482/1189840947530436688/image.png?ex=659fa0bc&is=658d2bbc&hm=6cf05cbdcd7df26e9ed4a85289feef288dc92b7a27514a84ce27126dcbed6e97&=&format=webp&quality=lossless&width=172&height=181";

  const svgCode = `
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <rect width="30" height="31" fill="url(#pattern0)"/>
      <defs>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlink:href="#image0_2_29" transform="matrix(0.0103333 0 0 0.01 -0.0166667 0)"/>
        </pattern>
        <image id="image0_2_29" width="100" height="100" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAAAXNSR0IArs4c6QAABIRJREFUeF7tnDFrVEEQx2fvzhgDKSzERkQbv4Ox0CL3jlwiEQRFsIifQVSwt1DBr6CFIAiiwXjh3kuhhfE72ChiIxYWgRiSu6wcMaJx72Xm7d682ZdJe7Nvdv6/md2dvZczoH+iFDCiZqOTAQUiLAkUiAIRpoCw6WiFKBBhCgibjlaIAhGmgLDpaIUoEGEKCJtOJSqk2+1eGujaarVeCdOXPJ3ogWRZNmutfQEANQC4miTJS7IKggZEDeQvGId/a7oVO5RogThg7OZ51FCiBJIDI3oo0QFBwIgaSlRACDCihRINkAIwooQSBRAPGNFBEQ9k0PQZY54DwKFh7YIx5uHgM2vtrZyWYstae0V68ygaCLIyHiVJcnMAIk3TewBwNw+K9D5FLBAqjF0IsUMRCaQojCpAEQfEF0bsUEQBCQUjZihigHS73YvGmMGtbe5pqtls3qZczmZZ9gBx+rrcarVeU547KlsxQNI0fQwACzmB/jlNUcVAbPRPkiS5QX3uKOxjAVIYBnL5UiB7syunQjpJksyGyMY0Td8AQNvxLAVCABJMrBzowXz4Jk4MS5ZTrJWVleP9fv+pS4B6vX59enr6WxnQDyyQ5eXlU/V6/ZNLgH6/f3pmZuazAvFID+pyokA8xMYMVSA7KkW7h2iFYNLcw0YrJPIKWVpaOjo2NnbHlQObm5v35+bmfuimzlghRVxRq7CID98x0e4hRQKvDJAsyy5sb2+fKSICYcyCMebsKK81hgGx1n4AgCeEuZJNa7Xax2az+Xa/gagKQdzE7ufH5/Ng1xoxxKFAfFKFNhaVWNECWV1dPbK+vn7OpcnExMT7qampn4RTFk3aYtbVBhK4MSwmMW2UAjlwFWKMWbPWfqclitvaGHPMWjuJPWWFrJAy49gbr+8egipDDDBqjxASyODIG+o7dWocCsT9IoUCIazvTrG0QoRn1iiWRcwzfROrMktWGWJhfB7YPQQjTujsxfgsFYik46KPWJLi8D32YnTwteE4AfnOETMeFYcCwUgZxqbaQAK/KBdG8vynVBtI4D5EgRAU4GgMCdMpbDr6Cgn81SfpK9yQFVJmHJVpDEMC0ctFR9VTGyoFIuwuS+qLctTEqsySVWRr9RUL49PXh29jiDo5cARSFR8jAbK4uDg5Pj5+zSXSxsbGs/n5+bUYLv7KiGMkQKqy4ZYRhwLZKVWO5hO1vEcLJPCLcgrEdw/hWE44fLAcezkCqYoPFiCdTudEo9F45zpl9Xq98+12+2sMFcIRBwsQTE8QAxCOOBSIsCsgBaJAcIVPvQPi2NRxM//XihqHVohWCC7PqJmlFeLILI4XzHJ8NADg5BDcXwCg999yMOR/UDjiwH4r6Xt1gkt/tRp6XxZ6D1Gp8QqwXC7ip6OWCkRYDiiQygJh+q0TYfqFnU7Q3zoJOzV9Wp4CqGOvSsingALh0xrlSYGgZOIzUiB8WqM8KRCUTHxGCoRPa5QnBYKSic9IgfBpjfKkQFAy8RkpED6tUZ4UCEomPiMFwqc1ypMCQcnEZ6RA+LRGefoFVnp3sCVMuEMAAAAASUVORK5CYII="/>
      </defs>
    </svg>
  `;
   
      
  return (
    <div style={{ display: "flex", padding: "2rem" }}>
      <div style={{ width: "55%" }}>
        <GlassmorphicCard2 style={{ width: "90%", marginLeft: "2rem"}}>
          <CardContent style= {{ marginLeft: "1rem"}}>
            <img src={Capture} height="570" width="470" />
          </CardContent>
        </GlassmorphicCard2>
      </div>
      <div
        style={{
          width: "80%",
          height: "96%",
        }}
      >
        <div>
        <GlassmorphicCard2 style={{ marginRight: "2rem", height: "11rem"}}>
            <CardContent style={{ display: "flex" }}>
              <div>
                <img
                  src={imageUrl}
                  alt="Sample"
                  style={{ width: "90%", height: "80%", borderRadius: "10%" }}
                />
              </div>

              <div style={{ flex: 3 }}>
                <Typography variant="h4" component="div">
                  Apprenticeship
                </Typography>

                <Typography variant="h6" color="text.secondary">
                  ECE Society
                </Typography>
                <Typography variant="h6" color="text.secondary">
                  <div style={{ display: "flex" }}>
                    <div dangerouslySetInnerHTML={{ __html: svgCode }} />{" "}
                    <span style={{ marginLeft: "3px" }}>National Institute of Technology Warangal</span>
                  </div>
                </Typography>
                <div style={{ display: "flex" }}>
                  <GlassmorphicCard3 style={{ marginRight: "1rem", height: "2rem"}}>
                    <CardContent style={{marginTop:"-0.75rem"}}>
                      <Typography>#internship</Typography>
                    </CardContent>
                  </GlassmorphicCard3>
                  <GlassmorphicCard3 style={{ marginRight: "1rem", height: "2rem"}}>
                    <CardContent style={{marginTop:"-0.75rem"}}>
                      <Typography>#hardware</Typography>
                    </CardContent>
                  </GlassmorphicCard3>
                  <GlassmorphicCard3 style={{ marginRight: "1rem", height: "2rem"}}>
                    <CardContent style={{marginTop:"-0.75rem"}}>
                      <Typography>#software</Typography>
                    </CardContent>
                  </GlassmorphicCard3>
                </div>
              </div>
            </CardContent>
          </GlassmorphicCard2>
        </div>

               
                
              
          

        <div style={{ display: "flex", width: "100%", marginTop: "1rem" }}>
          <GlassmorphicCard2 style={{ width: "140%", marginRight: "1rem", height:'24rem'}}>
            <CardContent>
              <Typography
                variant="h7"
                color="text.secondary"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Embark on a thrilling journey with the ECE Society's visionary
                Apprenticeship program! This initiative can be your guiding
                light through the dynamic world of internships and professional
                growth.
              </Typography>
              <br />
              <Typography
                variant="h7"
                color="text.secondary"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Domains offered:
                <ul>
                  <li> - Software</li>
                  <li> - Hardware</li>
                  <li> - Management (new)!</li>
                </ul>
              </Typography>

              <Typography
                variant="h7"
                color="text.secondary"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Our training program is crafted by experienced seniors who have
                conquered this process already.
              </Typography>
              <br />
              <br />
              <Typography
                variant="h7"
                color="text.secondary"
                style={{ fontFamily: "Times New Roman, serif" }}
              >
                Join us from 16th December as we dive deep into the real-world
                scenarios and sharpen your skills through insightful guidance
                and experience.
              </Typography>
            </CardContent>
          </GlassmorphicCard2>

          <div style={{ width: "100%" }}>
          <GlassmorphicCard2 style={{  marginRight: "2rem",  height: "55%"}}>
            
              <CardContent>
                <Typography>Important Deatils</Typography>

                <Typography variant="h7">
                  <p style={{ display: "flex", alignItems: "center", marginBottom: "-2.0rem" }}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2908/svg"
                    >
                      <rect width="30" height="30" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        ></pattern>
                        <image id="image0_2_48" width="100" height="100" />
                      </defs>
                    </svg>
                    <span style={{ marginLeft: "0.75rem" }}>
                      Deadline
                      <br />
                      5th Jan 24, 11:59pm IST
                    </span>
                  </p>
                </Typography>
                <br />
                <Typography variant="h7">
                  <p style={{ display: "flex", alignItems: "center", marginBottom: "-2.0rem" }}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="30" height="30" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        ></pattern>
                        <image id="image0_2_48" width="10" height="10" />
                      </defs>
                    </svg>
                    <span style={{ marginLeft: "0.75rem" }}>
                      Team Size
                      <br />
                      2-4
                    </span>
                  </p>
                </Typography>
                <br />
                <Typography variant="h7">
                  <p style={{ display: "flex", alignItems: "center", marginBottom: "-2.0rem" }}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="30" height="30" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        ></pattern>
                        <image id="image0_2_48" width="100" height="100" />
                      </defs>
                    </svg>
                    <span style={{ marginLeft: "0.75rem" }}>
                      Eligibility
                      <br />
                      B.Tech.
                    </span>
                  </p>
                </Typography>
                <br />
                <Typography variant="h7">
                  <p style={{ display: "flex", alignItems: "center", marginBottom: "-2.0rem" }}>
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect width="30" height="30" fill="url(#pattern0)" />
                      <defs>
                        <pattern
                          id="pattern0"
                          patternContentUnits="objectBoundingBox"
                          width="1"
                          height="1"
                        ></pattern>
                        <image id="image0_2_48" width="100" height="100" />
                      </defs>
                    </svg>
                    <span style={{ marginLeft: "0.75rem" }}>
                      Awards
                      <br />
                      Participation Certificate
                    </span>
                  </p>
                </Typography>
              </CardContent>
            </GlassmorphicCard2>
            <GlassmorphicCard2 style={{ marginTop: "1rem", marginRight: "2rem" }}>
              <CardContent>
                <Typography>Person of Contact</Typography>
                <div>
                  <GlassmorphicCard2>
                    <CardContent>
                      <div style={{ display: "flex", marginBottom: "-15px" }}>
                        <svg
                          width="40"
                          height="40"
                          viewBox="0 0 30 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect width="30" height="30" fill="url(#pattern0)" />
                          <defs>
                            <pattern
                              id="pattern0"
                              patternContentUnits="objectBoundingBox"
                              width="1"
                              height="1"
                            ></pattern>
                            <image id="image0_2_48" width="100" height="100" />
                          </defs>
                        </svg>
                        <Typography variant="h7" sx={{ marginLeft: "0.5rem" }}>
                          person 1
                          <br />
                          +91 0123456789
                        </Typography>
                      </div>
                    </CardContent>
                  </GlassmorphicCard2>
                  
                         
                </div>
              </CardContent>
            </GlassmorphicCard2>
          </div>
        </div>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default GlassmorphicComponent;
