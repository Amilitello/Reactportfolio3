import React from "react";
import Grappling from "../images/grappling.jpg"


function Home() {
  return (

    <main className="container">
      <section className="row">
        <div className="col-md-8">
          <div className="block">
            <h1>
              About Me
                    </h1>
            <hr />
            <img className="img-fluid" src={Grappling} alt="grappling" />

          </div>
        </div>
        <div className="col-md-4">
          <div className="block">
            <h1>
              <br />
            </h1>
            <hr />
            <aside className="aboutme">
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </aside>
          </div>
        </div>
      </section>
    </main>


  )
}

export default Home