import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint dignissimos, natus veritatis pariatur animi quasi ducimus neque velit! Iste ullam reiciendis, et ipsam laudantium omnis earum sapiente sit repudiandae accusamus rem doloribus voluptas quisquam tempore mollitia quasi fugit rerum beatae repellat ea non eveniet! Deserunt minus autem tempore animi. Amet quam reprehenderit pariatur, eos fugiat illum veritatis accusantium laborum laboriosam nisi, veniam odit sint ea! Adipisci tempore mollitia itaque debitis laborum vero quo corporis maxime excepturi doloribus dolor saepe, soluta asperiores iure! Suscipit sunt reprehenderit officia eaque. Necessitatibus ipsam sit hic cupiditate non perferendis temporibus, ut ullam ea dicta omnis. Consequuntur perferendis itaque deleniti in, ullam maiores recusandae, ipsum laborum error veniam earum ut excepturi iste magni ea natus nemo saepe, iusto dolore! At saepe architecto sit est quae consectetur officia error sapiente nihil tenetur cumque, expedita recusandae magni dolorem quis provident, qui autem illum quam, esse molestiae quisquam. Vel commodi quasi corporis corrupti nesciunt earum quis ipsa perspiciatis eligendi tempora deleniti consectetur est adipisci ullam vitae incidunt autem, accusamus architecto quos optio eos. Deleniti modi repellendus suscipit amet voluptas hic, fuga voluptatibus, libero quod enim dicta! Exercitationem provident expedita quis reiciendis quasi, enim quisquam natus a, saepe, praesentium repudiandae voluptatem mollitia? Magnam id, asperiores ab ex nulla sed odit, minima quis fugit rem officiis. Voluptate laudantium exercitationem sunt debitis consequuntur maiores ullam non tempore et dolores repellendus eum neque dolorum id omnis obcaecati esse officia illo amet provident aperiam, sint hic tenetur culpa? Rerum nemo nihil et. Perspiciatis saepe ex dolorum consectetur et autem harum, dolor ipsum delectus est similique culpa modi aliquam mollitia fugit? Totam, doloremque distinctio. Necessitatibus reprehenderit dolore fuga porro placeat qui sapiente commodi eum a, rerum ea voluptas odit optio ipsa laborum veritatis autem sint est quos voluptatum vel. Ratione vero suscipit velit dignissimos voluptatum.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde consequatur nostrum eaque delectus, assumenda vero sequi optio voluptatum tempora magnam explicabo praesentium sunt eum distinctio iste! Laborum eaque at quasi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum impedit, eligendi unde perferendis voluptate doloremque? Harum dolore laudantium accusamus placeat. Vero nesciunt tenetur quisquam repellat aliquid hic modi placeat sit laudantium tempora voluptatum iure error, exercitationem assumenda cum, eum omnis fugiat pariatur sint rem, incidunt ut? Dolores repudiandae temporibus doloremque reiciendis ex quod adipisci quaerat molestias, quisquam quae perspiciatis cupiditate dolorum tempora provident, perferendis fuga excepturi velit eaque asperiores vitae possimus, ea animi voluptates? Perspiciatis maiores porro voluptatum voluptate accusantium rem recusandae laborum, minima accusamus, sint, facilis iusto. Aliquid commodi sapiente fugiat quo quaerat culpa animi nemo. Ad esse repudiandae blanditiis nemo, rem facere exercitationem? Incidunt neque unde sint officia, ad eaque impedit ullam nemo, non facere, distinctio quae saepe quam. Ipsa tempora reiciendis maiores sapiente, modi perspiciatis ut praesentium officiis fuga maxime asperiores nesciunt harum, vero at, vitae enim recusandae amet quam? Obcaecati dicta assumenda optio non accusantium ad at enim et maiores ut dignissimos totam corporis molestias dolorum delectus omnis porro culpa facere iure, eius quos. Recusandae, praesentium cupiditate. Cum ea nobis, corporis velit eius facilis, quis, ipsam tempore expedita non necessitatibus quia. Voluptatem obcaecati, minima nostrum ipsa eos a aperiam quo accusantium inventore, cupiditate, nesciunt eveniet cum.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}